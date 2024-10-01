import Image from "next/image";
import styles from "./page.module.css";


import Banner from './home/banner/page'
import Client from "./home/client/page";
import Portfolio from "./home/portfolio/page";
import Services from "./home/services/page";
import AboutUs from "./home/aboutus/page";
 import Career from "./home/career/page";
import ContactUs from './home/contactus/page'



export default function Home() {
  return (
    <div className="container-fluid"> 
  <Banner />
  <Client />
  <Portfolio />
  <Services />
  <AboutUs />
  <Career />
  <ContactUs />
    
    
    
    </div>
  );
}
