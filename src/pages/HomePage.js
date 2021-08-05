import React from "react";
import ChatSection from "../components/ChatSection/ChatSection";
import FriendSection from "../components/FriendSection/FriendSection";
import classes from "./HomePage.module.css";

const HomePage = () => {
	return (
		<div className={classes.homePage}>
			<FriendSection />
			<ChatSection />
		</div>
	);
};

export default HomePage;
