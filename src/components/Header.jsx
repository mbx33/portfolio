import styled from 'styled-components';
import { Link } from 'react-scroll';

function Header() {
	return (
		<MainContainer>
			<div className="logo">
				<a href="/">
					<h1>Matthew Baxter</h1>
				</a>
			</div>
			<Menu>
				<Link to="projects" spy={true} smooth={true} duration={500}>
					<a href="/">Projects</a>
				</Link>
				<Link to="links" spy={true} smooth={true} duration={500}>
					<a href="/">Socials</a>
				</Link>
				<Link to="contact" spy={true} smooth={true} duration={500} href="/">
					<a href="/">Contact</a>
				</Link>
			</Menu>
		</MainContainer>
	);
}

export default Header;

const MainContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 6vh;
	padding: 20px;

	.logo {
		a {
			font-size: 20px;
			color: rgba(34, 34, 34, 0.692);
		}
		h1 {
			cursor: default;
		}
	}

	a {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		text-align: center;
		justify-content: space-evenly;
	}
`;

const Menu = styled.div`
	align-items: center;

	a {
		padding: 10px 20px;
		font-weight: 550;
		cursor: pointer;
		letter-spacing: 1px;
		font-size: 20px;
		text-transform: uppercase;
		color: rgba(34, 34, 34, 0.692);
	}

	@media (max-width: 768px) {
		display: none;
	}
`;
