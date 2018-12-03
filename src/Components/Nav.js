import React from "react";

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
		const { collapsed } = this.state;
		const navClass = collapsed ? "collapse" : "";

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
						<li class="nav-item">
							<a class="nav-link" href="Gowild">Gowild</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="NUS-Blk-71">NUS Blk 71</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		)
	}
}