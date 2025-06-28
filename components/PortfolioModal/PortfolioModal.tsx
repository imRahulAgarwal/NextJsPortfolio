import React from "react";
import { motion } from "motion/react";
import IPortfolioItem from "@/interfaces/Portfolio";
import { ExternalLinkIcon, XIcon } from "lucide-react";
import { projectStatusLabels } from "@/types/ProjectStatus";

interface PortfolioModalProps {
	selectedProject: IPortfolioItem;
	closeModal: () => void;
}

const PortfolioModal = ({ closeModal, selectedProject }: PortfolioModalProps) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 bg-black-1/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
			onClick={closeModal}>
			<motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.9, opacity: 0 }}
				className="bg-gradient-to-br from-accent-2 to-grey-2/50 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-primary/30 shadow-2xl"
				onClick={(e) => e.stopPropagation()}>
				<div className="p-6">
					{/* Modal Header with Live Demo Link */}
					<div className="flex items-start justify-between mb-6">
						<div className="flex-1">
							<div className="flex items-center gap-3 mb-2">
								<h3 className="text-2xl font-bold text-white">{selectedProject.projectName}</h3>
								{/* Live Demo Link in Modal Header */}
								{selectedProject.projectLink ? (
									<a
										href={selectedProject.projectLink}
										target="_blank"
										rel="noopener noreferrer"
										className="ml-3 flex items-center justify-center w-8 h-8 bg-primary/20 hover:bg-primary/30 border border-primary/30 hover:border-primary/50 rounded-lg text-primary hover:text-white transition-all duration-300"
										title="View Live Demo">
										<ExternalLinkIcon size={16} />
									</a>
								) : (
									<div
										className={`projectStatusBadge status-${selectedProject.projectStatus}`}
										title={selectedProject.projectStatusReason}>
										{projectStatusLabels[selectedProject.projectStatus]}
									</div>
								)}
							</div>
							<p className="text-primary font-medium">{selectedProject.companyName}</p>
						</div>
						<button onClick={closeModal} className="text-grey-1 hover:text-white transition-colors ml-4">
							<XIcon size={24} />
						</button>
					</div>

					{/* Link Status Explanation */}
					{selectedProject.projectStatusReason && (
						<div className="mb-6 p-4 bg-accent-2/50 rounded-lg border border-grey-2/20">
							<p className="text-grey-1 text-sm">
								<span className="text-primary font-medium">Note:</span>{" "}
								{selectedProject.projectStatusReason}
							</p>
						</div>
					)}

					{/* Project Description */}
					<div className="mb-6">
						<p className="text-grey-1">{selectedProject.fullDescription}</p>
					</div>

					{/* Role */}
					<div className="mb-6">
						<h4 className="text-white font-semibold mb-2">Role</h4>
						<p className="text-primary">{selectedProject.role}</p>
					</div>

					{/* Key Responsibilities */}
					<div className="mb-6">
						<h4 className="text-white font-semibold mb-3">Key Responsibilities</h4>
						<ul className="space-y-2">
							{selectedProject.responsibilities.map((responsibility, index) => (
								<li key={index} className="text-grey-1 text-sm flex items-start">
									<span className="text-primary mr-2 mt-1.5">•</span>
									{responsibility}
								</li>
							))}
						</ul>
					</div>

					{/* Key Achievements */}
					<div className="mb-6">
						<h4 className="text-white font-semibold mb-3">Key Achievements</h4>
						<ul className="space-y-2">
							{selectedProject.achievements.map((achievement, index) => (
								<li key={index} className="text-grey-1 text-sm flex items-start">
									<span className="text-primary mr-2 mt-1.5">•</span>
									{achievement}
								</li>
							))}
						</ul>
					</div>

					{/* Full Tech Stack */}
					<div className="mb-6">
						<h4 className="text-white font-semibold mb-3">Technologies Used</h4>
						<div className="flex flex-wrap gap-2">
							{selectedProject.fullTechStack.map((tech, index) => (
								<span
									key={index}
									className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default PortfolioModal;
