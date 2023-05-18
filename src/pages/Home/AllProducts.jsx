import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { component_container } from '../../Styles/ComponentStyle';
import SingleData from '../../components/ReceivAllData/SingleData';
import useGetAllData from '../../Hooks/useGetAllData';

function AllProducts() {
  const { allProduct, isLoading } = useGetAllData();

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <Box sx={component_container} className='my-10 delay-500 mx-auto'>
      <Typography className='p-4 font-bold'>
        Just for you
      </Typography>
      <Grid container spacing={1}>
        {
          allProduct?.map(item =>
            <SingleData
              key={item._id}
              item={item}
              xs={6}
              sm={6}
              md={3}
              lg={2}
            />
          )
        }
      </Grid>
    </Box>
  )
}

export default AllProducts