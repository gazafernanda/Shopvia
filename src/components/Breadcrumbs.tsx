'use client';
import * as React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography, Container, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <Container maxWidth="lg" sx={{ py: 2 }}>
            <Box sx={{
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
            }}>
                <MuiBreadcrumbs
                    separator={<NavigateNextIcon fontSize="small" sx={{ color: 'rgba(0,0,0,0.4)' }} />}
                    aria-label="breadcrumb"
                >
                    <Link
                        href="/"
                        underline="hover"
                        sx={{
                            color: 'rgba(0,0,0,0.5)',
                            fontSize: '0.9rem',
                            '&:hover': { color: 'black' }
                        }}
                    >
                        Home
                    </Link>
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;
                        return isLast ? (
                            <Typography
                                key={item.label}
                                sx={{ color: 'black', fontSize: '0.9rem', fontWeight: 500 }}
                            >
                                {item.label}
                            </Typography>
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href || '#'}
                                underline="hover"
                                sx={{
                                    color: 'rgba(0,0,0,0.5)',
                                    fontSize: '0.9rem',
                                    '&:hover': { color: 'black' }
                                }}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </MuiBreadcrumbs>
            </Box>
        </Container>
    );
}
