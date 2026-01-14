'use client';
import * as React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack, Divider, TextField, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Box sx={{ bgcolor: 'grey.50', pt: 8, pb: 4, borderTop: '1px solid', borderColor: 'divider' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ mb: 8 }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="primary" sx={{ fontWeight: 800, mb: 2 }}>
                            SHOPVIA
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: '300px' }}>
                            We provide the best shopping experience for modern homes. Quality products, fast delivery, and exceptional customer service.
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><FacebookIcon /></IconButton>
                            <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><TwitterIcon /></IconButton>
                            <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><InstagramIcon /></IconButton>
                            <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}><LinkedInIcon /></IconButton>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Shop</Typography>
                        <Stack spacing={1}>
                            <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>All Products</Link>
                            <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>Furniture</Link>
                            <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>Electronics</Link>
                            <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>Accessories</Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Company</Typography>
                        <Stack spacing={1}>
                            <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>About Us</Link>
                            <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>Contact</Link>
                            <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>Careers</Link>
                            <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>Privacy Policy</Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Newsletter</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Subscribe to get special offers and once-in-a-lifetime deals.
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <TextField
                                size="small"
                                placeholder="Your email"
                                variant="outlined"
                                sx={{ bgcolor: 'white', '& fieldset': { borderRadius: 0 } }}
                            />
                            <Button variant="contained" sx={{ borderRadius: 0 }}>Join</Button>
                        </Stack>
                    </Grid>
                </Grid>
                <Divider sx={{ mb: 4 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                        © 2026 Shopvia. All rights reserved.
                    </Typography>
                    <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                        <Link href="#" color="text.secondary" variant="body2">Terms</Link>
                        <Link href="#" color="text.secondary" variant="body2">Security</Link>
                        <Link href="#" color="text.secondary" variant="body2">Support</Link>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
