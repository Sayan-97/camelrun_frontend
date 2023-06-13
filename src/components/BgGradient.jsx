import React from 'react'

const BgGradient = ({ className }) => {
    return (
        <div
            className={`absolute w-52 h-52 ${className}`}
            style={{
                background: 'rgba(223, 176, 90, 0.4)',
                filter: 'blur(162px)'
            }}
        >

        </div>
    )
}

export default BgGradient