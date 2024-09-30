import Image from "next/image";
import styles from "./page.module.css";


import Banner from '../app/banner/page'
import Client from "./client/page";
import Portfolio from "./portfolio/page";
import Services from "./services/page";
import AboutUs from "./aboutus/page";
 import Career from "./career/page";
import ContactUs from './contactus/page'



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
