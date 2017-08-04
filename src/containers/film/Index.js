import React,{Component} from 'react';
import './film.less';

import NowPlayingList from "../../components/film/NowPlayingList";
import ComingSoonList from "../../components/film/ComingSoonList";

export default class Film extends Component{
	constructor(props) {
		super(props);
		this.state = {
			current : 'now', //表示当前显示哪个组件
			nowPlaying : [], //正在热映 
			comingSoon : []  //即将上映
		};
	}
	componentDidMount() {
		//获取正在热映的电影
		let url1 = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/film/now-playing?__t=1489757848979&page=1&count=15';
		fetch(url1).then((response) => response.json())
		           .then( (json) => {
		           		//这就是服务器返回的数据
		           		console.log(JSON.parse(json));
		           		this.setState({
		           			nowPlaying : JSON.parse(json).data.films
		           		});
		           }).catch((err) => {
		           		console.log(err)
		           });
		//获取即将上映的电影
		let url2 = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/film/coming-soon?__t=1489757848983&page=1&count=10';
		fetch(url2).then((response) => response.json())
		           .then( (json) => {
		           		//这就是服务器返回的数据
		           		console.log(JSON.parse(json));
		           		this.setState({
		           			comingSoon : JSON.parse(json).data.films
		           		});
		           }).catch((err) => {
		           		console.log(err)
		           });
	}
	render() {
		return (
			<div className="films">
				<div className="film-tab">
					<span className={this.state.current == 'now'? 'on' : ''}
					onClick={ () => this.setState({current:'now'}) }>正在热映</span>
					<span className={this.state.current == 'coming'? 'on' : ''}
					onClick={ () => this.setState({current:'coming'}) }>即将上映</span>
				</div>

				{this.state.current == 'now' ? <NowPlayingList nowPlaying={this.state.nowPlaying} /> : <ComingSoonList comingSoon={this.state.comingSoon}/>}

			</div>
		);
	}	
}