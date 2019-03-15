import React, { Component } from 'react';
import './App.css';

// Use children
class Red extends Component {
  render() {
    return <span className={"Red"}>{this.props.children}</span>
  }
}

// Use attribute
class Blue extends Component {
  render() {
    return <span className={"Blue"}>{this.props.content}</span>
  }
}

// stateless component:
const Green = props => (<span className={"Green"}>{props.children}</span>)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>word <Red>word</Red> word</div>
        <div>word <Blue content={"word"}/> word</div>
        <div>word <Green>word</Green> word</div>
      </div>
    );
  }
}

export default App;
