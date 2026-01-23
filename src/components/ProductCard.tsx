'use client';
import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Rating, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    originalPrice?: number;
    discount?: string;
}

export default function ProductCard({ id, name, price, image, rating, originalPrice, discount }: ProductCardProps) {
    return (
        <Link href={`/product/${id}`} style={{ textDecoration: 'none' }}>
            <Card
                elevation={0}
                sx={{
                    width: '100%',
                    bgcolor: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: { xs: 2, md: 4 },
                    p: { xs: 1.5, md: 2 },
                    borderRadius: '20px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        borderColor: 'black',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
                    },
                    '&:hover .product-image-container img': { transform: 'scale(1.05)' },
                }}
            >
                {/* Rectangular Rounded Image Container */}
                <Box
                    className="product-image-container"
                    sx={{
                        position: 'relative',
                        width: { xs: '110px', md: '160px' },
                        height: { xs: '110px', md: '160px' },
                        flexShrink: 0,
                        overflow: 'hidden',
                        borderRadius: '16px',
                        bgcolor: '#F0EEED',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 2
                    }}
                >
                    <CardMedia
                        component="img"
                        image={image}
                        alt={name}
                        sx={{
                            width: '100%',
                            height: '100%',
                            transition: 'transform 0.4s ease-in-out',
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                <CardContent
                    sx={{
                        p: 0,
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        justifyContent: 'space-between',
                        gap: 2,
                        minWidth: 0,
                        '&:last-child': { pb: 0 } // Remove MUI default padding
                    }}
                >
                    <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                mb: 0.5,
                                fontSize: { xs: '1.1rem', md: '1.5rem' },
                                fontFamily: 'var(--font-satoshi)',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {name}
                        </Typography>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Rating
                                value={rating}
                                precision={0.5}
                                size="small"
                                readOnly
                                icon={<StarIcon sx={{ color: '#FFC633' }} fontSize="inherit" />}
                                emptyIcon={<StarIcon sx={{ color: '#e0e0e0' }} fontSize="inherit" />}
                            />
                            <Typography variant="body2" sx={{ fontWeight: 400, fontSize: '0.9rem', color: 'rgba(0,0,0,0.5)' }}>
                                {rating}/5
                            </Typography>
                        </Stack>
                    </Box>

                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        sx={{
                            flexShrink: 0,
                            backgroundColor: '#F7F7F7',
                            px: 3,
                            py: 1.5,
                            borderRadius: 12
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 700, fontSize: { xs: '1.25rem', md: '1.75rem' } }}>
                            ${price}
                        </Typography>
                        {originalPrice && (
                            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: { xs: '1rem', md: '1.25rem' }, color: 'rgba(0,0,0,0.3)', textDecoration: 'line-through' }}>
                                ${originalPrice}
                            </Typography>
                        )}
                        {discount && (
                            <Box sx={{ bgcolor: '#FFEBEB', color: '#FF3333', px: 1.5, py: 0.5, borderRadius: 10, fontSize: '0.8rem', fontWeight: 700 }}>
                                {discount}
                            </Box>
                        )}
                    </Stack>
                </CardContent>
            </Card>
        </Link>
    );
}
