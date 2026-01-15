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

export default function LoginPage() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login:', { email, password, rememberMe });
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
                        WELCOME BACK
                    </Typography>
                    <Typography sx={{ color: 'rgba(0,0,0,0.5)', textAlign: 'center', mb: 4 }}>
                        Sign in to continue shopping
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <TextField
                                label="Email Address"
                                type="email"
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        bgcolor: 'white'
                                    }
                                }}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        bgcolor: 'white'
                                    }
                                }}
                            />

                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            sx={{ '&.Mui-checked': { color: 'black' } }}
                                        />
                                    }
                                    label={<Typography sx={{ fontSize: '0.9rem' }}>Remember me</Typography>}
                                />
                                <Link href="#" style={{ color: 'black', fontSize: '0.9rem' }}>
                                    Forgot Password?
                                </Link>
                            </Stack>

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
                                Sign In
                            </Button>
                        </Stack>
                    </Box>

                    <Divider sx={{ my: 4 }}>
                        <Typography sx={{ color: 'rgba(0,0,0,0.4)', fontSize: '0.85rem' }}>
                            Or continue with
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
                        Don&apos;t have an account?{' '}
                        <Link href="/register" style={{ color: 'black', fontWeight: 600 }}>
                            Sign up
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </PageLayout>
    );
}
