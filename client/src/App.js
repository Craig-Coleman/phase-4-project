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
  const [books, setBooks] = useState([]);


  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      };
    });
  }, []);

  if (!user) 
    return (
      <div>
        <Login setUser={ setUser } setBooks={setBooks} />
        <SignUp setUser={ setUser } />
      </div>
    )

  return (
    <div className="App">
      <Header setUser={setUser} ></Header>
      <Routes>
        <Route path="/" element={<Collection books={books} />}/>
        <Route path="/add_issue" element={<NewBookForm/>}/>
        <Route path="/add_publisher" element={<NewPublisherForm/>}/>
      </Routes>

    </div>
  )

};

export default App;
