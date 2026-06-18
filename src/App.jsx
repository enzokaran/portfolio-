import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';

export default function App() {
  return (
    <>
      <div className="ambient-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
