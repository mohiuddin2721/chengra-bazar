import React from 'react';

const ProductsFilter = () => {
    return (
        <div className='grid grid-cols-4 gap-2'>
            <div>
                <FilterSection />
            </div>

            <div>
                <div>
                    <SortSection />
                </div>

                <div>
                    <ProductList />
                </div>
            </div>
        </div>
    );
};

export default ProductsFilter;