import React from 'react'
import PredictImg from '../../../assets/racing/Predict.png'

const Predict = () => {
    return (
        <div className='space-y-6'>
            <p className='text-3xl text-center font-bold'>Predict</p>
            <div className='relative'>
                <img src={PredictImg} alt="img" className='rounded-xl' />

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

export default Predict