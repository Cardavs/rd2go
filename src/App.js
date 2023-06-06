import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import OurStore from './pages/OurStore';
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path='product' element={<OurStore />} />
                <Route path='product/:id' element={<SingleProduct />} />
                <Route path='cart' element={<Cart />} />
                <Route path='login' element={<Login />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
