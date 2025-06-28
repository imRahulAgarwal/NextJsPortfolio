"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { AnimatePresence } from "motion/react";
import FadeInOnView from "@/components/FadeInOnView/FadeInOnView";
import portfolioItems from "@/data/portfolio";
import IPortfolioItem from "@/interfaces/Portfolio";
import styles from "./Portfolio.module.css";
import PortfolioItem from "@/components/Card/PortfolioItem/PortfolioItem";
import PortfolioModal from "@/components/PortfolioModal/PortfolioModal";

const Portfolio = () => {
	const [selectedProject, setSelectedProject] = useState<IPortfolioItem | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 6;

	// Calculate pagination
	const totalPages = Math.ceil(portfolioItems.length / projectsPerPage);
	const startIndex = (currentPage - 1) * projectsPerPage;
	const currentProjects = portfolioItems.slice(startIndex, startIndex + projectsPerPage);

	const openModal = (project: IPortfolioItem) => {
		setSelectedProject(project);
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setSelectedProject(null);
		document.body.style.overflow = "unset";
	};

	// Cleanup overflow on unmount
	useEffect(() => {
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	// Scroll to portfolio section when page changes
	const scrollToPortfolio = () => {
		const portfolioSection = document.getElementById("portfolio");
		if (portfolioSection) {
			portfolioSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
			setTimeout(scrollToPortfolio, 100); // Small delay to ensure state update
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			setTimeout(scrollToPortfolio, 100); // Small delay to ensure state update
		}
	};

	const goToPage = (page: number) => {
		setCurrentPage(page);
		setTimeout(scrollToPortfolio, 100); // Small delay to ensure state update
	};

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
										Explore my portfolio of full-stack web applications, e-commerce platforms, and
										SaaS solutions built with modern technologies.
									</p>
								</FadeInOnView>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap">
						<div className="w-full">
							<div className={styles.portfolioItems}>
								{currentProjects.map((item) => (
									<PortfolioItem key={item.id} item={item} openModal={openModal} />
								))}
							</div>

							{/* Pagination */}
							{totalPages > 1 && (
								<div className="flex items-center justify-center mt-12 gap-4">
									<button
										onClick={prevPage}
										disabled={currentPage === 1}
										className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-2 text-white hover:bg-primary/20 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
										<ChevronLeftIcon size={16} />
										Previous
									</button>

									<div className="flex items-center gap-2">
										{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
											<button
												key={page}
												onClick={() => goToPage(page)}
												className={`w-10 h-10 rounded-lg transition-colors duration-300 ${
													currentPage === page
														? "bg-primary text-white"
														: "bg-accent-2 text-grey-1 hover:bg-primary/20 hover:text-white"
												}`}>
												{page}
											</button>
										))}
									</div>

									<button
										onClick={nextPage}
										disabled={currentPage === totalPages}
										className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-2 text-white hover:bg-primary/20 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
										Next
										<ChevronRightIcon size={16} />
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{selectedProject && <PortfolioModal selectedProject={selectedProject} closeModal={closeModal} />}
			</AnimatePresence>
		</section>
	);
};

export default Portfolio;
