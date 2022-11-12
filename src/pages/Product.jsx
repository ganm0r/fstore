import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { fstoreTheme } from '../theme';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const StyledModal = styled.div(
  ({ theme }) => `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-x: hidden;
    overflow: scroll;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    width: 70%;
    height: 70%;
    display: flex;
    padding: 32px;
  `
);

const Product = ({ image, title, description, price, isOpen, onClose, onAddToCart }) => {
  return (
    <>
      {isOpen && (
        <Overlay>
          <StyledModal>
            <span style={{ width: '500px', height: '600px', margin: '36px' }}>
              <img src={image} width="500px" height="600px" style={{ objectFit: 'cover' }} />
            </span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}
            >
              <Button bgColor={fstoreTheme.colors.white} fontColor={fstoreTheme.colors.black} onClick={onClose}>
                X
              </Button>
              <h1>{title}</h1>
              <h2>About: {description}</h2>
              <h1>${price}</h1>
              <Button
                bgColor={fstoreTheme.colors.black}
                fontColor={fstoreTheme.colors.white}
                marginBottom="42px"
                width="100%"
                onClick={onAddToCart}
              >
                Add to cart!
              </Button>
            </div>
          </StyledModal>
        </Overlay>
      )}
    </>
  );
};

export { Product };
