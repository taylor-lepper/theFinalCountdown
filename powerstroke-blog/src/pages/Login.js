import React, { useState } from "react";
import login from "../actions/login";

import { useNavigate } from "react-router-dom";
import { bake_cookie } from "sfcookies";

// const jwt = require("jsonwebtoken");

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();
	console.log(props);
	const submitHandler = async (event) => {
		event.preventDefault();
		if (email && password) {
			const result = await login(email, password);

			if (result) {
				console.log(result);

				const token = result.token;

				const id = result._id;
				const username = result.username;
				const email = result.email;
				const posts = result.posts;

				props.updateLogin({
					loggedIn: token,
					username,
					posts,
					id,
					email,
				});

				const user = {
					id,
					email,
					username,
					posts,
				};

				bake_cookie("loggedIn token", token);
				bake_cookie("user", user);

				navigate("/");
				if (result.error) {
					setMessage(result.error);

					setTimeout(() => {
						setMessage("");
					}, 4000);
					return;
				}
			}
		}
	};

	return (
		<>
			{message && <h1>{message}</h1>}

			<div>
				<br />
				<h4>
					Once logged in, you will have full access to the forums!
				</h4>
				<br />
				<form>
					<div className="form-control">
						<label className="label" htmlFor="email">
							E-mail Address
						</label>
						<input
							type="email"
							name="email"
							className="input"
							required
							value={email}
							onChange={(eventObj) =>
								setEmail(eventObj.target.value)
							}
						/>
					</div>
					<div className="form-control">
						<label className="label" htmlFor="password">
							Password
						</label>
						<input
							type="text"
							name="password"
							required
							className="input"
							value={password}
							onChange={(eventObj) =>
								setPassword(eventObj.target.value)
							}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary"
						onClick={submitHandler}
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
