import { useState } from "react";
//import React from "react";

const StartPage = () => {
  
  
//     const [users, setUsers] = useState([]);


//   const handleUserData = async () => {
//     const response = await fetch(
//       "https://noroff-assignment-jesper-api.herokuapp.com/translations"
//     );
//     const result = await response.json();
//     setUsers(result);

//     //console.log(users[0].username)

//   };


//   console.log(setUsers())




  return (
    <div className="App">
      <h1>Login</h1>
      <p>Enter your user name to sign in.</p>
      <div className="input-box">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
      </form>
      <button>Login</button>
      </div>
      
      <p>
        New user?<br></br> just type in your desired username and press login
      </p>
    </div>
  );
};

export default StartPage;
