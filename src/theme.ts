'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#f0f0f0',
        },
        background: {
            default: '#ffffff',
            paper: '#f0f0f0',
        },
        text: {
            primary: '#000000',
            secondary: 'rgba(0, 0, 0, 0.6)',
        },
    },
    typography: {
        fontFamily: 'var(--font-satoshi), sans-serif',
        h1: {
            fontFamily: 'var(--font-integral), sans-serif',
            fontWeight: 900,
            textTransform: 'uppercase',
        },
        h2: {
            fontFamily: 'var(--font-integral), sans-serif',
            fontWeight: 900,
            textTransform: 'uppercase',
        },
        h3: {
            fontFamily: 'var(--font-integral), sans-serif',
            fontWeight: 900,
            textTransform: 'uppercase',
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 20,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 62,
                    padding: '12px 24px',
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
            },
        },
    },
});

export default theme;
