'use client';
import * as React from 'react';
import { Box, Container, Typography, Stack, Rating, Paper, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const reviews = [
    {
        name: 'Sarah M.',
        text: '"I\'m blown away by the quality and style of the clothes I received from Shopvia. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations."',
        rating: 5,
    },
    {
        name: 'Alex K.',
        text: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shopvia. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."',
        rating: 5,
    },
    {
        name: 'James L.',
        text: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shopvia. The selection of clothes is not only diverse but also on-point with the latest trends."',
        rating: 5,
    },
    {
        name: 'Mooen',
        text: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shopvia. The selection of clothes is not only diverse but also on-point with the latest trends."',
        rating: 5,
    },
    {
        name: 'Anna B.',
        text: '"The customer service was exceptional. I had a small issue with my order and they resolved it immediately. Highly recommended! The clothes fit perfectly."',
        rating: 5,
    },
];

export default function Testimonials() {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const itemWidth = 400; // Approximate width of a card + gap
            const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{ mb: { xs: 8, md: 15 } }}>
            <Container maxWidth="lg">
                <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: { xs: 4, md: 6 } }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontFamily: 'var(--font-integral)',
                            fontWeight: 900,
                            lineHeight: 1
                        }}
                    >
                        OUR HAPPY CUSTOMERS
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <IconButton onClick={() => scroll('left')} sx={{ color: 'black' }}>
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton onClick={() => scroll('right')} sx={{ color: 'black' }}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Stack>
                </Stack>

                <Box
                    ref={scrollRef}
                    sx={{
                        display: 'flex',
                        gap: 3,
                        overflowX: 'auto',
                        pb: 2,
                        mx: { xs: -2, md: 0 },
                        px: { xs: 2, md: 0 },
                        scrollSnapType: 'x mandatory',
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none',
                        maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)'
                    }}
                >
                    {reviews.map((review, index) => (
                        <Box
                            key={index}
                            sx={{
                                minWidth: { xs: '300px', md: '400px' },
                                maxWidth: '100%',
                                scrollSnapAlign: 'start',
                                flexShrink: 0
                            }}
                        >
                            <Paper
                                variant="outlined"
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    borderRadius: '20px',
                                    height: '100%',
                                    borderColor: 'rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1.5,
                                    bgcolor: 'white'
                                }}
                            >
                                <Rating
                                    value={review.rating}
                                    readOnly
                                    size="medium"
                                    icon={<StarIcon sx={{ color: '#FFC633' }} fontSize="inherit" />}
                                    emptyIcon={<StarIcon sx={{ color: '#e0e0e0' }} fontSize="inherit" />}
                                />
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.25rem' }}>{review.name}</Typography>
                                    <CheckCircleIcon sx={{ color: '#01AB31', fontSize: '1.2rem' }} />
                                </Stack>
                                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '1rem' }}>
                                    {review.text}
                                </Typography>
                            </Paper>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
