import React from "react";
import { GraduationCapIcon } from "lucide-react";

const educationArray = [
	{
		year: "2020 - 2023",
		institute: "BLOCKDOTS",
		university: "Harverd University",
	},
	{
		year: "2016 - 2020",
		institute: "Parsons, The New School",
		university: "University of Denmark",
	},
	{
		year: "2012 - 2015",
		institute: "IDEO",
		university: "University of California",
	},
	{
		year: "2010 - 2011",
		institute: "Parsons, The New School",
		university: "Parsons, The New School",
	},
];

const Education = () => {
	return (
		<>
			<div className="!items-start !mb-5 section-header">
				<div className="flex flex-wrap items-center gap-4">
					<h2 className="section-header-title items-center">
						<GraduationCapIcon stroke="#8750f7" size={45} />
						My Education
					</h2>
				</div>
			</div>
			<div className="flex flex-col gap-y-6">
				{educationArray.map((edu, index) => (
					<div
						key={index}
						className="group flex flex-col gap-y-2 p-5 bg-accent-2 rounded-2xl hover:bg-gradient-to-br hover:from-0% hover:from-secondary hover:to-100% hover:to-primary transition-colors duration-300 ease-in-out">
						<div className="group-hover:text-white font-extrabold text-xl text-primary transition-colors duration-300 ease-in-out">
							{edu.year}
						</div>
						<h3 className="text-2xl uppercase">{edu.institute}</h3>
						<div>{edu.university}</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Education;
