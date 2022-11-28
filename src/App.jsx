import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Login } from './pages/Login';
import { UserContext } from './contexts/UserContext';
import axios from './helpers/apiClient';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const userToken = localStorage.getItem('userToken');

  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(userToken);

  useEffect(() => {
    axios.get('/products').then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Router>
        <UserContext.Provider value={token}>
          <Navbar setToken={setToken} />
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/search" element={<Search products={products} />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
          </Routes>
        </UserContext.Provider>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
