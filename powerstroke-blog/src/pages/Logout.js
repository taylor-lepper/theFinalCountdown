import React, { useState } from "react";
// import logout from "../actions/logout";
import { useNavigate } from "react-router-dom";
import { delete_cookie } from "sfcookies";

const Logout = (props) => {
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();

	const submitHandler = async (event) => {
		event.preventDefault();
		delete_cookie("loggedIn token");
		delete_cookie("user");
		navigate("/");

		props.updateLogin({
			loggedin: false,
			username: "",
			posts: 0,
		});
		if (event.error) {
			setMessage(event.error);

			setTimeout(() => {
				setMessage("");
			}, 4000);
			return;
		}
	};

	return (
		<>
			{message && <h1>{message}</h1>}

			<div className="paddington">
				<br />

				<h3>Please click the button below to Log Out!!!</h3>
				<br />
				<br />
				<button
					type="submit"
					className="btn btn-primary"
					onClick={submitHandler}
				>
					Logout
				</button>
			</div>
		</>
	);
};

export default Logout;
