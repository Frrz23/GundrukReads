import React, {useEffect, useState} from 'react';
import './App.css'
import Header from './Components/header/Header.jsx';
import Footer from './Components/footer/Footer.jsx';
import Topheader  from './Components/Topheader/Topheader.jsx';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home/Home.jsx';
import Login from './pages/user/login/Login.jsx';
import Register from './pages/user/register/Register.jsx';
import Conditions from './pages/policies/Conditions.jsx';
import Policies from './pages/policies/Policies.jsx';
import Pagenotfound from './pages/notfound/Pagenotfound.jsx';
import Aboutus from './pages/aboutus/Aboutus.jsx';
import Learnmore from './pages/learnmore/Learnmore.jsx';
import Productview from './pages/product/Productview.jsx';
function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchedData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchedData();
  }, []);
  return [
    <>
    <Router>
      <ToastContainer />
      <Topheader title="GundrukReads" />
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gundrukreads-login' element={<Login/>}></Route>
        <Route path='/gundrukreads-register' element={<Register/>}></Route>
        <Route path='/gundrukreads-conditions' element={<Conditions/>}></Route>
        <Route path='/gundrukreads-policies' element={<Policies/>}></Route>
        <Route path='*' element={<Pagenotfound />}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/more-info' element={<Learnmore/>}></Route>
        <Route path='/product-view/id' element={<Productview isLoading={isLoading} products={products} />} ></Route>

        
       
      </Routes>
      <Footer/>
    </Router>
    </>
  ]
}


export default App

