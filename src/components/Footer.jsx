import React from 'react';
import styled from 'styled-components';
import { SiGithub, SiLinkedin, SiYoutube } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
	return (
		<Menu className="footer" id="links">
			<a href="https://github.com/mbx33" target="_blank" rel="noreferrer">
				<SiGithub className="icon" />
			</a>
			<a
				href="https://www.linkedin.com/in/matt-baxter33/"
				target="_blank"
				rel="noreferrer"
			>
				<SiLinkedin className="icon" />
			</a>
			<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
				<SiYoutube className="icon" />
			</a>
			<a href="mailto:mbx33@hotmail.com?subject=Hello%20Matt!">
				<HiOutlineMail className="icon" />
			</a>
		</Menu>
	);
}

export default Footer;

const Menu = styled.div`
	background-image: url('/images/gun-metal.png');
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

		.icon {
			color: whitesmoke;

			&:hover,
			&:active {
				color: black;

				opacity: 0.7;
			}
		}
	}

	@media (max-width: 1020px) {
		font-size: 3.3rem;

		a {
			padding: 0.3rem;
		}
	}

	@media (max-width: 768px) {
		font-size: 3.3rem;

		a {
			padding: 0.3rem;
		}
	}

	@media (max-width: 575px) {
		font-size: 2.7rem;
	}

	@media (max-width: 450px) {
		font-size: 2rem;
	}
`;
