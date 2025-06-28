import IPortfolioItem from "@/interfaces/Portfolio";

const portfolioItems: IPortfolioItem[] = [
	{
		id: 1,
		projectName: "RAGTracker",
		companyName: "RAGScores",
		mainDescription:
			"Multi-tenant SaaS platform for mystery shopper-driven brand-store reviews with automated QA and multi-format reporting.",
		fullDescription: `RAGTracker is a multi-tenant SaaS platform by RAGScores, designed to streamline brand-store evaluations via mystery shoppers. Shoppers capture answers to structured forms, along with multimedia evidence (photos, videos, audio), which are securely uploaded to cloud storage (Mega). Quality analysts review submissions—either approving, correcting minor errors, or returning incomplete responses—before publishing polished reports accessible in Excel, PDF, and web formats for both clients and internal teams.Its hierarchical management system (Department → Client → Brand → Store Type → Store → Campaign) ensures precise campaign assignment. Once campaigns end, shopper payment data is exported, validated, and manually imported—enforcing strict accuracy checks. RAGTracker’s modular setup (Questions, Responses, Campaigns, Payments, Media, Reporting) enables brands to independently monitor store performance, without RAGScores managing their infrastructure. Its SaaS architecture supports multiple clients and brands on a shared codebase, delivering scalability, isolation, and continuous enhancements.`,
		mainTechStack: ["Node.js", "Express.js", "MongoDB"],
		fullTechStack: [
			"Node.js",
			"Express.js",
			"MongoDB",
			"Nunjucks",
			"Cloud Storage (Mega)",
			"AWS EC2",
			"Github Actions",
			"Javascript",
			"Bootstrap v(3.3, 4.6, 5.3)",
			"Git & Github",
		],
		role: "Full Stack Developer",
		responsibilities: [
			"Architect multi-tenant SaaS platform",
			"Reduced manual data collection effort through automated workflows",
			"Implemented complex MongoDB aggregation pipelines for real-time reporting",
			"Managed 100GB+ media storage using cloud solutions and local optimization",
		],
		achievements: [
			"Built scalable multi-tenant architecture",
			"Automated data collection workflows",
			"Managed 100GB+ media storage efficiently",
		],
		projectStatus: "liveInDevelopment",
		projectLink: "https://shopper.ragscores.com",
	},
	{
		id: 2,
		projectName: "RAGScores LMS",
		companyName: "RAGScores",
		mainDescription:
			"White-label LMS enabling brands to deliver and manage customizable, role-based training via structured courses and assessments.",
		fullDescription: `RAGScores LMS is a white-label, SaaS-ready Learning Management System built to empower brands with fully customizable training pipelines. It supports hierarchical structures—Departments → Sub‑Departments and Designations—to manage learners and SMEs efficiently.
Courses are modular: comprised of Topics with rich multimedia content, followed by Assessments containing structured questions. Learners navigate through tailored curriculums, while SMEs can build, assign, and evaluate training modules.**

The platform automates enrollment, progress tracking, grading, and certification workflows—complete with dashboards and performance reports—while supporting deep customization that existing out-of-the-box LMS platforms lack. It’s designed for brands needing sharper control over training content, user roles, and assessment quality.`,
		mainTechStack: ["Node.js", "Express.js", "MongoDB"],
		fullTechStack: ["Node.js", "Express.js", "MongoDB", "Nunjucks", "Bootstrap"],
		role: "Full Stack Developer",
		responsibilities: [
			"Developed internal training platform for company employees",
			"Built granular access controls with 3-tier user hierarchy",
			"Implemented role-based permissions (Admin/SME/Learner)",
			"Created comprehensive learning management system",
		],
		achievements: [
			"3-tier user hierarchy implementation",
			"Granular access control system",
			"Cross-department training platform",
		],
		projectStatus: "inDevelopment",
		projectLink: null,
	},
	{
		id: 3,
		projectName: "Ticket Jugaad",
		companyName: "Jugaad Media",
		mainDescription: "Event Management and Ticketing Platform",
		fullDescription:
			"Ticket Jugaad is a web-based event ticketing solution that enables admins to create and list events through an intuitive panel, and allows customers to securely browse and purchase tickets online. Supporting robust payment processing and centralized event management, the platform is ideal for organizers looking to streamline ticket sales, attendee tracking, and event promotion—all from a single, easy-to-use dashboard.",
		mainTechStack: ["Node.js", "Express.js", "MongoDB"],
		fullTechStack: ["Node.js", "Express.js", "MongoDB", "RazorPay", "EJS", "Bootstrap"],
		role: "Full Stack Developer",
		responsibilities: [
			"Implemented secure payment processing with RazorPay",
			"Developed role-based admin panel",
			"Built event management system",
			"Created ticket booking and management functionality",
		],
		achievements: ["Managing 10,000+ tickets monthly", "Secure payment integration", "Role-based admin panel"],
		projectStatus: "deliveredClosed",
		projectLink: null,
	},
	{
		id: 4,
		projectName: "Organic Blossoms",
		companyName: "BBEL: Bharat Biogas Energy Limited",
		mainDescription: "E-commerce platform for selling organic products",
		fullDescription:
			"Organic Blossoms is the D2C e‑commerce division of Bharat Biogas Energy Ltd, offering farm‑grown organic products to health-conscious customers. The platform uses WhatsApp OTP authentication and sends order invoices directly through WhatsApp. It integrates RazorPay for secure payments, while built-in inventory management ensures real-time stock accuracy. Invoices are auto-mailed to customers, striking a balance between sustainability and seamless user experience.",
		mainTechStack: ["Node.js", "Express.js", "MongoDB"],
		fullTechStack: ["Node.js", "Express.js", "MongoDB", "Interakt WhatsApp API", "RazorPay", "EJS", "Bootstrap"],
		role: "Full Stack Developer",
		responsibilities: [
			"Developed complete e-commerce platform",
			"Integrated WhatsApp OTP authentication",
			"Built inventory management system",
			"Implemented secure payment processing",
		],
		achievements: [
			"Reduced cart abandonment by 35%",
			"Multi-category inventory tracking",
			"WhatsApp OTP integration",
		],
		projectStatus: "deliveredClosed",
		projectLink: null,
	},
	{
		id: 5,
		projectName: "MedParticle",
		companyName: "Healthcare",
		mainDescription: "Doctor appointment booking system with real-time availability",
		fullDescription:
			"MedParticle is a streamlined booking platform for doctor appointments, designed to prevent overlapping reservations and ensure reliability. Patients choose a time slot, the system checks availability in real time, and once confirmed, a confirmation email is automatically sent—delivering a smooth, trustworthy scheduling experience with minimal friction.",
		mainTechStack: ["Node.js", "Express.js", "MongoDB"],
		fullTechStack: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
		role: "Full Stack Developer",
		responsibilities: [
			"Built doctor appointment booking system",
			"Implemented real-time slot availability",
			"Created automated email notification system",
			"Developed patient management interface",
		],
		achievements: ["Zero double-booking incidents", "Real-time slot availability", "Automated email notifications"],
		projectStatus: "deliveredClosed",
		projectLink: null,
	},
	{
		id: 6,
		projectName: "Wish Loan India",
		companyName: "MedParticle",
		mainDescription:
			"Multi-page financial services site offering loans (home, business, personal) with active contact forms and engaging lead capture.",
		fullDescription:
			"Wish Loan India is a comprehensive financial services website, empowering users with a range of loan products—including home, personal, business, and working capital financing—presented across multiple informative pages. Featuring a live contact form for real-time inquiries, the site makes it easy for users to get personalized assistance, apply online, and converse directly with loan advisors.",
		mainTechStack: ["WordPress", "SEO"],
		fullTechStack: ["WordPress", "MySQL", "SEO Optimization"],
		role: "WordPress Developer",
		responsibilities: [
			"Developed complete informational website",
			"Implemented SEO best practices",
			"Optimized for search engine rankings",
			"Created responsive design",
		],
		achievements: [
			"Top Result on Google for target keyword",
			"SEO-optimized website",
			"Responsive design implementation",
		],
		projectStatus: "liveDelivered",
		projectLink: "https://wishloanindia.com",
	},
	{
		id: 7,
		projectName: "Greenbloom Bio Products",
		companyName: "Greenbloom",
		mainDescription:
			"Corporate informational site for biodegradable products, showcasing eco-friendly manufacturing and sustainability mission.",
		fullDescription:
			"GreenBloom is a corporate informational website based in Gandhinagar, Gujarat, promoting biodegradable everyday products derived from sustainable, starch-based raw materials like potato, sugarcane, and corn. The multi-page site outlines their eco-conscious manufacturing steps—from raw material extraction to compostable disposal—demonstrating their mission to combat plastic pollution through high-quality biodegradable solutions.",
		mainTechStack: ["WordPress", "SEO"],
		fullTechStack: ["WordPress", "MySQL", "SEO Optimization"],
		role: "WordPress Developer",
		responsibilities: [
			"Created corporate informational website",
			"Implemented comprehensive SEO strategy",
			"Optimized site performance",
		],
		achievements: [
			"Top Result on Google for company name",
			"SEO-optimized corporate site",
			"Custom WordPress development",
		],
		projectStatus: "liveMaintaining",
		projectLink: "https://bioproduct.in",
	},
];

export default portfolioItems;
