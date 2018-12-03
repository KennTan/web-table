import React from "react";
import Nav from "./Nav";

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<Nav/>
				<div class="col-lg-">
					<header>
						<center><strong><font size="30">Gowild</font></strong></center>	
					</header>
				</div>
			</div>
		)
	}
}