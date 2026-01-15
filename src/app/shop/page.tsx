'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    Select,
    MenuItem,
    FormControl,
    Button,
    useMediaQuery,
    useTheme,
    Pagination,
    Drawer,
    IconButton
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import PageLayout from '@/components/PageLayout';
import Breadcrumbs from '@/components/Breadcrumbs';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGridCard from '@/components/ProductGridCard';

const allProducts = [
    { id: 1, name: 'Gradient Graphic T-shirt', price: 145, category: 't-shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop', rating: 3.5 },
    { id: 2, name: 'Polo with Tipping Details', price: 180, category: 'shirts', image: 'https://images.unsplash.com/photo-1625910513413-5fc42ab10e52?q=80&w=1974&auto=format&fit=crop', rating: 4.5 },
    { id: 3, name: 'Black Striped T-shirt', price: 120, originalPrice: 150, discount: '-30%', category: 't-shirts', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop', rating: 5.0 },
    { id: 4, name: 'Skinny Fit Jeans', price: 240, originalPrice: 260, discount: '-20%', category: 'jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop', rating: 3.5 },
    { id: 5, name: 'Checkered Shirt', price: 180, category: 'shirts', image: 'https://images.unsplash.com/photo-1503342494128-c104d54dba01?q=80&w=1974&auto=format&fit=crop', rating: 4.5 },
    { id: 6, name: 'Sleeve Striped T-shirt', price: 130, originalPrice: 160, discount: '-30%', category: 't-shirts', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop', rating: 4.5 },
    { id: 7, name: 'Vertical Striped Shirt', price: 212, originalPrice: 232, discount: '-20%', category: 'shirts', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop', rating: 5.0 },
    { id: 8, name: 'Courage Graphic T-shirt', price: 145, category: 't-shirts', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2000&auto=format&fit=crop', rating: 4.0 },
    { id: 9, name: 'Loose Fit Bermuda Shorts', price: 80, category: 'shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop', rating: 3.0 },
    { id: 10, name: 'Heavyweight Cotton Tee', price: 55, category: 't-shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop', rating: 4.2 },
    { id: 11, name: 'Linen Vacation Shirt', price: 165, category: 'shirts', image: 'https://images.unsplash.com/photo-1598032895397-b9472444793c?q=80&w=2000&auto=format&fit=crop', rating: 4.7 },
    { id: 12, name: 'Ripped Slim Jean', price: 195, category: 'jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1974&auto=format&fit=crop', rating: 4.1 },
    { id: 13, name: 'Chino Shorts', price: 75, category: 'shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop', rating: 3.8 },
    { id: 14, name: 'Classic White Tee', price: 35, category: 't-shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop', rating: 4.5 },
    { id: 15, name: 'Denim Shirt', price: 155, category: 'shirts', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1974&auto=format&fit=crop', rating: 4.4 },
    { id: 16, name: 'Cargo Pants', price: 125, category: 'pants', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1997&auto=format&fit=crop', rating: 4.0 },
    { id: 17, name: 'Pullover Hoodie', price: 95, category: 'hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop', rating: 4.3 },
    { id: 18, name: 'Knit Sweater', price: 140, category: 'sweaters', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2010&auto=format&fit=crop', rating: 4.6 },
];

const ITEMS_PER_PAGE = 9;

export default function ShopPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileFilterOpen, setMobileFilterOpen] = React.useState(false);
    const [sortBy, setSortBy] = React.useState('popular');
    const [currentPage, setCurrentPage] = React.useState(1);

    // In a real app, these would come from URL query params or common state
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
    const [priceRange, setPriceRange] = React.useState<number[]>([0, 500]);

    // Sorting logic
    const sortedProducts = React.useMemo(() => {
        const sorted = [...allProducts];
        switch (sortBy) {
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'newest':
                return sorted.sort((a, b) => b.id - a.id);
            case 'popular':
            default:
                return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        }
    }, [sortBy]);

    // Paginated results
    const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = sortedProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <PageLayout>
            <Breadcrumbs items={[{ label: 'Shop' }]} />

            <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 4 }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            fontFamily: 'var(--font-integral)'
                        }}
                    >
                        CASUAL
                    </Typography>

                    <Stack direction="row" spacing={{ xs: 1, sm: 2 }} alignItems="center">
                        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                            <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>
                                Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, sortedProducts.length)} of {sortedProducts.length} Products
                            </Typography>
                        </Box>

                        <Button
                            variant="outlined"
                            startIcon={<TuneIcon />}
                            onClick={() => setMobileFilterOpen(true)}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                borderColor: 'rgba(0,0,0,0.2)',
                                color: 'black',
                                borderRadius: 62,
                                minWidth: 'fit-content'
                            }}
                        >
                            Filters
                        </Button>

                        <FormControl size="small" sx={{ minWidth: { xs: 130, sm: 170 } }}>
                            <Select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                sx={{
                                    borderRadius: 62,
                                    fontSize: { xs: '0.875rem', sm: '1rem' },
                                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0,0,0,0.2)' }
                                }}
                            >
                                <MenuItem value="popular">Most Popular</MenuItem>
                                <MenuItem value="newest">Newest</MenuItem>
                                <MenuItem value="price-low">Price: Low to High</MenuItem>
                                <MenuItem value="price-high">Price: High to Low</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Stack>

                <Box sx={{ display: 'flex', gap: 4 }}>
                    {/* Desktop Filter Sidebar */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <FilterSidebar />
                    </Box>

                    {/* Mobile Filter Drawer */}
                    <Drawer
                        anchor="bottom"
                        open={mobileFilterOpen}
                        onClose={() => setMobileFilterOpen(false)}
                        PaperProps={{
                            sx: {
                                borderTopLeftRadius: '20px',
                                borderTopRightRadius: '20px',
                                maxHeight: '90vh'
                            }
                        }}
                    >
                        <Box sx={{ p: 2 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: 700 }}>Filters</Typography>
                                <IconButton onClick={() => setMobileFilterOpen(false)}>
                                    <CloseIcon />
                                </IconButton>
                            </Stack>
                            <FilterSidebar />
                        </Box>
                    </Drawer>

                    {/* Products Grid */}
                    <Box sx={{ flex: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }}>
                            {paginatedProducts.map((product) => (
                                <Grid size={{ xs: 6, sm: 4, lg: 4 }} key={product.id}>
                                    <ProductGridCard {...product} />
                                </Grid>
                            ))}
                        </Grid>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <Stack
                                direction="row"
                                justifyContent="center"
                                sx={{ mt: 6, mb: 4 }}
                            >
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
                    </Box>
                </Box>
            </Container>
        </PageLayout>
    );
}
