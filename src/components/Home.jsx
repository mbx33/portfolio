import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Projects from "./Projects";
import Section from "./Section";
import Skills from "./Skills";

function Home() {
  return (
    <Container>
      <Section />
      <Skills />
      <Projects />
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
