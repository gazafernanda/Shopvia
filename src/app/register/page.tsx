'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Stack,
    TextField,
    Button,
    Divider,
    IconButton,
    Checkbox,
    FormControlLabel
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export default function RegisterPage() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [agreeTerms, setAgreeTerms] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register:', formData);
    };

    return (
        <PageLayout showBanner={false}>
            <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 } }}>
                <Box
                    sx={{
                        bgcolor: '#F9F9F9',
                        borderRadius: '30px',
                        p: { xs: 4, md: 6 }
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '1.75rem', md: '2.25rem' },
                            fontFamily: 'var(--font-integral)',
                            textAlign: 'center',
                            mb: 2
                        }}
                    >
                        CREATE ACCOUNT
                    </Typography>
                    <Typography sx={{ color: 'rgba(0,0,0,0.5)', textAlign: 'center', mb: 4 }}>
                        Join Shopvia and start shopping
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <TextField
                                    name="firstName"
                                    label="First Name"
                                    fullWidth
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '12px',
                                            bgcolor: 'white'
                                        }
                                    }}
                                />
                                <TextField
                                    name="lastName"
                                    label="Last Name"
                                    fullWidth
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '12px',
                                            bgcolor: 'white'
                                        }
                                    }}
                                />
                            </Stack>
                            <TextField
                                name="email"
                                label="Email Address"
                                type="email"
                                fullWidth
                                value={formData.email}
                                onChange={handleChange}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        bgcolor: 'white'
                                    }
                                }}
                            />
                            <TextField
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                                value={formData.password}
                                onChange={handleChange}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        bgcolor: 'white'
                                    }
                                }}
                            />
                            <TextField
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        bgcolor: 'white'
                                    }
                                }}
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={agreeTerms}
                                        onChange={(e) => setAgreeTerms(e.target.checked)}
                                        sx={{ '&.Mui-checked': { color: 'black' } }}
                                    />
                                }
                                label={
                                    <Typography sx={{ fontSize: '0.9rem' }}>
                                        I agree to the{' '}
                                        <Link href="#" style={{ color: 'black', fontWeight: 600 }}>Terms of Service</Link>
                                        {' '}and{' '}
                                        <Link href="#" style={{ color: 'black', fontWeight: 600 }}>Privacy Policy</Link>
                                    </Typography>
                                }
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                size="large"
                                sx={{
                                    bgcolor: 'black',
                                    borderRadius: 62,
                                    py: 2,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                                }}
                            >
                                Create Account
                            </Button>
                        </Stack>
                    </Box>

                    <Divider sx={{ my: 4 }}>
                        <Typography sx={{ color: 'rgba(0,0,0,0.4)', fontSize: '0.85rem' }}>
                            Or sign up with
                        </Typography>
                    </Divider>

                    <Stack direction="row" justifyContent="center" spacing={2}>
                        <IconButton
                            sx={{
                                bgcolor: 'white',
                                border: '1px solid rgba(0,0,0,0.1)',
                                width: 56,
                                height: 56,
                                '&:hover': { bgcolor: '#f5f5f5' }
                            }}
                        >
                            <GoogleIcon />
                        </IconButton>
                        <IconButton
                            sx={{
                                bgcolor: 'white',
                                border: '1px solid rgba(0,0,0,0.1)',
                                width: 56,
                                height: 56,
                                '&:hover': { bgcolor: '#f5f5f5' }
                            }}
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            sx={{
                                bgcolor: 'white',
                                border: '1px solid rgba(0,0,0,0.1)',
                                width: 56,
                                height: 56,
                                '&:hover': { bgcolor: '#f5f5f5' }
                            }}
                        >
                            <AppleIcon />
                        </IconButton>
                    </Stack>

                    <Typography sx={{ textAlign: 'center', mt: 4, fontSize: '0.95rem' }}>
                        Already have an account?{' '}
                        <Link href="/login" style={{ color: 'black', fontWeight: 600 }}>
                            Sign in
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </PageLayout>
    );
}
