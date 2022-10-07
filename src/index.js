import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Welcome from './components/Welcome';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='registration' element={<Registration/>} />
        <Route path='login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
    <Footer />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
