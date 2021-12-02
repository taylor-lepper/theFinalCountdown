import React from "react";
import App from "../App";
import { read_cookie } from "sfcookies";

// nav bars
import Navbar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

//jwt
const jwt = require("jsonwebtoken");

class LoginCheck extends React.Component {
	constructor(props) {
		super(props);

		let login = "";
		let user = {
			username: "",
			posts: 0,
		};

		let userToken = read_cookie("user");

		if (userToken.username) {
			// console.log(userToken);
			user = {
				username: userToken.username,
				id: userToken.id,
				email: userToken.email,
				posts: userToken.posts,
			};
			console.log(user);
		}

		let loginToken = read_cookie("loggedIn token");

		if (loginToken.length > 0) {
			const userID = jwt.decode(loginToken, "jwtsecret").id;
			console.log("SSO USERID " + userID);
			login = userID;
		}

		this.state = {
			loggedIn: login ? true : false,
			username: user.username,
			posts: user.posts,
			token: loginToken,
		};
		this.updateLogin = this.updateLogin.bind(this);
	}

	updateLogin(logInfo) {
		let user;
		if (logInfo) {
			user = logInfo;
		}
		console.log(user);
		this.setState(() => {
			if (user) {
				return {
					loggedIn: user.loggedIn ? true : false,
					username: user.username,
					posts: user.posts,
					token: user.loggedIn,
				};
			} else {
				return {
					loggedIn: false,
					username: "",
					posts: [],
					token: "",
				};
			}
		});
	}
	render() {
		console.log(this.state);
		return (
			<div>
				<Navbar loggedIn={this.state.loggedIn} />
				<SideBar loggedIn={this.state.loggedIn} />
				<App user={this.state} updateLogin={this.updateLogin} />
				<Footer loggedIn={this.state.loggedIn} />
			</div>
		);
	}
}

export default LoginCheck;
