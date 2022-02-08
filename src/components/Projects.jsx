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
                A few of my most recent projects I've worked on. I'll post more
                demos soon.
              </p>
              <ol className="projects">
                <li>
                  <h3>Project: Money Tracker</h3>
                  <p>
                    A single page app that uses firebase to authenticate and
                    store data entered by the users.
                  </p>
                  <a
                    href="https://money-tracker-fc1f0.web.app/login"
                    target="[_]blank"
                  >
                    Check it out!
                  </a>
                </li>
              </ol>
              <ul className="challenges">
                <h3>{`{ < Frontend Challenges  /> }`}</h3>
                <li>
                  <p>Business Landing Page</p>
                  <a
                    href="https://github.com/mbx33/landing-page-challenge"
                    target="[_]blank"
                  >
                    Github Repo
                  </a>
                </li>
              </ul>
            </div>
          </Bounce>
        </SideArticleContainer>

        <LinkContainer>
          <LinkWrap>
            <p>Sightseeing Tour sight..(no audio)</p>
            <ReactPlayer
              title="project1"
              width="380px"
              height="280px"
              url="https://youtu.be/0HdMJELXs9c"
              frameborder="0"
              muted="true"
              controls="true"
              style={{ border: "2px solid white" }}
            />
          </LinkWrap>
          <LinkWrap>
            <p>Coming Soon..</p>
            <ReactPlayer
              title="project1"
              width="380px"
              height="280px"
              url="#"
              frameborder="0"
              muted="true"
              controls="true"
              style={{ border: "2px solid white" }}
            />
          </LinkWrap>
          <LinkWrap>
            <p>Coming Soon..</p>
            <ReactPlayer
              title="project1"
              width="380px"
              height="280px"
              url="#"
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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SideArticleContainer = styled.div`
  top: 0;
  width: 50%;
  /* border: 2px solid gray; */

  .article-content {
    width: 65%;
    margin: 2em auto;

    a {
      color: green;
      font-size: 1.5rem;
    }

    p {
      text-align: center;
      font-size: 18px;
      line-height: 1.5;
    }

    .projects {
      padding-top: 2rem;

      li {
        list-style-type: none;
      }
    }
    .challenges {
      padding-top: 6rem;
      li {
        padding: 1rem 0;
        list-style-type: none;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    text-align: center;

    .article-content {
      padding: 1rem;
      margin: 0 auto;
      width: 80%;

      p {
        text-align: center;
      }
    }

    .challenges {
      h3 {
        font-size: 1.1rem;
      }
    }
  }
`;
