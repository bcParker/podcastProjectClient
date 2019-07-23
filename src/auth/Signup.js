import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPasswoard] = useState('');

	let handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:3000/user/signup', {
			method: 'POST',
			body: JSON.stringify({user: {username: username, password: password}}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}).then(res => res.json())
			.then(data => {
				props.updateToken(data)
			})
	}

	return(
		<div>
			<h1>Listen Now!</h1>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label htmlFor='username'>Username</Label>
					<Input onChange={(e) => setUsername(e.target.value)} name='username' value={username}/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='password'>Password</Label>
					<Input onChange={(e) => setPasswoard(e.target.value)} name='password' value={password}/>
				</FormGroup>
				<Button type='submit'>Sign Up</Button>
			</Form>
		</div>
	)
}

export default Signup;