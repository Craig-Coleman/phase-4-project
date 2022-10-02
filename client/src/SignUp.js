import React, { useState } from 'react';

function SignUp( { signUp }) {

    const [newUsername, setNewUsername] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [confirmNewPassword, setConfirmNewPassword] = useState(null);

    function handleSignUp(event) {
        event.preventDefault();
        const newUserInfo = {
            username: newUsername,
            password: newPassword,
            password_confirmation: confirmNewPassword
        };
        signUp(newUserInfo);
        setNewUsername("");
        setNewPassword("");
        setConfirmNewPassword("");
    }

    return(
        <div>
            <h2>Please enter your desired Username and Password</h2>
            <form id="signUpForm" onSubmit={(event) => handleSignUp(event)} >
                <input
                    type="text"
                    placeholder="New Username"
                    onChange={(event) => setNewUsername(event.target.value)}
                    value={newUsername}
                ></input>
                <input 
                    type="password"
                    placeholder="New Password"
                    onChange={(event) => setNewPassword(event.target.value)}
                    value={newPassword}
                ></input>
                                <input 
                    type="password"
                    placeholder="Confirm New Password"
                    onChange={(event) => setConfirmNewPassword(event.target.value)}
                    value={confirmNewPassword}
                ></input>
                <input type="submit"></input>
            </form>
        </div>
    );
};

export default SignUp;