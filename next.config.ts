import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: false,
	rewrites: async () => {
		const rewriteUrls = [];

		if (process.env.RESUME_URL) {
			rewriteUrls.push({
				source: "/resume",
				destination: process.env.RESUME_URL,
			});
		}

		return rewriteUrls;
	},
};

export default nextConfig;
