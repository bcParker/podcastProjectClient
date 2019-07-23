import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UserPage from './userpage/UserPage';
import Home from './home/Home';

const MyRoute = (props) => {
	return(
		<Switch>
			<Route exact path = '/home'><Home sessionToken={props.sessionToken}
				currentList={props.currentList} setCurrentList={props.setCurrentList}/></Route>
			<Route exact path='/userpage'><UserPage sessionToken={props.sessionToken} currentList={props.currentList} setCurrentList={props.setCurrentList}/></Route>
		</Switch>
	)
}

export default MyRoute;
