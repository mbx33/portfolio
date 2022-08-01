import React from 'react';
import styled from 'styled-components';

function SoftSkills() {
	return (
		<>
			<Container>
				<Wrap>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
						numquam nobis non at nesciunt similique atque illum praesentium
						corrupti? Laboriosam tempore eligendi et sint laborum libero iusto
						amet, inventore dicta!
					</p>
				</Wrap>
			</Container>
		</>
	);
}

export default SoftSkills;

const Container = styled.div`
	background-color: #222;
	padding: 30px;

	@media (max-width: 768px) {
		padding: 0;
	}
`;

const Wrap = styled.div`
	width: 60vw;
	margin: 0 auto;
	font-size: 19px;
	background-color: #222;
	color: white;
	text-align: left;
	padding: 2em 2em 2em 2em;

	@media (max-width: 768px) {
		width: 98%;
		text-align: center;
	}
`;
