import React from 'react';
import styled from 'styled-components';
import { SiGithub, SiLinkedin, SiYoutube } from 'react-icons/si';

function Footer() {
	return (
		<Menu className="footer" id="links">
			<a href="https://github.com/mbx33" target="_blank" rel="noreferrer">
				<SiGithub style={{ color: 'white' }} />
			</a>
			<a
				href="https://www.linkedin.com/in/matt-baxter33/"
				target="_blank"
				rel="noreferrer"
			>
				<SiLinkedin style={{ color: 'white' }} />
			</a>
			<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
				<SiYoutube style={{ color: 'white' }} />
			</a>
		</Menu>
	);
}

export default Footer;

const Menu = styled.div`
	background-color: #3195ff;
	display: flex;
	justify-content: center;
	width: 100vw;
	font-size: 60px;
	padding: 1rem;

	a {
		padding: 10px 70px;
		font-weight: 550;
		cursor: pointer;
		letter-spacing: 1px;
		text-decoration: none;
		margin: 0 1em;
	}

	@media (max-width: 768px) {
		font-size: 1.3rem;

		a {
			/* padding: 5px; */
		}
	}
`;
