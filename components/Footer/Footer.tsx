import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="custom-container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className={styles.footerLogoBox}>
							<a href="#" className={styles.footerLogoBoxLink}>
								<img src="assets/img/logo/logo.png" alt="" />
							</a>
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
