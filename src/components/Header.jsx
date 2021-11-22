import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <MainContainer>
      <a href="/">
        <img src="/images/mb.main.logo.png" alt="main logo" />
      </a>
      <Menu>
        <a href="/">Contact</a>
        <a href="/">Projects</a>
        <a href="/">About</a>
      </Menu>
    </MainContainer>
  );
}

export default Header;

const MainContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  a {
    text-decoration: none;
  }
`;

const Menu = styled.div`
  align-items: center;
  flex: 1;

  a {
    padding: 0 10px;
    font-weight: 550;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
