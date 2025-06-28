export const projectStatusLabels = {
	liveMaintaining: "Live and Maintaining",
	liveDelivered: "Live and Delivered",
	liveInDevelopment: "Live and In Development",
	deliveredClosed: "Delivered and Closed",
	liveOnly: "Live only",
	maintainingOnly: "Maintaining only",
	privateConfidential: "Private and Confidential",
	inDevelopment: "In Development",
} as const;

export type TProjectStatus = keyof typeof projectStatusLabels;
