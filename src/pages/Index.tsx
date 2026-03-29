import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Founders from "@/components/Founders";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen noise-bg">
    <Navbar />
    <Hero />
    <Services />
    <Portfolio />
    <Founders />
    <WhyChooseUs />
    <Testimonials />
    <Process />
    <Pricing />
    <Contact />
    <Footer />
  </div>
);

export default Index;
