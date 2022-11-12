import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input(
    ({ theme }) => `
        width: 90%;
        position: relative;
        border: none;
        border-bottom: 3px solid  ${theme.colors.black};
        background-color: ${theme.colors.yellow};
        font-family: ${theme.fonts.primary};
        font-size: 32px;
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.black};
        outline: none;
        padding: 19px 0 0 0;
        margin: 0;

        ::-webkit-input-placeholder {
            color: ${theme.colors.black};
        }
    `
)

const Input = ({ name, value, type, placeholder, onChange }) => (
    <StyledInput name={name} value={value} type={type} placeholder={placeholder} onChange={onChange} />
)

export { Input };