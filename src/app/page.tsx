import Image from "next/image";
import './globals.css'
import About from "./about/page";
import Link from "next/link";
import Navbar from "../components/navigation/navbar"
import CampusVid from "../components/grounds/campus";
import Magic from "../components/home_sections/magic";
import Strategy from "../components/home_sections/strategy";
import Celestial from "../components/home_sections/celestial";
import Elemental from "../components/home_sections/elemental";
import Footer from "../components/navigation/footer";
import Testimonials from "../components/home_sections/testimonials";
import TopButton from "../components/buttons/to_top";

export default function Home() {
  return (
    <>
     <Navbar/>
     <TopButton/>
     <CampusVid/>
     <main>
        <Magic/>
        <Strategy/>
        <div id = "gradient-1" >
        </div>
        <Celestial/>
        <div id = "gradient-2"></div>
        <Elemental/>
        <Testimonials/>
     </main>
     <Footer/>
     </>
  );
}
