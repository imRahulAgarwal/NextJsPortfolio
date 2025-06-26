"use client";

import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";
import Button from "../Button/Button";
import { Menu, X } from "lucide-react";

interface CustomNavLink {
	label: string;
	href: string;
}

const navLinks: CustomNavLink[] = [
	{ label: "Home", href: "#" },
	{ label: "Services", href: "#" },
	{ label: "Portfolio", href: "#" },
	{ label: "Skills", href: "#" },
	{ label: "Contact", href: "#" },
];

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 100);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	useEffect(() => {
		const onWindowWidthChange = () => window.innerWidth >= 992 && setIsMobileMenuOpen(false);
		window.addEventListener("resize", onWindowWidthChange);
		return () => window.removeEventListener("resize", onWindowWidthChange);
	}, []);

	return (
		<header className={`${styles.header} ${isScrolled ? styles.headerSticky : styles.headerAbsolute}`}>
			<div className="custom-container">
				<div className="flex flex-wrap mx-3 items-center justify-between w-full">
					<div>
						<Link href="mailto:imagarwal05@gmail.com" className={styles.mailToLinkHeader}>
							imagarwal05@gmail.com
						</Link>
					</div>

					<div className="hidden lg:flex items-center gap-10">
						<ul className="flex items-center gap-10">
							{navLinks.map((link, index) => (
								<NavLink {...link} key={index} isMobileScreen={false} />
							))}
						</ul>

						<Button title="Hire Me!" />
					</div>

					<div className="lg:hidden flex items-center gap-5">
						<div className="hidden sm:block">
							<Button title="Hire Me!" />
						</div>

						<button
							className="text-white p-2 hover:text-primary transition-colors"
							aria-label="Toggle mobile menu"
							onClick={() => setIsMobileMenuOpen(true)}>
							<Menu size={24} />
						</button>
					</div>
				</div>
			</div>

			{isMobileMenuOpen && (
				<div className={styles.mobileMenuOverlay}>
					<div className="relative h-full w-full">
						<button
							onClick={closeMobileMenu}
							className={styles.mobileCloseButton}
							aria-label="Close mobile menu">
							<X size={24} />
						</button>

						<div className={styles.mobileNavContainer}>
							<div className="flex flex-col gap-6">
								<ul className="flex flex-col gap-6">
									{navLinks.map((link, index) => (
										<NavLink
											{...link}
											isMobileScreen={true}
											handleClick={closeMobileMenu}
											key={link.label}
										/>
									))}
								</ul>

								<Button title="Hire Me!" />

								<Link
									href="mailto:imagarwal05@gmail.com"
									className={styles.mobileEmailLink}
									onClick={closeMobileMenu}>
									imagarwal05@gmail.com
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
