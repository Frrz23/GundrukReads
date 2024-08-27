import React, { Fragment } from 'react';
import './App.css'
import Header from './Components/header/Header.jsx';
import Footer from './Components/footer/Footer.jsx';
import Topheader  from './Components/Topheader/Topheader.jsx';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home.jsx';
import Login from './pages/user/login/Login.jsx';
import Register from './pages/user/register/Register.jsx';

function App() {
  return [
    <>
    <Router>
      <Topheader/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gundrukreads-login' element={<Login/>}></Route>
        <Route path='/gundrukreads-register' element={<Register/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  ]
}


export default App

