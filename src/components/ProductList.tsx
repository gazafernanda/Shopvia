'use client';
import * as React from 'react';
import { Box, Typography, Container, Button, Divider, Grid } from '@mui/material';
import ProductCard from './ProductCard';

const newArrivals = [
    { id: 1, name: 'T-shirt with Tape Details', price: 120, image: '/hero_models.png', rating: 4.5 },
    { id: 2, name: 'Skinny Fit Jeans', price: 240, originalPrice: 260, discount: '-20%', image: '/hero_models.png', rating: 3.5 },
    { id: 3, name: 'Checkered Shirt', price: 180, image: '/hero_models.png', rating: 4.5 },
    { id: 4, name: 'Sleeve Striped T-shirt', price: 130, originalPrice: 160, discount: '-30%', image: '/hero_models.png', rating: 4.5 },
];

const topSelling = [
    { id: 5, name: 'Vertical Striped Shirt', price: 212, originalPrice: 232, discount: '-20%', image: '/hero_models.png', rating: 5.0 },
    { id: 6, name: 'Courage Graphic T-shirt', price: 145, image: '/hero_models.png', rating: 4.0 },
    { id: 7, name: 'Loose Fit Bermuda Shorts', price: 80, image: '/hero_models.png', rating: 3.0 },
    { id: 8, name: 'Faded Skinny Jeans', price: 210, image: '/hero_models.png', rating: 4.5 },
];

export default function ProductList() {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            {/* NEW ARRIVALS */}
            <Box sx={{ mb: { xs: 8, md: 12 } }}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        mb: { xs: 4, md: 8 },
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        fontFamily: 'var(--font-integral)'
                    }}
                >
                    NEW ARRIVALS
                </Typography>
                <Grid container spacing={3}>
                    {newArrivals.map((product) => (
                        <Grid item key={product.id} xs={6} sm={6} md={3} sx={{ display: 'flex' }}>
                            <ProductCard {...product} />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: 'rgba(0,0,0,0.1)',
                            color: 'black',
                            px: { xs: 4, md: 8 },
                            py: 1.5,
                            borderRadius: 62,
                            '&:hover': { borderColor: 'black', bgcolor: 'transparent' }
                        }}
                    >
                        View All
                    </Button>
                </Box>
            </Box>

            <Divider sx={{ mb: { xs: 8, md: 12 } }} />

            {/* TOP SELLING */}
            <Box sx={{ mb: 4 }}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        mb: { xs: 4, md: 8 },
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        fontFamily: 'var(--font-integral)'
                    }}
                >
                    TOP SELLING
                </Typography>
                <Grid container spacing={3}>
                    {topSelling.map((product) => (
                        <Grid item key={product.id} xs={6} sm={6} md={3} sx={{ display: 'flex' }}>
                            <ProductCard {...product} />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: 'rgba(0,0,0,0.1)',
                            color: 'black',
                            px: { xs: 4, md: 8 },
                            py: 1.5,
                            borderRadius: 62,
                            '&:hover': { borderColor: 'black', bgcolor: 'transparent' }
                        }}
                    >
                        View All
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
