'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function ProductFallbackPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/shop');
    }, [router]);

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2
            }}
        >
            <CircularProgress color="inherit" />
            <Typography variant="body1">Redirecting to shop...</Typography>
        </Box>
    );
}
