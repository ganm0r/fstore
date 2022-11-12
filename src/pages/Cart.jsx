import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { fstoreTheme } from '../theme';
import axios from '../helpers/apiClient';

const Cart = ({ allproducts }) => {
  const [cart, setCart] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    axios.get('/carts/user/1').then((res) => setCart(res.data));

    setCartProducts(allproducts.filter((product) => product.id === cart.products.productId));
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Button
          bgColor={fstoreTheme.colors.black}
          fontColor={fstoreTheme.colors.yellow}
          marginBottom="0px"
          type="submit"
          width="40%"
        >
          Checkout
        </Button>
      </div>
      <div style={{ display: 'flex', overflowX: 'scroll', overflowY: 'hidden', height: 'max-content' }}>
        {cartProducts &&
          cartProducts.map((product) => (
            <Card
              key={product.title}
              image={product.image}
              description={product.description}
              title={product.title.split(' ').slice(0, 3).join(' ')}
              price={product.price}
              bgColor={fstoreTheme.colors.yellow}
              fontColor={fstoreTheme.colors.black}
            />
          ))}
      </div>
    </div>
  );
};

export { Cart };
