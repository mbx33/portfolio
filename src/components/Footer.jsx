import React from "react";
import styled from "styled-components";
import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";

function Footer() {
  return (
    <Menu className="footer">
      <a href="https://github.com/mbx33" target="_blank" rel="noreferrer">
        <SiGithub style={{ color: "white" }} />
      </a>
      <a
        href="https://www.linkedin.com/in/matt-baxter33/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin style={{ color: "blue" }} />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <SiYoutube style={{ color: "red" }} />
      </a>
    </Menu>
  );
}

export default Footer;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  /* padding-top: 1rem; */
  display: flex;
  width: 100%;
  font-size: 60px;
  background-image: url("/images/ground.png");
  background-repeat: no-repeat;
  background-size: 28em auto;

  a {
    padding: 10px 70px;
    font-weight: 550;
    cursor: pointer;
    letter-spacing: 1px;
    text-decoration: none;
    margin: 0 1em;
  }
`;
