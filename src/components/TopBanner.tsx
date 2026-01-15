'use client';
import { Box, Typography, Container, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function TopBanner() {
    return (
        <Box sx={{ bgcolor: 'common.black', color: 'white', py: 1.5, position: 'relative' }}>
            <Container maxWidth="lg">
                <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 400, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                    Sign up and get 20% off to your first order. <Box component="span" sx={{ textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}>Sign Up Now</Box>
                </Typography>
            </Container>
            <IconButton size="small" sx={{ position: 'absolute', right: { xs: 8, md: 16 }, top: '50%', transform: 'translateY(-50%)', color: 'white' }}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </Box>
    );
}
