import React,{Component} from 'react';
import ComingSoonItem from './ComingSoonItem';

export default class ComingSoonList extends Component{
	render() {
		return (
			<ul>
				{this.props.comingSoon.map((item,index) =>
					<ComingSoonItem film={item} key={index} />
				)}
			</ul>
		);
	}
}