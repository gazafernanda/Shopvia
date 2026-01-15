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
    Slider,
    Checkbox,
    FormControlLabel,
    Divider,
    Drawer,
    IconButton
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import PageLayout from '@/components/PageLayout';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductGridCard from '@/components/ProductGridCard';

// Extended product data with categories
const allSaleProducts = [
    { id: 1, name: 'Black Striped T-shirt', price: 120, originalPrice: 150, discount: 20, category: 't-shirts', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop', rating: 5.0 },
    { id: 2, name: 'Skinny Fit Jeans', price: 240, originalPrice: 300, discount: 20, category: 'jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop', rating: 3.5 },
    { id: 3, name: 'Sleeve Striped T-shirt', price: 130, originalPrice: 180, discount: 28, category: 't-shirts', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop', rating: 4.5 },
    { id: 4, name: 'Vertical Striped Shirt', price: 212, originalPrice: 280, discount: 24, category: 'shirts', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop', rating: 5.0 },
    { id: 5, name: 'Polo with Contrast', price: 180, originalPrice: 240, discount: 25, category: 'shirts', image: 'https://images.unsplash.com/photo-1625910513413-5fc42ab10e52?q=80&w=1974&auto=format&fit=crop', rating: 4.0 },
    { id: 6, name: 'Faded Skinny Jeans', price: 160, originalPrice: 210, discount: 24, category: 'jeans', image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=1974&auto=format&fit=crop', rating: 4.5 },
    { id: 7, name: 'Classic Hoodie', price: 89, originalPrice: 120, discount: 26, category: 'hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop', rating: 4.2 },
    { id: 8, name: 'Denim Jacket', price: 199, originalPrice: 280, discount: 29, category: 'jackets', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1974&auto=format&fit=crop', rating: 4.8 },
    { id: 9, name: 'Summer Shorts', price: 65, originalPrice: 90, discount: 28, category: 'shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop', rating: 3.9 },
    { id: 10, name: 'Graphic Tee', price: 45, originalPrice: 70, discount: 36, category: 't-shirts', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2000&auto=format&fit=crop', rating: 4.1 },
    { id: 11, name: 'Slim Fit Chinos', price: 95, originalPrice: 130, discount: 27, category: 'pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop', rating: 4.3 },
    { id: 12, name: 'Wool Blend Sweater', price: 149, originalPrice: 220, discount: 32, category: 'sweaters', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2010&auto=format&fit=crop', rating: 4.6 },
    { id: 13, name: 'Athletic Tank Top', price: 35, originalPrice: 50, discount: 30, category: 't-shirts', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1974&auto=format&fit=crop', rating: 3.8 },
    { id: 14, name: 'Cargo Pants', price: 110, originalPrice: 150, discount: 27, category: 'pants', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1997&auto=format&fit=crop', rating: 4.4 },
    { id: 15, name: 'Bomber Jacket', price: 175, originalPrice: 250, discount: 30, category: 'jackets', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop', rating: 4.7 },
    { id: 16, name: 'V-Neck Cardigan', price: 85, originalPrice: 120, discount: 29, category: 'sweaters', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop', rating: 4.0 },
    { id: 17, name: 'Zip-Up Hoodie', price: 99, originalPrice: 140, discount: 29, category: 'hoodies', image: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?q=80&w=1974&auto=format&fit=crop', rating: 4.5 },
    { id: 18, name: 'Relaxed Fit Jeans', price: 135, originalPrice: 180, discount: 25, category: 'jeans', image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=1780&auto=format&fit=crop', rating: 4.2 },
];

const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 't-shirts', label: 'T-Shirts' },
    { value: 'shirts', label: 'Shirts' },
    { value: 'jeans', label: 'Jeans' },
    { value: 'pants', label: 'Pants' },
    { value: 'hoodies', label: 'Hoodies' },
    { value: 'sweaters', label: 'Sweaters' },
    { value: 'jackets', label: 'Jackets' },
    { value: 'shorts', label: 'Shorts' },
];

const ITEMS_PER_PAGE = 6;

export default function OnSalePage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileFilterOpen, setMobileFilterOpen] = React.useState(false);
    const [sortBy, setSortBy] = React.useState('discount');
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
    const [priceRange, setPriceRange] = React.useState<number[]>([0, 300]);
    const [currentPage, setCurrentPage] = React.useState(1);

    // Filter products
    const filteredProducts = React.useMemo(() => {
        return allSaleProducts.filter(product => {
            // Category filter
            if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
                return false;
            }
            // Price filter
            if (product.price < priceRange[0] || product.price > priceRange[1]) {
                return false;
            }
            return true;
        });
    }, [selectedCategories, priceRange]);

    // Sort products
    const sortedProducts = React.useMemo(() => {
        const sorted = [...filteredProducts];
        switch (sortBy) {
            case 'discount':
                return sorted.sort((a, b) => b.discount - a.discount);
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            default:
                return sorted;
        }
    }, [filteredProducts, sortBy]);

    // Paginate products
    const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = sortedProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Reset page when filters change
    React.useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategories, priceRange, sortBy]);

    const handleCategoryToggle = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handlePriceChange = (_event: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setPriceRange([0, 300]);
    };

    const FilterContent = () => (
        <Box sx={{ width: { xs: 280, md: 250 }, p: { xs: 2, md: 0 } }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>Filters</Typography>
                <Button size="small" onClick={clearFilters} sx={{ color: '#FF3333' }}>
                    Clear All
                </Button>
            </Stack>

            <Divider sx={{ mb: 3 }} />

            {/* Price Range */}
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Price Range</Typography>
            <Box sx={{ px: 1 }}>
                <Slider
                    value={priceRange}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={300}
                    sx={{
                        color: 'black',
                        '& .MuiSlider-thumb': { bgcolor: 'black' },
                        '& .MuiSlider-track': { bgcolor: 'black' }
                    }}
                />
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary">${priceRange[0]}</Typography>
                    <Typography variant="body2" color="text.secondary">${priceRange[1]}</Typography>
                </Stack>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Categories */}
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Categories</Typography>
            <Stack spacing={0.5}>
                {categories.slice(1).map(cat => (
                    <FormControlLabel
                        key={cat.value}
                        control={
                            <Checkbox
                                checked={selectedCategories.includes(cat.value)}
                                onChange={() => handleCategoryToggle(cat.value)}
                                sx={{ '&.Mui-checked': { color: 'black' } }}
                            />
                        }
                        label={cat.label}
                        sx={{ '& .MuiTypography-root': { fontSize: '0.9rem' } }}
                    />
                ))}
            </Stack>
        </Box>
    );

    return (
        <PageLayout>
            <Breadcrumbs items={[{ label: 'On Sale' }]} />

            {/* Sale Banner */}
            <Box
                sx={{
                    bgcolor: '#FF3333',
                    py: { xs: 4, md: 6 },
                    mb: 4,
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
                            mb: 1
                        }}
                    >
                        SALE UP TO 50% OFF
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
                        Limited time offer. Don&apos;t miss out on these amazing deals!
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
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '1.25rem', md: '1.5rem' }
                        }}
                    >
                        Sale Items
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography sx={{ display: { xs: 'none', md: 'block' }, color: 'rgba(0,0,0,0.6)' }}>
                            Showing {paginatedProducts.length} of {sortedProducts.length} Products
                        </Typography>

                        {isMobile && (
                            <Button
                                variant="outlined"
                                startIcon={<TuneIcon />}
                                onClick={() => setMobileFilterOpen(true)}
                                sx={{ borderColor: 'rgba(0,0,0,0.2)', color: 'black', borderRadius: 62 }}
                            >
                                Filters
                            </Button>
                        )}

                        <FormControl size="small" sx={{ minWidth: 170 }}>
                            <Select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                sx={{ borderRadius: 62, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0,0,0,0.2)' } }}
                            >
                                <MenuItem value="discount">Biggest Discount</MenuItem>
                                <MenuItem value="price-low">Price: Low to High</MenuItem>
                                <MenuItem value="price-high">Price: High to Low</MenuItem>
                                <MenuItem value="rating">Highest Rated</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Stack>

                <Box sx={{ display: 'flex', gap: 4 }}>
                    {/* Desktop Filter Sidebar */}
                    {!isMobile && (
                        <Box sx={{ flexShrink: 0 }}>
                            <FilterContent />
                        </Box>
                    )}

                    {/* Mobile Filter Drawer */}
                    <Drawer
                        anchor="left"
                        open={mobileFilterOpen}
                        onClose={() => setMobileFilterOpen(false)}
                    >
                        <Box sx={{ pt: 2, px: 2 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="h6" sx={{ fontWeight: 700 }}>Filters</Typography>
                                <IconButton onClick={() => setMobileFilterOpen(false)}>
                                    <CloseIcon />
                                </IconButton>
                            </Stack>
                        </Box>
                        <FilterContent />
                        <Box sx={{ p: 2 }}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() => setMobileFilterOpen(false)}
                                sx={{ bgcolor: 'black', borderRadius: 62, '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' } }}
                            >
                                Apply Filters
                            </Button>
                        </Box>
                    </Drawer>

                    <Box sx={{ flex: 1 }}>
                        {paginatedProducts.length > 0 ? (
                            <Grid container spacing={{ xs: 2, md: 3 }}>
                                {paginatedProducts.map((product) => (
                                    <Grid size={{ xs: 6, sm: 4, lg: 4 }} key={product.id}>
                                        <ProductGridCard
                                            {...product}
                                            discount={`-${product.discount}%`}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        ) : (
                            <Box sx={{ textAlign: 'center', py: 8 }}>
                                <Typography variant="h6" sx={{ color: 'rgba(0,0,0,0.5)', mb: 2 }}>
                                    No products found
                                </Typography>
                                <Button onClick={clearFilters} variant="outlined" sx={{ borderRadius: 62 }}>
                                    Clear Filters
                                </Button>
                            </Box>
                        )}

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
                                            '&.Mui-selected': { bgcolor: 'black', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' } }
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
