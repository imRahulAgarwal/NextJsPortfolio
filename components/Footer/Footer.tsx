import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="custom-container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className={styles.footerLogoBox}>
							<Link href="/" className={styles.footerLogoBoxLink}>
								<Image height={50} width={50} src="/logo.png" alt="Rahul Agarwal's Logo" />
							</Link>
						</div>
						<div className={styles.copyText}>
							<p className={styles.copyTextP}>
								© {new Date().getFullYear()} All rights reserved by{" "}
								<a className={styles.copyTextPLink} href="/" target="_blank">
									Rahul Agarwal
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
