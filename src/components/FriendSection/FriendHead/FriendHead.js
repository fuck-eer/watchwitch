import React from "react";
import classes from "./FriendHead.module.css";
import search from "../../../assets/icons/search.svg";
import options from "../../../assets/icons/options.svg";
const FriendHead = () => {
	return (
		<div className={classes.headdd}>
			<div className={classes.userAvatar}></div>
			<div className={classes.icons}>
				<div className={classes.icon}>
					<img src={search} alt='icon' />
				</div>
				<div className={classes.icon}>
					<img src={options} alt='icon' />
				</div>
			</div>
		</div>
	);
};

export default FriendHead;
