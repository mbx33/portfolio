import React from 'react';
import styled from 'styled-components';
import { BsArrowBarDown } from 'react-icons/bs';
import { Link } from 'react-scroll';

import Header from './Header';

import '../index.css';

function Hero() {
	return (
		<Wrap>
			<Header />
			<MainContainer>
				<TextWrap>
					<p>
						I've been building, and designing websites for over 5 years now.
						I've just started to develop the skills necessary to code and
						create better designs. I love to learn, and want to continue to
						innovate on my website designs and builds.
					</p>
				</TextWrap>

				<ArrowDown>
					<p>Skills</p>
					<p>Projects</p>

					<Link to="skills" spy={true} smooth={true} duration={500}>
						<BsArrowBarDown
							style={{
								fontSize: '50px',
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

export default Hero;

const Wrap = styled.div`
	width: 100%;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	//original desert image --
	/* background-image: url('/images/desert.webp'); */
	// court image from Moab
	background-image: url('/images/court-1.jpg');
	// Arches image from Moab
	/* background-image: url('/images/arch-left.jpg'); */
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
	background-color: rgba(34, 34, 34, 0.8);
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
	margin-top: 8rem;

	p {
		margin-top: 1rem;
		font-size: 1.9rem;
	}

	@media (max-width: 768px) {
		font-size: 2rem;
		padding-top: 1rem 0 0 0;
	}
`;
