import React, { Component } from 'react'

export class form extends Component {
    state ={
      firstName: '',
      lastName: '',
      people: []  

};

handleSubmit = event =>{
    event.preventDefault();
    
    const fname = this.state.firstName;
    const lname = this.state.lastName;
    const person = ` ${fname} ${lname}`;

    this.setState({
        firstName: "",
        lastName: "",
        // spread operator
        people : [...this.state.people, person]
    });
};


handleChange = event => {
    console.log(event.target.value);
    this.setState({
        [event.target.name] : event.target.value
    })
    
};

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>  
            <input type="text" name="firstName" value ={this.state.firstName} onChange={this.handleChange} /> 
            <input type="text" name="lastName"  value ={this.state.lastName}  onChange={this.handleChange} />
                <button type="submit"> submit </button>
            </form>
            <div> {this.state.people} </div>
      </div>
    )
  }
}

export default form
