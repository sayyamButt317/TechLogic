import ServiceHero from "../components/Services/ServiceHero"
import CompanyServices from "../components/Services/servicetext"
import ServiceList from "../components/Services/servicelist";
import Clients from '../components/Services/clients';



function Service() {
  return (
 <>
 
 <ServiceHero />
 <ServiceList />
     <CompanyServices/>
     <Clients/>
 

 </>
  )
}

export default Service