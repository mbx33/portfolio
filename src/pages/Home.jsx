import React from "react";
import styled from "styled-components";
import Projects from "../components/Projects";
import Section from "../components/Section";
import Skills from "../components/Skills";
import SoftSkills from "../components/SoftSkills";

function Home() {
  return (
    <Container>
      <Section />
      <Skills />
      <SoftSkills />
      <Projects />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  /* height: 100vh; */
`;
