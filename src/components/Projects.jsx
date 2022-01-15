import React from "react";
import styled from "styled-components";
import Bounce from "react-reveal/Bounce";

function Projects() {
  return (
    <Container id="projects">
      <ProjectWrap>
        <SideArticleContainer>
          <Bounce left>
            <div className="article-content">
              <h2>My Recent Projects</h2>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti tempore dolores eaque quo, quaerat consectetur officiis
                doloribus ducimus architecto iste sint modi porro tempora.
                Repellat dolorum repudiandae fugiat necessitatibus est.
              </p>
            </div>
          </Bounce>
        </SideArticleContainer>

        <LinkContainer>
          <LinkWrap></LinkWrap>
          <LinkWrap></LinkWrap>
          <LinkWrap></LinkWrap>
        </LinkContainer>
      </ProjectWrap>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  padding: 2em 0;
  width: 100%;
  color: white;
`;

const ProjectWrap = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  padding-bottom: 20px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 50%;
  border: 2px solid red;
`;

const LinkWrap = styled.div`
  width: 50%;
  height: 100%;
  background-size: cover;
  background-position: center;
  /* background-repeat: no-repeat; */
  background-image: url("/images/Disco.jpeg.jpg");
  margin: 10px auto;
  border: 3px solid white;
`;

const SideArticleContainer = styled.div`
  position: sticky;
  top: 0;
  width: 50%;
  border: 2px solid gray;

  .article-content {
    width: 65%;
    margin: 2em auto;

    p {
      text-align: left;
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;
