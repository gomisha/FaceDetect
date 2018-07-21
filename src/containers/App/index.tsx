import * as React from 'react';

// 3rd party libs
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import "tachyons";

import './index.css';
import IStates from "./IStates";

// App components
import FaceRecognition from "../../components/FaceRecognition";
import ImageLinkForm from "../../components/ImageLinkForm";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import Rank from "../../components/Rank";
import Register from "../../components/Register";
import SignIn from "../../components/SignIn";

const clarify = new Clarifai.App({
    apiKey: 'd8356d92cf6c41f3a7e2b499e23baa20'
});

const particlesOptions = {
    particles: {
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 30
        }
    }
};

class App extends React.Component<any, IStates> {
    constructor(props: any) {
        super(props);
        this.state = {
            box: { topRow: 0, leftCol: 0, bottomRow: 0, rightCol: 0 },
            imageUrl: "",
            input: "",
            route: "signIn"
        }
    }

    public render() {
        let element: JSX.Element;
        switch(this.state.route) {
            case "signIn":
                element = 
                    <div className="App">
                        <Navigation onRouteChange={this.onRouteChange} isSignedIn={false}/>
                        <Particles params={particlesOptions} className="particles"/>
                        <Logo/>
                        <SignIn onRouteChange={this.onRouteChange} onRegister={this.onRegister}/>;
                    </div>
                break;
            case "register":
                element = 
                    <div className="App">
                        <Navigation onRouteChange={this.onRouteChange} isSignedIn={false}/>
                        <Particles params={particlesOptions} className="particles"/>
                        <Logo/>
                        <Register onRouteChange={this.onRouteChange} />;
                    </div>
                break;
            case "home":
                element = 
                    <div className="App">
                        <Navigation onRouteChange={this.onRouteChange} isSignedIn={true}/>
                        <Particles params={particlesOptions} className="particles"/>
                        <Logo/>
                        <Rank/>
                        <ImageLinkForm onInputChange={this.onInputChange} onClick={this.onButtonSubmit}/>
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

    private onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input})

        clarify.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    }

    // handles state for signing in/out
    private onRouteChange = (routeParam: string) => {
        console.log("onRouteChange>route=");
        console.log(routeParam);
        this.setState({route: routeParam})
    }

    private onRegister = () => {
        console.log("onRegister");
    }
}

export default App;
