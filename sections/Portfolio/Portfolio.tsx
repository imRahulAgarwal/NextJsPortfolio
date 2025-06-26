"use client";

import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import { ArrowUpRightIcon } from "lucide-react";
import FadeInOnView from "@/components/FadeInOnView/FadeInOnView";

const filters = [
	{ key: "*", label: "All" },
	{ key: ".uxui", label: "UX/UI" },
	{ key: ".branding", label: "Branding" },
	{ key: ".mobile-app", label: "Apps" },
];

const portfolioItems = [
	{
		id: 1,
		image: "/work_1.jpg",
		alt: "Deloitte",
		title: "Deloitte",
		description: "Project was about precision and information.",
	},
	{
		id: 2,
		image: "/work_1.jpg",
		alt: "Deloitte",
		title: "Deloitte",
		description: "Project was about precision and information.",
	},
	{
		id: 3,
		image: "/work_1.jpg",
		alt: "Deloitte",
		title: "Deloitte",
		description: "Project was about precision and information.",
	},
	{
		id: 4,
		image: "/work_1.jpg",
		alt: "Deloitte",
		title: "Deloitte",
		description: "Project was about precision and information.",
	},
];

const Portfolio = () => {
	const [activeFilter, setActiveFilter] = useState("*");

	return (
		<section className="py-[120px] bg-accent-1 relative" id="portfolio">
			<div className="custom-container">
				<div className="mx-3">
					<div className="flex flex-wrap">
						<div className="w-full">
							<div className="section-header">
								<FadeInOnView>
									<h2 className="section-header-title">My Recent Works</h2>
								</FadeInOnView>
								<FadeInOnView>
									<p>
										We put your ideas and thus your wishes in the form of a unique web project that
										inspires you and you customers.
									</p>
								</FadeInOnView>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap">
						<div className="w-full flex flex-col gap-y-10">
							<div className="text-center">
								<FadeInOnView>
									<div className="relative sm:bg-black-1 sm:rounded-full p-2 inline-flex flex-col sm:flex-row gap-2 not-sm:w-full">
										{filters.map((filter) => {
											let finalClass = `${styles.portfolioFilterButton}`;
											if (activeFilter === filter.key) {
												finalClass += ` ${styles.portfolioFilterButtonActive}`;
											} else {
												finalClass += ` ${styles.portfolioFilterButtonInactive}`;
											}

											return (
												<button
													key={filter.key}
													data-filter={filter.key}
													onClick={() => setActiveFilter(filter.key)}
													className={finalClass}>
													{filter.label}
												</button>
											);
										})}
									</div>
								</FadeInOnView>
							</div>

							<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
								{portfolioItems.map((item) => (
									<FadeInOnView key={item.id}>
										<div className={styles.portfolioItem}>
											<div className="text-center">
												<img src={item.image} alt={item.alt} />
											</div>

											<div className={styles.portfolioContentBox}>
												<div className="flex flex-col gap-2">
													<h3 className="text-3xl">{item.title}</h3>
													<p>{item.description}</p>
												</div>
												<div>
													<ArrowUpRightIcon className={styles.portfolioI} size={36} />
												</div>
											</div>
										</div>
									</FadeInOnView>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
