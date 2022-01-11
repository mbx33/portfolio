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
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem
            suscipit quae rerum, ducimus quos quisquam, ad quibusdam sit, eos
            voluptatum quod? Alias excepturi facilis aperiam rerum adipisci
            accusamus laborum?
          </p>
        </Wrap>
      </Container>
    </>
  );
}

export default SoftSkills;

const Container = styled.div`
  background-color: #222;
  height: 30vh;
`;

const Wrap = styled.div`
  width: 60vw;
  margin: 0 auto;
  height: 10vh;
  font-size: 19px;
  background-color: #222;
  color: white;
  text-align: left;
  padding: 2em 2em 2em 2em;
`;
