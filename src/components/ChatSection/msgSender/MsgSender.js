import React from "react";
import classes from "./MsgSender.module.css";
import sendButton from "../../../assets/icons/sendButton.svg";

const MsgSender = () => {
	return (
		<div className={classes.sender}>
			<form className={classes.forrm}>
				<input type='text' placeholder='Type your message...' />
				<button>
					<img src={sendButton} alt='send' />
				</button>
			</form>
		</div>
	);
};

export default MsgSender;
