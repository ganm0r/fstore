import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div(
    ({ bgColor, fontColor }) => `
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: ${fontColor};
        background-color: ${bgColor};
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
    `
);

const Card = ({ image, title, price, bgColor, fontColor }) => (
    <StyledCard bgColor={bgColor} fontColor={fontColor}>
        <span style={{ width: '500px', height: '600px', margin: '32px' }}>
            <img src={image} width="500px" height="600px" style={{ objectFit: 'cover' }} />
        </span>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '335px',
            margin: '0 32px 32px 32px',
            overflow: 'clip',
        }}>
            <h3 style={{ textTransform: 'uppercase', whiteSpace: 'nowrap', margin: '0' }}>{title}</h3>
            <h2 style={{ margin: '20px 0 0 0' }}>${price}</h2>
        </div>
    </StyledCard>
)

export { Card };
