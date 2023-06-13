import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
// Socials Logo
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord, FaTelegramPlane, FaMediumM } from 'react-icons/fa'
import { ConnectModal } from '../../../modals'
import CustomButton from '../../CustomButton'

const NavSocials = () => {

    // Modal Functions
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    // Socials List
    const socials = [
        { icon: <AiOutlineTwitter />, link: '/' },
        { icon: <FaDiscord />, link: '/' },
        { icon: <FaTelegramPlane />, link: '/' },
        { icon: <FaMediumM />, link: '/' },
    ]

    return (
        <div className='flex items-center gap-4'>
            <div className='flex gap-2'>
                {socials.map((item,index) => (
                    <a
                        key={index}
                        href={`/`}
                        className={`text-lg text-lightGold`}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
            <CustomButton 
                name={`Connect`}
                task={openModal}
                className={`px-4 py-1`}
            />

            <ConnectModal 
                isOpen={isOpen}
                closeModal={closeModal}
            />
        </div>
    )
}

export default NavSocials