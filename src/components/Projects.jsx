import React from "react";
import styled from "styled-components";
import Bounce from "react-reveal/Bounce";
import ReactPlayer from "react-player/lazy";

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
          <LinkWrap>
            <ReactPlayer
              title="project1"
              width="380px"
              height="280px"
              url="https://youtu.be/1yeCO9h_Z7A"
              frameborder="0"
              muted="true"
              controls="true"
              style={{ border: "2px solid white" }}
            />
          </LinkWrap>
        </LinkContainer>
      </ProjectWrap>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  padding: 2em 0;
  height: 100%;
  width: 100%;
  color: white;
`;

const ProjectWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 50%;
  /* border: 2px solid red; */
`;

const LinkWrap = styled.div`
  width: 50%;
  height: 100%;

  /* background-repeat: no-repeat; */
  margin: 10px auto;
`;

const SideArticleContainer = styled.div`
  position: sticky;
  top: 0;
  width: 50%;
  /* border: 2px solid gray; */

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
