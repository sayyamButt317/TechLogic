import { useEffect, } from "react";
import Aos from "aos";
import "./App.css";
import Footer from "./Utils/Footer";
import {Route,Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReactGA from 'react-ga4';

function App() {
  ReactGA.initialize('G-SMFF8T5TTC');
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div>
    <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/Service"  element={<Service />}/>
      <Route path="/About"  element={<About/>}/>
      <Route path="/Contact"  element={<Contact/>}/> 
      <Route path="*" element={<nOTFOUND/>}/>  
    </Routes>
    </div> 
      <Footer />  
     
    </>
  );
}

export default App;
