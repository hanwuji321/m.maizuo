import React,{Component} from 'react';
import NowPlayingItem from './NowPlayingItem';

export default class NowPlayingList extends Component{
	render() {
		return (
			<ul>
				{this.props.nowPlaying.map((item,index) =>
					<NowPlayingItem film={item} key={index} />
				)}
			</ul>
		);
	}
}