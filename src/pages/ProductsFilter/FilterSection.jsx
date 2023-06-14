import React from 'react';
import FilterContent from '../../components/filterContent/FilterContent';

const FilterSection = ({ filterBgColor, handleColor, setIsOpenFilterDrawer, isOpenFilterDrawer }) => {

    return (
        <div className={`${filterBgColor} rounded min-h-[100vh]`}>
            <FilterContent
                filterBgColor={filterBgColor}
                handleColor={handleColor}
                setIsOpenFilterDrawer={setIsOpenFilterDrawer}
                isOpenFilterDrawer={isOpenFilterDrawer}
            />
        </div>
    );
};

export default FilterSection;