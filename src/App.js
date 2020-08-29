import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';


function App() {
  
  return (
    <div className="App">
      <div className="container">
          <Header></Header>
          <Courses></Courses>
      </div>
    </div>
  );
}

export default App;
