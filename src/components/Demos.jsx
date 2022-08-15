import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy';

function Demos() {
	return (
		<Container>
			<div className="d-title">
				<h5>Demos</h5>
			</div>
			<LinkContainer>
				<LinkWrap>
					<p>Coming Soon..</p>
					<ReactPlayer
						title="project1"
						width="375px"
						height="280px"
						url="#"
						frameBorder="0"
						muted={true}
						controls={true}
						style={{ border: '2px solid white' }}
					/>
				</LinkWrap>
				<LinkWrap>
					<p>Sightseeing Tour sight..(no audio)</p>
					<ReactPlayer
						title="project1"
						width="375px"
						height="280px"
						url="https://youtu.be/0HdMJELXs9c"
						frameBorder="0"
						muted={true}
						controls={true}
						style={{ border: '2px solid white' }}
					/>
				</LinkWrap>
				<LinkWrap>
					<p>Coming Soon..</p>
					<ReactPlayer
						title="project1"
						width="375px"
						height="280px"
						url="#"
						frameBorder="0"
						muted={true}
						controls={true}
						style={{ border: '2px solid white' }}
					/>
				</LinkWrap>
			</LinkContainer>
		</Container>
	);
}

export default Demos;

const Container = styled.div`
	background-color: #000000;
	background-image: url('/images/gun-metal.png');
	padding-bottom: 2rem;

	.d-title h5 {
		color: #fff;
		text-align: center;
		font-size: 3rem;
	}
`;

const LinkContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding: 2rem;

	@media (max-width: 1215px) {
		flex-direction: column;
		align-items: center;
		margin: 0;
		padding: 0;
	}

	@media (max-width: 769px) {
		margin: 0 auto;
	}

	@media (max-width: 410px) {
		width: 100vw;
	}
`;

const LinkWrap = styled.div`
	color: #fff;
	margin-bottom: 1.4rem;

	@media (max-width: 768px) {
		max-width: 100vw;
	}

	@media (max-width: 410px) {
		max-width: 100vw;
	}
`;
