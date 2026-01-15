'use client';
import * as React from 'react';
import { Box } from '@mui/material';
import TopBanner from './TopBanner';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
    children: React.ReactNode;
    showBanner?: boolean;
}

export default function PageLayout({ children, showBanner = true }: PageLayoutProps) {
    return (
        <Box component="main" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {showBanner && <TopBanner />}
            <Navbar />
            <Box sx={{ flex: 1 }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
}
