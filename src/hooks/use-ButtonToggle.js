import { useState } from "react";

const useButtonToggle = (initialClassname, classToAdd) => {
	const [showMenu, setshowMenu] = useState(true);

	const onButtonClick = () => {
		setshowMenu((prev) => !prev);
	};

	const sectionClass = showMenu
		? `${initialClassname}`
		: `${initialClassname} ${classToAdd}`;

	return {
		showMenu,
		onButtonClick,
		sectionClass,
	};
};

export default useButtonToggle;
