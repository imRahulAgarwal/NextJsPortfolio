import { AwardIcon } from "lucide-react";
import React from "react";

const experienceArray = [
	{
		year: "2022 - Present",
		institute: "Programming course",
		location: "Blockdots, London",
	},
	{
		year: "2021 - 2022",
		institute: "CMS course",
		location: "Parsons, The New School",
	},
	{
		year: "2020 - 2021",
		institute: "Web design course",
		location: "House of Life, Leeds",
	},
	{
		year: "2018 - 2020",
		institute: "Parsons, The New School",
		location: "Theme Junction, Bursa",
	},
];

const Experience = () => {
	return (
		<>
			<div className="!items-start !mb-5 section-header">
				<div className="flex flex-wrap items-center gap-4">
					<h2 className="section-header-title items-center">
						<AwardIcon stroke="#8750f7" size={45} />
						My Experience
					</h2>
				</div>
			</div>

			<div className="flex flex-col gap-y-6">
				{experienceArray.map((exp, index) => (
					<div
						key={index}
						className="group flex flex-col gap-y-2 p-5 bg-accent-2 rounded-2xl hover:bg-gradient-to-br hover:from-0% hover:from-secondary hover:to-100% hover:to-primary transition-colors duration-300 ease-in-out">
						<div className="group-hover:text-white font-extrabold text-xl text-primary transition-colors duration-300 ease-in-out">
							{exp.year}
						</div>
						<h3 className="text-2xl uppercase">{exp.institute}</h3>
						<div>{exp.location}</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Experience;
