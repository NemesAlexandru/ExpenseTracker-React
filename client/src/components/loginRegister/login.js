import React from 'react';
import './loginRegister.css'

const Login = () => {
  return(
    <form action="/examples/actions/confirmation.php" method="post">
						<p className="hint-text">Sign in with your social media account</p>
						<div className="form-group social-btn clearfix">
							<a href="#" className="btn btn-secondary facebook-btn float-left"><i className="fa fa-facebook"></i> Facebook</a>
							<a href="#" className="btn btn-secondary twitter-btn float-right"><i className="fa fa-twitter"></i> Twitter</a>
						</div>
						<div className="or-seperator"><b>or</b></div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Username" required="required" />
						</div>
                        <div className="form-group">
							<input type="password" className="form-control" placeholder="Password" required="required" />
						</div>
						<input type="submit" className="btn btn-primary btn-block" value="Login" />
						<div className="text-center mt-2">
							<a href="#">Forgot Your password?</a>
						</div>
					</form> 
  )
}

export default Login;