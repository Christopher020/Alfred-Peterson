import Navbar from "./components/navbar/Navbar";
// import DomainSearch from "./components/domainsearch/DomainSearch";
import Hero from "./components/hero/Hero";
import ServiceOne from "./components/serviceone/ServiceOne";
import ServiceTwo from "./components/servicetwo/ServiceTwo";
import ServiceThree from "./components/servicethree/ServiceThree";
import ServiceFour from "./components/servicefour/ServiceFour";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceOne />
      <ServiceTwo />
      <ServiceThree />
      <ServiceFour />
      <Footer />
    </>
  );
}

export default App;
