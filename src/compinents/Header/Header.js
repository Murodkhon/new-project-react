import React from 'react';
import  {name} from "./../../data";

// export default function Header() {
//   return (
//     <div>
//       <h3>
//           Hello from Banner !
//       </h3>
//     </div>
//   )
// }

function Header() {
    return(
        <div>
            <h3>Hello World </h3>
            <p>  {name} </p>
        </div>
    );
}

export default Header;