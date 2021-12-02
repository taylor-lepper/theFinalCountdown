import axios from "axios";

const createPost = async (title, body, creator, section) => {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`http://localhost:8000/api/posts/${section}`,
			{ title, body, creator },
			config
		);
		if (data) {
			return data;
		} else {
			return "Database Error";
		}
	} catch (err) {
		console.log(err);
	}
};
export default createPost;
