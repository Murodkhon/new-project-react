import React, { Component } from "react";
import { name, age, car } from "./data";
import PropTypes from "prop-types";
import Form from "./form";

const Person = ({ img, name, age }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h4> name: {name} </h4>
      <h4> age: {age} </h4>
    </div>
  );
};

Person.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/thumb/men/23.jpg",
  age: 12,
  name: "Peter"
};

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        age: 34,
        // name: "Jane Smith",
        img: "https://randomuser.me/api/portraits/thumb/men/45.jpg"
      },
      {
        id: 2,
        // age: 23,
        name: "John Doe",
        img: "https://randomuser.me/api/portraits/thumb/men/44.jpg"
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.people.map(person => (
          <Person
            key={person.id}
            img={person.img}
            name={person.name}
            age={person.age}
          />
        ))}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Form/>
    </div>
  );
}

export default App;