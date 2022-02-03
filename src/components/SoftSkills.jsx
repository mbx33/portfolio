import React from "react";
import styled from "styled-components";

function SoftSkills() {
  return (
    <>
      <Container>
        <Wrap>
          <p>
            I am able to get along with anyone. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error quidem explicabo atque maxime.
            Illum explicabo ut quasi aperiam enim molestiae, quo molestias,
            ullam dolores totam nobis numquam cumque, culpa accusamus.
          </p>
        </Wrap>
      </Container>
    </>
  );
}

export default SoftSkills;

const Container = styled.div`
  background-color: #222;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Wrap = styled.div`
  width: 60vw;
  margin: 0 auto;
  font-size: 19px;
  background-color: #222;
  color: white;
  text-align: left;
  padding: 2em 2em 2em 2em;

  @media (max-width: 768px) {
    width: 98%;
    text-align: center;
  }
`;
