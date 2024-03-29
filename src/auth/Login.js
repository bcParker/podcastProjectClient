import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Login = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:3000/user/login', {
			method: 'POST',
			body: JSON.stringify({user: {username: username, password: password}}),
			headers: new Headers({
				'Content-Type': 'application/json',
				'Authorization': props.sessionToken
			})
		}).then(res => res.json())
			.then(data => {
				props.updateToken(data)
				//console.log(props.updateToken(data.newToken.user.podcastURL))
			})
	}
	
	return(
		<div>
			<h1>Login</h1>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label htmlFor='username'>Username</Label>
					<Input onChange={(e) => setUsername(e.target.value)} name='username' value={username}/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='password'>Password</Label>
					<Input onChange={(e) => setPassword(e.target.value)} name='password' value={password}/>
				</FormGroup>
				<Button type='submit'>Login</Button>
			</Form>
		</div>
	)
}

export default Login;