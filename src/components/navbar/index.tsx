import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed left-0 top-0 w-full h-[80px] bg-whit font-sans flex items-center justify-end bg-white">
            <div className="absolute -top-24 -left-48 -rotate-45 max-h-72 h-72 bg-primary aspect-[2/1]">Photografy</div>
            <ul className="flex px-8 space-x-10">
                <li>
                    <a href="#" className="text-primary hover:text-primary-light text-xl">Ensaios</a>
                </li>
                <li>
                    <a href="#" className="text-primary hover:text-primary-light text-xl">Sobre</a>
                </li>
                <li>
                    <a href="#" className="text-primary hover:text-primary-light text-xl">Contato</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
