import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
	constructor(){
		super();
		this.state = {
			collapsed: true
		};
	}

	toggleCollapse(){
		const collapsed = !this.state.collapsed;
		this.setState({collapsed});
	}

	render() {
		const { location } = this.props;
		const { collapsed } = this.state;
		const navClass = collapsed ? "collapse" : "";
		// const gowildClass = location.pathname.match(/^\/Gowild/) ? "active" : "";
    // const nusblk71Class = location.pathname.match(/^\/NUSBlk71/) ? "active" : "";

		return (
			<nav class="navbar navbar-inverse navbar-fixed-top navbar-expand-lg navbar-dark bg-dark static-top" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggler" onClick={this.toggleCollapse.bind(this)} >
						<span class="navbar-toggler-icon"></span>
					</button>
				</div>
				<div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="gowild" onClick="./Pages/Gowild">
							<a class="nav-link" href="GoWild">Gowild</a>
						</li>
						<li class="nusblk71">
							<a class="nav-link" href="NUS-Blk-71">NUS Blk 71</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		)
	}
}