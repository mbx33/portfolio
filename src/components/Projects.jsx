import React from 'react';
import styled from 'styled-components';

function Projects() {
	return (
		<Container id="projects">
			<ProjectWrap>
				<div className="p-title article-content">
					<h2>Recent Projects</h2>
					<br />
					<p>
						A few of my most recent projects I've worked on. More demos coming
						soon.
					</p>
				</div>
				<SideArticleContainer>
					<div className="article-content">
						<ol className="projects">
							<li>
								<h3>Project: Money Tracker</h3>
								<p>
									A single page app that uses firebase to authenticate
									and store data entered by the users.
								</p>
								<a
									className="btn"
									href="https://money-tracker-fc1f0.web.app/login"
									target="[_]blank"
								>
									Check it out!
								</a>
							</li>
						</ol>
						<ol className="projects">
							<li>
								<h3>Project: Ask Leonardo</h3>
								<p>
									Users can ask any question or give a command in the
									input line and get a response from an AI
								</p>
								<div className="btn-group">
									<a
										className="btn"
										href="http://serene-reef-46633.herokuapp.com/"
										target="[_]blank"
									>
										Check it out!
									</a>

									<a
										className="btn"
										href="https://github.com/mbx33/openai-react.git"
										target="[_]blank"
									>
										Github repo
									</a>
								</div>
							</li>
						</ol>
						<ul className="challenges">
							<h3>{`< Frontend Challenges />`}</h3>
							<p>Business Landing Page</p>
							<a
								className="btn"
								href="https://mbx33.github.io/landing-page-challenge/"
								target="[_]blank"
							>
								Github Repo
							</a>
						</ul>
					</div>
				</SideArticleContainer>
			</ProjectWrap>
		</Container>
	);
}

export default Projects;

const Container = styled.div`
	background-color: #000000;
	background-image: url('/images/gun-metal.png');
	padding: 2em 0 0;
	color: white;
`;

const ProjectWrap = styled.div`
	padding-bottom: 20px;

	.p-title {
		font-size: 1.3rem;
		text-align: center;
	}

	.p-title h2 {
		font-size: 2.5rem;
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}

	@media (max-width: 425px) {
		padding: 0;
	}
`;

const SideArticleContainer = styled.div`
	top: 0;
	width: 70%;
	margin: 0 auto;

	h2 {
		letter-spacing: 0.3rem;
		text-align: center;
	}
	.article-content {
		width: 65%;
		margin: 2em auto;

		.btn {
			background-color: hsl(211, 100%, 60%);
			padding: 0.4rem;
			border-radius: 0.4rem;
		}

		.btn:hover,
		.btn:active {
			background-color: hsl(211, 100%, 60%, 0.8);
			box-shadow: 0 0 0.5rem hsl(211, 100%, 60%);
		}

		a {
			color: #fff;
			text-decoration: none;
			font-size: 1.5rem;
		}

		p {
			font-size: 18px;
			line-height: 1.5;
		}

		.projects {
			box-shadow: 0 0 0.4rem #fff;
			margin: 1rem 0;
			padding: 2rem 1rem;

			h3 {
				padding: 0.4rem;
			}

			p {
				padding: 1.4rem 0;
			}

			li {
				list-style-type: none;
			}
		}
		.challenges {
			box-shadow: 0 0 0.4rem #fff;
			margin: 2rem 0;
			padding: 2rem 1rem;

			h3 {
				padding: 1rem 0;
				list-style-type: none;
			}

			p {
				padding: 0.7rem 0;
			}
		}

		.btn-group a:nth-child(2) {
			margin-left: 1rem;

			@media (max-width: 488px) {
				margin: 1rem 0 0;
			}
		}

		@media (max-width: 488px) {
			.projects .btn-group {
				display: flex;
				flex-direction: column;
				justify-content: center;
				max-width: 60%;
			}
		}

		@media (max-width: 411px) {
			.projects .btn-group {
				max-width: 75%;
			}
		}
	}

	@media (max-width: 768px) {
		width: 100%;
		padding: 1rem;

		.article-content {
			padding: 1rem;
			margin: 0 auto;
			width: 80%;

			p {
				/* text-align: center; */
			}
		}

		.challenges {
			h3 {
				font-size: 1.1rem;
			}
		}
	}
`;
