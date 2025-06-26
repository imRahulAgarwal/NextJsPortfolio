import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/sections/Hero/Hero";
import Services from "@/sections/Services/Services";
import Portfolio from "@/sections/Portfolio/Portfolio";
import Career from "@/sections/Career/Career";
import Skills from "@/sections/Skills/Skills";
import Contact from "@/sections/Contact/Contact";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Services />
			<Portfolio />
			<Career />
			<Skills />
			<Contact />
			<Footer />
		</>
	);
}
