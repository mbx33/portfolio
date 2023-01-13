import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Demos from '../components/Demos';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import LinkUp from '../components/LinkUp';

function Home() {
	const [inView, setInView] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 300) {
				setInView(true);
				
			} else {
				setInView(false);
			}
		});
	}, [inView]);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Container>
			<Hero />
			<Skills />
			<Projects />
			<Demos />
			<Contact />
			{inView && (
				<div className="link-up">
					<LinkUp scroll={scrollUp} />
				</div>
			)}
		</Container>
	);
}

export default Home;

const Container = styled.div`
	background-color: #000000;
	background-image: url('/images/gun-metal.png');
	position: relative;

	.link-up {
		width: 5%;
		height: 5%;
		position: fixed;
		bottom: 22%;
		right: 0.4%;

		@media (max-width: 1350px) {
			right: 2%;
		}

		@media (max-width: 1150px) {
			right: 5%;
		}

		@media (max-width: 680px) {
			right: 7%;
		}

		@media (max-width: 550px) {
			right: 9%;
		}

		@media (max-width: 450px) {
			right: 15%;
		}
	}
`;
