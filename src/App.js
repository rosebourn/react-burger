import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Miana", age: 42 },
      { name: "Clark", age: 13 },
      { name: "Steve", age: 31 }
    ],
    otherState: "some other value"
  }

  switchNameHandler = (newName) => {
    // console.log("Was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Miana Rose";
    this.setState({
      persons: [
      { name: newName, age: 42 },
      { name: "Clark", age: 13 },
      { name: "Steve", age: 33 }
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      { name: "Miana", age: 42 },
      { name: event.target.value, age: 13 },
      { name: "Steve", age: 33 }
    ]})
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler("Miana!!")}>Switch Name</button>
        {/* Above does same thing as "bind()" below but not as good, use bind when you can */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Miana!")} 
          changed={this.nameChangedHandler} >My Hobbies: Eating and Sleeping</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;


