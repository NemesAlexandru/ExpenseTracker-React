import React from 'react';
import './loginRegister.css';

const Search = () => {
    return(
        <form className="navbar-form form-inline">
        <div className="input-group search-box">								
            <input type="text" id="search" className="form-control" placeholder="Search here..." />
            <div className="input-group-append">
                <span className="input-group-text">
                    <i className="material-icons">&#xE8B6;</i>
                </span>
            </div>
        </div>
    </form>
    )
  }
  
  export default Search;