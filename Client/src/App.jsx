import { useEffect, } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./Utils/Header";
import Footer from "./Utils/Footer";
import {Route,Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
    <Header/>
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
