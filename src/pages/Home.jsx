import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import axios from '../helpers/apiClient';

const CATEGORIES = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
];

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("/products")
            .then(res => setProducts(res.data))
    }, []);
    
    return (
        <div>
            {CATEGORIES.map(category => (
                <div key={category} style={{ display: 'flex', overflowX: 'scroll', overflowY: 'hidden', scrollbarWidth: 'thin', height: "90vh" }}>
                    {products && products.map(product => product.category === category && (
                        <Card key={product.title} image={product.image} title={product.title.split(' ').slice(0, 3).join(' ')} price={product.price} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export { Home };