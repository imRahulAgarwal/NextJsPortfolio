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
						<div>
							<nav>
								<ul className={styles.footerMenuUl}>
									<li>
										<a className={styles.footerMenuUlItemLink} href="about.html">
											About
										</a>
									</li>
									<li>
										<a className={styles.footerMenuUlItemLink} href="services.html">
											Services
										</a>
									</li>
									<li>
										<a className={styles.footerMenuUlItemLink} href="portfolio.html">
											Portfolios
										</a>
									</li>
									<li>
										<a className={styles.footerMenuUlItemLink} href="contact.html">
											Contact
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className={styles.copyText}>
							<p className={styles.copyTextP}>
								© 2024 All rights reserved by{" "}
								<a className={styles.copyTextPLink} href="#" target="_blank">
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
