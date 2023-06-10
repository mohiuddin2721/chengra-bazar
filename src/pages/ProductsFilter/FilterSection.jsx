import React from 'react';
import FilterBgColor from '../../components/filterBgColor/FilterBgColor';

const FilterSection = ({ filterBgColor, handleColor }) => {

    return (
        <div className={`${filterBgColor} rounded min-h-[100vh]`}>
            <p className='text-white text-center'>Filter section</p>
            <FilterBgColor handleColor={handleColor} />
        </div>
    );
};

export default FilterSection;