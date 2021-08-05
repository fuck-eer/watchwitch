import React from "react";
import classes from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = () => {
	return (
		<div className={classes.listSec}>
			<h3 className={classes.heading}>Friends</h3>
			<div className={classes.lists}>
				<FriendListItem />
				<FriendListItem />
				<FriendListItem />
			</div>
		</div>
	);
};

export default FriendList;
