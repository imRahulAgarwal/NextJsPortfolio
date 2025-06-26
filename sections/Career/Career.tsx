import React from "react";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

const Career = () => {
	return (
		<div className="py-[120px] bg-black-1">
			<div className="custom-container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10">
					<div className="w-full">
						<Experience />
					</div>
					<div className="w-full">
						<Education />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Career;
