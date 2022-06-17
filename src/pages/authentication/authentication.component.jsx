import React, { Component } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './authentication.component.scss';

const Authentication = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
        <SignUp/>
	</div>
);

export default Authentication;
