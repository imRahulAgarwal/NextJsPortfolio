import type { Metadata } from "next";
import { Sora, Russo_One } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop/BackToTop";
const soraSansSerif = Sora({
	variable: "--font-sora",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	display: "swap",
});

const russoOneSansSerif = Russo_One({
	variable: "--font-russo",
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Rahul Agarwal | Full Stack Web Developer",
	description:
		"Rahul Agarwal is a Full-Stack Web Developer | Next JS Developer successfully developed and delivered 10+ projects using modern Javascript technologies. I am actively looking for Remote Freelancing Work or Jobs that includes the skill React, Next JS, Node, Express, MERN, AWS, MongoDB etc.",
	applicationName: "Rahul Agarwal's Portfolio",
	keywords: [
		"Full Stack Developer",
		"Next.js Developer",
		"React Developer",
		"MERN Stack",
		"JavaScript Developer",
		"Node.js Developer",
		"Remote Developer India",
		"Freelance Web Developer",
		"Portfolio",
		"MongoDB",
	],
	authors: [{ name: "Rahul Agarwal", url: "https://rahulcoder.in" }],
	creator: "Rahul Agarwal",
	publisher: "Rahul Agarwal",
	metadataBase: new URL("https://rahulcoder.in"),
	openGraph: {
		title: "Rahul Agarwal | Full-Stack Web Developer",
		description:
			"Explore Rahul Agarwal's web development portfolio – expert in MERN stack, scalable APIs, and modern UI/UX design.",
		url: "https://rahulcoder.in",
		siteName: "Rahul Agarwal's Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://rahulcoder.in/me.webp",
				width: 1200,
				height: 630,
				alt: "Rahul Agarwal's Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Rahul Agarwal | Full-Stack Web Developer",
		description:
			"Rahul Agarwal's portfolio. Specialized in MERN stack, React, Next.js, and looking for remote freelance work.",
		creator: "@imRahul_agarwal",
		images: ["https://rahulcoder.in/me.webp"],
	},
	referrer: "origin",
	category: "Full-Stack Web Developer",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${soraSansSerif.variable} ${russoOneSansSerif.variable} antialiased`}>
				{children}
				<BackToTop />
			</body>
		</html>
	);
}
