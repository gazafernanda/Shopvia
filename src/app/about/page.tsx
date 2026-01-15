'use client';
import * as React from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import Breadcrumbs from '@/components/Breadcrumbs';

const stats = [
    { icon: <StorefrontIcon sx={{ fontSize: 40 }} />, value: '200+', label: 'International Brands' },
    { icon: <GroupsIcon sx={{ fontSize: 40 }} />, value: '30,000+', label: 'Happy Customers' },
    { icon: <VerifiedIcon sx={{ fontSize: 40 }} />, value: '2,000+', label: 'Quality Products' },
    { icon: <LocalShippingIcon sx={{ fontSize: 40 }} />, value: '50+', label: 'Countries Served' },
];

const values = [
    { title: 'Quality First', description: 'We source only the finest materials and partner with brands that share our commitment to excellence.' },
    { title: 'Customer Focus', description: 'Your satisfaction is our priority. We go above and beyond to ensure a seamless shopping experience.' },
    { title: 'Sustainability', description: 'We are committed to reducing our environmental impact through responsible sourcing and eco-friendly practices.' },
    { title: 'Innovation', description: 'We continuously evolve to bring you the latest trends and technologies in fashion retail.' },
];

export default function AboutPage() {
    return (
        <PageLayout>
            <Breadcrumbs items={[{ label: 'About Us' }]} />

            {/* Hero Section */}
            <Box sx={{ bgcolor: '#F2F0F1', py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                                    fontFamily: 'var(--font-integral)',
                                    mb: 3
                                }}
                            >
                                OUR STORY
                            </Typography>
                            <Typography sx={{ color: 'rgba(0,0,0,0.7)', lineHeight: 1.9, mb: 3 }}>
                                Founded in 2020, Shopvia started with a simple mission: to make quality fashion accessible to everyone. What began as a small online boutique has grown into a global destination for style-conscious shoppers.
                            </Typography>
                            <Typography sx={{ color: 'rgba(0,0,0,0.7)', lineHeight: 1.9 }}>
                                We believe that fashion is more than just clothing—it&apos;s a form of self-expression. That&apos;s why we curate collections from over 200 international brands, ensuring that everyone can find pieces that match their unique style.
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    paddingTop: '80%',
                                    borderRadius: '30px',
                                    overflow: 'hidden'
                                }}
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                                    alt="Shopvia Store"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Stats Section */}
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <Grid container spacing={4}>
                    {stats.map((stat) => (
                        <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
                            <Stack alignItems="center" textAlign="center">
                                <Box sx={{ color: 'black', mb: 2 }}>{stat.icon}</Box>
                                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>{stat.value}</Typography>
                                <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>{stat.label}</Typography>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Values Section */}
            <Box sx={{ bgcolor: '#F0F0F0', py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                            fontFamily: 'var(--font-integral)',
                            textAlign: 'center',
                            mb: { xs: 5, md: 8 }
                        }}
                    >
                        OUR VALUES
                    </Typography>

                    <Grid container spacing={4}>
                        {values.map((value) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={value.title}>
                                <Box
                                    sx={{
                                        bgcolor: 'white',
                                        borderRadius: '20px',
                                        p: { xs: 3, md: 4 },
                                        height: '100%',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': { transform: 'translateY(-4px)' }
                                    }}
                                >
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>{value.title}</Typography>
                                    <Typography sx={{ color: 'rgba(0,0,0,0.7)', lineHeight: 1.8 }}>{value.description}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Mission Section */}
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                        fontFamily: 'var(--font-integral)',
                        mb: 4
                    }}
                >
                    OUR MISSION
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: '1.1rem', md: '1.3rem' },
                        color: 'rgba(0,0,0,0.7)',
                        lineHeight: 1.9,
                        maxWidth: 800,
                        mx: 'auto'
                    }}
                >
                    To inspire confidence through fashion by providing high-quality, stylish clothing that empowers individuals to express their unique identity. We strive to create a shopping experience that is seamless, enjoyable, and accessible to all.
                </Typography>
            </Container>
        </PageLayout>
    );
}
