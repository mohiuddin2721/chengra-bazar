import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Grid, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Stars from '../stars/Stars';

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
                }}>
                    <Link to={`/products/${item?._id}`}>
                        <img
                            src={isHovered ? `http://localhost:5000/${secondImage}` : `http://localhost:5000/${firstImage}`}
                            className='w-full h-[200px] mx-auto'
                            alt={item?.name} />
                    </Link>
                    <CardContent sx={{ padding: 0 }}>
                        <p className='text-center font-bold py-2'>{item?.name}</p>
                        <div className='flex ml-2'>
                            <p className='text-xs font-thin flex'>
                                BDT
                                <span className='font-bold text-xl ml-1'>{item?.price}</span>
                            </p>
                            {/* {item?.prePrice && <p className='text-xs line-through'>List: BDT {item?.prePrice}</p>} */}
                            <p className='text-xs line-through inline-block align-bottom ml-2'>List: BDT 1500</p>
                        </div>
                        <div className="flex mb-1 ml-2">
                            <Stars ratting={item?.ratting} />
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    )
}

export default SingleData