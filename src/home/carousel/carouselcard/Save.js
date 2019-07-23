import React from 'react';
import {Form, FormGroup, Button} from 'reactstrap';

const Save = (props) => {
	const handleSubmit = (e) => {
		// console.log(props.currentList, props.results)
		// let newArr = props.currentList.map(el => el)
		// newArr.push(props.results)
		// let strings = newArr.toString();
	
		// console.log(newArr)
		// console.log(strings)
		e.preventDefault();
		fetch('http://localhost:3000/playlist/add', {
			method: 'POST',
			body: JSON.stringify({playlist: {title: props.results}}),
			headers: new Headers({
				'Content-Type': 'application/json',
				'Authorization': props.sessionToken
			})
		}).then((res) => res.json())
		.then(playlistData => {
			console.log(playlistData)
		})
	}

	return(
		<div>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Button type='submit'>Click to Save</Button>
				</FormGroup>
			</Form>
		</div>
	)
}

export default Save;