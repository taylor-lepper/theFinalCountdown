import React from "react";

const Profile = (props) => {
	console.log(props);

	if (props.user.username) {
		console.log("logged in (profile)");

		return (
			<div>
				<br />
				<h1>Welcome to your Profile, {props.user.username}!</h1>
			</div>
		);
	} else {
		return <h1>Please log in, to view your Profile!</h1>;
	}
};

export default Profile;
