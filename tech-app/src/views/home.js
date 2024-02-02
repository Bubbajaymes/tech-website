import {  } from "antd";
import Hero from "../components/home/hero";
import Features from "../components/home/features";
import About from "../components/home/about";
import HowItWorks from "../components/home/howItWorks";
import Faq from "../components/home/faq";
import Pricing from "../components/home/pricing";
import Contact from "../components/home/contact";


function Home() {
    return (
        <div className="main">
            <Hero />
            <About />
            <Features />
            <HowItWorks />
            <Faq />
            <Pricing />
            <Contact />
            
        </div>
    );
}

export default Home;