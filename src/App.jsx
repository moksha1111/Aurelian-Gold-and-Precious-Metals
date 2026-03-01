import Navbar       from './components/layout/Navbar';
import Footer       from './components/layout/Footer';
import Hero         from './components/sections/Hero';
import PriceTicker  from './components/sections/PriceTicker';
import LivePrices   from './components/sections/LivePrices';
import Products     from './components/sections/Products';
import WhyUs        from './components/sections/WhyUs';
import About        from './components/sections/About';
import HowItWorks   from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import Contact      from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PriceTicker />
      <LivePrices />
      <Products />
      <WhyUs />
      <About />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
