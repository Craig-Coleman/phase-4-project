import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Collection from './Collection';
import NewBookForm from './NewBookForm';
import NewPublisherForm from './NewPublisherForm';


function App() {

  const [user, setUser] = useState([]);
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="add_issue" element={<NewBookForm/>}/>
        <Route path="add_publisher" element={<NewPublisherForm/>}/>
      </Routes>

    </div>
  );
}

export default App;
