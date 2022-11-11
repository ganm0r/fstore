import React from "react";
import styled from "styled-components";

import { Button } from "./Button";
import { Logo } from "./Logo";
import { fstoreTheme } from "../theme";

const StyledNav = styled.nav(
    ({ theme }) => `
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        max-width: 100vw;
        flex-direction: row;
        font-weight: ${theme.fontWeights.extrabold};
        font-size: 24px;
        line-height: 33px;
        color: ${theme.colors.black};
        padding: 8px 24px;
    `
);

const Navbar = () => (
    <StyledNav>
        <div style={{
            display: "flex",
            gap: "8px"
        }}>
            <Logo size="54px" />
            <h1>FSTORE</h1>
        </div>
        <div style={{
            display: "flex",
            gap: "18px",
        }}>
            <Button bgColor={fstoreTheme.colors.white} fontColor={fstoreTheme.colors.black}>Search</Button>
            <Button bgColor={fstoreTheme.colors.black} fontColor={fstoreTheme.colors.white}>Sign In</Button>
        </div>
    </StyledNav>
);

export { Navbar };