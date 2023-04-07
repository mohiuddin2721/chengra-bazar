import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { component_container } from '../../Styles/ComponentStyle'

const sortCartData = [
    {
        link: 'https://icms-image.slatic.net/images/ims-web/beea236c-559f-41f8-9ec2-17c4d47be899.png',
        name: 'free delivery',
    },
    {
        link: 'https://icms-image.slatic.net/images/ims-web/fb8aaa8f-6b54-4fc1-81f7-b9ac44c4d4d5.png',
        name: 'mart',
    },
    {
        link: 'https://icms-image.slatic.net/images/ims-web/e5c45443-9535-42fa-89a0-ab90f53ca937.png',
        name: 'boys fashion',
    },
    {
        link: 'https://icms-image.slatic.net/images/ims-web/162a7cf8-e9d7-4297-809d-68cfb92a4993.png',
        name: 'girls fashion',
    },
    {
        link: 'https://icms-image.slatic.net/images/ims-web/a213d8c9-43dc-43ea-8fe3-d302bc74ba0a.png',
        name: 'beauty glamour',
    },
]

function ShortCart() {
    return (
        <Box
            sx={component_container}
            style={{
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'space-around',
                textAlign: 'center',
                // justifyItems: 'center',
                // justifySelf: 'center',
            }}>
            {
                sortCartData?.map((data, i) =>
                    <Box key={i}
                        className='hover:text-[#ec99aa]'
                        sx={{
                            display: {
                                xs: 'flex-column',
                                sm: 'flex-column',
                                md: 'flex',
                            },
                            backgroundColor: '#ffffff',
                            padding: '4px',
                            borderRadius: '20px',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}>
                        <img src={data?.link} className='w-[32px] h-[32px] mr-3 ml-5' alt="" />
                        <Typography>
                            {data?.name}
                        </Typography>
                    </Box>
                )
            }
        </Box>
    )
}

export default ShortCart