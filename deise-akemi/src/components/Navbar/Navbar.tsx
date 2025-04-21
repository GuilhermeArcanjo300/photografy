import React from 'react';
import logo from '../../../public/img/logo/logo-default.svg';

interface NavbarProps {
    children: React.ReactNode;
}

const Navbar = ({children}: NavbarProps) => {
    return (
        <div className='h-screen w-screen relative'>
            <NavbarLogo />
            <div className='flex justify-end'>
                <NavbarOption text='Ensaios' />
                <NavbarOption text='Sobre' />
                <NavbarOption text='Contato' />
            </div>
            {children}
        </div>
    )
}

const NavbarOption = ({text}: {text: string}) => {
    return (
        <div className='h-[80px] min-w-[120px] flex justify-center items-center text-[#F88F87] hover:text-white hover:bg-[#F88F87] cursor-pointer'>
            <p className='text-[16px]'>{text}</p>
        </div>
    )
}

const NavbarLogo = () => {
    return (
        <div className='flex justify-end items-end bg-[#F88F87] absolute z-10 w-[30vw] h-[30vw] -left-[15vw] -top-[15vw] rotate-45'>
            <div className='relative -top-[7.5vw] w-[15vw] h-[15vw] flex justify-center items-center'>
                <img src={logo} alt='Logo' className='w-[10vw] h-[10w] rotate-[-45deg]' />
            </div>
        </div>
    )
}

export default Navbar;