import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div id="navbar">
            <NavLink
                className="navlink" 
                to="/charsheet"
                exact
                activeStyle={{
                    background: "darkblue",
                }}
            >
                My Collection
            </NavLink>
            <NavLink
                className="navlink" 
                to="/info"
                exact
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Add New Issue
            </NavLink>
            <NavLink
                className="navlink"
                to="/inventory"
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