import React,{Component} from 'react';

import NavBar from '../components/common/NavBar';
import SideBar from '../components/common/SideBar';
import Home from './Home';
import Cinema from './cinema/Index';
import Film from './film/Index';
import Card from './card/Index';
import Login from './member/Login';
import Detail from './film/Detail';
import Performance from './performance/Index';

import {Router,Route,hashHistory} from 'react-router';

export default class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			sidebarShow : false
		}
	}
	//定义一个方法，用于切换状态
	toggleSidebar(){
		this.setState({
			sidebarShow : !this.state.sidebarShow
		});
	}
	render() {
		return (
			<div className="app">
				<NavBar toggleSidebar={this.toggleSidebar.bind(this)} />
				<SideBar sidebarShow={this.state.sidebarShow} toggleSidebar={this.toggleSidebar.bind(this)} />
				<Router history={hashHistory}>
					<Route path="/"  component={Home} />
					<Route path="/film"  component={Film} />
					<Route path="/cinema"  component={Cinema} />
					<Route path="/detail/:id"  component={Detail} />
					<Route path="/performance"  component={Performance} />
					<Route path="/card"  component={Card} />
					<Route path="/login"  component={Login} />
				</Router>
			</div>
		);
	}	
} 