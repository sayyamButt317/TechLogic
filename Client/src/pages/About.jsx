import AboutHero from '../components/About/AboutHero';
import Aboutus from '../components/About/Aboutus';
import Feedback from '../components/About/Feedback'; 
import Vision from "../components/About/vision";
import Faqs from "../components/About/Faqs";
function About() {
  return (
<>
    <AboutHero/>
    <Aboutus/>
    {/* <Mission/> */}
    <Vision/>
    <Faqs/>
    <Feedback/>
   
</>
  )
}

export default About