import React, {Component} from 'react';
import './nowitem.less';

import {hashHistory} from 'react-router';

export default class NowItem extends Component{
	handleClick(id){
		hashHistory.push('/detail/'+id);
	}
	render() {
		return (
			<li className="now-item" onClick={this.handleClick.bind(this,this.props.film.id)}>
				<img src={this.props.film && this.props.film.cover.origin} />
				<div>
					<h2>{this.props.film.name}</h2>
					<p>{this.props.film.cinemaCount}家影院上映 {this.props.film.scheduleCount}人购票</p>
					<span>{this.props.film.grade}</span>
				</div>
			</li>
		);
	}	
}