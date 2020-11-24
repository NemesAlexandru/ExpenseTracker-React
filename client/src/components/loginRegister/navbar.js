import React, { useState } from 'react';
import './loginRegister.css';
import Login from './login';
import SignUp from './signUp';
import Axios from "axios";
// import Search from './search';
// import Links from './links';

const Navbar = () => {

  const [data, setData] = useState(null);

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };


  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
	{/* <a href="#" className="navbar-brand">Brand<b>Name</b></a>  		 */}
  <button className="navbar-brand" onClick={getUser}>Click</button>
  {data ? <h1>Welcome Back {data.username}</h1> : null}
	<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span className="navbar-toggler-icon"></span>
	</button>
    {/* <!-- Collection of nav links, forms, and other content for toggling --> */}
    <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">

    {/* LINKS HERE */}
    {/* <Links /> */}
    {/* SEARCH FORM HERE */}
    {/* <Search /> */}
        <div className="navbar-nav ml-auto action-buttons">
			<div className="nav-item dropdown">
            <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle mr-4">Login</a>
            <div className="dropdown-menu action-form">
	{/* LOGIN FORM HERE        */}
     <Login />
            </div>
            </div>
            <div className="nav-item dropdown">
				<a href="#" data-toggle="dropdown" className="btn btn-primary dropdown-toggle sign-up-btn">Sign up</a>
                <div className="dropdown-menu action-form">
	{/* SIGNUP FORM HERE */}
    <SignUp />
				</div>
			</div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar;
