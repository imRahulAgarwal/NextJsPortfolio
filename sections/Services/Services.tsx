import React from "react";
import { MoveUpRightIcon } from "lucide-react";

const services = [
	{
		number: "01",
		title: "Responsive Design",
		description:
			"Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
		id: "",
	},
	{
		number: "02",
		title: "CMS Development",
		description:
			"Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
		id: "",
	},
	{
		number: "03",
		title: "API Integrations",
		description:
			"Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.",
		id: "",
	},
	{
		number: "04",
		title: "Website Redesign",
		description:
			"Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
		id: "",
	},
];

const Services = () => {
	return (
		<div className="py-[120px] bg-black-1">
			<div className="custom-container">
				<div className="mx-3">
					<div className="flex flex-wrap">
						<div className="w-full">
							<div className="section-header">
								<h2 className="section-header-title">My Quality Services</h2>
								<p>
									We put your ideas and thus your wishes in the form of a unique web project that
									inspires you and you customers.
								</p>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap">
						<div className="w-full">
							<div className="relative">
								{services.map((service, index) => (
									<div className="group relative flex flex-col lg:flex-row lg:items-center lg:justify-center gap-y-2 bg-transparent border-b border-b-secondary p-8 transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-0% hover:from-secondary hover:to-100% hover:to-primary">
										<div className="flex flex-col lg:flex-row lg:items-center gap-x-5 lg:w-2/5">
											<span className="group-hover:text-white text-primary text-xl font-bold transition-all duration-300">
												{service.number}
											</span>
											<h3 className="text-3xl capitalize font-bold text-white">
												{service.title}
											</h3>
										</div>
										<div className="lg:w-3/5 lg:pr-[15%]">
											<p>{service.description}</p>
										</div>

										<MoveUpRightIcon
											size={24}
											className="hidden lg:block text-primary transition-all duration-300 group-hover:text-white rotate-90 group-hover:rotate-0"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
