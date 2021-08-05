import React from "react";
import classes from "./FriendSection.module.css";
import arrow from "../../assets/icons/arrow.svg";
import useButtonToggle from "../../hooks/use-ButtonToggle";
import FriendHead from "./FriendHead/FriendHead";
import FriendList from "./FriendList/FriendList";
const FriendSection = () => {
	const { showMenu, onButtonClick, sectionClass } = useButtonToggle(
		classes.FriendSection,
		classes.ifHide
	);

	const buttClass = showMenu
		? `${classes.buttArrow}`
		: `${classes.buttArrow} ${classes.rot}`;

	return (
		<div className={sectionClass}>
			<FriendHead />
			<FriendList />
			<button onClick={onButtonClick} className={classes.Slidebutton}>
				<img src={arrow} className={buttClass} alt='slide' />
			</button>
		</div>
	);
};

export default FriendSection;
