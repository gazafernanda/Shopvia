'use client';
import * as React from 'react';
import { Box, Typography, Button, Container, Grid, Stack } from '@mui/material';
import Image from 'next/image';

export default function Hero() {
    return (
        <Box
            sx={{
                bgcolor: '#F2F0F1',
                pt: { xs: 4, md: 0 },
                overflow: 'hidden',
                position: 'relative',
                backgroundImage: 'linear-gradient(rgba(242, 240, 241, 0.85), rgba(242, 240, 241, 0.85)), url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Grid container alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }} sx={{ pt: { md: 8 }, pb: { xs: 4, md: 8 } }}>
                        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, lineHeight: 1, mb: 3 }}>
                            FIND CLOTHES<br />THAT MATCH<br />YOUR STYLE
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '540px', fontSize: '1rem' }}>
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: 'black',
                                color: 'white',
                                px: 8,
                                py: 2,
                                mb: 6,
                                width: { xs: '100%', sm: 'auto' },
                                '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                            }}
                        >
                            Shop Now
                        </Button>

                        <Grid container spacing={{ xs: 2, sm: 4 }} sx={{ mt: 2 }}>
                            <Grid size={{ xs: 6, sm: 4 }}>
                                <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.5rem' } }}>200+</Typography>
                                <Typography variant="body2" color="text.secondary">International Brands</Typography>
                            </Grid>
                            <Grid size={{ xs: 6, sm: 4 }}>
                                <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.5rem' } }}>2,000+</Typography>
                                <Typography variant="body2" color="text.secondary">High-Quality Products</Typography>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.5rem' } }}>30,000+</Typography>
                                <Typography variant="body2" color="text.secondary">Happy Customers</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{
                        position: 'relative',
                        height: { xs: '400px', sm: '500px', md: '660px' },
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
