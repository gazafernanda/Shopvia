'use client';
import * as React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopBanner from '@/components/TopBanner';

export default function NotFound() {
    return (
        <Box component="main" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <TopBanner />
            <Navbar />

            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pt: { xs: 8, md: 12 },
                pb: { xs: 20, md: 25 } // Extra space for the overlapping newsletter in footer
            }}>
                <Container maxWidth="md">
                    <Stack spacing={2} alignItems="center" textAlign="center">
                        <Box sx={{ position: 'relative', mb: 4 }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '8rem', md: '12rem' },
                                    fontWeight: 900,
                                    lineHeight: 1,
                                    fontFamily: 'var(--font-integral)',
                                    color: '#f2f2f2',
                                    userSelect: 'none'
                                }}
                            >
                                404
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontWeight: 900,
                                    fontFamily: 'var(--font-integral)',
                                    whiteSpace: 'nowrap',
                                    fontSize: { xs: '1.5rem', md: '2.5rem' },
                                    letterSpacing: '0.2em'
                                }}
                            >
                                PAGE NOT FOUND
                            </Typography>
                        </Box>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ maxWidth: '500px', mx: 'auto', mb: 4, fontSize: '1.1rem' }}
                        >
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </Typography>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <Link href="/" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: 'black',
                                        color: 'white',
                                        px: 6,
                                        py: 2,
                                        borderRadius: 62,
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                                    }}
                                >
                                    Go to Homepage
                                </Button>
                            </Link>
                            <Link href="/shop" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'rgba(0,0,0,0.2)',
                                        color: 'black',
                                        px: 6,
                                        py: 2,
                                        borderRadius: 62,
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        '&:hover': { borderColor: 'black', bgcolor: 'transparent' }
                                    }}
                                >
                                    Browse Shop
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
