import React from 'react';
import NavBar from './NavBar';

function Header( { setUser } ) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then((res) => {
            if (res.ok) {
            setUser(null);
            };
        });   
    };

    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
            <h1>COLLECTION TRACKER</h1>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;