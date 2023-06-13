import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { ConnectModal } from '../modals'
import { Home, Racing, AllRaces } from '../pages'
import NFTS from '../pages/NFTS/NFTS'

const AppRoutes = () => {

    const isConnected = useSelector((state) => state.auth.isConnected)
    // Modal Functions
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/nfts' element={<NFTS />} />
                <Route path='/racing' element={<Racing />} />
                <Route path='/racing/all-races' element={<AllRaces />}/>
            </Routes>
        </>
    )
}

export default AppRoutes