'use client';
import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button, Rating, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
}

export default function ProductCard({ name, price, image, category, rating }: ProductCardProps) {
    return (
        <Card
            elevation={0}
            sx={{
                maxWidth: 345,
                borderRadius: 0,
                position: 'relative',
                '&:hover .product-actions': { opacity: 1 },
                border: '1px solid',
                borderColor: 'divider'
            }}
        >
            <Box sx={{ position: 'relative', pt: '120%', overflow: 'hidden' }}>
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
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                />
                <Box
                    className="product-actions"
                    sx={{
                        position: 'absolute',
                        bottom: 10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: 1,
                        opacity: 0,
                        transition: 'opacity 0.3s ease-in-out',
                        width: '90%'
                    }}
                >
                    <Button
                        variant="contained"
                        fullWidth
                        startIcon={<AddShoppingCartIcon />}
                        sx={{ borderRadius: 0, bgcolor: 'common.black', '&:hover': { bgcolor: 'grey.900' } }}
                    >
                        Add
                    </Button>
                    <IconButton sx={{ bgcolor: 'white', borderRadius: 0, border: '1px solid', borderColor: 'divider', '&:hover': { bgcolor: 'grey.100' } }}>
                        <FavoriteBorderIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>
            <CardContent sx={{ pt: 2, pb: '16px !important' }}>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase' }}>
                    {category}
                </Typography>
                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 700, mt: 0.5, mb: 1, lineHeight: 1.2 }}>
                    {name}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                    <Rating value={rating} precision={0.5} size="small" readOnly />
                    <Typography variant="caption" color="text.secondary">(4.5)</Typography>
                </Stack>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
                    ${price.toFixed(2)}
                </Typography>
            </CardContent>
        </Card>
    );
}

import { Stack } from '@mui/material';
