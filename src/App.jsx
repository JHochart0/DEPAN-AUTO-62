import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './css/App.css'

import Home from './pages/Home.jsx';

function App() {
  return (
    <Router>
        <div className="App">
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;
