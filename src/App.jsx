import React, { Fragment } from 'react';
import './App.css'
import Header from './Components/header/Header.jsx';
import Footer from './Components/footer/Footer.jsx';
import Banner from './pages/banner/BannerPage.jsx';
import { Topheader } from './Components/Topheader/Topheader.jsx';

function App() {
  



  return [
    <>
    <Topheader/>
    <Header />
    <Banner/>
    <Footer />
    </>
  ]
}


export default App

