import { TProjectStatus } from "@/types/ProjectStatus";

interface IPortfolioItem {
	id: number;
	projectName: string;
	companyName: string;
	mainDescription: string;
	fullDescription: string;
	mainTechStack: string[];
	fullTechStack: string[];
	role: string;
	responsibilities: string[];
	achievements: string[];
	projectStatus: TProjectStatus;
	projectLink: string | null;
	projectStatusReason?: string; // Useful when project status is not live
}

export default IPortfolioItem;
