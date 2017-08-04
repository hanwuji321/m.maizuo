import React,{Component} from 'react';
import Carousel from '../components/home/Carousel';
import Nowplaying from '../components/home/Nowplaying';
import ComingSoon from '../components/home/ComingSoon';
import '../styles/app.less';

import 'whatwg-fetch';

export default class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			billboards : [], //轮播的内容
			nowPlaying: [], //正在热映的电影
			comingSoon : [], //即将上映的电影
		};
	}
	componentDidMount() {
		//在此处，使用ajax方式去fetch数据
		let url1 = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/billboard/home?__t=1489757848973';
		fetch(url1).then((response) => response.json())
		           .then( (json) => {
		           		//这就是服务器返回的数据
		           		// console.log(JSON.parse(json));
		           		this.setState({
		           			billboards : JSON.parse(json).data.billboards
		           		});
		           }).catch((err) => {
		           		console.log(err)
		           });
		//获取正在热映的电影
		let url2 = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/film/now-playing?__t=1489757848979&page=1&count=5';
		fetch(url2).then((response) => response.json())
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
		let url3 = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/film/coming-soon?__t=1489757848983&page=1&count=3';
		fetch(url3).then((response) => response.json())
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
			<div style={{position: 'relative',zIndex : 100}}>
				<Carousel billboards={this.state.billboards}/>
				<Nowplaying nowPlaying={this.state.nowPlaying} />
				<ComingSoon comingSoon={this.state.comingSoon} />
			</div>
		);
	}	
}