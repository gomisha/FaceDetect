import * as React from 'react';
import "tachyons";
import './App.css';
import Navigation from "./components/navigation";


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navigation/>
      </div>
    );
  }
}

export default App;
