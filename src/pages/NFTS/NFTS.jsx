import React, { useState } from 'react'
// Camel NFTS
import { CamelNftCards } from '../../constants/constants'
import { CamelNFTS, FilterNFTS } from './components'

const NFTS = () => {

    const category = [
        { name: 'All', state: 'All' },
        { name: 'Omania (Oman)', state: 'Omania' },
        { name: 'Hainiyat (Saudi Arabia)', state: 'Hainiyat' },
        { name: 'Mahaliyat (UAE)', state: 'Mahaliyat' },
    ]

    const [selectedCategory, setSelectedCategory] = useState('All')
    const filteredNfts = selectedCategory === 'All' ? CamelNftCards : CamelNftCards.filter(nft => nft.category === selectedCategory)
    const totalNfts = filteredNfts.length
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Modal Function
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className='mt-28 container'>
            <div className='flex items-center justify-between'>
                <p className='text-lg font-medium'>{selectedCategory} ({totalNfts})</p>
                <FilterNFTS 
                    category={category}
                    handleCategoryChange={handleCategoryChange}
                />
            </div>
            <div className='py-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {filteredNfts.map((item, index) => (
                    <CamelNFTS
                        key={index}
                        img={item.imgSrc}
                        title={item.title}
                        cost={item.cost}
                        onClick={openModal}
                    />
                ))}
            </div>
        </div>
    )
}

export default NFTS