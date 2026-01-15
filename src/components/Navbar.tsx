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
    Link
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
        padding: theme.spacing(1.2, 1, 1.2, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        fontSize: '0.9rem',
    },
}));

export default function Navbar() {
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
                    >
                        <MenuIcon />
                    </IconButton>

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

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3, flexShrink: 0 }}>
                        <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '1rem' }}>
                            Shop <KeyboardArrowDownIcon sx={{ fontSize: '1rem' }} />
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ fontSize: '1rem' }}>On Sale</Link>
                        <Link href="#" color="inherit" underline="none" sx={{ fontSize: '1rem' }}>New Arrivals</Link>
                        <Link href="#" color="inherit" underline="none" sx={{ fontSize: '1rem' }}>Brands</Link>
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
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={2} color="primary" sx={{ '& .MuiBadge-badge': { bgcolor: 'black', color: 'white' } }}>
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" edge="end" color="inherit">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
