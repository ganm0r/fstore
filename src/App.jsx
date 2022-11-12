import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Login } from './pages/Login';

import axios from './helpers/apiClient';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from './pages/Cart';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/products').then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/fstore" element={<Home products={products} />} />
          <Route path="/fstore/search" element={<Search products={products} />} />
          <Route path="/fstore/login" element={<Login />} />
          <Route path="/fstore/cart" element={<Cart allproducts={products} />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
