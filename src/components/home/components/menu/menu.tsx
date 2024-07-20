import Logo from '../logo';
import './style.scss'

function Menu() {
    return (
        <div className='menu'>
            <Logo />
            <div className="bar">
                <span>Ensaios</span>
                <span>Sobre</span>
                <span>Contato</span>
                <span className='signup'>Login</span>
            </div>
        </div>
    )
}

export default Menu;