import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";


const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
 
  const [initialLogin, setInitialLogin] = useState({
    username: "", 
    password: "",
  });

  const [error, setError] = useState("");

  const { push } = useHistory();

  //replace with error state
  

  const handleChange = (e) => {
    setInitialLogin({
      ...initialLogin,
      [e.target.name]: e.target.value  
    });
  };

  const login = e => {
    e.preventDefault();

    if(initialLogin.username === 'Lambda' && initialLogin.password === 'School') {
      axios.post("http://localhost:5000/api/login", initialLogin)
      .then(res => {
        console.log("response", res)
        localStorage.setItem('token', res.data.payload);
        push('/bubble-page');
      })
      .catch(err => { 
        console.log(err);
      })
    } else {
      const newLogin  = { 
        username: "", 
        password: "",
      }
      setError("Username or Password not valid.")
      return(setInitialLogin(newLogin));
    }  
  }

  const {username, password} = initialLogin;

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
      <form onSubmit={login}>
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
              />
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <button id="submit">Log in</button>
            </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"