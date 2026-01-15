'use client';
import * as React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Breadcrumbs from '@/components/Breadcrumbs';

const brands = [
    { name: 'Nike', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop', products: 156 },
    { name: 'Adidas', logo: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop', products: 142 },
    { name: 'Puma', logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop', products: 98 },
    { name: 'Levi\'s', logo: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2070&auto=format&fit=crop', products: 87 },
    { name: 'Zara', logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop', products: 234 },
    { name: 'H&M', logo: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1974&auto=format&fit=crop', products: 312 },
    { name: 'Uniqlo', logo: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2010&auto=format&fit=crop', products: 189 },
    { name: 'Calvin Klein', logo: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1972&auto=format&fit=crop', products: 76 },
    { name: 'Gucci', logo: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop', products: 45 },
    { name: 'Prada', logo: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop', products: 38 },
    { name: 'Balenciaga', logo: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop', products: 54 },
    { name: 'Versace', logo: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=2070&auto=format&fit=crop', products: 29 },
];

export default function BrandsPage() {
    return (
        <PageLayout>
            <Breadcrumbs items={[{ label: 'Brands' }]} />

            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: 'black',
                    py: { xs: 6, md: 10 },
                    mb: 6,
                    textAlign: 'center'
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'white',
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontFamily: 'var(--font-integral)',
                            mb: 2
                        }}
                    >
                        OUR BRANDS
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '0.95rem', md: '1.1rem' }, maxWidth: 600, mx: 'auto' }}>
                        Shop from 200+ international and local brands. Find your favorite styles from the world&apos;s best fashion houses.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, mb: 8 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        mb: 4
                    }}
                >
                    Featured Brands
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {brands.map((brand) => (
                        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={brand.name}>
                            <Link href="/shop" style={{ textDecoration: 'none' }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                                            borderColor: 'black'
                                        },
                                        '&:hover .brand-image': { transform: 'scale(1.05)' }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: '100%',
                                            paddingTop: '75%',
                                            bgcolor: '#F0EEED',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <Image
                                            src={brand.logo}
                                            alt={brand.name}
                                            fill
                                            className="brand-image"
                                            style={{
                                                objectFit: 'cover',
                                                transition: 'transform 0.4s ease-in-out'
                                            }}
                                            sizes="(max-width: 600px) 50vw, 25vw"
                                        />
                                    </Box>
                                    <Box sx={{ p: { xs: 2, md: 3 } }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: { xs: '1rem', md: '1.2rem' },
                                                mb: 0.5,
                                                color: 'black'
                                            }}
                                        >
                                            {brand.name}
                                        </Typography>
                                        <Typography sx={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.85rem' }}>
                                            {brand.products} Products
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </PageLayout>
    );
}
