import React, { useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import styled from 'styled-components';

function LinkUp() {
	const [inView, setInView] = useState(false);
	const myRef = useRef();
	const { inViewport, enterCount } = useInViewport(myRef);
	console.log(inViewport);

	if (inViewport) {
		return setInView(true);
	}

	return (
		<Wrapper ref={myRef} className={` ${inView ? 'show' : 'hide'}`}>
			<h1>Link Up</h1>
			<p>{enterCount}</p>
		</Wrapper>
	);
}

export default LinkUp;

const Wrapper = styled.div`
	.hide {
		opacity: 0;
	}

	.show {
		opacity: 1;
		color: blue;
	}
`;
