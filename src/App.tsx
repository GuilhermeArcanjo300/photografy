import About from './components/about';
import { Contact } from './components/contact';
import Cursor from './components/cursor';
import Home from './components/home';
import ScrollProgress from './components/scroll-progress';
import Shoots from './components/shoots';

function App() {
    return (
        <>
            <ScrollProgress />
            <Cursor />
            <Home />
            <main>
                <Shoots />
                <About />
            </main>
            <Contact />
        </>
    );
}

export default App;
