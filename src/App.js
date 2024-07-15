import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import "./App.css";
import Navbar from "./Components/nav";
import ContactForm from "./Components/getintouch";
import Pricing from "./Components/pricing";
import Newsletter from "./Components/flow";
import ContactUs from "./Components/contact";




// const Section = ({ children }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.6,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </motion.div>
//   );
// };



function App() {
  return (
    <div>
      <Navbar />
      <ContactForm/>
      <Pricing/>
      <Newsletter/>
      <ContactUs/>
      {/* <Section>
        <BodyComponent />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <SolarEnergy />
      </Section>
      <Section>
        <PricingSection />
      </Section>
      <Section>
        <Home />
      </Section>
      <Section>
        <ContactUs />
      </Section>
      <Section>
        <Flow />
      </Section> */}
      {/* <Partners/> */}
    </div>
  );
}

export default App;