import React from "react";
import Link from "next/link";
import styles from "./NavLink.module.css";

type TNavLinkProps = {
	href: string;
	label: string;
	className?: string;
	isMobileScreen: boolean;
	handleClick?: () => void;
};

const NavLink = ({ href, label, className = "", isMobileScreen = false, handleClick }: TNavLinkProps) => {
	let finalLinkClass = `${styles.navLink} ${className}`.trim();
	finalLinkClass = `${finalLinkClass} ${isMobileScreen ? styles.mobileScreenLink : styles.notMobileScreenLink}`;

	return (
		<li className={styles.navItem}>
			<Link href={href} className={finalLinkClass} onClick={handleClick}>
				{label}
			</Link>
		</li>
	);
};

export default NavLink;
