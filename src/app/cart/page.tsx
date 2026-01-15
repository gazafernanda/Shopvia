'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    Button,
    IconButton,
    Divider,
    TextField,
    InputAdornment
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuantitySelector from '@/components/QuantitySelector';

const initialCartItems = [
    {
        id: 1,
        name: 'Gradient Graphic T-shirt',
        size: 'Large',
        color: 'White',
        price: 145,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop',
        quantity: 1
    },
    {
        id: 2,
        name: 'Checkered Shirt',
        size: 'Medium',
        color: 'Red',
        price: 180,
        image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1974&auto=format&fit=crop',
        quantity: 1
    },
    {
        id: 3,
        name: 'Skinny Fit Jeans',
        size: 'Large',
        color: 'Blue',
        price: 240,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop',
        quantity: 1
    },
];

export default function CartPage() {
    const [cartItems, setCartItems] = React.useState(initialCartItems);
    const [promoCode, setPromoCode] = React.useState('');

    const updateQuantity = (id: number, newQuantity: number) => {
        setCartItems(items =>
            items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
        );
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = Math.round(subtotal * 0.2);
    const deliveryFee = 15;
    const total = subtotal - discount + deliveryFee;

    return (
        <PageLayout>
            <Breadcrumbs items={[{ label: 'Cart' }]} />

            <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.75rem', md: '2.5rem' },
                        fontFamily: 'var(--font-integral)',
                        mb: { xs: 3, md: 5 }
                    }}
                >
                    YOUR CART
                </Typography>

                <Grid container spacing={4}>
                    {/* Cart Items */}
                    <Grid size={{ xs: 12, md: 7, lg: 8 }}>
                        <Box
                            sx={{
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '20px',
                                overflow: 'hidden'
                            }}
                        >
                            {cartItems.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    <Box sx={{ p: { xs: 2, md: 3 } }}>
                                        <Stack
                                            direction="row"
                                            spacing={{ xs: 2, md: 3 }}
                                        >
                                            {/* Product Image */}
                                            <Box
                                                sx={{
                                                    position: 'relative',
                                                    width: { xs: 100, md: 124 },
                                                    height: { xs: 100, md: 124 },
                                                    borderRadius: '12px',
                                                    overflow: 'hidden',
                                                    bgcolor: '#F0EEED',
                                                    flexShrink: 0
                                                }}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </Box>

                                            {/* Product Details */}
                                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                                <Stack
                                                    direction="row"
                                                    justifyContent="space-between"
                                                    alignItems="flex-start"
                                                >
                                                    <Box>
                                                        <Typography
                                                            variant="h6"
                                                            sx={{
                                                                fontWeight: 700,
                                                                fontSize: { xs: '1rem', md: '1.25rem' },
                                                                mb: 0.5
                                                            }}
                                                        >
                                                            {item.name}
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)', mb: 0.5 }}>
                                                            Size: <span style={{ color: 'black' }}>{item.size}</span>
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)' }}>
                                                            Color: <span style={{ color: 'black' }}>{item.color}</span>
                                                        </Typography>
                                                    </Box>
                                                    <IconButton
                                                        onClick={() => removeItem(item.id)}
                                                        sx={{ color: '#FF3333' }}
                                                    >
                                                        <DeleteOutlineIcon />
                                                    </IconButton>
                                                </Stack>

                                                <Stack
                                                    direction="row"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                    sx={{ mt: { xs: 2, md: 3 } }}
                                                >
                                                    <Typography
                                                        variant="h6"
                                                        sx={{ fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.25rem' } }}
                                                    >
                                                        ${item.price}
                                                    </Typography>
                                                    <QuantitySelector
                                                        value={item.quantity}
                                                        onChange={(v) => updateQuantity(item.id, v)}
                                                    />
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    {index < cartItems.length - 1 && <Divider />}
                                </React.Fragment>
                            ))}

                            {cartItems.length === 0 && (
                                <Box sx={{ p: 6, textAlign: 'center' }}>
                                    <Typography sx={{ color: 'rgba(0,0,0,0.5)', mb: 3 }}>
                                        Your cart is empty
                                    </Typography>
                                    <Link href="/shop">
                                        <Button
                                            variant="contained"
                                            sx={{
                                                bgcolor: 'black',
                                                borderRadius: 62,
                                                px: 4,
                                                '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                                            }}
                                        >
                                            Continue Shopping
                                        </Button>
                                    </Link>
                                </Box>
                            )}
                        </Box>
                    </Grid>

                    {/* Order Summary */}
                    <Grid size={{ xs: 12, md: 5, lg: 4 }}>
                        <Box
                            sx={{
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '20px',
                                p: { xs: 3, md: 4 }
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 700, mb: 3 }}
                            >
                                Order Summary
                            </Typography>

                            <Stack spacing={2.5}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>Subtotal</Typography>
                                    <Typography sx={{ fontWeight: 700 }}>${subtotal}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>Discount (-20%)</Typography>
                                    <Typography sx={{ fontWeight: 700, color: '#FF3333' }}>-${discount}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>Delivery Fee</Typography>
                                    <Typography sx={{ fontWeight: 700 }}>${deliveryFee}</Typography>
                                </Stack>

                                <Divider />

                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ fontWeight: 500 }}>Total</Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 700 }}>${total}</Typography>
                                </Stack>
                            </Stack>

                            {/* Promo Code */}
                            <Stack direction="row" spacing={1.5} sx={{ mt: 4 }}>
                                <TextField
                                    placeholder="Add promo code"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 62,
                                            bgcolor: '#F0F0F0',
                                            '& fieldset': { border: 'none' }
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocalOfferOutlinedIcon sx={{ color: 'rgba(0,0,0,0.4)' }} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: 'black',
                                        borderRadius: 62,
                                        px: 4,
                                        flexShrink: 0,
                                        '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                                    }}
                                >
                                    Apply
                                </Button>
                            </Stack>

                            <Link href="/checkout">
                                <Button
                                    variant="contained"
                                    fullWidth
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{
                                        mt: 4,
                                        bgcolor: 'black',
                                        borderRadius: 62,
                                        py: 2,
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                                    }}
                                >
                                    Go to Checkout
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
}
