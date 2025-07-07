import IPortfolioItem from "@/interfaces/Portfolio";

const portfolioItems: IPortfolioItem[] = [
	{
		id: 1,
		projectName: "RAGTracker",
		companyName: "RAGScores",
		mainDescription:
			"Multi-Tenant SaaS platform for customized reports generation based on the data collected by mystery shoppers for brand stores.",
		fullDescription: `
		<p>Multi-Tenant SaaS platform for customized reports generation based on the data collected by mystery shoppers for brand stores.</p>
		<div class="mt-3">
			<p>Project Flow:</p>
			<ul class="projectDescriptionUl">
				<li>The flow starts with creation of clients and their brands (one/many).</li>
				<li>The next step is to create stores of a particular brand, where data will be collected by a mystery shoppers.</li>
				<li>Survey forms are created with a set of questions, each with dynamic options of response type, media type allowed and total media count that can be uploded.</li>	
				<li>Once all the three steps are done, a new campaign is created for the brand with the preferred survey form. The campaign can have multiple stores in it, for which data is to be collected (reviewing).</li>
				<li>Once campaign is created shoppers are assigned / reassigned (if such scenario) to the store.</li>
				<li>If the shopper approves the opportunity the process of filling the form begins.</li>
				<li>The shopper fills the form with appropriate data and uplods media accordingly.</li>
				<li>Once the form submission is completed, all the responses are auditted by a QA. The QA checks, modifies, approves or bounces the responses.</li>
				<li>Even if one question is bounced (not approved), the shopper has to refill the form (only questions that are rejected)</li>
				<li>And the process above repeats if there are issues in the data submitted by shopper.</li>
				<li>Once all the responses are approved the report is generated in three forms (Web/PDF/Excel views).</li>
				<li>And accordingly based on all the status, the information is updated accordingly in the client panel also!</li>
			</ul>
		</div>
		<div class="mt-3">
			<p>Modules Relationship:</p>
			<div class="border border-primary rounded p-4 mt-3">
				<img src="/RAGTracker_Modules.svg" alt="Module Relationship" />
			</div>
		</div>
		`,
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
		projectName: "LMS",
		companyName: "RAGScores",
		mainDescription: "A white-label LMS project designed and developed for RAGScores.",
		fullDescription: `
		<p>A white-label LMS project designed and developed for RAGScores.</p>
		<div class="mt-3">
			<p>Project Flow:</p>
			<ul class="projectDescriptionUl">
				<li>The flow starts with the creation of SME, Learner and Courses.</li>
				<li>Courses are categorized in Departments and Sub-Departments. Each course has many topics, and each topic has many text/media content related to it.</li>
				<li>Each course can have many assignments that has to be completed by the learner after completing the course.</li>
				<li>Progress of the learner is stored so the learner does not have to start their course progress all over again!</li>
				<li>Three different panels for Admin Team, SME and Learners have been developed.</li>
			</ul>
		</div>
		`,
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
		mainDescription: "An event-ticket selling platform designed and developed for Jugaad Media.",
		fullDescription: `
		<p>An event-ticket selling platform designed and developed for Jugaad Media.</p>
		<div class="mt-3">
			<p>Project Flow:</p>
			<ul class="projectDescriptionUl">
				<li>The project flow starts with the creation  of events and the types of tickets linked to the events.</li>
				<li>Events are categorised into different event types for easy management.</li>
				<li>All the active events are listed to the users. Users can view all / single event.</li>
				<li>The users can add tickets of various types, of event(s) in the cart and then proceed to checkout.</li>
				<li>Once checkout is done the ticket is generated as a PDF with unique QR Code data.</li>
				<li>This QRcode is to be scanned and verified at the event location. If the ticket is valid and not yet scanned the user is allowed.</li>
				<li>All the transactions, orders, users etc. data is displayed in the admin panel!</li>
			</ul>
		</div>
		`,
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
		mainDescription: "An ecommerce platform to sell organic farm products.",
		fullDescription: `
		<p>An ecommerce platform to sell organic farm products.</p>
		<div class="mt-3">
			<p>Project Flow:</p>
			<ul class="projectDescriptionUl">
				<li>Users register through Interakt Whatsapp OTP authentication.</li>
				<li>Users browse and go through the shop and add itmes to cart.</li>
				<li>Then the user can checkout and pay through RazorPay gateway.</li>
				<li>Finally all the details are received on the admin panel and then the products are dispatched accordingly.</li>
				<li>E-Mail is sent for every status update, taking from order confirmation, order shipment and delivering.</li>
				<li>RBAC system is implemented to improve and restrict the access of resources for the admin team users.</li>
			</ul>
		</div>
		`,
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
		projectName: "Instagram Media Downloader",
		companyName: "Reference Client",
		mainDescription: "A web tool to download instagram media through links.",
		fullDescription: `
		<p>A web tool to download instagram media through links.</p>
		<div class="mt-3">
			<p>Project Flow:</p>
			<ul class="projectDescriptionUl">
				<li>Users provide the links and at the backend data is collected accordingly.</li>
				<li>The data collected consists of media, which is then provided to download.</li>
				<li>The URL provided by user can be of Profile, Post, Carousel, IGTV, Reels, Story, Highlights.</li>
			</ul>
		</div>
		`,
		mainTechStack: ["Node", "Instagram API", "React"],
		fullTechStack: ["Node", "Express", "Instagram API", "React"],
		role: "Full Stack Developer",
		responsibilities: [],
		achievements: [],
		projectStatus: "deliveredClosed",
		projectLink: null,
	},
	{
		id: 6,
		projectName: "Airtel 5G Network Promoter",
		companyName: "Airtel",
		mainDescription: "A project designed for Airtel for a specific campaign to promote 5G network in Gujarat.",
		fullDescription: `
		<p>A project designed for Airtel for a specific campaign to promote 5G network in Gujarat.</p>
		<div class="mt-3">
			<p>Project Flow:</p>
			<ul class="projectDescriptionUl">
				<li>Users select a template that is to be used as a boundary in the image they click.</li>
				<li>The user after clicking the image can save the image clicked with the template.</li>
			</ul>
		</div>
		`,
		mainTechStack: ["HTML", "CSS", "JavaScript"],
		fullTechStack: ["HTML", "CSS", "JavaScript"],
		role: "Full Stack Developer",
		responsibilities: [],
		achievements: [],
		projectStatus: "deliveredClosed",
		projectLink: null,
	},
	{
		id: 7,
		projectName: "MedParticle",
		companyName: "Healthcare",
		mainDescription: "Doctor appointment booking system with real-time availability",
		fullDescription: `
		<p>Doctor appointment booking system with real-time availability.</p>
		<div class="mt-3">
			<p>Project Flow:</p>
			<ul class="projectDescriptionUl">
				<li>Users select the date and time that suits them and book an appointment.</li>
				<li>Appointment Details are shared through an e-mail.</li>
				<li>Appointment time and date if already booked cannot be booked again!</li>
			</ul>
		</div>
		`,
		mainTechStack: ["Node.js", "Express.js", "MongoDB"],
		fullTechStack: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
		role: "Full Stack Developer",
		responsibilities: [
			"Built doctor appointment booking system",
			"Implemented real-time slot availability",
			"Created automated email notification system",
		],
		achievements: ["Zero double-booking incidents", "Real-time slot availability", "Automated email notifications"],
		projectStatus: "deliveredClosed",
		projectLink: null,
	},
	{
		id: 8,
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
		id: 9,
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
