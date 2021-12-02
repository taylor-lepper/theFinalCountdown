import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import createPost from "../actions/createPost";

const Post = (props) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [message, setMessage] = useState(null);
	const submitHandler = "turds";
	console.log(props);
	// const creator = props.user.id;
	// const section = props.section;
	return (
		<>
			{message && <h1>{message}</h1>}
			<div className="Post">
				<br />
				<h1>Create New Post</h1>
				<div>
					<form>
						<div className="form-control">
							<label className="label" htmlFor="title">
								Title
							</label>
							<input
								type="text"
								name="title"
								className="title"
								onChange={(eventObj) =>
									setTitle(eventObj.target.value)
								}
								value={title}
								required
							/>
						</div>
						<div className="form-control">
							<label className="bodyLabel" htmlFor="body">
								Post Body
							</label>
							<textarea
								type="text"
								name="body"
								required
								onChange={(eventObj) =>
									setBody(eventObj.target.value)
								}
								value={body}
								className="textArea"
							></textarea>
						</div>
						<div className="form-control">
							<label className="label" htmlFor="section">
								Sub-Forum
							</label>
							<select>
								<option value="forums">forums</option>
								<option value="build-journal">
									build-journals
								</option>
								<option value="forums">how-tos</option>
								<option value="forums">tech-articles</option>
							</select>
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
			</div>
		</>
	);
};

export default Post;
