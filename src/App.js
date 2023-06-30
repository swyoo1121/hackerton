import './App.css';
//eslint-disable-next-line
import React, { Component } from 'react';
import StartHeader from "./components/StartHeader";
import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <StartHeader />

      <StartPage />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
