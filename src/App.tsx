import * as React from 'react';
import "tachyons";
import './App.css';
import Logo from "./components/logo";
import Navigation from "./components/navigation";
import ImageLinkForm from "./components/image-link-form";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <ImageLinkForm/>
      </div>
    );
  }
}

export default App;
