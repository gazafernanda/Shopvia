'use client';
import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Rating, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    originalPrice?: number;
    discount?: string;
}

export default function ProductCard({ name, price, image, rating, originalPrice, discount }: ProductCardProps) {
    return (
        <Card
            elevation={0}
            sx={{
                width: '100%',
                bgcolor: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                '&:hover .product-image-container img': { transform: 'scale(1.05)' },
            }}
        >
            {/* Rectangular Rounded Image Container */}
            <Box
                className="product-image-container"
                sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '100%', // 1:1 Aspect Ratio
                    overflow: 'hidden',
                    borderRadius: '20px',
                    bgcolor: '#F0EEED'
                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        transition: 'transform 0.3s ease-in-out',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            <CardContent sx={{ px: 0, pt: 2, pb: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: 700,
                        mb: 0.5,
                        fontSize: { xs: '0.9rem', md: '1.2rem' },
                        fontFamily: 'var(--font-satoshi)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {name}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                    <Rating
                        value={rating}
                        precision={0.5}
                        size="small"
                        readOnly
                        icon={<StarIcon sx={{ color: '#FFC633' }} fontSize="inherit" />}
                        emptyIcon={<StarIcon sx={{ color: '#e0e0e0' }} fontSize="inherit" />}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 400, fontSize: '0.875rem' }}>
                        {rating}/<Box component="span" sx={{ color: 'rgba(0,0,0,0.4)' }}>5</Box>
                    </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mt: 'auto', pt: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                        ${price}
                    </Typography>
                    {originalPrice && (
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: 'rgba(0,0,0,0.4)', textDecoration: 'line-through' }}>
                            ${originalPrice}
                        </Typography>
                    )}
                    {discount && (
                        <Box sx={{ bgcolor: 'rgba(255, 51, 51, 0.1)', color: '#FF3333', px: 1.5, py: 0.5, borderRadius: 10, fontSize: '0.75rem', fontWeight: 500 }}>
                            {discount}
                        </Box>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}
