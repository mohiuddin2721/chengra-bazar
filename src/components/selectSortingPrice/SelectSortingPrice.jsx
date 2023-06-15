import React from 'react';

const SelectSortingPrice = ({ selectedValue, setSelectedValue }) => {

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    
    return (
        <select
            className='w-full'
            value={selectedValue}
            onChange={handleSelectChange}
        >
            <option value="Highest price">Highest price</option>
            <option value="Lowest price">Lowest price</option>
            <option value="Price (A-Z)">Price (A-Z)</option>
            <option value="Price (Z-A">Price (Z-A)</option>
        </select>
    );
};

export default SelectSortingPrice;