import React, { Component } from 'react'
import Book from "./Book";
import bookData from "./bookData";

export default class BookList  extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      books: bookData
    };
  }
  
  


    render() {
    return (
      <div>
        <h1> This is our BookList </h1>
        {this.state.books.map(item => (
        <Book  key={item.key} info ={item} />

        ))}

      </div> 
    );
  }
}

