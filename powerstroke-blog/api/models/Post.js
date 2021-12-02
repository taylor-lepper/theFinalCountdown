const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const postSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	section: {
		type: String,
		required: true,
	},

	creator: {
		type: ObjectId,
		ref: "User",
	},
});

module.exports = new Model("Post", postSchema);
