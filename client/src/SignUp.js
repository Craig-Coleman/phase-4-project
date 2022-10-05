import React, { useState } from 'react';

function SignUp({ setUser }) {

    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [confirmSignUp, setConfirmSignUp] = useState('')

    function signUp(newUserInfo) {
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserInfo),
        })
        .then(res => {
          if(res.ok) {
            res.json().then(setConfirmSignUp('Account Created!  Please Login Above with Your Newly Created Credentials!'))
          } else {
            res.json().then((err) => setErrors(err.errors))
          }
        });
      };

      const errorMessage = errors.map((error) => {
        return(
            <h4 className="error">{error}</h4>
        );
      });

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
            <h3>Please enter your desired Username and Password</h3>
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
                <input type="submit" value="Sign Up"></input>
            </form>
            {errorMessage}
            <h4 className="confirmation" >{confirmSignUp}</h4>
        </div>
    );
};

export default SignUp;