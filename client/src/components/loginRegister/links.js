import React from 'react';
import './loginRegister.css'


const Links = () => {
    return(
        <div className="navbar-nav">
			<a href="#" className="nav-item nav-link">Home</a>
			<a href="#" className="nav-item nav-link">About</a>			
			<div className="nav-item dropdown">
				<a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">Services</a>
				<div className="dropdown-menu">					
					<a href="#" className="dropdown-item">Web Design</a>
					<a href="#" className="dropdown-item">Web Development</a>
					<a href="#" className="dropdown-item">Graphic Design</a>
					<a href="#" className="dropdown-item">Digital Marketing</a>
                </div>
            </div>
            <a href="#" className="nav-item nav-link active">Pricing</a>
			<a href="#" className="nav-item nav-link">Blog</a>
			<a href="#" className="nav-item nav-link">Contact</a>
            </div> 
    )
  }
  
  export default Links;