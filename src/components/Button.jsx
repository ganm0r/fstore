import React from "react";
import styled from "styled-components";

const StyledButton = styled.button(
    ({ theme, bgColor, fontColor }) => `
        width: fit-content;
        position: relative;
        background-color: ${bgColor};
        font-size: 24px;
        font-weight: ${theme.fontWeights.bold};
        font-family: ${theme.fonts.primary};
        color: ${fontColor};
        box-sizing: border-box;
        border: none;
        padding: 16px 24px;
        margin-bottom: 16px;

        &:active {
            transform: scale(0.96);
        }
    `
);

const Button = ({ children, bgColor, fontColor }) => (
    <StyledButton bgColor={bgColor} fontColor={fontColor}>
        {children}
    </StyledButton>
);

export { Button };