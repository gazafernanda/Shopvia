'use client';
import * as React from 'react';
import { Box, Typography, Container, Button, Divider, Stack } from '@mui/material';
import ProductCard from './ProductCard';

const newArrivals = [
    { id: 1, name: 'T-shirt with Tape Details', price: 120, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop', rating: 4.5 },
    { id: 2, name: 'Skinny Fit Jeans', price: 240, originalPrice: 260, discount: '-20%', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop', rating: 3.5 },
    { id: 3, name: 'Checkered Shirt', price: 180, image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1974&auto=format&fit=crop', rating: 4.5 },
    { id: 4, name: 'Sleeve Striped T-shirt', price: 130, originalPrice: 160, discount: '-30%', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop', rating: 4.5 },
];

const topSelling = [
    { id: 5, name: 'Vertical Striped Shirt', price: 212, originalPrice: 232, discount: '-20%', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop', rating: 5.0 },
    { id: 6, name: 'Courage Graphic T-shirt', price: 145, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2000&auto=format&fit=crop', rating: 4.0 },
    { id: 7, name: 'Loose Fit Bermuda Shorts', price: 80, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop', rating: 3.0 },
    { id: 8, name: 'Faded Skinny Jeans', price: 210, image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=1974&auto=format&fit=crop', rating: 4.5 },
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
                <Stack spacing={3}>
                    {newArrivals.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </Stack>
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
                <Stack spacing={3}>
                    {topSelling.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </Stack>
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
