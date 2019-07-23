import React, {useState, useEffect} from 'react';
import Delete from './Delete';

const PlaylistCard = (props) => {
	const [playlist, setPlaylist] = useState();
	// const [title, setTitle] = useState('');

	// for (let i=0; i > props.currentList.length; i++) {
	// 	var id = i;
	// 	console.log(props.currentList.length)
	// }

	// const fetchPodcast = () => {
	// 	let info = 'http://localhost:3000/playlist/userPage';
	// 	fetch(info, {
	// 		method: 'GET',
	// 		headers: new Headers({
	// 			'Content-Type': 'application/json',
	// 			'Authorization': props.sessionToken
	// 		})
	// 	})
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		//setTitle(data[].podcastURL[id])
	// 		console.log(data[0].title + ' line 20')
	// 	})
	// 	.catch(err => console.log(err))
	// };
	
	const fetchPodcastInfo = () => {
		let url = `https://listen-api.listennotes.com/api/v2/search?q=${props.title}`;
		fetch(url, {
			method: 'GET',
			headers: {
				"X-ListenAPI-Key": "28622093833f4880a0854bbafae9f5f0"
			}
		})
			.then(res => res.json())
			.then(data => {
				//setPlaylist(data.results[0])
				console.log(data)
				//console.log(data.results[0].id)
				console.log(playlist + ' my ass')
			})
			.catch(err => console.log(err))
	}

	const playlistCard = () => {
		return (props.title ? <div><h2>{playlist ? playlist.title_original : null}</h2>
			<img alt='podcast' src={playlist ? playlist.image : null} />
			<a href={playlist ? playlist.audio : null}><button>Play</button></a>
			<Delete title={props.title} sessionToken={props.sessionToken}/></div> : null)
	}

	useEffect(() => {
		fetchPodcastInfo()
		//fetchPodcast();
		// if (props.title) {
		// 	fetchPodcastInfo();
		// }
	}, [])

	return(
		<div>
			{playlistCard()}
			{/* <h2>{playlist ? playlist.title_original : null}</h2>
			<img alt='podcast' src={playlist ? playlist.image : null}/>
			<a href={playlist ? playlist.audio : null}><button>Play</button></a>
			<Delete title={title}/> */}
		</div>
	)
}

export default PlaylistCard;