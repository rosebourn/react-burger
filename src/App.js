import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "jjj", name: "Miana", age: 42 },
      { id: "eee", name: "Clark", age: 13 },
      { id: "ppp", name: "Steve", age: 31 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Miana", age: 42 },
        { name: event.target.value, age: 13 },
        { name: "Steve", age: 33 }
      ]
    });
  };

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
<div>
  {this.state.persons.map((person, index) => {
    return <Person 
      click={() => this.deletePersonHandler(index)}
      name={person.name} 
      age={person.age}
      key={person.id} />
  })}
            {/* <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Miana!")}
              changed={this.nameChangedHandler}
            >
              My Hobbies: Eating and Sleeping
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            /> */}
          </div>
      );
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
        {/* Above does same thing as "bind()" below but not as good, use bind when you can */}
        
          
       
      </div>
    );
  }
}

export default App;
