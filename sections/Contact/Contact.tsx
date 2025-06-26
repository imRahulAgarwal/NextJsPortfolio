import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import React from "react";
import styles from "./Contact.module.css";
import FadeInOnView from "@/components/FadeInOnView/FadeInOnView";

const Contact = () => {
	return (
		<section className="py-[120px] bg-black-1 relative" id="contact">
			<div className="custom-container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20">
					<FadeInOnView>
						<div className="bg-accent-2 p-10 rounded-[15px] order-last lg:order-first">
							<div className="!text-left !items-start section-header">
								<FadeInOnView>
									<h2 className="section-header-title">Let’s work together!</h2>
								</FadeInOnView>
								<FadeInOnView>
									<p className={styles.sectionHeaderP}>
										I design and code beautifully simple things and i love what i do. Just simple
										like that!
									</p>
								</FadeInOnView>
							</div>

							<div>
								<form id="contactForm" noValidate={true}>
									<div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3">
										<FadeInOnView>
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
										</FadeInOnView>
										<FadeInOnView>
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
										</FadeInOnView>
										<FadeInOnView>
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
										</FadeInOnView>
										<FadeInOnView>
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
										</FadeInOnView>

										<div className="sm:col-span-2 flex flex-col gap-3">
											<FadeInOnView>
												<div className="">
													<div className={styles.formGroup}>
														<textarea
															name="conMessage"
															id="conMessage"
															placeholder="Message"></textarea>
													</div>
												</div>
											</FadeInOnView>
											<FadeInOnView>
												<div className="">
													<button type="submit" className={styles.formButton}>
														Send Message
													</button>
												</div>
											</FadeInOnView>
										</div>
									</div>
								</form>
							</div>
						</div>
					</FadeInOnView>

					<div className="flex flex-wrap lg:items-center order-first lg:order-last">
						<FadeInOnView className={styles.contactInfoList}>
							<ul>
								<li className={styles.contactInfoListItem}>
									<div className={styles.contactInfoListIconBox}>
										<MailIcon />
									</div>
									<div>
										<p className={styles.textBoxP}>Email</p>
										<a className={styles.textBoxLink} href="mailto:imagarwal05@mail.com">
											imagarwal05@mail.com
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
											Ahmedabad, Gujarat
										</a>
									</div>
								</li>
							</ul>
						</FadeInOnView>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
