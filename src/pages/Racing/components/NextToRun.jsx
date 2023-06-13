import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BgGradient, CustomButton } from '../../../components'
import { ConnectModal } from '../../../modals'

const NextToRun = () => {

    const raceTracks = [
        {
            track: 'Neo-Dubai',
            startTime: '2h 22m',
            eventType: 'Racing',
            distance: '2200M',
            entryFee: 'FREE',
            price: '0.09ETH',
            gates: '12/13'
        },
        {
            track: 'Neo-Dubai',
            startTime: '2h 22m',
            eventType: 'Racing',
            distance: '2200M',
            entryFee: 'FREE',
            price: '0.09ETH',
            gates: '12/13'
        },
        {
            track: 'Neo-Dubai',
            startTime: '2h 22m',
            eventType: 'Racing',
            distance: '2200M',
            entryFee: 'FREE',
            price: '0.09ETH',
            gates: '12/13'
        },
        {
            track: 'Neo-Dubai',
            startTime: '2h 22m',
            eventType: 'Racing',
            distance: '2200M',
            entryFee: '0.1ETH',
            price: '0.09ETH',
            gates: '12/13'
        },
        {
            track: 'Neo-Dubai',
            startTime: '2h 22m',
            eventType: 'Racing',
            distance: '2200M',
            entryFee: 'FREE',
            price: '0.09ETH',
            gates: '12/13'
        },
        {
            track: 'Neo-Dubai',
            startTime: '2h 22m',
            eventType: 'Racing',
            distance: '2200M',
            entryFee: 'FREE',
            price: '0.09ETH',
            gates: '12/13'
        },
    ]

    const navigate = useNavigate();
    const isConnected = useSelector((state) => state.auth.isConnected);

    const handleNavigate = () => {
        if (isConnected) {
            navigate('/racing/all-races');
        } else {
            openModal();
        }
    };

    // Modal Functions
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className='py-12 relative'>
            <BgGradient
                className={`right-0 top-[30%]`}
            />

            <BgGradient
                className={`bottom-0`}
            />
            <div className='container'>
                <p className='text-3xl font-semibold'>Next To Run</p>

                <table className='w-full divide-y divide-[#fff] divide-opacity-40 my-8'>
                    <thead>
                        <tr className='flex justify-between pl-12 py-2'>
                            {['track', 'event type', 'distance', 'entry Fees', 'prize', 'gates'].map((item, index) => {
                                return (
                                    <td key={index} className={`w-full uppercase text-textGrey ${index > 0 ? 'text-center' : ''}`}>{item}</td>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-[#fff] divide-opacity-10'>
                        {raceTracks.map((item, index) => (
                            <tr key={index} className={`flex items-center justify-between pl-12 py-4 `}>
                                <td className='w-full'>
                                    <p className='text-xl font-semibold'>{item.track}</p>
                                    <p className='text-sm text-textGrey'>Starting In {item.startTime}</p>
                                </td>

                                <td className='w-full text-center text-lg font-semibold'>{item.eventType}</td>
                                <td className='w-full text-center text-[#DCAB53] font-semibold'>{item.distance}</td>
                                <td className='w-full text-center '><p className={`${item.entryFee === 'FREE' ? 'bg-[#3A3434] text-[#DCAB53] px-3' : 'bg-[#DCAB53] text-[#3A3434] px-2'} inline-block py-1 font-semibold rounded-md`}>{item.entryFee}</p></td>
                                <td className='w-full text-center font-semibold'>{item.price} + XP</td>
                                <td className='w-full text-center font-semibold'>{item.gates}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='flex justify-center'>
                    <CustomButton
                        name={`Load More`}
                        task={handleNavigate}
                        className={`px-4 py-1`}
                    />

                    <ConnectModal
                        isOpen={isOpen}
                        closeModal={closeModal}
                    />
                </div>
            </div>
        </div>
    )
}

export default NextToRun