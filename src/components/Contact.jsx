import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Contact() {
	return (
		<>
			<Container id="contact">
				<div className="title">
					<h2>Contact Me</h2>
				</div>
				<form
					name="contact"
					className="form"
					method="POST"
					// action="/pages/success"
				>
					<input type="hidden" name="form-name" value="contact" />
					<FloatingLabel
						controlId="floatingInputName"
						label="Name"
						className="mb-3"
					>
						<Form.Control
							as="input"
							className="input"
							type="text"
							name="name"
							placeholder="Name"
							required
						/>
					</FloatingLabel>
					<FloatingLabel controlId="floatingInputEmail" label="Email">
						<Form.Control
							as="input"
							className="input"
							type="email"
							name="email"
							placeholder="email"
							required
						/>
					</FloatingLabel>
					<FloatingLabel
						controlId="message"
						label="Comments"
						style={{ marginTop: '2rem' }}
					>
						<Form.Control
							as="textarea"
							placeholder="Leave a comment here"
							style={{ height: '120px', fontSize: '1.2rem' }}
							name="message"
							required
						/>
					</FloatingLabel>
					<button className="btn" type="submit">
						Send
					</button>
				</form>
			</Container>
		</>
	);
}

export default Contact;

const Container = styled.section`
	background-color: #000000;
	background-image: url('/images/gun-metal.png');
	padding-bottom: 2rem;

	.title {
		text-align: center;
		color: #fff;
	}

	.form {
		width: 60%;
		margin: 0 auto;
	}

	.input {
		font-size: 1.6rem;
	}

	.btn {
		background-color: hsl(211, 100%, 60%);
		padding: 0.4rem 2.1rem;
		border-radius: 0.4rem;
	}

	.btn:hover,
	.btn:active {
		color: #f4f4f4;
		border: 1px solid #fff;
		background-color: hsl(211, 100%, 60%, 0.8);
		box-shadow: 0 0 0.5rem hsl(211, 100%, 60%);
	}

	button {
		color: #fff;
		text-decoration: none;
		font-size: 1.5rem;
		margin-top: 1rem;
	}

	@media (max-width: 620px) {
		.form {
			width: 80%;
			margin: 0 auto;
		}
	}

	@media (max-width: 400px) {
		.form {
			width: 98%;
			margin: 0 auto;
		}
	}
`;
