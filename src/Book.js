import React, { Component } from 'react'

export default class Book extends Component {
 constructor(props) {
   super(props);
  this.state ={
    name: "peter",
    count: 1,
    showInfo: true
  };
 }

checkInfo = () => {
this.setState({showInfo: !this.state.showInfo});
};

 addCount =() =>{
  this.setState({count:this.state.count + 1 })
 };
 
removeCount = () =>{
  this.setState({count: this.state.count -1});
};

resetCount =() => {
  this.setState({ count: 0});
};

 
  render() {
      const {title , author, img } = this.props.info;

       const toggle = info =>{
         if(info ===true){
           return(
             <p>
               Lorem ipsut dolor amet sity
             </p>
           );
         }else{
           return null;
         }
       } 

    return (
      <div className="book">
        <img src ={img} />
        <div>
        <h3> Title : {title}  </h3>
       <h5>  Author:  {author} </h5>
       <p> Name:{this.state.name} </p>
       <p> Count:{this.state.count}</p>
        <button onClick={this.checkInfo}> Toggle </button>
        {toggle(this.state.showInfo)}
       {/* <button onClick={this.addCount }> ADD COUNT </button>
       <button onClick={this.removeCount }> REMOVE</button>
       <button onClick={this.resetCount}> RESET </button>
         */}

       </div>
      </div>
    );
  }
}
