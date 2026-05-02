import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: false,
	rewrites: async () => {
		return [
			{
				source: "/resume",
				destination: "https://rahul-agarwal.s3.ap-south-1.amazonaws.com/Rahul_Agarwal_Resume.pdf",
			},
		];
	},
};

export default nextConfig;
