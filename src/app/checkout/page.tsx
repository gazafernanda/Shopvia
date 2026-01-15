'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    Button,
    TextField,
    Stepper,
    Step,
    StepLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Divider
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import Breadcrumbs from '@/components/Breadcrumbs';

const steps = ['Shipping', 'Payment', 'Confirmation'];

const orderItems = [
    { id: 1, name: 'Gradient Graphic T-shirt', size: 'Large', price: 145, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop' },
    { id: 2, name: 'Checkered Shirt', size: 'Medium', price: 180, image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1974&auto=format&fit=crop' },
];

export default function CheckoutPage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [paymentMethod, setPaymentMethod] = React.useState('card');

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
    const shipping = 15;
    const total = subtotal + shipping;

    return (
        <PageLayout>
            <Breadcrumbs items={[{ label: 'Cart', href: '/cart' }, { label: 'Checkout' }]} />

            <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                        fontFamily: 'var(--font-integral)',
                        mb: { xs: 3, md: 5 },
                        textAlign: 'center'
                    }}
                >
                    CHECKOUT
                </Typography>

                {/* Stepper */}
                <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 6 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel
                                StepIconProps={{
                                    sx: {
                                        '&.Mui-active': { color: 'black' },
                                        '&.Mui-completed': { color: 'black' }
                                    }
                                }}
                            >
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Grid container spacing={4}>
                    {/* Form Section */}
                    <Grid size={{ xs: 12, md: 7, lg: 8 }}>
                        <Box
                            sx={{
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '20px',
                                p: { xs: 3, md: 4 }
                            }}
                        >
                            {activeStep === 0 && (
                                <>
                                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                                        <LocalShippingIcon />
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Shipping Information</Typography>
                                    </Stack>

                                    <Grid container spacing={3}>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField label="First Name" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField label="Last Name" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField label="Email Address" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField label="Phone Number" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField label="Street Address" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField label="City" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField label="Postal Code" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField label="Country" fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                                        </Grid>
                                    </Grid>
                                </>
                            )}

                            {activeStep === 1 && (
                                <>
                                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                                        <CreditCardIcon />
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Payment Method</Typography>
                                    </Stack>

                                    <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                                        <FormControlLabel
                                            value="card"
                                            control={<Radio sx={{ '&.Mui-checked': { color: 'black' } }} />}
                                            label={
                                                <Stack direction="row" alignItems="center" spacing={1}>
                                                    <Typography>Credit / Debit Card</Typography>
                                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                                        <Box sx={{ bgcolor: '#F0F0F0', px: 1, py: 0.3, borderRadius: 1, fontSize: '0.7rem', fontWeight: 700 }}>VISA</Box>
                                                        <Box sx={{ bgcolor: '#F0F0F0', px: 1, py: 0.3, borderRadius: 1, fontSize: '0.7rem', fontWeight: 700 }}>MC</Box>
                                                    </Box>
                                                </Stack>
                                            }
                                            sx={{ mb: 2 }}
                                        />
                                        <FormControlLabel
                                            value="paypal"
                                            control={<Radio sx={{ '&.Mui-checked': { color: 'black' } }} />}
                                            label="PayPal"
                                            sx={{ mb: 2 }}
                                        />
                                        <FormControlLabel
                                            value="cod"
                                            control={<Radio sx={{ '&.Mui-checked': { color: 'black' } }} />}
                                            label="Cash on Delivery"
                                        />
                                    </RadioGroup>

                                    {paymentMethod === 'card' && (
                                        <Grid container spacing={3} sx={{ mt: 3 }}>
                                            <Grid size={12}>
                                                <TextField label="Card Number" fullWidth placeholder="1234 5678 9012 3456" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                                            </Grid>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField label="Expiry Date" fullWidth placeholder="MM/YY" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                                            </Grid>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField label="CVV" fullWidth placeholder="123" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                                            </Grid>
                                            <Grid size={12}>
                                                <TextField label="Name on Card" fullWidth sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                                            </Grid>
                                        </Grid>
                                    )}
                                </>
                            )}

                            {activeStep === 2 && (
                                <Box sx={{ textAlign: 'center', py: 4 }}>
                                    <CheckCircleIcon sx={{ fontSize: 80, color: '#00C853', mb: 3 }} />
                                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Order Confirmed!</Typography>
                                    <Typography sx={{ color: 'rgba(0,0,0,0.6)', mb: 4 }}>
                                        Thank you for your purchase. Your order has been placed successfully.
                                    </Typography>
                                    <Typography sx={{ fontWeight: 600 }}>Order Number: #SV-2026-001234</Typography>
                                </Box>
                            )}

                            {activeStep < 2 && (
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={handleNext}
                                    sx={{
                                        mt: 4,
                                        bgcolor: 'black',
                                        borderRadius: 62,
                                        py: 2,
                                        fontSize: '1rem',
                                        '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                                    }}
                                >
                                    {activeStep === 0 ? 'Continue to Payment' : 'Place Order'}
                                </Button>
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
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>Order Summary</Typography>

                            <Stack spacing={2} sx={{ mb: 3 }}>
                                {orderItems.map((item) => (
                                    <Stack key={item.id} direction="row" spacing={2}>
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: 64,
                                                height: 64,
                                                borderRadius: '8px',
                                                overflow: 'hidden',
                                                bgcolor: '#F0EEED',
                                                flexShrink: 0
                                            }}
                                        >
                                            <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.name}</Typography>
                                            <Typography sx={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.5)' }}>Size: {item.size}</Typography>
                                        </Box>
                                        <Typography sx={{ fontWeight: 700 }}>${item.price}</Typography>
                                    </Stack>
                                ))}
                            </Stack>

                            <Divider sx={{ my: 3 }} />

                            <Stack spacing={2}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>Subtotal</Typography>
                                    <Typography sx={{ fontWeight: 600 }}>${subtotal}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>Shipping</Typography>
                                    <Typography sx={{ fontWeight: 600 }}>${shipping}</Typography>
                                </Stack>
                                <Divider />
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ fontWeight: 600 }}>Total</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 700 }}>${total}</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
}
