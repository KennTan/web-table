import React from "react";

export default class Header extends React.Component {
	render(){
		return (
			<header>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
					<div class="container">
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarResponsive">
								<ul class="navbar-nav ml-auto">
									<li class="nav-item active">
										<a class="nav-link" href="#">Gowild 
											<span class="sr-only">(current)</span>
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">NUS Blk 71</a>
									</li>
								</ul>
						</div>
					</div>
				</nav>
			</header>
		)
	}
}