import FadeInOnView from "@/components/FadeInOnView/FadeInOnView";
import { AwardIcon } from "lucide-react";
import React from "react";

const experienceArray = [
	{
		year: "Aug 2025 - Nov 2025",
		role: "Full Stack Web Developer - Intern",
		company: "SurveyNex - Remote",
	},
	{
		year: "April 2025 - August 2025",
		role: "Software Developer - Intern",
		company: "ByteUprise - Remote",
	},
	{
		year: "Present",
		role: "Full Stack MERN Developer - Freelance",
		company: "",
	},
];

const Experience = () => {
	return (
		<>
			<div className="!items-start !mb-5 section-header">
				<div className="flex flex-wrap items-center gap-4">
					<FadeInOnView>
						<h2 className="section-header-title items-center">
							<AwardIcon stroke="#8750f7" size={45} />
							My Experience
						</h2>
					</FadeInOnView>
				</div>
			</div>

			<div className="flex flex-col gap-y-6">
				{experienceArray.map((exp, index) => (
					<FadeInOnView key={index}>
						<div className="group flex flex-col gap-y-2 p-5 bg-accent-2 rounded-2xl hover:bg-gradient-to-br hover:from-0% hover:from-secondary hover:to-100% hover:to-primary transition-colors duration-300 ease-in-out">
							<div className="group-hover:text-white font-extrabold text-xl text-primary transition-colors duration-300 ease-in-out">
								{exp.year}
							</div>
							<h3 className="text-2xl">{exp.role}</h3>
							<div>{exp.company}</div>
						</div>
					</FadeInOnView>
				))}
			</div>
		</>
	);
};

export default Experience;
