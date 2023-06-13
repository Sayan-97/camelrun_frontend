import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavConnected, NavLinks, NavLogo, NavSocials } from './components'
// Hamburger Menu & Close Menu
import { IoMenu, IoClose } from 'react-icons/io5'

const Header = () => {

    const isConnected = useSelector((state) => state.auth.isConnected)

    // For responsive view
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024)
        }
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const [navOpen, setNavOpen] = useState(false)
    const handleNavOpen = () => {
        setNavOpen(!navOpen)
    }

    return (
        <header
            className={`fixed inset-x-0 py-4 z-40`}
            style={{
                background: 'rgba(58, 52, 52, 0.5)',
                backdropFilter: 'blur(42px)'
            }}
        >
            <nav className='container'>
                <div className='flex items-center justify-between'>
                    <NavLogo />
                    {isSmallScreen ? (
                        <>
                            <div
                                className={`absolute inset-x-0 p-6 z-40 flex flex-col items-end ${navOpen ? 'top-[100%]' : 'bottom-[100%] opacity-0'} transition-all duration-500 ease-in-out`}
                                style={{
                                    background: 'rgba(58, 52, 52, 0.5)',
                                }}
                            >
                                <NavLinks />
                                <NavSocials />
                            </div>
                            {navOpen ? (
                                <IoClose onClick={handleNavOpen} className='text-3xl text-lightGold' />
                            ) : (
                                <IoMenu onClick={handleNavOpen} className='text-3xl text-lightGold' />
                            )}
                        </>
                    ) : (
                        <>
                            <NavLinks />
                            {!isConnected ? (
                                <NavSocials />
                            ) : (
                                <NavConnected />
                            )}
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header