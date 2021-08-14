import React from "react";
import classes from "./ChatHead.module.css";

const ChatHead = () => {
	return (
		<div className={classes.chathead}>
			<div className={classes.friendpicture}></div>
			<div className={classes.friendName}>Kareem</div>
		</div>
	);
};

export default ChatHead;
