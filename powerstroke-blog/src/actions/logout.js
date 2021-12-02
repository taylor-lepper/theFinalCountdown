import { delete_cookie } from "sfcookies";

const logout = () => {
	console.log("Logout button clicked");
	delete_cookie("loggedIn token");
};

export default logout;
