import React, { useState } from "react";
import register from "../actions/register";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();

	console.log(`email ${email}`);
	console.log(`username ${username}`);
	console.log(`password ${password}`);

	const submitHandler = async (event) => {
		event.preventDefault();
		if (password !== rePassword) {
			setMessage("Passwords do not match");
			setPassword("");
			setConfirmPassword("");
			setTimeout(() => {
				setMessage("");
			}, 3000);
		}
		if (email && username && password && rePassword) {
			const result = await register(email, username, password);
			if (result) {
				console.log(result);

				if (result.error) {
					setMessage(result.error);

					setTimeout(() => {
						setMessage("");
					}, 4000);
					return;
				}
				navigate("/login");
			}
		}
	};

	return (
		<>
			{message && <h1>{message}</h1>}
			<div className="header">
				<br />
				<h4>Please fill out all fields to create a new account!</h4>
				<br />
				<p>Already have an account? Click the "Log In" link above.</p>
				<br />
			</div>
			<div className="smoke">
				<form>
					<div className="form-control bg-custom">
						<label className="label" htmlFor="email">
							E-mail Address
						</label>
						<input
							type="email"
							name="email"
							required
							className="input"
							value={email}
							onChange={(eventObj) =>
								setEmail(eventObj.target.value)
							}
						/>
					</div>
					<div className="form-control bg-custom">
						<label className="label" htmlFor="username">
							Username
						</label>
						<input
							type="username"
							name="username"
							required
							className="input"
							value={username}
							onChange={(eventObj) =>
								setUsername(eventObj.target.value)
							}
						/>
					</div>
					<div className="form-control bg-custom">
						<label className="label" htmlFor="password">
							Password
						</label>
						<input
							type="password"
							name="password"
							required
							className="input"
							value={password}
							onChange={(eventObj) =>
								setPassword(eventObj.target.value)
							}
						/>
					</div>
					<div className="form-control bg-custom">
						<label className="label" htmlFor="rePassword">
							Confirm Password
						</label>
						<input
							type="password"
							name="rePassword"
							className="input"
							required
							value={rePassword}
							onChange={(eventObj) =>
								setConfirmPassword(eventObj.target.value)
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

export default Register;
