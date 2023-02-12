import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHome from './routes/userhome';
import NoMatch from './routes/nomatch';
//import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ミールキット アプリ</h1>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
