import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div id="navbar">
            <NavLink
                className="navlink" 
                to="/"
            >
                My Collection
            </NavLink>
            <NavLink
                className="navlink" 
                to="/add_issue"
            >
                Add New Issue
            </NavLink>
            <NavLink
                className="navlink"
                to="/add_publisher"
            >
                Add New Publisher
            </NavLink>
        </div>
    );
};

export default NavBar;