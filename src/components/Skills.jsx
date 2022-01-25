import React from "react";
import styled from "styled-components";
import { ImHtmlFive2 } from "react-icons/im";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import Bounce from "react-reveal/Bounce";

function Skills() {
  return (
    <Container id="skills">
      <Bounce bottom>
        <SkillWrap>
          <ImHtmlFive2 style={{ color: "red" }} />
          <br />
          <p>HTML 5</p>
        </SkillWrap>
        <SkillWrap>
          <SiCss3 style={{ color: "blue" }} />
          <br />
          <p>CSS</p>
        </SkillWrap>
        <SkillWrap>
          <SiJavascript style={{ color: "yellow" }} />
          <br />
          <p>Javascript</p>
        </SkillWrap>
        <SkillWrap>
          <SiNodedotjs style={{ color: "green" }} />
          <br />
          <p>Node JS</p>
        </SkillWrap>
        <SkillWrap>
          <SiMongodb style={{ color: "green" }} />
          <br />
          <p>Mongo DB</p>
        </SkillWrap>
        <SkillWrap>
          <SiReact style={{ color: "blue" }} />
          <br />
          <p>React</p>
        </SkillWrap>
        <SkillWrap>
          <FaGitAlt style={{ color: "red" }} />
          <br />
          <p>GIT</p>
        </SkillWrap>
        <SkillWrap>
          <FaGithub style={{ color: "#4495d4" }} />
          <br />
          <p>Github</p>
        </SkillWrap>
      </Bounce>
    </Container>
  );
}

export default Skills;

const Container = styled.div`
  background-color: #222;
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  padding-top: 1rem;
  border-bottom: 2px solid black;
  row-gap: 3rem;
`;

const SkillWrap = styled.div`
  padding-top: 30px;
  padding-right: 18px;
  padding-left: 18px;
  font-size: 90px;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 350ms ease-in;

  &:hover {
    box-shadow: 0 0 1.5rem hsl(0, 0%, 100%, 0.8);
    transform: scale(1.1);
  }

  p {
    font-size: 20px;
    color: whitesmoke;
  }
`;
