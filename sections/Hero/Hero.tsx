import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="bg-accent-1 py-[150px] px-0">
			<div></div>
			<div className="custom-container">
				<div className="grid grid-cols-12 gap-5 mx-3">
					<div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col gap-6 md:gap-3">
								<span className="block text-[2.25rem] font-bold">I am Rahul</span>
								<h1 className={styles.heroTitle}>
									Full-Stack Web
									<br />
									Developer.
								</h1>

								<div className="md:hidden">
									<div className={styles.heroImageBox}>
										<img src="/me.png" alt="" className={styles.heroImage} />
									</div>
								</div>

								<p className="w-5/6 text-[1.25rem] font-light">
									I break down complex user experinece problems to create integritiy focussed
									solutions that connect billions of people
								</p>
							</div>

							<div className="flex flex-wrap items-center gap-6">
								<button type="button" className={styles.downloadResumeButton}>
									Download Resume
								</button>
							</div>
						</div>
					</div>
					<div className="md:col-span-6 hidden md:flex items-center justify-center">
						<div className={styles.heroImageBox}>
							<img src="/me.png" alt="" className={styles.heroImage} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
