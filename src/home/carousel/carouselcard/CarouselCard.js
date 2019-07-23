import React, {useState, useEffect} from 'react';
import Save from './Save'

const CarouselCard = (props) => {
	const [results, setResults] = useState([]);

	const fetchResults = () => {
		let url = 'https://listen-api.listennotes.com/api/v2/just_listen'
		fetch(url, {
			method: 'GET',
			headers: {
				"X-ListenAPI-Key": "28622093833f4880a0854bbafae9f5f0"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				console.log(data.title)
				setResults(data)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchResults();
	}, [])

	return (
		<div>
			<div>
				<div key={results.id}>
					<h2>{results.title}</h2>
					<img alt='article' src={results.image} />
					<a href={results.audio}><button>Play</button></a>
					<Save results={results.title} sessionToken={props.sessionToken} currentList={props.currentList} setCurrentList={props.setCurrentList}/>
				</div>
			</div>
		</div>
	)
}

export default CarouselCard;