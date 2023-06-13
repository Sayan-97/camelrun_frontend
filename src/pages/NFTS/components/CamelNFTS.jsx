import React from 'react'

const CamelNFTS = ({ img, title, cost, onClick }) => {
    return (
        <div className='flex flex-col'>
            <img
                onClick={onClick}
                src={img} 
                alt="img" 
                className='rounded-xl cursor-pointer'
            />
            <p className='mt-2 text-2xl font-bold pl-2'>{title}</p>
            <p className='font-medium text-textGrey pl-2'>{cost}</p>
        </div>
    )
}

export default CamelNFTS