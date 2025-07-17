import FadeInOnView from "@/components/FadeInOnView/FadeInOnView";
import React from "react";
import styles from "./PortfolioItem.module.css";
import { ArrowUpRightIcon, ExternalLinkIcon } from "lucide-react";
import IPortfolioItem from "@/interfaces/Portfolio";
import { projectStatusLabels } from "@/types/ProjectStatus";

interface PortfolioItemProps {
	item: IPortfolioItem;
	openModal: (item: IPortfolioItem) => void;
}

const PortfolioItem = ({ item, openModal }: PortfolioItemProps) => {
	return (
		<FadeInOnView className={styles.portfolioItem}>
			<div className="flex flex-col h-full">
				{/* Project Header */}
				<div className="mb-4 flex flex-col sm:flex-row items-start justify-between gap-y-2">
					<div className="flex-1">
						<h3 className={styles.projectName}>{item.projectName}</h3>
						<p className={styles.companyName}>{item.companyName}</p>
					</div>

					{item.projectLink ? (
						<a
							href={item.projectLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center w-8 h-8 bg-primary/20 hover:bg-primary/30 border border-primary/30 hover:border-primary/50 rounded-lg text-primary hover:text-white transition-all duration-300"
							title="View Live Demo">
							<ExternalLinkIcon size={16} />
						</a>
					) : (
						<div className={`projectStatusBadge status-${item.projectStatus}`} title={item.projectStatusReason}>
							{projectStatusLabels[item.projectStatus]}
						</div>
					)}
				</div>

				{/* Description */}
				<p className={styles.projectDescription}>{item.mainDescription}</p>

				{/* Tech Stack */}
				<div className="mb-4">
					<div className="flex flex-wrap gap-2">
						{item.mainTechStack.map((tech, techIndex) => (
							<span key={techIndex} className={styles.mainTechStackItem}>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Action Button */}
				<div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2 pt-4 border-t border-grey-2/50 mt-auto">
					<button onClick={() => openModal(item)} className={styles.viewDetailBtn}>
						<span className="text-sm">View Details</span>
						<ArrowUpRightIcon
							size={16}
							className="group-hover:rotate-45 transition-transform duration-300"
						/>
					</button>
					<span className={styles.myRole}>{item.role}</span>
				</div>
			</div>
		</FadeInOnView>
	);
};

export default PortfolioItem;
