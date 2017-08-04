import React,{Component} from 'react';
import './filmItem.less';

export default class NowPlayingItem extends Component{
	render() {
		return (
			<li className='film-list-item'>
				<img src={this.props.film && this.props.film.cover.origin}/>
				<div>
					<h2>{this.props.film.name}</h2>
					<p>{this.props.film.intro}</p>
					<p>{this.props.film.premiereAt}</p>

					<div className="score">
						<i className="iconfont icon-arrow-right"></i>
					</div>
				</div>
			</li>
		);
	}
}