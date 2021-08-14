import React from "react";
import useButtonToggle from "../../hooks/use-ButtonToggle";
import classes from "./ChatSection.module.css";
import arrow from "../../assets/icons/arrow.svg";
import ChatHead from "./chatHead/ChatHead";
import ChatList from "./chatList/ChatList";
import MsgSender from "./msgSender/MsgSender";
const ChatSection = () => {
	const { showMenu, onButtonClick, sectionClass } = useButtonToggle(
		classes.ChatSection,
		classes.ifHide
	);

	const buttClass = showMenu
		? `${classes.buttArrow} ${classes.rot}`
		: `${classes.buttArrow}`;
	return (
		<div className={sectionClass}>
			<ChatHead />
			<ChatList />
			<MsgSender />

			<button onClick={onButtonClick} className={classes.Slidebutton}>
				<img src={arrow} className={buttClass} alt='slide' />
			</button>
		</div>
	);
};

export default ChatSection;
