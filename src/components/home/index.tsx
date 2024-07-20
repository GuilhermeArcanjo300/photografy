import Menu from "./components/menu/menu";
import Slide from "./components/slide";
import './style.scss'

function Home() {
    return (
        <div className="home">
             <Menu />
             <Slide />
        </div>
    )
}

export default Home;