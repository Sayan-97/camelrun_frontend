import React from 'react'
import { NextToRun, RaceTracks, StreamingNow } from './components'

const Racing = () => {
    return (
        <div className='mt-28'>
            <StreamingNow />
            <RaceTracks />
            <NextToRun />
        </div>
    )
}

export default Racing