import React from 'react';
import styled from 'styled-components';
import Demos from '../components/Demos';
import Projects from '../components/Projects';
import Section from '../components/Section';
import Skills from '../components/Skills';
// import SoftSkills from "../components/SoftSkills";

function Home() {
	return (
		<Container>
			<Section />
			<Skills />
			{/* <SoftSkills /> */}
			<Projects />
			<Demos />
		</Container>
	);
}

export default Home;

const Container = styled.div`
	/* height: 100vh; */
`;
