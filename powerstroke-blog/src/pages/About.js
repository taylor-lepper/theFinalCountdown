import React from "react";

const About = () => {
	return (
		<div className="About">
			<br />

			<div className="aboutContainer">
				<h1>About Us</h1>
				<br />
				<br />
				<h3>We are the original Powerstroke Journal!</h3>
				<br />
				<div className="imagesLine">
					<img
						className="aboutImage"
						src="../imgs/sickFord.jpg"
						alt="Awesome OBS truck"
					/>
					<img
						className="aboutImage"
						src="../imgs/bullnose.jpg"
						alt="Bullnose old ford"
					/>
					<img
						className="aboutImage"
						src="../imgs/obs.jpg"
						alt="Insane OBS truck"
					/>
					<img
						className="aboutImage"
						src="../imgs/jackedFord.jpg"
						alt="Insane lifted 6.7L"
					/>
				</div>
				<ul className="aboutInfo">
					<li>
						Powerstroke Journal was founded by enthusiasts for
						enthusiasts!
					</li>
					<br />
					<li>
						Our mission is to provide an everlasting resource for
						these trucks, and to educate any and all lovers of Ford
						pickup trucks!
					</li>
					<br />
					<li>We were founded in 2021 by an anonymous coder.</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
