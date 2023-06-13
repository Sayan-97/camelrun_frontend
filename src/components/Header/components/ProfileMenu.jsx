import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import UserImg from '../../../assets/navbar/user.png'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BiExit } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { disconnect } from '../../../redux/reducers/authReducer'

const ProfileMenu = () => {

    const dispatch = useDispatch()
    const handleDisconnect = () => {
        dispatch(disconnect())
    }

    return (
        <Popover className="relative">
            {({ open, close }) => (
                <>
                    <Popover.Button className={`outline-none bg-lightGold bg-opacity-10 px-2 py-1 rounded-2xl flex items-center `}>
                        <img src={UserImg} alt="img" />
                        <MdKeyboardArrowDown className={`text-2xl text-lightGold ${open ? 'transform rotate-180' : ''}`} />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute right-0 z-30 mt-3 bg-accent w-72 py-1 rounded-xl divide-y divide-divide text-lg font-medium grid shadow-2xl">
                            <p className='flex items-center gap-2 p-2 hover:bg-modalColor cursor-pointer' onClick={() => {handleDisconnect(); close}}><BiExit className='text-2xl'/> Disconnect</p>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default ProfileMenu