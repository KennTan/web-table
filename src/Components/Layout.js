import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import GetUser from "./GetUser";

export default class Layout extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <GetUser />
                <Footer />
            </div>
        )
    }
}