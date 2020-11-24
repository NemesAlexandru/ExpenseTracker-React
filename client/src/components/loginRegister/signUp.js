import React, { useState } from 'react';
import './loginRegister.css';
import Axios from 'axios';

const SignUp = () => {

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerPassword2, setRegisterPassword2] = useState("");

    const register = () => {
        Axios({
          method: "POST",
          data: {
            username: registerUsername,
            password: registerPassword,
            password2: registerPassword2
          },
          withCredentials: true,
          url: "http://localhost:5000/register",
        }).then((res) => console.log(res));
      };

    return(
        <form>
        <p className="hint-text">Fill in this form to create your account!</p>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" onChange={(e) => setRegisterUsername(e.target.value)} required="required" />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)} required="required" />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e) => setRegisterPassword2(e.target.value)} required="required" />
        </div>
        <div className="form-group">
            <label className="form-check-label">
                <input type="checkbox" required="required" /> I accept the <a href="#">Terms &amp; Conditions</a>
                </label>
        </div>
        <input type="submit" onClick={register} className="btn btn-primary btn-block" value="Sign up" />
    </form> 
    )
  }
  
  export default SignUp;


