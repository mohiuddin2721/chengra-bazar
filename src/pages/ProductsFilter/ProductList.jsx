import React from 'react';
import SingleData from '../../components/ReceivAllData/SingleData';
import { Grid } from '@mui/material';

const ProductList = ({ searchResults }) => {
    return (
        <div>
            <p className={`text-center`}>total searching product {searchResults.length}</p>
            <Grid container spacing={1}>
                {
                    searchResults?.map((item, index) =>
                        <SingleData
                            key={item._id}
                            index={index}
                            item={item}
                            xs={6}
                            sm={6}
                            md={3}
                            lg={3}
                        />
                    )
                }
            </Grid>
        </div>
    );
};

export default ProductList;