import React,{Component} from 'react';
import './sidebar.less';

import {hashHistory} from 'react-router';

export default class SideBar extends Component{
	//编写一个direct用于跳转
	direct(path){
		hashHistory.push(path); //实现跳转
		this.props.toggleSidebar(); //同时需要修改侧栏的状态
	}
	render() {
		console.log(this.props.sidebarShow);
		return (
			<div className="sidebar-container" 
			style={ this.props.sidebarShow ? {display:'block'} : {display:'none'} } >
				<div className="sidebar">
					<ul>
						<li onClick={this.direct.bind(this,'/')}><span>首页</span><i className="iconfont icon-arrow-right"></i></li>
						<li onClick={this.direct.bind(this,'/film')}><span>影片</span><i className="iconfont icon-arrow-right"></i></li>
						<li onClick={this.direct.bind(this,'/cinema')}><span>影院</span><i className="iconfont icon-arrow-right"></i></li>
						<li onClick={this.direct.bind(this,'/performance')}><span>演出</span><i className="iconfont icon-arrow-right"></i></li>
						<li onClick={this.direct.bind(this,'/login')}><span>我的</span><i className="iconfont icon-arrow-right"></i></li>
						<li onClick={this.direct.bind(this,'/card')}><span>卖座卡</span><i className="iconfont icon-arrow-right"></i></li>
					</ul>
				</div>
			</div>
		);
	}	
}

