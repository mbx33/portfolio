import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <Container>
      <h2>Recent Projects</h2>
      <ProjectWrap>
        <LinkWrap></LinkWrap>
        <LinkWrap></LinkWrap>
        <LinkWrap></LinkWrap>
        <LinkWrap></LinkWrap>
        <LinkWrap></LinkWrap>
        <LinkWrap></LinkWrap>
      </ProjectWrap>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  padding: 2em 0;
  width: 100vw;
  /* height: 40vh; */
  background-color: #000;
  color: white;
`;

const ProjectWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 18px;
`;

const LinkWrap = styled.div`
  width: 23vw;
  height: 20vh;
  background-size: cover;
  background-position: center;
  /* background-repeat: no-repeat; */
  background-image: url("/images/Disco.jpeg.jpg");
  margin: 10px auto;
  border: 3px solid white;
`;
