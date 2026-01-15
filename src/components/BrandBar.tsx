'use client';
import { Box, Container, Stack, Typography } from '@mui/material';

const brands = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein'];

export default function BrandBar() {
    return (
        <Box sx={{ bgcolor: 'black', py: { xs: 4, md: 6 } }}>
            <Container maxWidth="lg">
                <Stack
                    direction="row"
                    justifyContent={{ xs: 'center', md: 'space-between' }}
                    alignItems="center"
                    sx={{ flexWrap: 'wrap', gap: { xs: 3, sm: 6, md: 8 } }}
                >
                    {brands.map((brand) => (
                        <Typography
                            key={brand}
                            variant="h5"
                            sx={{
                                color: 'white',
                                fontWeight: 700,
                                fontFamily: 'var(--font-integral)',
                                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {brand}
                        </Typography>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
