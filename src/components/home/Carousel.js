import React,{Component} from 'react';
//引入react-swipe
import ReactSwipe from 'react-swipe';

export default class Carousel extends Component{
	render() {
		return (
			<ReactSwipe key={this.props.billboards} className="carousel" swipeOptions={{continuous: true,auto:3000}}>
				{this.props.billboards.map( (item,index) => 
					<div key={index}>
						<img src={item.imageUrl}/>
					</div>
				)}
			</ReactSwipe>
		);
	}	
}