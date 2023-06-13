import React, {useState, Fragment} from 'react'
import { useDispatch } from 'react-redux'
import { connect } from '../redux/reducers/authReducer'
import { Dialog, Transition } from '@headlessui/react'
import { CustomButton } from '../components'
import Metamask from '../assets/icons/metamask.png'
import TrustWallet from '../assets/icons/trustwallet.png'

const ConnectModal = ({ isOpen, closeModal }) => {

    const dispatch = useDispatch()
    const handleConnect = () => {
        dispatch(connect())
    }

    const [active, setActive] = useState('ethereum')

    const EthWallets = [
        { icon: Metamask, name: 'Metamask' },
        { icon: TrustWallet, name: 'Trust Wallet' },
    ]

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-[50%] rounded-xl bg-modalColor p-6 shadow-xl transition-all flex flex-col items-start gap-6">
                                <p className='text-3xl font-bold'>CONNECT YOUR WALLET</p>
                                <p className='text-md font-semibold uppercase'>Choose how you want to connect</p>
                                <div className='flex items-center gap-8'>
                                    {['ethereum', 'solana', 'polygon'].map((item, index) => {
                                        return (
                                            <p key={index} className={` ${active === item ? 'text-xl uppercase border-b-2 border-lightGold' : 'text-lg capitalize'} font-medium cursor-pointer`} onClick={() => setActive(item)}>{item}</p>
                                        )
                                    })}
                                </div>
                                <p className='font-semibold'>POPULAR</p>
                                <div className='w-full bg-[#3A3434] rounded-xl grid divide-y divide-divide'>
                                    {EthWallets.map((item, index) => {
                                        return (
                                            <div key={index} className='px-6 py-4 flex items-center justify-between'>
                                                <div className='flex items-center gap-6'>
                                                    <img src={item.icon} alt="img" className='w-12' />
                                                    <p className='text-lg font-normal'>{item.name}</p>
                                                </div>
                                                <CustomButton
                                                    name={`Connect`}
                                                    task={() => { handleConnect(); closeModal() }}
                                                    className={`px-4 py-1`}
                                                />
                                            </div>
                                        )
                                    })}
                                    <p className='py-5 font-medium'>See More</p>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default ConnectModal