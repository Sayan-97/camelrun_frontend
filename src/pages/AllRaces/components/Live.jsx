import React from 'react'
import LiveImg from '../../../assets/racing/Live.png'

const Live = () => {
    return (
        <div className='space-y-6'>
            <p className='text-3xl text-center font-bold'>Live</p>
            <div className='relative'>
                <img src={LiveImg} alt="img" className='rounded-xl' />

                <div
                    className='absolute inset-0 rounded-xl flex items-end'
                    style={{
                        background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.81) 9.64%, rgba(0, 0, 0, 0) 55.43%)'
                    }}
                >

                </div>
            </div>
        </div>
    )
}

export default Live