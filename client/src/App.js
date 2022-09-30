import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Collection from './Collection';
import NewBookForm from './NewBookForm';
import SignUp from './SignUp';
import NewPublisherForm from './NewPublisherForm';


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      };
    });
  });

  function login(userInfo) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  function signUp(newUserInfo) {
    console.log(newUserInfo);
  };

  if (!user) {
    return (
      <div>
        <Routes>
          <Route path="/" element={ <Login login={ login } /> }/>
          <Route path="/sign_up" element={ <SignUp signUp={ signUp} /> }/>
        </Routes>
      </div>
    )
  } else {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/add_issue" element={<NewBookForm/>}/>
        <Route path="/add_publisher" element={<NewPublisherForm/>}/>
      </Routes>

    </div>
  );
  };
};

export default App;
