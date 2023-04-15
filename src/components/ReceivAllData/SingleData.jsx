import React from 'react';
import { Box, Button, Card, CardContent, Grid, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function SingleData({ data }) {
    // console.log(data)
    return (
        <Grid item xs={6} sm={6} md={3} lg={2}>
            {
                data?.product.map((d, i) =>
                    <Box key={i} sx={{
                        position: 'relative',
                        mb: 2,
                        '& :hover': {
                            'span': {
                                display: 'block',
                            },
                            'secondImg': {
                                zIndex: 1,
                            }
                        }
                    }}>
                        <Card sx={{
                            cursor: 'pointer',
                            maxWidth: '190px',
                            height: '280px',
                            position: 'relative',
                        }}>
                            <Link to={`/${d?.id}`}>
                                <img
                                    src={d?.img[0]}
                                    className='w-full h-[200px] mx-auto'
                                    alt={d?.name} />
                            </Link>
                            <CardContent sx={{ padding: 0 }}>
                                <p className='text-center font-bold py-2'>{d?.name.slice(0, 20)}</p>
                                <Box className='flex justify-center mb-10'>
                                    <Button variant="contained" size="small">Add to cart</Button>
                                </Box>
                                <span className='absolute top-2 right-0 hidden'>
                                    <IconButton>
                                        <FavoriteIcon className='text-red-600 bg-slate-200 rounded-md' />
                                    </IconButton>
                                </span>
                                <span className='absolute top-10 right-0 hidden'>
                                    <IconButton>
                                        <FiExternalLink className='text-green-600 bg-slate-200 rounded-md' />
                                    </IconButton>
                                </span>
                            </CardContent>
                        </Card>
                    </Box>
                )
            }


        </Grid>
    )
}

export default SingleData