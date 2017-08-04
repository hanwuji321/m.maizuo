import React,{Component} from 'react';
import 'whatwg-fetch';
import './detail.less';
export default class Detail extends Component{
	constructor(props) {
		super(props);
		this.state = {
			movie : {} //表示电影详情的对象
		};
	}
	componentDidMount() {
		let id = this.props.params.id;
		let site = `http://m.maizuo.com/v4/api/film/${id}?__t=1489758012282`;
		let url = "http://localhost:3000/proxy?url="+site;
		fetch(url).then((response) => response.json())
		           .then( (json) => {
		           		//这就是服务器返回的数据
		           		console.log(JSON.parse(json));
		           		this.setState({
		           			movie : JSON.parse(json).data.film
		           		});
		           }).catch((err) => {
		           		console.log(err)
		           });
	}
	render() {
		return (
			<div className="film-detail">
				<img src={this.state.movie.cover && this.state.movie.cover.origin} alt=""/>
				<h2>影片简介</h2>
				<ul>
					<li>
						<span>导演：</span>
						{this.state.movie.director}
					</li>
					<li>
						<span>主演：</span>
						{this.state.movie.actors && this.state.movie.actors.map((item)=> item.name )}
					</li>
					<li>
						<span>地区语言：</span>
						{this.state.movie.language}
					</li>
					<li>
						<span>类型：</span>
						{this.state.movie.category}
					</li>
					<li>
						<span>上映日期：</span>
						{this.state.movie.premiereAt}
					</li>
				</ul>
				<p>{this.state.movie.synopsis}</p>

				<button type="button">立即购票</button>
			</div>
		);
	}
}