import Hero from "../components/Home/Hero";
import Card from "../components/Home/Card";
import Framework from "../components/Home/frameworks";
import OurStory from "../components/Home/story";
import Work from "../components/Home/Work";
import WhyUs from "../components/Home/whyus";


function Home() {
  return (
    <>
      <Hero />
      <Card/>
      <OurStory />
      <Work/>
      <WhyUs/>
      <Framework />
     
    </>
  );
}

export default Home;
