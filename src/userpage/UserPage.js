import React from 'react';
import CardList from './cardlist/CardList';

const UserPage = (props) => {

	return(
		<>
			<CardList sessionToken={props.sessionToken} 
				// currentList={props.currentList} setCurrentList={props.setCurrentList}
				/>
		</>
	)
}

export default UserPage;