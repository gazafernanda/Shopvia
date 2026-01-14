'use client';
import * as React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import Image from 'next/image';

export default function Hero() {
    return (
        <Box sx={{ position: 'relative', height: '600px', width: '100%', overflow: 'hidden' }}>
            <Image
                src="/hero.png"
                alt="Hero Banner"
                fill
                style={{ objectFit: 'cover' }}
                priority
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ maxWidth: '600px', color: 'white' }}>
                        <Typography variant="overline" sx={{ letterSpacing: 2, fontWeight: 700 }}>
                            NEW COLLECTION 2026
                        </Typography>
                        <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, fontWeight: 800, mb: 2, lineHeight: 1.1 }}>
                            Elevate Your Living Space
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}>
                            Discover our curated selection of modern furniture and premium electronics designed for the sophisticated home.
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" size="large" sx={{ py: 1.5, px: 4, borderRadius: 0, fontWeight: 700 }}>
                                Shop Now
                            </Button>
                            <Button variant="outlined" size="large" sx={{ py: 1.5, px: 4, borderRadius: 0, fontWeight: 700, color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                                View Collection
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
