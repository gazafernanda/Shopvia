'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    Pagination
} from '@mui/material';
import PageLayout from '@/components/PageLayout';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductGridCard from '@/components/ProductGridCard';

const allNewArrivals = [
    { id: 1, name: 'T-shirt with Tape Details', price: 120, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop', rating: 4.5 },
    { id: 2, name: 'Skinny Fit Jeans', price: 240, originalPrice: 260, discount: '-8%', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop', rating: 3.5 },
    { id: 3, name: 'Checkered Shirt', price: 180, image: 'https://images.unsplash.com/photo-1503342494128-c104d54dba01?q=80&w=1974&auto=format&fit=crop', rating: 4.5 },
    { id: 4, name: 'Sleeve Striped T-shirt', price: 130, originalPrice: 160, discount: '-19%', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop', rating: 4.5 },
    { id: 5, name: 'Gradient Graphic T-shirt', price: 145, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2000&auto=format&fit=crop', rating: 4.0 },
    { id: 6, name: 'Polo with Tipping Details', price: 180, image: 'https://images.unsplash.com/photo-1625910513413-5fc42ab10e52?q=80&w=1974&auto=format&fit=crop', rating: 4.5 },
    { id: 7, name: 'Vertical Striped Shirt', price: 212, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop', rating: 5.0 },
    { id: 8, name: 'Loose Fit Bermuda Shorts', price: 80, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop', rating: 3.0 },
    { id: 9, name: 'Summer Linen Shirt', price: 165, image: 'https://images.unsplash.com/photo-1598032895397-b9472444793c?q=80&w=2000&auto=format&fit=crop', rating: 4.7 },
    { id: 10, name: 'Lightwash Denim Jean', price: 185, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1974&auto=format&fit=crop', rating: 4.2 },
    { id: 11, name: 'Heavy Cotton Hoodie', price: 95, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop', rating: 4.3 },
    { id: 12, name: 'Crewneck Sweater', price: 110, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2010&auto=format&fit=crop', rating: 4.4 },
    { id: 13, name: 'Utility Cargo Pants', price: 135, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1997&auto=format&fit=crop', rating: 3.9 },
    { id: 14, name: 'Striped Oxford Shirt', price: 145, image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1974&auto=format&fit=crop', rating: 4.6 },
    { id: 15, name: 'Basic White Crew Tee', price: 40, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop', rating: 4.8 },
    { id: 16, name: 'Beige Chino Shorts', price: 65, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop', rating: 4.1 },
];

const ITEMS_PER_PAGE = 8;

export default function NewArrivalsPage() {
    const [currentPage, setCurrentPage] = React.useState(1);

    const totalPages = Math.ceil(allNewArrivals.length / ITEMS_PER_PAGE);
    const paginatedProducts = allNewArrivals.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <PageLayout>
            <Breadcrumbs items={[{ label: 'New Arrivals' }]} />

            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: '#F2F0F1',
                    py: { xs: 6, md: 10 },
                    mb: 4,
                    textAlign: 'center'
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontFamily: 'var(--font-integral)',
                            mb: 2
                        }}
                    >
                        NEW ARRIVALS
                    </Typography>
                    <Typography sx={{ color: 'rgba(0,0,0,0.6)', fontSize: { xs: '0.95rem', md: '1.1rem' }, maxWidth: 600, mx: 'auto' }}>
                        Discover the latest trends in fashion. Fresh styles just dropped for this season.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 4 }}
                >
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                    >
                        Just In
                    </Typography>
                    <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>
                        Showing {paginatedProducts.length} of {allNewArrivals.length} Products
                    </Typography>
                </Stack>

                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {paginatedProducts.map((product) => (
                        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={product.id}>
                            <ProductGridCard {...product} />
                        </Grid>
                    ))}
                </Grid>

                {totalPages > 1 && (
                    <Stack direction="row" justifyContent="center" sx={{ mt: 6, mb: 4 }}>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={(_e, page) => setCurrentPage(page)}
                            shape="rounded"
                            sx={{
                                '& .MuiPaginationItem-root': {
                                    borderRadius: '8px',
                                    '&.Mui-selected': {
                                        bgcolor: 'black',
                                        color: 'white',
                                        '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                                    }
                                }
                            }}
                        />
                    </Stack>
                )}
            </Container>
        </PageLayout>
    );
}
