import React from 'react';
import styled from 'styled-components';
import { ImHtmlFive2 } from 'react-icons/im';
import {
	SiCss3,
	SiJavascript,
	SiReact,
	SiNodedotjs,
	SiMongodb,
	SiPostgresql,
} from 'react-icons/si';
import { FaGitAlt, FaGithub } from 'react-icons/fa';
import Bounce from 'react-reveal/Bounce';

function Skills() {
	return (
		<Container id="skills">
			<Bounce bottom>
				<SkillWrap>
					<ImHtmlFive2 style={{ color: 'red' }} />
					<p>HTML 5</p>
				</SkillWrap>

				<SkillWrap>
					<SiCss3 style={{ color: 'blue' }} />
					<p>CSS</p>
				</SkillWrap>

				<SkillWrap>
					<SiJavascript style={{ color: 'yellow' }} />
					<p>Javascript</p>
				</SkillWrap>

				<SkillWrap>
					<SiNodedotjs style={{ color: 'green' }} />
					<p>Node JS</p>
				</SkillWrap>

				<SkillWrap>
					<SiReact style={{ color: 'blue' }} />
					<p>React</p>
				</SkillWrap>

				<SkillWrap>
					<SiMongodb style={{ color: 'green' }} />
					<p>Mongo DB</p>
				</SkillWrap>

				<SkillWrap>
					<SiPostgresql style={{ color: 'blue' }} />
					<p>Postgres</p>
				</SkillWrap>

				<SkillWrap>
					<FaGitAlt style={{ color: 'red' }} />
					<p>GIT</p>
				</SkillWrap>

				<SkillWrap className="skill-wrap">
					<FaGithub style={{ color: '#4495d4' }} />
					<p>Github</p>
				</SkillWrap>
			</Bounce>
		</Container>
	);
}

export default Skills;

const Container = styled.div`
	background-color: #000000;
	background-image: url('/images/gun-metal.png');
	display: flex;
	justify-content: center;
	padding-bottom: 2rem;
	padding-top: 1rem;
	border-bottom: 2px solid black;
	row-gap: 3rem;

	@media (max-width: 1110px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media (max-width: 570px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 405px) {
		row-gap: 1.5rem;
	}
`;

const SkillWrap = styled.div`
	padding-top: 30px;
	padding-right: 18px;
	padding-left: 18px;
	font-size: 90px;
	border-radius: 8px;
	overflow: hidden;
	transition: transform 350ms ease-in;
	text-align: center;

	&:hover {
		transform: scale(1.2);
	}

	p {
		font-size: 20px;
		color: whitesmoke;
	}

	@media (max-width: 768px) {
		font-size: 2.5rem;
		width: 100%;
		margin: 0 auto;
		overflow: hidden;
		transition: transform 350ms ease-in;
		padding: 1rem 4rem 0;

		&:hover {
			transform: scale(1.3);
		}

		p {
			font-size: 1rem;
		}
	}
`;
