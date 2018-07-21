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
            imageUrl: "",
            box: { topRow: 0, leftCol: 0, bottomRow: 0, rightCol: 0 }
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
                <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
            </div>
        );
    }

    private calculateFaceLocation = (data: any) => {
        const clarifaiFaceBox = data.outputs[0].data.regions[0].region_info.bounding_box;
        console.log("calculateFaceLocation", clarifaiFaceBox);
        const inputImage = document.getElementById("inputImage") as any;
        const width = Number(inputImage.width);
        const height = Number(inputImage.height);
        console.log("width, height", width + ", " + height);
        //{top_row: 0.2641042, left_col: 0.17220135, bottom_row: 0.33649856, right_col: 0.24494803}
        return {
            leftCol:   clarifaiFaceBox.left_col * width,
            topRow:    clarifaiFaceBox.top_row * height,
            rightCol:  width - (clarifaiFaceBox.right_col * width),
            bottomRow: height - (clarifaiFaceBox.bottom_row * height)
        };
    }

    private displayFaceBox = (box) => {
        console.log("box", box);
        this.setState({box});
    }

    private onInputChange = (event: any) => {
        this.setState({
            input: event.target.value
        });
    }

    private onButtonSubmit = () => {
        console.log("onButtonSubmit clicked>image URL: " + this.state.imageUrl);
        this.setState({imageUrl: this.state.input})

        clarify.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
            .catch(err => console.log("clarifai error", err));
    }
}

export default App;
