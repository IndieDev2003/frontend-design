import Conatainer from "./components/Conatainer";
import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import Showcase from "./components/Home/Showcase";
import WhyUs from "./components/Home/WhyUs";

type Props = {};

function App({}: Props) {
  return (
    <Conatainer>
      <Header />
      <Hero />
      <Showcase />
      <WhyUs />
      <div className="h-screen"></div>
    </Conatainer>
  );
}

export default App;
