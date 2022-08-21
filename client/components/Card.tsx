import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CardComponent = ({ href, title, description }: { href: string, title: string, description: string }) => {
    return (
        <Card
            sx={{
                margin: "1rem",
                padding: "1.5rem",
                maxWidth: "300px"
            }}>
            <a
                target="_blank"
                rel="noreferrer"
                href={href}
            >
                <Typography
                    variant="h5"
                    gutterBottom
                    fontWeight='bold'
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >{title} <ArrowForwardIcon />
                </Typography>
                <Typography
                    variant="body1"
                >
                    {description}
                </Typography>
            </a>
        </Card>
    )
}

export default CardComponent