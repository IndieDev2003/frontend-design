import CTA from "../components/Home/CTA";
import Events from "../components/Home/Events";
import Hero from "../components/Home/Hero";
import Program from "../components/Home/Program";

function Home() {
  return (
    <div className="px-4 ">
      <Hero />
      <CTA />
      <Program />
      <Events />
      <CTA/>
      {/* <div className="h-screen"></div> */}
    </div>
  );
}

export default Home;
