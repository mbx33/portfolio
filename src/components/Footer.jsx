import React from "react";
import styled from "styled-components";
import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";

function Footer() {
  return (
    <Menu>
      <a href="/">
        <SiGithub />
      </a>
      <a href="/">
        <SiLinkedin />
      </a>
      <a href="/">
        <SiYoutube />
      </a>
    </Menu>
  );
}

export default Footer;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  display: flex;
  bottom: 0;
  background-color: #222;
  font-size: 60px;

  a {
    padding: 0 30px;
    font-weight: 550;
    cursor: pointer;
    letter-spacing: 1px;
    text-decoration: none;
  }
`;
