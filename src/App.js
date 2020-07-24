import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { name: "Miana", age: 42 },
      { name: "Clark", age: 13 },
      { name: "Steve", age: 31 }
    ],
    otherState: "some other value"
  }

  switchNameHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Miana Rose";
    this.setState({
      persons: [
      { name: "Miana Rose", age: 42 },
      { name: "Clark", age: 13 },
      { name: "Steve", age: 33 }
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Eating and Sleeping</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
