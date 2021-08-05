import React from "react";
import classes from "./FriendSection.module.css";
import arrow from "../../assets/icons/arrow.svg";
import useButtonToggle from "../../hooks/use-ButtonToggle";
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
			<button onClick={onButtonClick} className={classes.Slidebutton}>
				<img src={arrow} className={buttClass} alt='slide' />
			</button>
		</div>
	);
};

export default FriendSection;
