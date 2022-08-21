import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <Box
            component="span"
            sx={{
                display: "flex",
                flex: 1,
                padding: " 2rem 0",
                borderTop: "1px solid #eaeaea",
                justifyContent: "center",
                alignItems: "center"
            }}>
            Hecho por David Rodriguez para{' '}
            <Box component="span" sx={{ height: "1rem", marginLeft: "0.5rem" }}>
                <Image src="/KredFeed.svg" alt="KredFeed Logo" width={72} height={16} />
            </Box>
        </Box>
    )
}

export default Footer