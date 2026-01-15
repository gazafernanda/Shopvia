'use client';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';

const styles = [
    { name: 'Casual', image: '/hero_models.png', col: { xs: 12, md: 4 } },
    { name: 'Formal', image: '/hero_models.png', col: { xs: 12, md: 8 } },
    { name: 'Party', image: '/hero_models.png', col: { xs: 12, md: 8 } },
    { name: 'Gym', image: '/hero_models.png', col: { xs: 12, md: 4 } },
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
                    width: '100%'
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

                <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
                    {styles.map((style) => (
                        <Grid item key={style.name} xs={style.col.xs} md={style.col.md}>
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: '20px',
                                    height: { xs: 190, sm: 250, md: 289 },
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    bgcolor: '#ffffff',
                                    width: '100%',
                                    '&:hover img': { transform: 'scale(1.05)' }
                                }}
                            >
                                <Image
                                    src={style.image}
                                    alt={style.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }}
                                />
                                <Typography
                                    variant="h5"
                                    sx={{
                                        position: 'absolute',
                                        top: { xs: 16, md: 24 },
                                        left: { xs: 16, md: 24 },
                                        fontWeight: 700,
                                        fontSize: { xs: '1.5rem', md: '2rem' },
                                        color: 'black',
                                        zIndex: 2
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
