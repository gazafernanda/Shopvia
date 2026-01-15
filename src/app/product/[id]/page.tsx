'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    Button,
    Rating,
    Tabs,
    Tab,
    Divider,
    Chip
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CheckIcon from '@mui/icons-material/Check';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuantitySelector from '@/components/QuantitySelector';
import ProductGridCard from '@/components/ProductGridCard';

const productImages = [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2000&auto=format&fit=crop',
];

const colors = [
    { name: 'Olive', hex: '#4F4631' },
    { name: 'Forest', hex: '#314F4A' },
    { name: 'Navy', hex: '#31344F' },
];

const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

const relatedProducts = [
    { id: 10, name: 'Polo with Contrast Trims', price: 212, originalPrice: 242, discount: '-20%', image: 'https://images.unsplash.com/photo-1625910513413-5fc42ab10e52?q=80&w=1974&auto=format&fit=crop', rating: 4.0 },
    { id: 11, name: 'Gradient Graphic T-shirt', price: 145, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop', rating: 3.5 },
    { id: 12, name: 'Polo with Tipping Details', price: 180, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop', rating: 4.5 },
    { id: 13, name: 'Black Striped T-shirt', price: 120, originalPrice: 150, discount: '-30%', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop', rating: 5.0 },
];

export default function ProductDetailPage() {
    const [selectedImage, setSelectedImage] = React.useState(0);
    const [selectedColor, setSelectedColor] = React.useState(0);
    const [selectedSize, setSelectedSize] = React.useState(2);
    const [quantity, setQuantity] = React.useState(1);
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <PageLayout>
            <Breadcrumbs items={[{ label: 'Shop', href: '/shop' }, { label: 'T-shirts', href: '/shop' }, { label: 'Product Details' }]} />

            <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
                <Grid container spacing={{ xs: 3, md: 6 }}>
                    {/* Image Gallery */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            {/* Thumbnails */}
                            <Stack
                                direction={{ xs: 'row', sm: 'column' }}
                                spacing={2}
                                sx={{ flexShrink: 0 }}
                            >
                                {productImages.map((img, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        sx={{
                                            width: { xs: 80, md: 110 },
                                            height: { xs: 80, md: 110 },
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            border: selectedImage === index ? '2px solid black' : '2px solid transparent',
                                            position: 'relative',
                                            bgcolor: '#F0EEED'
                                        }}
                                    >
                                        <Image src={img} alt={`Product ${index + 1}`} fill style={{ objectFit: 'cover' }} />
                                    </Box>
                                ))}
                            </Stack>

                            {/* Main Image */}
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    paddingTop: '100%',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    bgcolor: '#F0EEED'
                                }}
                            >
                                <Image
                                    src={productImages[selectedImage]}
                                    alt="Product"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Product Info */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                                fontFamily: 'var(--font-integral)',
                                mb: 2
                            }}
                        >
                            ONE LIFE GRAPHIC T-SHIRT
                        </Typography>

                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                            <Rating
                                value={4.5}
                                precision={0.5}
                                readOnly
                                icon={<StarIcon sx={{ color: '#FFC633' }} fontSize="inherit" />}
                                emptyIcon={<StarIcon sx={{ color: '#e0e0e0' }} fontSize="inherit" />}
                            />
                            <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>4.5/5</Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700 }}>$260</Typography>
                            <Typography variant="h5" sx={{ color: 'rgba(0,0,0,0.3)', textDecoration: 'line-through' }}>$300</Typography>
                            <Chip label="-40%" sx={{ bgcolor: '#FFEBEB', color: '#FF3333', fontWeight: 700, borderRadius: 62 }} />
                        </Stack>

                        <Typography sx={{ color: 'rgba(0,0,0,0.6)', mb: 3, lineHeight: 1.8 }}>
                            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                        </Typography>

                        <Divider sx={{ my: 3 }} />

                        {/* Color Selection */}
                        <Typography sx={{ fontWeight: 500, mb: 2, color: 'rgba(0,0,0,0.6)' }}>Select Colors</Typography>
                        <Stack direction="row" spacing={1.5} sx={{ mb: 3 }}>
                            {colors.map((color, index) => (
                                <Box
                                    key={color.name}
                                    onClick={() => setSelectedColor(index)}
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        bgcolor: color.hex,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'transform 0.2s',
                                        '&:hover': { transform: 'scale(1.1)' }
                                    }}
                                >
                                    {selectedColor === index && <CheckIcon sx={{ color: 'white', fontSize: '1.2rem' }} />}
                                </Box>
                            ))}
                        </Stack>

                        <Divider sx={{ my: 3 }} />

                        {/* Size Selection */}
                        <Typography sx={{ fontWeight: 500, mb: 2, color: 'rgba(0,0,0,0.6)' }}>Choose Size</Typography>
                        <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mb: 3 }}>
                            {sizes.map((size, index) => (
                                <Button
                                    key={size}
                                    onClick={() => setSelectedSize(index)}
                                    sx={{
                                        px: 3,
                                        py: 1.2,
                                        borderRadius: 62,
                                        bgcolor: selectedSize === index ? 'black' : '#F0F0F0',
                                        color: selectedSize === index ? 'white' : 'black',
                                        fontWeight: 500,
                                        '&:hover': {
                                            bgcolor: selectedSize === index ? 'rgba(0,0,0,0.8)' : '#e0e0e0'
                                        }
                                    }}
                                >
                                    {size}
                                </Button>
                            ))}
                        </Stack>

                        <Divider sx={{ my: 3 }} />

                        {/* Add to Cart */}
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <QuantitySelector value={quantity} onChange={setQuantity} />
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    borderRadius: 62,
                                    py: 2,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                                }}
                            >
                                Add to Cart
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Product Tabs */}
                <Box sx={{ mt: { xs: 6, md: 10 } }}>
                    <Tabs
                        value={activeTab}
                        onChange={(_, v) => setActiveTab(v)}
                        centered
                        sx={{
                            borderBottom: '1px solid rgba(0,0,0,0.1)',
                            '& .MuiTab-root': {
                                fontWeight: 500,
                                fontSize: '1rem',
                                textTransform: 'none',
                                minWidth: { xs: 80, md: 150 }
                            },
                            '& .Mui-selected': { color: 'black' },
                            '& .MuiTabs-indicator': { bgcolor: 'black' }
                        }}
                    >
                        <Tab label="Product Details" />
                        <Tab label="Rating & Reviews" />
                        <Tab label="FAQs" />
                    </Tabs>

                    <Box sx={{ py: 4 }}>
                        {activeTab === 0 && (
                            <Typography sx={{ color: 'rgba(0,0,0,0.6)', lineHeight: 2 }}>
                                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style. The t-shirt features a unique graphic print that adds a touch of personality to your look. Available in multiple sizes and colors to suit your preferences.
                            </Typography>
                        )}
                        {activeTab === 1 && (
                            <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>
                                Customer reviews will be displayed here.
                            </Typography>
                        )}
                        {activeTab === 2 && (
                            <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>
                                Frequently asked questions will be displayed here.
                            </Typography>
                        )}
                    </Box>
                </Box>

                {/* Related Products */}
                <Box sx={{ mt: { xs: 4, md: 8 } }}>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 700,
                            fontFamily: 'var(--font-integral)',
                            mb: { xs: 4, md: 6 }
                        }}
                    >
                        YOU MIGHT ALSO LIKE
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        {relatedProducts.map((product) => (
                            <Grid size={{ xs: 6, sm: 3 }} key={product.id}>
                                <ProductGridCard {...product} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </PageLayout>
    );
}
