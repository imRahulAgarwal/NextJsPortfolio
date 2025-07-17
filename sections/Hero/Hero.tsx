import React from "react";
import styles from "./Hero.module.css";
import FadeInOnView from "@/components/FadeInOnView/FadeInOnView";
import Link from "next/link";

const leftContent = [
	<span className="block md:text-4xl text-2xl font-bold">I am Rahul</span>,
	<h1 className={styles.heroTitle}>
		Full-Stack Web
		<br />
		Developer.
	</h1>,
	<div className="md:hidden">
		<div className={styles.heroImageBox}>
			<img src="/me.webp" alt="" className={styles.heroImage} />
		</div>
	</div>,
	<p className="md:w-5/6 text-xl font-light">
		I transform ideas into reality with modern, scalable web applications — blending seamless user experiences with
		robust backend systems.
	</p>,
];

const Hero = () => {
	return (
		<section className="bg-accent-1 py-[150px] px-0" id="hero">
			<div></div>
			<div className="custom-container">
				<div className="grid grid-cols-12 gap-5 mx-3">
					<div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col gap-8 md:gap-4">
								{leftContent.map((content, index) => (
									<FadeInOnView key={index}>{content}</FadeInOnView>
								))}
							</div>

							<FadeInOnView>
								<div className="flex flex-col flex-wrap justify-center gap-4">
									<Link
										href="/Rahul_Agarwal_Resume.pdf"
										download={true}
										className={styles.downloadResumeButton}>
										Download Resume
									</Link>
									<div className="text-xs">Available for freelancing and remote full-time roles</div>
								</div>
							</FadeInOnView>
						</div>
					</div>
					<div className="md:col-span-6 hidden md:flex items-center justify-center">
						<FadeInOnView>
							<div className={styles.heroImageBox}>
								<img src="/me.webp" alt="" className={styles.heroImage} />
							</div>
						</FadeInOnView>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
