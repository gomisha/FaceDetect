import * as React from 'react';
import "tachyons";
import './App.css';
import Logo from "./components/logo";
import Navigation from "./components/navigation";


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
      </div>
    );
  }
}

export default App;
