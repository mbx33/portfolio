import styled from 'styled-components';

function Contact() {
	return (
		<Container>
			<div className="title">
				<h2>Contact Me</h2>
			</div>
			<form name="contact" className="form">
				<input type="hidden" name="form-name" value="contact" />
				<div className="info">
					<label>
						Name: <input type="text" name="name" />
					</label>
					<label>
						Email: <input type="email" name="email" />
					</label>
				</div>
				<div className="message">
					<label>
						Message: <textarea name="message" rows="4" cols="61"></textarea>
					</label>
				</div>
				<button className="btn" type="submit">
					Send
				</button>
			</form>
		</Container>
	);
}

export default Contact;

const Container = styled.section`
	background-color: #000000;
	background-image: url('/images/gun-metal.png');
	padding: 1em 0 2rem;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.title {
		font-size: 2.2rem;
	}

	.form {
		/* color: #3195ff; */
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.info {
			display: flex;
			gap: 2rem;
			font-size: 1.6rem;
			padding: 1rem;

			input {
				font-size: inherit;
				padding: 0.2rem;
				border-radius: 0.8rem;
				border: none;
			}
		}

		.message {
			display: flex;
			gap: 2rem;
			font-size: 1.6rem;
			padding: 1rem;
			width: 80%;

			textarea {
				font-size: 1.6rem;
				padding: 0.6rem;
				border-radius: 0.8rem;
				border: none;
			}
		}
	}

	.btn {
		background-color: hsl(211, 100%, 60%);
		padding: 0.4rem 2.1rem;
		border-radius: 0.4rem;
	}

	.btn:hover,
	.btn:active {
		background-color: hsl(211, 100%, 60%, 0.8);
		box-shadow: 0 0 0.5rem hsl(211, 100%, 60%);
	}

	button {
		color: #fff;
		text-decoration: none;
		font-size: 1.5rem;
		margin-left: 44rem;
	}
`;
