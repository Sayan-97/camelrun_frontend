import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { NavConnected, NavLinks, NavLogo, NavSocials } from './components'
// Hamburger Menu & Close Menu
import { IoMenu, IoClose } from 'react-icons/io5'

const Header = () => {

    const headerRef = useRef()
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

    const [headerHeight, setHeaderHeight] = useState(0);
    useEffect(() => {
        if (headerRef.current) {
            const height = headerRef.current.offsetHeight;
            setHeaderHeight(height);
        }
    }, []);

    return (
        <div>
            <header
                ref={headerRef}
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
                                <IoMenu 
                                    onClick={handleNavOpen}
                                    className='text-3xl text-lightGold' 
                                />
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

            <div
                className={`fixed w-full p-6 z-30 transition-all duration-700 ${navOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    background: 'rgba(58, 52, 52, 0.5)',
                    backdropFilter: 'blur(42px)',
                    top: navOpen ? headerHeight : -1000,
                }}
            >
                <div className='space-y-6'>
                    <NavLinks />
                    {!isConnected ? (
                        <NavSocials />
                    ) : (
                        <NavConnected />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header