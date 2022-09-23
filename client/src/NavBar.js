import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div id="navbar">
            <NavLink
                className="navlink" 
                to="/collection"
                exact
                activeStyle={{
                    background: "darkblue",
                }}
            >
                My Collection
            </NavLink>
            <NavLink
                className="navlink" 
                to="/add_issue"
                exact
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Add New Issue
            </NavLink>
            <NavLink
                className="navlink"
                to="/add_publisher"
                exact
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Add New Publisher
            </NavLink>
        </div>
    );
};

export default NavBar;