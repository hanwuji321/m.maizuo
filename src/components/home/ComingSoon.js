import React,{Component} from 'react';
import ComingItem from './ComingItem';

import '../../styles/app.less';

export default class ComingSoon extends Component{
	render() {
		return (
			<div className="coming-container">
				<h2>即将上映</h2>
				<ul>
					{this.props.comingSoon.map((item,index) =>
						<ComingItem film={item} key={index} />
					)}
				</ul>
			</div>
		);
	}	
}