"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
	delay?: number;
	className?: string;
}

export default function FadeInOnView({ children, delay = 0.2, className = "" }: Props) {
	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			variants={variants}
			className={className}>
			{children}
		</motion.div>
	);
}
