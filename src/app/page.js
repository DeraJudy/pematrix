import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <CallToAction />
    </div>
  );
}
