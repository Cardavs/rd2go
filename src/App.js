import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import OurStore from './pages/OurStore';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="contact" element={<Contact />} />
                <Route path='product' element={<OurStore />} />
                <Route path='product/:id' element={<SingleProduct />} />
                <Route path='cart' element={<Cart />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
