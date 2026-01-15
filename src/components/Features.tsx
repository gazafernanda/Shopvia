'use client';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ReplayIcon from '@mui/icons-material/Replay';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const features = [
    {
        icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
        title: 'Free Shipping',
        description: 'On all orders over $100'
    },
    {
        icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
        title: 'Secure Payment',
        description: '100% secure payment processing'
    },
    {
        icon: <ReplayIcon sx={{ fontSize: 40 }} />,
        title: 'Free Returns',
        description: '30-day money back guarantee'
    },
    {
        icon: <HeadsetMicIcon sx={{ fontSize: 40 }} />,
        title: '24/7 Support',
        description: 'Dedicated support whenever you need'
    }
];

export default function Features() {
    return (
        <Box sx={{ py: 8, borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Box
                                    sx={{
                                        color: 'black',
                                        bgcolor: '#F0F0F0',
                                        p: 1.5,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {feature.icon}
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
