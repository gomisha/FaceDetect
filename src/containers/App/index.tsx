import * as React from 'react';
import Clarifai from 'clarifai';
import "tachyons";
import './index.css';
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

class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            input: ""
        }
    }
    public render() {
        return (
            <div className="App">
                <Navigation/>
                <Particles params={particlesOptions} className="particles"/>
                <Logo/>
                <Rank/>
                <ImageLinkForm onInputChange={this.onInputChange} onClick={this.onClick}/>
            </div>
        );
    }

    private onInputChange = (event: any) => {
        console.log("onInputChange event", event.target.value);
        // this.setState({
        //     foo: event.targetvalue
        // });
    }

    private onClick = () => {
        console.log("onClick clicked");

        clarify.models.predict(Clarifai.GENERAL_MODEL, "https://samples.clarifai.com/metro-north.jpg").then(
            function(response) {
            console.log("clarifai response", response);
            },
            function(err) {
            console.log("clarifai error", err);
            }
        );
    }
}

export default App;
