import React from 'react'
import { AllRaceTracks, Live, Predict } from './components'

const AllRaces = () => {
    return (
        <div className='mt-28'>
            <AllRaceTracks />
            <div className='container grid md:grid-cols-2 gap-12 py-20'>
                <Live />
                <Predict />
            </div>
        </div>
    )
}

export default AllRaces