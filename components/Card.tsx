import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

interface CardProps {
    href: string,
    title: string,
    description: string,
    external?: boolean
}

const Content = ({ title, description }: { title: string, description: string }) => {
    return (
        <>
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
        </>
    );
};

const CardComponent = ({ href, title, description, external = true }: CardProps) => {
    return (
        <Card
            sx={{
                margin: "1rem",
                padding: "1.5rem",
                width: "300px",
                height: "140px"
            }}>
            {
                external
                    ? (
                        < a
                            target="_blank"
                            rel="noreferrer"
                            href={href}
                        >

                            <Content
                                title={title}
                                description={description}
                            />
                        </a>
                    ) : (
                        <Link href={href}>
                            <a>
                                <Content
                                    title={title}
                                    description={description}
                                />
                            </a>
                        </Link>
                    )
            }
        </Card>
    )
}

export default CardComponent