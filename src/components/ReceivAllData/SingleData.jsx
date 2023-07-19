import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Grid, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function SingleData({ item, xs, sm, md, lg }) {
    const [isHovered, setIsHovered] = useState(false);
    const firstImage = item?.imageURL[0][0];
    const secondImage = item?.imageURL[0][1];
    // console.log(firstImage)

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
            <Box
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{
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
                    <Link to={`/products/${item?._id}`}>
                        <img
                            src={isHovered ? `http://localhost:5000/${secondImage}` : `http://localhost:5000/${firstImage}`}
                            className='w-full h-[200px] mx-auto'
                            alt={item?.name} />
                    </Link>
                    <CardContent sx={{ padding: 0 }}>
                        <p className='text-center font-bold py-2'>{item?.name?.slice(0, 20)}</p>
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
        </Grid>
    )
}

export default SingleData