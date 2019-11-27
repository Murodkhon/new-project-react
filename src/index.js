import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
// JSX

// function BookList() {
//     return (
//         <div >
//             <Book title=" Qora kuchlar" author ="Sirojiddin"/>
//             <Book title=" Antaliyaga sayohat" author ="Abdurahim"/>
//             <Book title=" oddix kuni xudoy" author ="Murodxon"/>
//         </div>
//     ) 
// }
// function Book(props) {
//     console.log(props);
    
//     return(
//         <div className = "book">
//             <h1> {props.title} </h1>
//             <p>  {props.author} </p>
//         </div>
//     );
    
// } 

// const Author = () => <h1>Sirojiddin</h1>;
// const Title = () => <p>Data Science in 1-minut </p>;
// const CoverImage = () => <img src="" alt="" alt="data science"/>;

ReactDOM.render(<App/>, document.getElementById('root'));


