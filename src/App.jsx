import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Wellness from './components/Wellness';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#tratamentos">Ir para os tratamentos</a>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Wellness />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
