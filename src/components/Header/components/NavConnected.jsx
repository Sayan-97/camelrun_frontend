import React from 'react'
import WalletImg from '../../../assets/navbar/wallet.png'
import ProfileMenu from './ProfileMenu'

const NavConnected = () => {
    return (
        <div className='flex items-center divide-x-2 divide-lightGold'>
            <div className='px-4 flex items-center gap-2'>
                <img src={WalletImg} alt="img" />
                <p className='text-lg font-medium text-lightGold'>100$</p>
            </div>
            <div className='px-4'>
                <ProfileMenu />
            </div>
        </div>
    )
}

export default NavConnected