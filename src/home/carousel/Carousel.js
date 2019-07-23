import React from 'react';
import CarouselCard from './carouselcard/CarouselCard';

const Carousel = (props) => {
	
	return (
		<div>
			<CarouselCard sessionToken={props.sessionToken} currentList={props.currentList} setCurrentList={props.setCurrentList}/>
			<CarouselCard sessionToken={props.sessionToken} currentList={props.currentList} setCurrentList={props.setCurrentList}/>
			<CarouselCard sessionToken={props.sessionToken} currentList={props.currentList} setCurrentList={props.setCurrentList}/>
			<CarouselCard sessionToken={props.sessionToken} currentList={props.currentList} setCurrentList={props.setCurrentList}/>
			<CarouselCard sessionToken={props.sessionToken} currentList={props.currentList} setCurrentList={props.setCurrentList}/>
			<CarouselCard sessionToken={props.sessionToken} currentList={props.currentList} setCurrentList={props.setCurrentList}/>
		</div>
	)
}

export default Carousel;