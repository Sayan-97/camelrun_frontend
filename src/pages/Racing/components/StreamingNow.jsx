import React from 'react'
import RaceImg from '../../../assets/racing/camel_race.png'

const StreamingNow = () => {
    return (
        <div className='py-12'>
            <div className='container space-y-8'>
                <p className='text-3xl font-semibold text-center'>Streaming Now</p>
                <div className='w-full h-[400px] bg-gradient rounded-xl p-[1.5px]'>
                    <img src={RaceImg} alt="img" className='object-cover w-full h-full rounded-xl'/>
                </div>
            </div>
        </div>
    )
}

export default StreamingNow