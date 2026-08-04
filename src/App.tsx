import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';
import { RouteEffects } from './components/ui/RouteEffects';
import { Home } from './pages/Home';
import { ExperiencesIndex } from './pages/ExperiencesIndex';
import { ExperienceDetail } from './pages/ExperienceDetail';
import { PortfolioPage } from './pages/PortfolioPage';
import { StoryPage } from './pages/StoryPage';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <RouteEffects />
      <Navbar />
      <main id="inicio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencias" element={<ExperiencesIndex />} />
          <Route path="/experiencias/:slug" element={<ExperienceDetail />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/minha-historia" element={<StoryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

export default App;
