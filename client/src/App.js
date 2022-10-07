import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Header from './Header';
import Collection from './Collection';
import NewBookForm from './NewBookForm';
import NewPublisherForm from './NewPublisherForm';


function App() {

  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    fetch("/me").then((res) => {
        if (res.ok) {
          res.json().then((user) => setUser(user));
        };
      });
    fetch("/publishers").then((res) => {
      if (res.ok) {
        res.json().then((publishers) => setPublishers(publishers));
      };
    });
  }, []);

  if (!user) 
    return (
      <div>
        <Login setUser={setUser} />
        <SignUp setUser={setUser} />
      </div>
    );

    return (
      <div className="App">
        <Header setUser={setUser} setBooks={setBooks}></Header>
        <Routes>
          <Route path="/" element={<Collection setBooks={setBooks} books={books} />}/>
          <Route path="/add_issue" element={<NewBookForm setBooks={setBooks} books={books} publishers={publishers}/>}/>
          <Route path="/add_publisher" element={<NewPublisherForm setPublishers={setPublishers} publishers={publishers} />}/>
        </Routes>
      </div>
    );
};

export default App;
