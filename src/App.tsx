import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Specialty } from './components/Specialty';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Specialty />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

export default App;
