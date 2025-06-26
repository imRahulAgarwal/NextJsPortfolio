import React from "react";
import { GraduationCapIcon } from "lucide-react";
import FadeInOnView from "@/components/FadeInOnView/FadeInOnView";

const educationArray = [
	{
		year: "2024 - Present",
		institute: "Asian International University, Manipur",
		university: "B.Tech in Computer Science and Engineering",
	},
	{
		year: "2021 - 2024",
		institute: "LJ University, Ahmedabad",
		university: "Diploma in Artificial Intelligence and Machine Learning (AIML)",
	},
	{
		year: "2020 - 2021",
		institute: "NIOS",
		university: "Standard 10",
	},
];

const Education = () => {
	return (
		<>
			<div className="!items-start !mb-5 section-header">
				<div className="flex flex-wrap items-center gap-4">
					<FadeInOnView>
						<h2 className="section-header-title items-center">
							<GraduationCapIcon stroke="#8750f7" size={45} />
							My Education
						</h2>
					</FadeInOnView>
				</div>
			</div>
			<div className="flex flex-col gap-y-6">
				{educationArray.map((edu, index) => (
					<FadeInOnView key={index}>
						<div className="group flex flex-col gap-y-2 p-5 bg-accent-2 rounded-2xl hover:bg-gradient-to-br hover:from-0% hover:from-secondary hover:to-100% hover:to-primary transition-colors duration-300 ease-in-out">
							<div className="group-hover:text-white font-extrabold text-xl text-primary transition-colors duration-300 ease-in-out">
								{edu.year}
							</div>
							<h3 className="text-2xl uppercase">{edu.institute}</h3>
							<div>{edu.university}</div>
						</div>
					</FadeInOnView>
				))}
			</div>
		</>
	);
};

export default Education;
