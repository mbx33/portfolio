import styled from 'styled-components';
import { Link } from 'react-scroll';

function Header() {
	return (
		<MainContainer>
			<div className="logo">
				<h1>Matthew Baxter</h1>
			</div>
			<Menu>
				<Link
					to="projects"
					spy={true}
					smooth={true}
					duration={500}
					className="link"
				>
					Projects
				</Link>
				<Link to="links" spy={true} smooth={true} duration={500} className="link">
					Socials
				</Link>
				<Link
					to="contact"
					spy={true}
					smooth={true}
					duration={500}
					className="link"
				>
					Contact
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
		font-size: 20px;
		color: rgba(34, 34, 34, 0.692);

		h1 {
			cursor: default;
		}
	}

	.link {
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

		&:hover {
			color: #f4f4f4;
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`;
