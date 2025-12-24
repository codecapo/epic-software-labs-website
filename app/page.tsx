import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Products from './components/Products';
import WhySection from './components/WhySection';
import Approach from './components/Approach';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <WhatWeDo />
      <Products />
      <WhySection />
      <Approach />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
}
