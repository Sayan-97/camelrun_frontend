import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import FilterImg from '../../../assets/icons/filter.png'

const FilterNFTS = ({ category, handleCategoryChange }) => {
    return (
        <Popover className="relative">
            {({ open, close }) => (
                <>
                    <Popover.Button className={`outline-none bg-gradient p-[1.5px] rounded-md`}>
                        <p className='bg-backgroundColor px-4 py-1 text-lg font-medium rounded-md flex items-center gap-2 text-primaryGold'><img src={FilterImg} alt="img" className='w-5' /> Filter</p>
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
                        <Popover.Panel className="absolute right-0 z-30 mt-3 bg-modalColor w-72 p-4 rounded-xl divide-y divide-divide text-lg font-medium grid shadow-2xl">
                            {category.map((item, index) => {
                                return (
                                    <span key={index} onClick={() => { handleCategoryChange(item.state); close() }} className={`p-4 hover:bg-accent cursor-pointer`}>{item.name}</span>
                                )
                            })}
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default FilterNFTS