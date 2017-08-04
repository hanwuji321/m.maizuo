import React,{Component} from 'react';
import './comingitem.less';

export default class ComingItem extends Component{
	render() {
		return (
			<li className="coming-item">
				<img src={this.props.film && this.props.film.cover.origin} alt=""/>
				<div>
					<h2>{this.props.film.name}</h2>
					<span>{this.props.film.premiereAt}上映</span>
				</div>
			</li>
		);
	}
}