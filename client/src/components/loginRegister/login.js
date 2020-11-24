import React, {useState} from 'react';
import './loginRegister.css'
import Axios from 'axios';

const Login = () => {

	// const [loginUsername, setLoginUsername] = useContext(GlobalContext);
	// const [loginPassword, setLoginPassword] = useContext(GlobalContext);

	const [loginUsername, setLoginUsername] = useState('')
	const [loginPassword, setLoginPassword] = useState('')

	const login = () => {
		Axios({
		  method: "POST",
		  data: {
			username: loginUsername,
			password: loginPassword,
		  },
		  withCredentials: true,
		  url: "http://localhost:5000/login",
		})
		.then((res) => console.log(res));
	  };


  return(
    <form>
						<p className="hint-text">Sign in with your social media account</p>
						<div className="form-group social-btn clearfix">
							<a href="#" className="btn btn-secondary facebook-btn float-left"><i className="fa fa-facebook"></i> Facebook</a>
							<a href="#" className="btn btn-secondary twitter-btn float-right"><i className="fa fa-twitter"></i> Twitter</a>
						</div>
						<div className="or-seperator"><b>or</b></div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Username" onChange={(e) => setLoginUsername(e.target.value)} required="required" />
						</div>
                        <div className="form-group">
							<input type="password" className="form-control" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} required="required" />
						</div>
						<input type="submit" onClick={login} className="btn btn-primary btn-block" value="Login" />
						<div className="text-center mt-2">
							<a href="#">Forgot Your password?</a>
						</div>
					</form> 
  )
}

export default Login;