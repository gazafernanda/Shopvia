'use client';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';

const styles = [
    {
        name: 'Casual',
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop',
        col: { xs: 12, md: 4 }
    },
    {
        name: 'Formal',
        image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1974&auto=format&fit=crop',
        col: { xs: 12, md: 8 }
    },
    {
        name: 'Party',
        image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop',
        col: { xs: 12, md: 8 }
    },
    {
        name: 'Gym',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
        col: { xs: 12, md: 4 }
    },
];

export default function DressStyleGrid() {
    return (
        <Container maxWidth="lg" sx={{ mb: 10 }}>
            <Box
                sx={{
                    bgcolor: '#F0F0F0',
                    borderRadius: '40px',
                    px: { xs: 3, md: 8 },
                    py: { xs: 5, md: 10 },
                    width: '100%',
                    mx: 'auto'
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        mb: { xs: 4, md: 8 },
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        fontFamily: 'var(--font-integral)',
                        fontWeight: 900
                    }}
                >
                    BROWSE BY DRESS STYLE
                </Typography>

                <Grid container spacing={3}>
                    {styles.map((style) => (
                        <Grid key={style.name} size={{ xs: style.col.xs, md: style.col.md }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: '20px',
                                    height: { xs: 190, sm: 250, md: 289 },
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    bgcolor: '#ffffff',
                                    '&:hover img': { transform: 'scale(1.05)' },
                                    '&:hover .style-name': { transform: 'translateX(8px)' }
                                }}
                            >
                                <Image
                                    src={style.image}
                                    alt={style.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease-in-out' }}
                                />
                                <Typography
                                    variant="h5"
                                    className="style-name"
                                    sx={{
                                        position: 'absolute',
                                        top: { xs: 16, md: 24 },
                                        left: { xs: 16, md: 24 },
                                        fontWeight: 700,
                                        fontSize: { xs: '1.5rem', md: '2rem' },
                                        color: 'black',
                                        zIndex: 2,
                                        transition: 'transform 0.3s ease-in-out'
                                    }}
                                >
                                    {style.name}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
