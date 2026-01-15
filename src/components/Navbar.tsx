'use client';
import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Badge,
    Container,
    Stack,
    Link as MuiLink,
    Drawer
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 62,
    backgroundColor: '#f0f0f0',
    '&:hover': {
        backgroundColor: alpha('#f0f0f0', 0.8),
    },
    marginRight: 0,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
        width: '100%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(0, 0, 0, 0.4)',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1.8, 1, 1.8, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        fontSize: '1rem',
    },
}));

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'white', color: 'text.primary', borderBottom: '1px solid', borderColor: '#f0f0f0', py: 0.5, top: 0, zIndex: 1100 }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ gap: { xs: 1, md: 4 } }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { md: 'none' } }}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                        anchor="left"
                        open={mobileMenuOpen}
                        onClose={() => setMobileMenuOpen(false)}
                        PaperProps={{ sx: { width: 280 } }}
                    >
                        <Box sx={{ p: 2 }}>
                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 900, fontFamily: 'var(--font-integral)' }}>Shopvia</Typography>
                            <Stack spacing={2}>
                                {[
                                    { label: 'Shop', href: '/shop' },
                                    { label: 'On Sale', href: '/on-sale' },
                                    { label: 'New Arrivals', href: '/new-arrivals' },
                                    { label: 'Brands', href: '/brands' }
                                ].map((item) => (
                                    <Link key={item.label} href={item.href} style={{ textDecoration: 'none', color: 'black' }} onClick={() => setMobileMenuOpen(false)}>
                                        <Typography sx={{ fontSize: '1.1rem', fontWeight: 500 }}>{item.label}</Typography>
                                    </Link>
                                ))}
                            </Stack>
                        </Box>
                    </Drawer>

                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                fontWeight: 900,
                                fontSize: { xs: '1.2rem', md: '1.8rem' },
                                color: 'black',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-integral)',
                                mr: { md: 2 }
                            }}
                        >
                            Shopvia
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3, flexShrink: 0 }}>
                        <Link href="/shop" style={{ textDecoration: 'none' }}>
                            <MuiLink component="span" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '1rem', cursor: 'pointer' }}>
                                Shop <KeyboardArrowDownIcon sx={{ fontSize: '1rem' }} />
                            </MuiLink>
                        </Link>
                        <Link href="/on-sale" style={{ textDecoration: 'none' }}>
                            <MuiLink component="span" color="inherit" underline="none" sx={{ fontSize: '1rem', cursor: 'pointer' }}>On Sale</MuiLink>
                        </Link>
                        <Link href="/new-arrivals" style={{ textDecoration: 'none' }}>
                            <MuiLink component="span" color="inherit" underline="none" sx={{ fontSize: '1rem', cursor: 'pointer' }}>New Arrivals</MuiLink>
                        </Link>
                        <Link href="/brands" style={{ textDecoration: 'none' }}>
                            <MuiLink component="span" color="inherit" underline="none" sx={{ fontSize: '1rem', cursor: 'pointer' }}>Brands</MuiLink>
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' }, mx: 2 }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon fontSize="small" />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search for products..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>

                    <Stack direction="row" spacing={{ xs: 0.5, md: 1 }} alignItems="center" sx={{ flexShrink: 0 }}>
                        <IconButton size="large" color="inherit" sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <SearchIcon />
                        </IconButton>
                        <Link href="/cart">
                            <IconButton size="large" color="inherit">
                                <Badge badgeContent={2} color="primary" sx={{ '& .MuiBadge-badge': { bgcolor: 'black', color: 'white' } }}>
                                    <ShoppingCartOutlinedIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                        <Link href="/account">
                            <IconButton size="large" edge="end" color="inherit">
                                <AccountCircleOutlinedIcon />
                            </IconButton>
                        </Link>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

