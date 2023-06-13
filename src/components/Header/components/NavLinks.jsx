import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLinks = () => {

    const location = useLocation();

    // Navbar Links
    const links = [
        { title: 'home', link: '/' },
        { title: 'nfts', link: '/nfts' },
        { title: 'racing', link: '/racing' },
        { title: 'blogs', link: '/blogs' },
        { title: 'explore', link: '/explore' },
    ]

    // Function to store the route of the page on refresh
    function getActiveLink(pathname) {
        const link = links.find(item => item.link === pathname);
        return link ? link.title : 'home';
    }
    // Selected navbar menu link
    const [activeLink, setActiveLink] = useState(getActiveLink(location.pathname));

    return (
        <ul className='max-lg:grid lg:space-x-6 lg:ml-12'>
            {links.map((item,index) => (
                <Link 
                    key={index} 
                    to={item.link}
                    onClick={() => setActiveLink(item.title)}
                    className={`text-lg font-medium ${item.title === activeLink ? 'text-mediumGold' : 'text-lightGold' } hover:text-mediumGold uppercase transition-all ease-in-out`}
                >
                    {item.title}
                </Link>
            ))}
        </ul>
    )
}

export default NavLinks