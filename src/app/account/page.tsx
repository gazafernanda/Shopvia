'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    Button,
    Avatar,
    Tabs,
    Tab,
    Divider
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Breadcrumbs from '@/components/Breadcrumbs';

const orders = [
    { id: '#SV-001234', date: 'Jan 10, 2026', status: 'Delivered', total: 325, items: 3 },
    { id: '#SV-001189', date: 'Jan 5, 2026', status: 'Shipped', total: 180, items: 1 },
    { id: '#SV-001145', date: 'Dec 28, 2025', status: 'Delivered', total: 450, items: 4 },
];

const wishlistItems = [
    { id: 1, name: 'Gradient Graphic T-shirt', price: 145, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop' },
    { id: 2, name: 'Skinny Fit Jeans', price: 240, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop' },
];

export default function AccountPage() {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <PageLayout>
            <Breadcrumbs items={[{ label: 'My Account' }]} />

            <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
                <Grid container spacing={4}>
                    {/* Sidebar / Top Tabs */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Box
                                sx={{
                                    bgcolor: '#F9F9F9',
                                    borderRadius: '20px',
                                    p: 3
                                }}
                            >
                                <Stack alignItems="center" sx={{ mb: 4 }}>
                                    <Avatar
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            bgcolor: 'black',
                                            mb: 2
                                        }}
                                    >
                                        <PersonIcon sx={{ fontSize: 40 }} />
                                    </Avatar>
                                    <Typography variant="h6" sx={{ fontWeight: 700 }}>John Doe</Typography>
                                    <Typography sx={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.9rem' }}>john.doe@email.com</Typography>
                                </Stack>

                                <Stack spacing={1}>
                                    {[
                                        { icon: <ShoppingBagIcon />, label: 'Orders', tab: 0 },
                                        { icon: <FavoriteIcon />, label: 'Wishlist', tab: 1 },
                                        { icon: <LocationOnIcon />, label: 'Addresses', tab: 2 },
                                        { icon: <SettingsIcon />, label: 'Settings', tab: 3 },
                                    ].map((item) => (
                                        <Button
                                            key={item.label}
                                            startIcon={item.icon}
                                            onClick={() => setActiveTab(item.tab)}
                                            sx={{
                                                justifyContent: 'flex-start',
                                                color: activeTab === item.tab ? 'white' : 'black',
                                                bgcolor: activeTab === item.tab ? 'black' : 'transparent',
                                                borderRadius: '12px',
                                                py: 1.5,
                                                px: 2,
                                                '&:hover': {
                                                    bgcolor: activeTab === item.tab ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.05)'
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                    <Divider sx={{ my: 2 }} />
                                    <Link href="/login" style={{ textDecoration: 'none' }}>
                                        <Button
                                            startIcon={<LogoutIcon />}
                                            sx={{
                                                justifyContent: 'flex-start',
                                                color: '#FF3333',
                                                borderRadius: '12px',
                                                py: 1.5,
                                                px: 2,
                                                width: '100%'
                                            }}
                                        >
                                            Logout
                                        </Button>
                                    </Link>
                                </Stack>
                            </Box>
                        </Box>

                        <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 3 }}>
                            <Tabs
                                value={activeTab}
                                onChange={(_, v) => setActiveTab(v)}
                                variant="scrollable"
                                scrollButtons="auto"
                                sx={{
                                    '& .MuiTabs-indicator': { bgcolor: 'black' },
                                    '& .MuiTab-root': {
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        '&.Mui-selected': { color: 'black' }
                                    }
                                }}
                            >
                                <Tab icon={<ShoppingBagIcon />} iconPosition="start" label="Orders" />
                                <Tab icon={<FavoriteIcon />} iconPosition="start" label="Wishlist" />
                                <Tab icon={<LocationOnIcon />} iconPosition="start" label="Addresses" />
                                <Tab icon={<SettingsIcon />} iconPosition="start" label="Settings" />
                            </Tabs>
                        </Box>
                    </Grid>

                    {/* Content */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Box
                            sx={{
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '20px',
                                p: { xs: 3, md: 4 },
                                minHeight: 400
                            }}
                        >
                            {/* Orders Tab */}
                            {activeTab === 0 && (
                                <>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>My Orders</Typography>
                                    <Stack spacing={3}>
                                        {orders.map((order) => (
                                            <Box
                                                key={order.id}
                                                sx={{
                                                    border: '1px solid rgba(0,0,0,0.08)',
                                                    borderRadius: '16px',
                                                    p: 3
                                                }}
                                            >
                                                <Stack
                                                    direction={{ xs: 'column', sm: 'row' }}
                                                    justifyContent="space-between"
                                                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                                                    spacing={2}
                                                >
                                                    <Box>
                                                        <Typography sx={{ fontWeight: 700 }}>{order.id}</Typography>
                                                        <Typography sx={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.9rem' }}>
                                                            {order.date} • {order.items} items
                                                        </Typography>
                                                    </Box>
                                                    <Stack direction="row" spacing={2} alignItems="center">
                                                        <Box
                                                            sx={{
                                                                px: 2,
                                                                py: 0.5,
                                                                borderRadius: 62,
                                                                bgcolor: order.status === 'Delivered' ? '#E8F5E9' : '#FFF3E0',
                                                                color: order.status === 'Delivered' ? '#2E7D32' : '#E65100',
                                                                fontSize: '0.85rem',
                                                                fontWeight: 600
                                                            }}
                                                        >
                                                            {order.status}
                                                        </Box>
                                                        <Typography sx={{ fontWeight: 700 }}>${order.total}</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Box>
                                        ))}
                                    </Stack>
                                </>
                            )}

                            {/* Wishlist Tab */}
                            {activeTab === 1 && (
                                <>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>My Wishlist</Typography>
                                    <Grid container spacing={3}>
                                        {wishlistItems.map((item) => (
                                            <Grid size={{ xs: 12, sm: 6 }} key={item.id}>
                                                <Stack
                                                    direction="row"
                                                    spacing={2}
                                                    sx={{
                                                        border: '1px solid rgba(0,0,0,0.08)',
                                                        borderRadius: '16px',
                                                        p: 2
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            position: 'relative',
                                                            width: 80,
                                                            height: 80,
                                                            borderRadius: '12px',
                                                            overflow: 'hidden',
                                                            bgcolor: '#F0EEED',
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                                                    </Box>
                                                    <Box sx={{ flex: 1 }}>
                                                        <Typography sx={{ fontWeight: 600 }}>{item.name}</Typography>
                                                        <Typography sx={{ fontWeight: 700, mt: 1 }}>${item.price}</Typography>
                                                    </Box>
                                                </Stack>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </>
                            )}

                            {/* Addresses Tab */}
                            {activeTab === 2 && (
                                <>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>Saved Addresses</Typography>
                                    <Box
                                        sx={{
                                            border: '1px solid rgba(0,0,0,0.08)',
                                            borderRadius: '16px',
                                            p: 3
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 600, mb: 1 }}>Home</Typography>
                                        <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>
                                            123 Fashion Street, Style City, SC 12345
                                        </Typography>
                                    </Box>
                                </>
                            )}

                            {/* Settings Tab */}
                            {activeTab === 3 && (
                                <>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>Account Settings</Typography>
                                    <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>
                                        Manage your account preferences and security settings here.
                                    </Typography>
                                </>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
}
