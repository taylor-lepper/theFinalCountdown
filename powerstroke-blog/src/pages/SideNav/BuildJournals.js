import React from "react";
import { Link } from "react-router-dom";

const begin = (props) => {
	return props;
};

const BuildJournals = (props) => {
	console.log(props);
	return (
		<div className="Builds">
			<br />
			<h1>Build Journals</h1>
			<div className="create">
				<br />
				<br />
				<div className="padDiv">
					<small>Create New Post</small>
					<br />
					<Link
						to={{
							pathname: "/post",
							page: "build-journals",
						}}
					>
						<button className="btn btn-primary">Create</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default BuildJournals;
