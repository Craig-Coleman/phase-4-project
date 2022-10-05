import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

function Header( { setUser } ) {

    const navigate = useNavigate();

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then((res) => {
            if (res.ok) {
            setUser(null);
            };
        });  
        navigate("/") 
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