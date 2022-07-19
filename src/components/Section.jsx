import React from 'react';
import styled from 'styled-components';
import { BsArrowBarDown } from 'react-icons/bs';
import { Link } from 'react-scroll';

import Fade from 'react-reveal/Fade';
import Header from './Header';

import '../index.css';

function Section() {
	return (
		<Wrap>
			<Header />
			<MainContainer>
				<TextWrap>
					<Fade right>
						<p>
							I've been designing different websites for over 5 years now.
							I've just started to develop the skills necessary to code and
							create better designs. I have a desire to keep learning and
							building better designed websites.
						</p>
						<p>
							I have lived in Russia, and love travelling to other
							countries. Living in other countries has helped me and my
							passion for bringing the world together through technology.
						</p>
					</Fade>
				</TextWrap>

				<ArrowDown>
					<h4>Skills</h4>
					<br />
					<h3>Projects</h3>

					<Link to="skills" spy={true} smooth={true} duration={500}>
						<BsArrowBarDown
							style={{
								fontSize: '50px',
								marginTop: '20px',
								height: '40px',
								animation: 'animateDown infinite 1.5s',
								cursor: 'pointer',
							}}
						/>
					</Link>
				</ArrowDown>
			</MainContainer>
		</Wrap>
	);
}

export default Section;

const Wrap = styled.div`
	width: 100%;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url('/images/desert.webp');
	overflow-y: hidden;
`;

const MainContainer = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	overflow-y: hidden;
	gap: 4rem;

	@media (max-width: 768px) {
		gap: 3rem;
	}
`;

const TextWrap = styled.div`
	margin: 15vh auto 0 auto;
	padding: 18px;
	width: 40%;
	background-color: rgba(34, 34, 34);
	background-image: url('/images/gun-metal.png');
	border-radius: 10px;

	p {
		font-size: 18px;
		letter-spacing: 1px;
		line-height: 1.3;
		margin-left: auto;
		margin-right: auto;
		padding: 20px 25px;
		width: 100%;
		color: white;
		border-radius: 0 0 10px 10px;
	}

	@media (max-width: 810px) {
		width: 80%;
		/* padding: 0; */
		margin-top: 6rem;

		p {
			padding: 0.5rem;
		}
	}
`;

const ArrowDown = styled.div`
	overflow-y: 'hidden';
	color: white;
	font-size: 35px;
	padding-bottom: 50px;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 2rem;
		padding-top: 1rem 0 0 0;
	}
`;
