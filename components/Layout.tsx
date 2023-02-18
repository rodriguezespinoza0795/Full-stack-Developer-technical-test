import React from 'react'
import { Container, AppBar, Toolbar, Box } from '@mui/material';
import Image from 'next/image'
import Footer from './Footer'
import Link from "next/link";


type LayoutProps = {
    children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Container disableGutters maxWidth={false}>
            <AppBar position="static">
                <Toolbar sx={{ background: "black" }}>
                    <Link href={"/"}>
                        <Image src="/KredFeed.svg" alt="KredFeed Logo" width={72} height={16} />
                    </Link>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{
                    minHeight: "85vh",
                    padding: "4rem 2rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {children}
            </Box>
            <Footer />
        </Container >
    )
}

export default Layout;