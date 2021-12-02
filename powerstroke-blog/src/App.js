import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import PrivateRoute from "./Components/PrivateRoute";

//main pages
import About from "./pages/About";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Error from "./pages/FourOhFour";

//side pages

import Forums from "./pages/SideNav/Forums";
import TechArticles from "./pages/SideNav/TechArticles";
import HowTo from "./pages/SideNav/HowTo";
import BuildJournals from "./pages/SideNav/BuildJournals";
import Post from "./pages/Post";
import Share from "./pages/SideNav/Share";

class App extends Component {
	render() {
		console.log(this.props);
		// console.log(this.state);

		return (
			<div className="App Container">
				<Routes>
					{/* top pages */}
					<Route
						exact
						path="/"
						element={
							<Main
								user={this.props.user}
								updateLogin={this.props.updateLogin}
							/>
						}
					/>

					<Route
						path="/register"
						element={
							<Register updateLogin={this.props.updateLogin} />
						}
					/>
					<Route path="/about" element={<About />} />
					<Route
						path="/login"
						element={<Login updateLogin={this.props.updateLogin} />}
					/>

					<Route
						path="/logout"
						element={
							<Logout updateLogin={this.props.updateLogin} />
						}
					/>
					<Route
						path="/profile"
						element={
							<Profile
								user={this.props.user}
								updateLogin={this.props.updateLogin}
							/>
						}
					/>

					{/* side pages */}
					<Route
						path="/forums"
						element={<Forums page={"forums"} />}
					/>
					<Route
						path="/tech-articles"
						element={<TechArticles page={"tech-articles"} />}
					/>
					<Route path="/how-to" element={<HowTo page={"how-to"} />} />
					<Route
						path="/build-journals"
						element={<BuildJournals page={"build-journals"} />}
					/>
					<Route path="/share" element={<Share />} />
					<Route
						path="/post"
						element={<Post page={this.props.page} />}
					/>

					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		);
	}
}

export default App;
