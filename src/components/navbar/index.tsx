import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed left-0 top-0 w-full bg-gray-800 text-white p-4">
            <div className="flex items-center">

                <div className='bg-gray-500 -rotate-45 w-72 h-5 relative bottom-4'>

                </div>

                <div className="text-xl font-bold">Photografy</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
