import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { component_container } from '../../Styles/ComponentStyle';
import SingleData from '../../components/ReceivAllData/SingleData';
import { categories } from '../../Utils/ConstantData';

function AllProducts() {
  return (
    <Box sx={component_container} className='my-10 delay-500'>
      <Typography className='p-4 font-bold'>
        Just for you
      </Typography>
      <Grid container spacing={1}>
        {
          categories?.map((data, i) =>
            <SingleData key={i} data={data} />
          )
        }
      </Grid>
    </Box>
  )
}

export default AllProducts