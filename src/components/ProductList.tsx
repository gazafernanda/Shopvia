'use client';
import * as React from 'react';
import { Grid, Box, Typography, Container, Tabs, Tab } from '@mui/material';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'Nordic Lounge Chair', price: 299.00, image: '/chair.png', category: 'Furniture', rating: 4.5 },
    { id: 2, name: 'Aura Smart Speaker', price: 149.00, image: '/speaker.png', category: 'Electronics', rating: 4.8 },
    { id: 3, name: 'Minimalist Side Table', price: 120.00, image: '/chair.png', category: 'Furniture', rating: 4.2 },
    { id: 4, name: 'Wireless Noise Cancelling', price: 199.00, image: '/speaker.png', category: 'Electronics', rating: 4.7 },
    { id: 5, name: 'Ergonomic Desk Chair', price: 350.00, image: '/chair.png', category: 'Furniture', rating: 4.9 },
    { id: 6, name: 'Bluetooth Home Hub', price: 89.00, image: '/speaker.png', category: 'Electronics', rating: 4.4 },
    { id: 7, name: 'Contemporary Lamp', price: 75.00, image: '/chair.png', category: 'Furniture', rating: 4.6 },
    { id: 8, name: 'Portable Bass Box', price: 59.00, image: '/speaker.png', category: 'Electronics', rating: 4.3 },
];

export default function ProductList() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                    Popular Products
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
                    Explore our most loved items from the current season. Quality meets design in every piece.
                </Typography>
            </Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4, display: 'flex', justifyContent: 'center' }}>
                <Tabs value={value} onChange={handleChange} aria-label="product categories">
                    <Tab label="All Products" sx={{ fontWeight: 700 }} />
                    <Tab label="Furniture" sx={{ fontWeight: 700 }} />
                    <Tab label="Electronics" sx={{ fontWeight: 700 }} />
                </Tabs>
            </Box>

            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={3}>
                        <ProductCard {...product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
