import React, {useState, useEffect} from 'react';
import PlaylistCard from './playlist/PlaylistCard';

const CardList = (props) => {
	const [title, setTitle] = useState('');
	const [tempArray, setTempArray] = useState([]);

	const fetchPodcast = () => {
		let info = 'http://localhost:3000/playlist/userPage';
		fetch(info, {
			method: 'GET',
			headers: new Headers({
				'Content-Type': 'application/json',
				'Authorization': props.sessionToken
			})
		})
			.then(res => res.json())
			.then(data => {
				for (let i=0; i < data.length; i++) {
					setTitle(data[i].title)
					console.log(data[i].title + ' line 20')
				}
			})
			.catch(err => console.log(err))
	};

	useEffect(() => {
		fetchPodcast();
		console.log(title)
	}, [])

	return(
		<>
			<PlaylistCard sessionToken={props.sessionToken} title={title}/>
			{/* <PlaylistCard sessionToken={props.sessionToken} />
			<PlaylistCard sessionToken={props.sessionToken} />
			<PlaylistCard sessionToken={props.sessionToken} /> */}
		</>
	)
}

export default CardList;