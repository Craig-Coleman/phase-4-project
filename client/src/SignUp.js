import React, { useState } from 'react';

function SignUp( { signUp }) {

    const [newUsername, setNewUsername] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [confirmNewPassword, setConfirmNewPassword] = useState(null);

    function updateNewUsername(newUsername) {
        setNewUsername(newUsername);
    };

    function updateNewPassword(newPassword) {
        setNewPassword(newPassword);
    };

    function updateConfirmNewPassword(confirmNewPassword) {
        setConfirmNewPassword(confirmNewPassword);
    };

    function handleSignUp(event) {
        event.PreventDefault();
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
            <form id="signUpForm" onSubmit={(event) => handleSignUp(event)} >
                <input
                    type="text"
                    placeholder="New Username"
                    onChange={(event) => updateNewUsername(event.target.value)}
                    value={newUsername}
                ></input>
                <input 
                    type="text"
                    placeholder="New Password"
                    onChange={(event) => updateNewPassword(event.target.value)}
                    value={newPassword}
                ></input>
                                <input 
                    type="text"
                    placeholder="Confirm New Password"
                    onChange={(event) => updateConfirmNewPassword(event.target.value)}
                    value={confirmNewPassword}
                ></input>
                <input type="submit"></input>
            </form>
        </div>
    );
};

export default SignUp;