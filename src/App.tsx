import * as React from 'react';
import "tachyons";
import './App.css';
import Logo from "./components/logo";
import Navigation from "./components/navigation";
import Rank from "./components/rank";
import ImageLinkForm from "./components/image-link-form";
import Particles from 'react-particles-js';

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
  public render() {
    return (
      <div className="App">
        <Navigation/>
        <Particles params={particlesOptions} className="particles"/>
        <Logo/>
        <Rank/>
        <ImageLinkForm/>
      </div>
    );
  }
}

export default App;
