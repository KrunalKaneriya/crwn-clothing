import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle,auth } from "../../firebase/firebase.utils";

import './sign-in.styles.scss';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit =async event => {
		event.preventDefault();
		const {email,password} = this.state;

		try {
			await auth.signInWithEmailAndPassword(email.trim(),password);
			this.setState({email:'',password:""})
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form autoComplete="none" onClick={this.handleSubmit}>
					<FormInput
						name="email"
						value={this.state.email}
						type="email"
						required
						handleChange={this.handleChange}
						label = "email"
					/>
					<FormInput
						name="password"
						value={this.state.password}
						type="password"
						required
						handleChange={this.handleChange}
						label = "password"
					/>

					<div className="buttons">
						<CustomButton type="submit" value="Submit Form"> Sign In </CustomButton>
						<CustomButton isGoogleSignIn onClick = {signInWithGoogle}> Sign In With Google </CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
