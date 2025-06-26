import React from "react";
import { MoveUpRightIcon } from "lucide-react";
import FadeInOnView from "@/components/FadeInOnView/FadeInOnView";

const services = [
	{
		number: "01",
		title: "Full Stack Development",
		description:
			"I develop complete web solutions — from responsive frontends to robust backends, scalable databases, and smooth deployments. Your entire product lifecycle is covered.",
		id: "full-stack-development",
	},
	{
		number: "02",
		title: "API Integrations and Development",
		description:
			"I design secure, scalable APIs and seamlessly integrate third-party APIs into your applications — enabling powerful features and data-driven experiences.",
		id: "api-development",
	},
	{
		number: "03",
		title: "CMS Development",
		description:
			"I build custom or WordPress-powered CMS solutions that are secure, scalable, and easy for clients to manage — with full flexibility and control.",
		id: "cms-development",
	},
	{
		number: "04",
		title: "Mobile-Friendly Web Development",
		description:
			"I create responsive websites that deliver flawless experiences across all devices — ensuring performance and accessibility on desktops, tablets, and smartphones.",
		id: "mobile-friendly-web-development",
	},
];

const Services = () => {
	return (
		<section className="py-[120px] bg-black-1" id="services">
			<div className="custom-container">
				<div className="mx-3">
					<div className="flex flex-wrap">
						<div className="w-full">
							<div className="section-header">
								<FadeInOnView>
									<h2 className="section-header-title">My Quality Services</h2>
								</FadeInOnView>
								<FadeInOnView>
									<p>
										I provide end-to-end web development services that enable businesses to launch
										scalable, reliable, and high-performing digital products — while offering
										full-stack expertise to development teams and organizations.
									</p>
								</FadeInOnView>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap">
						<div className="w-full">
							<div className="relative">
								{services.map((service, index) => (
									<FadeInOnView key={index}>
										<div
											id={service.id}
											className="group relative flex flex-col lg:flex-row lg:items-center lg:justify-center gap-y-2 bg-transparent border-b border-b-secondary p-8 transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-0% hover:from-secondary hover:to-100% hover:to-primary">
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
									</FadeInOnView>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
