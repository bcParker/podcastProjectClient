import React from 'react';
import Carousel from './carousel/Carousel';
import UserPage from '../userpage/UserPage';
import {Route, Link, Switch} from 'react-router-dom';


const Home = (props) => {
	return(
		<div>
			<Carousel sessionToken={props.sessionToken}
				// currentList={props.currentList} setCurrentList={props.setCurrentList}
				/>
		</div>
	)
}

export default Home;