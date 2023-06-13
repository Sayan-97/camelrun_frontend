import React from 'react'

const CustomButton = ({ name, task, className }) => {
    return (
        <button
            onClick={task}
            className={`bg-gradient text-black text-lg font-semibold rounded-md ${className}`}
        >
            {name}
        </button>
    )
}

export default CustomButton