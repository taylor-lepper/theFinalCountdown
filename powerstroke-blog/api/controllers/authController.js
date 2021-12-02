const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Post = require("../models/Post");
const generateToken = require("../utils/generateToken");

const postRegister = async (req, res, next) => {
	const { email, username, password } = req.body;

	console.log(email, username, password);

	try {
		const user = await User.findOne({ email: email });
		console.log("Found Users :", user);
		if (user) {
			console.log("Match found user" + user);
			res.status(500).json("E-mail already taken");
			return;
		}
		// validation
		//hash the password
		const salt = await bcrypt.genSalt(10);

		//construct hash the password
		const hash = await bcrypt.hash(password, salt);

		//add user to mongo(database)

		await User.create({
			email,
			username,
			password: hash,
		});
		res.status(200).json({ message: "User Successfully Registered" });
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		console.log(err);
		next(err);
	}
};

const postLogin = async (req, res, next) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email: email });
		if (!user) {
			throw new Error("E-mail not registered in database");
		}
		const decodedPassword = await bcrypt.compare(password, user.password);
		if (decodedPassword) {
			res.status(200).json({
				_id: user._id,
				username: user.username,
				email: user.email,
				posts: user.posts,
				token: generateToken(user._id),
			});
			console.log("Log in successful");
		} else {
			res.status(401);
			throw new Error("Authentication failed");
		}
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		console.log(err);
		next(err);
	}
};

const postCreate = async (req, res, next) => {
	const { title, body, section } = req.body;
	const { _id } = req.user;

	Post.create({ title, body, section })
		.then((newPost) => {
			return Promise.all([
				User.updateOne({ _id }, { $push: { posts: newPost } }),
				Post.findOne({ _id: newPost._id }),
			]);
		})
		.then(([modifiedObj, postObj]) => {
			res.send(postObj);
		})
		.catch(next);
};

module.exports = { postRegister, postLogin, postCreate };
