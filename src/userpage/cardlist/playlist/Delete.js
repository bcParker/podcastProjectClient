import React from 'react';
import {Form, FormGroup, Button} from 'reactstrap';

const Delete = (props) => {
	
	const handleSubmit = (e) => {
			let info = 'http://localhost:3000/user/delete';
			fetch(info, {
				method: 'PUT',
				body: JSON.stringify({user: {podcastURL: []}}),
				headers: new Headers({
					'Content-Type': 'application/json',
					'Authorization': props.sessionToken
				})
			})
			.then(() => {
				//props.fetchPodcast()
				console.log(props.title)
			})
	}

	return(
		<div>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Button type='submit'>Delete</Button>
				</FormGroup>
			</Form>
		</div>
	)
}

export default Delete;