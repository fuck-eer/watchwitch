import React from "react";
import classes from "./FriendListItem.module.css";
import chat from "../../../../assets/icons/chat.svg";
import cross from "../../../../assets/icons/cross.svg";
const FriendListItem = () => {
	return (
		<div className={classes.friendListItem}>
			<div className={classes.details}>
				<div className={classes.profilepic}></div>
				<div className={classes.name}></div>
			</div>
			<div className={classes.actionButtons}>
				<button className={classes.actionButt}>
					<img className={classes.buttImage} src={chat} />
				</button>
				<button className={classes.actionButt}>
					<img className={classes.buttImage} src={cross} />
				</button>
			</div>
		</div>
	);
};

export default FriendListItem;
