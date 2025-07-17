"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react";

export default function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 200) setVisible(true);
			else setVisible(false);
		};
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			onClick={scrollToTop}
			className={`group border-primary hover:bg-primary fixed bottom-6 right-6 z-50 p-3 rounded-full border transition-all duration-300 group shadow-md ${
				visible ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
			style={{
				borderColor: "#8750f7", // --color-primary
			}}
			aria-label="Back to top">
			<ArrowUpIcon className="w-5 h-5 transition-all text-primary duration-300 group-hover:text-white" />
		</button>
	);
}
