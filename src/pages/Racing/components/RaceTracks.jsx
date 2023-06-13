import React from 'react'

import Galactica from '../../../assets/racing/galactica.png'
import NeoDubai from '../../../assets/racing/neo_dubai.png'
import Titan from '../../../assets/racing/titan.png'
import { BgGradient } from '../../../components'

const RaceTracks = () => {

    const tracks = [
        { imgSrc: Galactica, title: 'Galactica', startTime: '9h 13m', value: 'FREE' },
        { imgSrc: NeoDubai, title: 'Neo-Dubai', startTime: '9h 13m', value: 'FREE' },
        { imgSrc: Titan, title: 'Titan', startTime: '9h 13m', value: 'FREE' },
    ]

    return (
        <div className='py-12 relative'>
            <BgGradient 
                className={`right-0 -top-[20%]`}
            />
            <div className='container space-y-8'>
                <p className='text-3xl font-semibold'>Race Tracks</p>
                
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {tracks.map((item,index) => (
                        <div key={index} className='relative'>
                            <img src={item.imgSrc} alt="img" className='rounded-xl'/>
                            <div 
                                className='absolute inset-0 rounded-xl flex items-end'
                                style={{
                                    background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.81) 9.64%, rgba(0, 0, 0, 0) 55.43%)'
                                }}
                            >
                                <div className='w-full flex items-end justify-between p-4'>
                                    <div className='space-y-2'>
                                        <p className='text-2xl font-semibold'>{item.title}</p>
                                        <div className='bg-white bg-opacity-[26%] inline-block px-2 rounded'>
                                            <p>Starting In {item.startTime}</p>
                                        </div>
                                    </div>
                                    <div className='bg-white bg-opacity-[26%] px-2 py-1 rounded'>
                                        <p className='font-medium'>{item.value}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RaceTracks