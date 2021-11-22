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
import Bounce from "react-reveal/Bounce";

function Skills() {
  return (
    <Container>
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
      </Bounce>
    </Container>
  );
}

export default Skills;

const Container = styled.div`
  height: 22vh;
  background-color: #222;
  display: flex;
  justify-content: center;
  /* border-radius: 0 0 15px 15px; */
`;

const SkillWrap = styled.div`
  padding-top: 30px;
  padding-right: 18px;
  padding-left: 18px;
  font-size: 90px;

  p {
    font-size: 20px;
    color: whitesmoke;
  }
`;
