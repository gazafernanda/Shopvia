'use client';
import * as React from 'react';
import { Card, CardContent, Typography, Box, Rating, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import Link from 'next/link';

interface ProductGridCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    originalPrice?: number;
    discount?: string;
}

export default function ProductGridCard({ id, name, price, image, rating, originalPrice, discount }: ProductGridCardProps) {
    return (
        <Link href={`/product/${id}`} style={{ textDecoration: 'none' }}>
            <Card
                elevation={0}
                sx={{
                    width: '100%',
                    bgcolor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                    },
                    '&:hover .product-image': { transform: 'scale(1.05)' },
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        paddingTop: '100%',
                        bgcolor: '#F0EEED',
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="product-image"
                        style={{
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease-in-out',
                        }}
                        sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
                    />
                    {discount && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 12,
                                right: 12,
                                bgcolor: '#FFEBEB',
                                color: '#FF3333',
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 10,
                                fontSize: '0.75rem',
                                fontWeight: 700
                            }}
                        >
                            {discount}
                        </Box>
                    )}
                </Box>

                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                            fontFamily: 'var(--font-satoshi)',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            color: 'black'
                        }}
                    >
                        {name}
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                        <Rating
                            value={rating}
                            precision={0.5}
                            size="small"
                            readOnly
                            icon={<StarIcon sx={{ color: '#FFC633' }} fontSize="inherit" />}
                            emptyIcon={<StarIcon sx={{ color: '#e0e0e0' }} fontSize="inherit" />}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 400, fontSize: '0.8rem', color: 'rgba(0,0,0,0.5)' }}>
                            {rating}/5
                        </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1.5}>
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.25rem' }, color: 'black' }}>
                            ${price}
                        </Typography>
                        {originalPrice && (
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 500,
                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                    color: 'rgba(0,0,0,0.3)',
                                    textDecoration: 'line-through'
                                }}
                            >
                                ${originalPrice}
                            </Typography>
                        )}
                    </Stack>
                </CardContent>
            </Card>
        </Link>
    );
}
