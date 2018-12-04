import React from "react";
import { Route } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Gowild from "../Pages/Gowild";
import NUSBlk71 from "../Pages/NUSBlk71";

export default class Layout extends React.Component {
	render(){
		return (
			<div>
				<Header />
				<Route path='/gowild' component={Gowild}>Gowild</Route>
				<Route path='/nus-blk-71' component={NUSBlk71}>NUSBlk71</Route>
				<Footer />
			</div>
		)
	}
}