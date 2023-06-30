import './App.css';
//eslint-disable-next-line
import React, { Component } from 'react';
import StartHeader from "./components/StartHeader";
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from './pages/SignUpPage';
import MyPage from './pages/MyPage';

const Layout = () => {
  return (
    <div className='App-StartMain'>
      <StartHeader />

      <StartPage />
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<SignUpPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
