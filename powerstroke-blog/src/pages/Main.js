import React from "react";
// import { read_cookie } from "sfcookies";

// const jwt = require("jsonwebtoken");

class Home extends React.Component {
	render() {
		console.log(this.props);
		const user = this.props.user;
		if (user.username) {
			return (
				<div>
					<br />
					<h1>Welcome to our website!</h1>
					<h1>Username: {this.props.user.username}</h1>
				</div>
			);
		} else {
			return (
				<div>
					<br />
					<h1>Please login to use our Website!</h1>
				</div>
			);
		}
	}
}

export default Home;
