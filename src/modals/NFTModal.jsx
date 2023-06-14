import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdClose } from 'react-icons/md'
import { SiOpensea } from 'react-icons/si'

const NFTModal = ({ isOpen, closeModal, selectedNft }) => {
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
                            <Dialog.Panel className="w-[60%] rounded-xl bg-modalColor p-6 shadow-xl transition-all">
                                <div className='flex justify-end text-xl pb-4'>
                                    <MdClose 
                                        onClick={closeModal}
                                        className='cursor-pointer'
                                    />
                                </div>
                                <div className='flex items-start justify-between gap-6'>
                                    <div className='w-[40%]'>
                                        <img src={selectedNft.imgSrc} alt="img" className='w-full rounded-xl' />
                                    </div>
                                    <div className='flex-grow'>
                                        <div className='bg-gradient p-[1px] rounded-tr-xl rounded-bl-xl'>
                                            <div className='bg-backgroundColor p-4 flex items-center justify-between rounded-tr-xl rounded-bl-xl'>
                                                <p className='text-2xl font-extrabold bg-gradient text-transparent bg-clip-text uppercase'>{selectedNft.title}</p>
                                                <SiOpensea className='text-xl text-lightGold'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default NFTModal