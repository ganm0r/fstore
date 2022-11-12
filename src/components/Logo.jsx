import React from 'react';
import fs from '../images/fs.png';

const Logo = ({ size = '24px' }) => (
  <span style={{ width: size, height: size, marginTop: '18px' }}>
    <img src={fs} width={size} height={size} alt="logo" />
  </span>
);

export { Logo };
