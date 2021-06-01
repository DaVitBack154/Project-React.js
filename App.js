
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './Profile';

function App() {
  return (
    <div className="wrapper">
      <Profile />
    </div>
  );
}

export default App;
