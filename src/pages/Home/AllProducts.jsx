import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { component_container } from '../../Styles/ComponentStyle';
import SingleData from '../../components/ReceivAllData/SingleData';
import { categories } from '../../Utils/ConstantData';
import useGetAllData from '../../Hooks/useGetAllData';
import { useQuery } from '@tanstack/react-query';

function AllProducts() {
  // const { data, isLoading } = useQuery({
  //   queryKey: ['getAllProducts'],
  //   queryFn: async () => {
  //     const res = await fetch('http://localhost:5000/api/v1/products');
  //     const data = res.json();
  //     return data;
  //   }
  // });
  const { data, isLoading } = useGetAllData();
  const allProduct = data?.data;
  // console.log(allProduct)

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <Box sx={component_container} className='my-10 delay-500'>
      <Typography className='p-4 font-bold'>
        Just for you
      </Typography>
      <Grid container spacing={1}>
        {
          allProduct?.map(item =>
            <SingleData key={item._id} item={item} />
          )
        }
      </Grid>
    </Box>
  )
}

export default AllProducts