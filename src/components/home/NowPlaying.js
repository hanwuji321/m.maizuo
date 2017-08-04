import React,{Component} from 'react';

import NowItem from './NowItem';

export default class Nowplaying extends Component{
	render() {
		return (
			<ul>
				{this.props.nowPlaying.map( (item,index) => 
					<NowItem key={index} film={item}/>
				)}
			</ul>
		);
	}	
}