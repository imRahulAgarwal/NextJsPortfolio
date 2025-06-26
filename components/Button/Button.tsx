"use client";

import React from "react";
import styles from "./Button.module.css";

type TProps = {
	title: string;
	classes?: string;
	handleClick?: () => void;
	type?: "submit" | "button" | "reset";
	disabled?: boolean;
};

const Button = ({ title, type = "button", classes = "", disabled = false, handleClick = () => {} }: TProps) => {
	const finalClasses = `${styles.button} ${classes ? classes : ""}`;

	return (
		<button type={type} className={finalClasses} disabled={disabled} onClick={handleClick}>
			{title}
		</button>
	);
};

export default Button;
