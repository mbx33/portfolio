import styled from 'styled-components';
import { HiArrowUp } from 'react-icons/hi';

function LinkUp({ scroll }) {
	return (
		<Wrapper>
			<HiArrowUp onClick={scroll} className="btn-up" />
		</Wrapper>
	);
}

export default LinkUp;

const Wrapper = styled.div`
	.btn-up {
		font-size: 4rem;
		padding: 1rem;
		border-radius: 10%;
		color: #f4f4f4;

		background-color: hsl(211, 100%, 60%, 0.8);
		cursor: pointer;

		:hover {
			background-color: hsl(120, 100%, 25%, 0.8);
			border: 1px solid #f4f4f4;
		}
	}
`;
