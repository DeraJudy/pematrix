import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <CallToAction />
      <Footer />
    </div>
  );
}
