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
        <div>
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
                                {navOpen ? (
                                    <IoClose
                                        onClick={handleNavOpen}
                                        className='text-3xl text-lightGold'
                                    />
                                ) : (
                                    <IoMenu
                                        onClick={handleNavOpen}
                                        className='text-3xl text-lightGold'
                                    />
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

                {navOpen && (
                    <div className='container py-6 space-y-6'>
                        <NavLinks />
                        {!isConnected ? (
                            <NavSocials />
                        ) : (
                            <NavConnected />
                        )}
                    </div>
                )}
            </header>
        </div>
    )
}

export default Header