import * as React from 'react';
import Clarifai from 'clarifai';
import "tachyons";
import './index.css';
import IAppState from "./IAppState";
import FaceRecognition from "../../components/FaceRecognition";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import Rank from "../../components/Rank";
import ImageLinkForm from "../../components/ImageLinkForm";
import Particles from 'react-particles-js';

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

class App extends React.Component<any, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            input: "",
            imageUrl: ""
        }
    }
    public render() {
        return (
            <div className="App">
                <Navigation/>
                <Particles params={particlesOptions} className="particles"/>
                <Logo/>
                <Rank/>
                <ImageLinkForm onInputChange={this.onInputChange} onClick={this.onButtonSubmit}/>
                <FaceRecognition imageUrl={this.state.imageUrl}/>
            </div>
        );
    }

    private onInputChange = (event: any) => {
        console.log("onInputChange event", event.target.value);
        this.setState({
            input: event.target.value
        });
    }

    private onButtonSubmit = () => {
        console.log("onButtonSubmit clicked>image URL: " + this.state.imageUrl);
        this.setState({imageUrl: this.state.input})

        clarify.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
            function(response) {
                console.log("clarifai response", response.outputs[0].data.regions[0].region_info.bounding_box);

            },
            function(err) {
            console.log("clarifai error", err);
            }
        );
    }
}

export default App;
