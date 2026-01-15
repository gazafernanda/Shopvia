'use client';
import * as React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack, Divider, TextField, Button, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <Box sx={{ mt: { xs: 30, md: 20 }, position: 'relative' }}>
            {/* OVERLAPPING NEWSLETTER */}
            <Container maxWidth="lg" sx={{ position: 'absolute', top: { xs: -240, sm: -200, md: -140 }, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
                <Box
                    sx={{
                        bgcolor: 'black',
                        borderRadius: '20px',
                        px: { xs: 3, sm: 6, md: 8 },
                        py: { xs: 4, md: 6 },
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 4, md: 10 }
                    }}
                >
                    <Typography variant="h2" sx={{ color: 'white', maxWidth: '550px', fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' }, textAlign: { xs: 'center', md: 'left' }, fontFamily: 'var(--font-integral)', fontWeight: 900 }}>
                        STAY UP TO DATE ABOUT OUR LATEST OFFERS
                    </Typography>
                    <Stack spacing={2} sx={{ width: { xs: '100%', sm: '350px' } }}>
                        <TextField
                            placeholder="Enter your email address"
                            fullWidth
                            sx={{
                                bgcolor: 'white',
                                borderRadius: 62,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 62,
                                    px: 1,
                                    '& fieldset': { border: 'none' },
                                    '& input': { py: 2, fontSize: '1rem' }
                                }
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailOutlineIcon sx={{ color: 'rgba(0,0,0,0.4)', ml: 2, fontSize: '1.5rem' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: 'white',
                                color: 'black',
                                borderRadius: 62,
                                fontWeight: 700,
                                py: 1.8,
                                fontSize: '1rem',
                                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                            }}
                        >
                            Subscribe to Newsletter
                        </Button>
                    </Stack>
                </Box>
            </Container>

            {/* FOOTER MAIN AREA */}
            <Box sx={{ bgcolor: '#F0F0F0', pt: { xs: 35, sm: 30, md: 25 }, pb: 8 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} sx={{ mb: 8 }}>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Typography variant="h4" sx={{ fontWeight: 900, fontFamily: 'var(--font-integral)', mb: 3 }}>
                                Shopvia
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, maxWidth: '250px' }}>
                                We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
                            </Typography>
                            <Stack direction="row" spacing={1.5}>
                                <IconButton size="small" sx={{ bgcolor: 'white', color: 'black', border: '1px solid #e0e0e0' }}><TwitterIcon fontSize="small" /></IconButton>
                                <IconButton size="small" sx={{ bgcolor: 'black', color: 'white' }}><FacebookIcon fontSize="small" /></IconButton>
                                <IconButton size="small" sx={{ bgcolor: 'white', color: 'black', border: '1px solid #e0e0e0' }}><InstagramIcon fontSize="small" /></IconButton>
                                <IconButton size="small" sx={{ bgcolor: 'white', color: 'black', border: '1px solid #e0e0e0' }}><GitHubIcon fontSize="small" /></IconButton>
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 6, md: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, letterSpacing: 1 }}>COMPANY</Typography>
                            <Stack spacing={1.5}>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>About</Link>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Features</Link>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Works</Link>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Career</Link>
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 6, md: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, letterSpacing: 1 }}>HELP</Typography>
                            <Stack spacing={1.5}>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Customer Support</Link>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Delivery Details</Link>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Terms & Conditions</Link>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Privacy Policy</Link>
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 6, md: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, letterSpacing: 1 }}>FAQ</Typography>
                            <Stack spacing={1.5}>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Account</Link>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Manage Deliveries</Link>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Orders</Link>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Payments</Link>
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 6, md: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, letterSpacing: 1 }}>RESOURCES</Typography>
                            <Stack spacing={1.5}>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Free eBooks</Link>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Development Tutorial</Link>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>How to - Blog</Link>
                                <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.9rem' }}>Youtube Playlist</Link>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                            Shopvia © 2000-2023, All Rights Reserved
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Box sx={{ bgcolor: 'white', px: 1, py: 0.5, borderRadius: 1, border: '1px solid #e0e0e0', fontSize: '0.7rem', fontWeight: 700 }}>VISA</Box>
                            <Box sx={{ bgcolor: 'white', px: 1, py: 0.5, borderRadius: 1, border: '1px solid #e0e0e0', fontSize: '0.7rem', fontWeight: 700 }}>MasterCard</Box>
                            <Box sx={{ bgcolor: 'white', px: 1, py: 0.5, borderRadius: 1, border: '1px solid #e0e0e0', fontSize: '0.7rem', fontWeight: 700 }}>PayPal</Box>
                            <Box sx={{ bgcolor: 'white', px: 1, py: 0.5, borderRadius: 1, border: '1px solid #e0e0e0', fontSize: '0.7rem', fontWeight: 700 }}>Apple Pay</Box>
                            <Box sx={{ bgcolor: 'white', px: 1, py: 0.5, borderRadius: 1, border: '1px solid #e0e0e0', fontSize: '0.7rem', fontWeight: 700 }}>Google Pay</Box>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
