import React,{Component} from 'react';
import './navbar.less';

export default class NavBar extends Component{
	handleClick(){
		//如何去修改父组件的状态呢？
		// alert(1);
		this.props.toggleSidebar();
	}
	render() {
		return (
			<nav className="app-hd">
				<div className="nav-left" onClick={this.handleClick.bind(this)}>
					<span>
						<i className="iconfont icon-list"></i>
					</span>
					<h1>卖座电影</h1>
				</div>
				<div className="nav-right">
					<div className="city-btn">
						<span>北京</span>
						<i className="iconfont icon-dropdown"></i>
					</div>
					<div className="user-btn">
						<i className="iconfont icon-user"></i>
					</div>
				</div>
			</nav>
		);
	}	
}