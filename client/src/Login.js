import React, { useState } from 'react';

function Login( { login }) {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function updateUsername(username) {
        setUsername(username)
    }

    function updatePassword(password) {
        setPassword(password)
    }

    function handleLogin(event) {
        event.preventDefault();
        const userInfo = {
            username,
            password
        };
        login(userInfo);
    };

    return(
        <div id="createUserForm" >
            <h1>Login</h1>
            <h3>Enter Username and Password</h3>
            <form className="form" onSubmit={(event) => handleLogin(event)} >
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(event) => updateUsername(event.target.value)}
                    value={username}
                ></input>
                <input 
                    type="text"
                    placeholder="Password"
                    onChange={(event) => updatePassword(event.target.value)}
                    value={password}
                ></input>
                <input type="submit"></input>
            </form>
        </div>
    );
};

export default Login;