import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Search } from './pages/Search';

import axios from './helpers/apiClient';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("/products")
            .then(res => setProducts(res.data))
    }, []);

    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home products={products} />} />
                    <Route path='/search' element={<Search products={products} />} />
                </Routes>
            </Router>
        </div>
    )
};

export default App;