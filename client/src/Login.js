import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login( { login }) {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function handleLogin(event) {
        event.preventDefault();
        const userInfo = {
            username,
            password
        };
        login(userInfo);
        setUsername('');
        setPassword('');
    };

    return(
        <div>
            <h1>Login</h1>
            <h3>Enter Username and Password</h3>
            <form id="loginForm" onSubmit={(event) => handleLogin(event)} >
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                ></input>
                <input 
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                ></input>
                <input type="submit"></input>
            </form>
            <h1>Or</h1>
            <NavLink
                className="navlink"
                to="/sign_up"
            >
                Sign Up
            </NavLink>
        </div>
    );
};

export default Login;