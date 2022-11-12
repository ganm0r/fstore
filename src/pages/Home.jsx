import React, { useState, useEffect } from 'react';

import { Card } from '../components/Card';
import { fstoreTheme } from '../theme';

const SECTIONS = [
  {
    category: "men's clothing",
    bgColor: fstoreTheme.colors.yellow,
    fontColor: fstoreTheme.colors.black,
  },
  {
    category: "women's clothing",
    bgColor: fstoreTheme.colors.pink,
    fontColor: fstoreTheme.colors.white,
  },
  {
    category: 'electronics',
    bgColor: fstoreTheme.colors.yellow,
    fontColor: fstoreTheme.colors.black,
  },
  {
    category: 'jewelery',
    bgColor: fstoreTheme.colors.pink,
    fontColor: fstoreTheme.colors.white,
  },
];

const Home = ({ products }) => (
  <div>
    {SECTIONS.map((section) => (
      <div
        key={section.category}
        style={{ display: 'flex', overflowX: 'scroll', overflowY: 'hidden', height: '100vh' }}
      >
        {products &&
          products.map(
            (product) =>
              product.category === section.category && (
                <Card
                  key={product.title}
                  image={product.image}
                  description={product.description}
                  title={product.title.split(' ').slice(0, 3).join(' ')}
                  price={product.price}
                  bgColor={section.bgColor}
                  fontColor={section.fontColor}
                />
              )
          )}
      </div>
    ))}
  </div>
);

export { Home };
