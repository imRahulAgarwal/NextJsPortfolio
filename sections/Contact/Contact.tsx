import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<section className="py-[120px] bg-black-1 relative" id="contact-section">
			<div className="custom-container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20">
					<div className="bg-accent-2 p-10 rounded-[15px] order-last lg:order-first">
						<div className="!text-left !items-start section-header">
							<h2 className="section-header-title">Let’s work together!</h2>
							<p className={styles.sectionHeaderP}>
								I design and code beautifully simple things and i love what i do. Just simple like that!
							</p>
						</div>

						<div>
							<form id="contactForm" noValidate={true}>
								<div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3">
									<div className="">
										<div className={styles.formGroup}>
											<input
												type="text"
												name="conName"
												id="conName"
												placeholder="First name"
												autoComplete="off"
											/>
										</div>
									</div>
									<div className="">
										<div className={styles.formGroup}>
											<input
												type="text"
												name="conLName"
												id="conLName"
												placeholder="Last name"
												autoComplete="off"
											/>
										</div>
									</div>
									<div className="">
										<div className={styles.formGroup}>
											<input
												type="email"
												name="conEmail"
												id="conEmail"
												placeholder="Email address"
												autoComplete="off"
											/>
										</div>
									</div>
									<div className="">
										<div className={styles.formGroup}>
											<input
												type="tel"
												name="conPhone"
												id="conPhone"
												placeholder="Phone number"
												autoComplete="off"
											/>
										</div>
									</div>

									<div className="sm:col-span-2 flex flex-col gap-3">
										<div className="">
											<div className={styles.formGroup}>
												<textarea
													name="conMessage"
													id="conMessage"
													placeholder="Message"></textarea>
											</div>
										</div>
										<div className="">
											<button type="submit" className={styles.formButton}>
												Send Message
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>

					<div className="flex flex-wrap lg:items-center order-first lg:order-last">
						<div className={styles.contactInfoList}>
							<ul>
								<li className={styles.contactInfoListItem}>
									<div className={styles.contactInfoListIconBox}>
										<PhoneCallIcon />
									</div>
									<div>
										<p className={styles.textBoxP}>Phone</p>
										<a className={styles.textBoxLink} href="tel:0123456789">
											+01 123 654 8096
										</a>
									</div>
								</li>
								<li className={styles.contactInfoListItem}>
									<div className={styles.contactInfoListIconBox}>
										<MailIcon />
									</div>
									<div>
										<p className={styles.textBoxP}>Email</p>
										<a className={styles.textBoxLink} href="mailto:mail@mail.com">
											gerolddesign@mail.com
										</a>
									</div>
								</li>
								<li className={styles.contactInfoListItem}>
									<div className={styles.contactInfoListIconBox}>
										<MapPinIcon />
									</div>
									<div>
										<p className={styles.textBoxP}>Address</p>
										<a className={styles.textBoxLink} href="#">
											Warne Park Street Pine, <br />
											FL 33157, New York
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
