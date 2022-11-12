import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from './Button';
import { Logo } from './Logo';
import { fstoreTheme } from '../theme';
import { useNavigate } from 'react-router-dom';

const StyledNav = styled.nav(
  ({ theme }) => `
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        max-width: 100vw;
        flex-direction: row;
        font-weight: ${theme.fontWeights.extrabold};
        background-color: ${theme.colors.yellow};
        font-size: 24px;
        line-height: 33px;
        color: ${theme.colors.black};
        padding: 8px 24px;
    `
);

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('userToken'));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token.length > 0) {
      setIsLoggedIn(true);
    }
  }, [token]);

  return (
    <StyledNav>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          role: 'button',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        <Logo size="54px" />
        <h1>FSTORE</h1>
      </div>
      {isLoggedIn ? (
        <div
          style={{
            display: 'flex',
            gap: '18px',
          }}
        >
          <Button
            bgColor={fstoreTheme.colors.yellow}
            fontColor={fstoreTheme.colors.black}
            onClick={() => navigate('/search')}
          >
            Search
          </Button>
          <Button
            bgColor={fstoreTheme.colors.black}
            fontColor={fstoreTheme.colors.yellow}
            onClick={() => navigate('/cart')}
          >
            Cart
          </Button>
          <Button
            bgColor={fstoreTheme.colors.black}
            fontColor={fstoreTheme.colors.yellow}
            onClick={() => {
              localStorage.setItem('userToken', '');
              setToken(localStorage.getItem('userToken'));
              window.location.reload();
            }}
          >
            Sign Out
          </Button>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            gap: '18px',
          }}
        >
          <Button
            bgColor={fstoreTheme.colors.yellow}
            fontColor={fstoreTheme.colors.black}
            onClick={() => navigate('/search')}
          >
            Search
          </Button>
          <Button
            bgColor={fstoreTheme.colors.black}
            fontColor={fstoreTheme.colors.yellow}
            onClick={() => navigate('/login')}
          >
            Sign In
          </Button>
        </div>
      )}
    </StyledNav>
  );
};

export { Navbar };
