import { useRef } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./sections/AboutUs";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Services from "./sections/Services";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className=" ">
      <Navbar
        homeRef={homeRef}
        servicesRef={servicesRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <Home ref={homeRef} contactRef={contactRef} />
      <Services ref={servicesRef} />
      <AboutUs ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
