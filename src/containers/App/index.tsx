import * as React from 'react';

// 3rd party libs
import Particles from 'react-particles-js';
import "tachyons";

import './index.css';
import IState from "./IStates";

// components
import FaceRecognition from "../../components/FaceRecognition";
import ImageLinkForm from "../../components/ImageLinkForm";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import Rank from "../../components/Rank";

// containers
import Register from "../Register";
import SignIn from "../SignIn";

// entity objects
import User from "./User";

// config
import * as config from "../../config";

let initialState: IState = {
    box: { topRow: 0, leftCol: 0, bottomRow: 0, rightCol: 0 },
    imageUrl: "",
    input: "",
    route: config.ROUTE_SIGNIN,
    user: { id: "", name: "", email: "", entries: 0, joined: ""}
}

class App extends React.Component<any, IState> {
    constructor(props: any) {
        super(props)
        this.state = initialState
    }

    public render() {
        let element: JSX.Element;
        switch(this.state.route) {
            case config.ROUTE_SIGNIN:
                element = 
                    <div className="App">
                        <Navigation onRouteChange={this.onRouteChange} isSignedIn={false}/>
                        <Particles params={config.particlesOptions} className="particles"/>
                        <Logo/>
                        <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    </div>
                break;
            case config.ROUTE_REGISTER:
                element = 
                    <div className="App">
                        <Navigation onRouteChange={this.onRouteChange} isSignedIn={false}/>
                        <Particles params={config.particlesOptions} className="particles"/>
                        <Logo/>
                        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                    </div>
                break;
            case config.ROUTE_HOME:
                element = 
                    <div className="App">
                        <Navigation onRouteChange={this.onRouteChange} isSignedIn={true}/>
                        <Particles params={config.particlesOptions} className="particles"/>
                        <Logo/>
                        <Rank user={this.state.user}/>
                        <ImageLinkForm onInputChange={this.onInputChange} onClick={this.onPictureSubmit}/>
                        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
                    </div>;
                break;
            default:
                throw Error("bad route:" + this.state.route);
        }

        return element;
    }

    private calculateFaceLocation = (data: any) => {
        const clarifaiFaceBox = data.outputs[0].data.regions[0].region_info.bounding_box;
        const inputImage = document.getElementById("inputImage") as any;
        const width = Number(inputImage.width);
        const height = Number(inputImage.height);
        return {
            bottomRow: height - (clarifaiFaceBox.bottom_row * height),
            leftCol:   clarifaiFaceBox.left_col * width,
            rightCol:  width - (clarifaiFaceBox.right_col * width),
            topRow:    clarifaiFaceBox.top_row * height
        };
    }

    private displayFaceBox = (box) => {
        this.setState({box});
    }

    private onInputChange = (event: any) => {
        this.setState({
            input: event.target.value
        });
    }

    private onPictureSubmit = () => {
        this.setState({imageUrl: this.state.input})

        config.JSON_PUT_REQUEST.body = JSON.stringify({
            id: this.state.user.id,
            imageURL: this.state.input
        })

        // call server to find face, update user stats
        fetch(config.ENDPOINT_PUT_IMAGE, config.JSON_PUT_REQUEST)
        .then(response => {
            if(response.status != 200) { throw new Error("error finding face") }
            return response.json()
        }).then(response2 => {
            let user = this.state.user;

            //update user entry count to display
            user.entries = response2.entries

            //extract face location data so can display box around face
            this.displayFaceBox(this.calculateFaceLocation(response2.data))
            this.setState(
                {user}
            )
        }).catch(Error => { console.log("error getting face: " + Error) })
    }

    // handles state for signing in/out
    private onRouteChange = (routeParam: string) => {
        this.setState({route: routeParam})

        // removes any images from previous logins by other users
        if(routeParam !== config.ROUTE_HOME) {
            this.setState(initialState)
        }

        //since initial state is set to signin route, need to update it when click register
        if(routeParam === config.ROUTE_REGISTER) {
            this.setState({route: config.ROUTE_REGISTER})
        }
    }

    private loadUser = (user: User) => {
        this.setState({user});
    }
}

export default App;