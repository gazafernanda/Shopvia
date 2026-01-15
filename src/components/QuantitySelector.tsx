'use client';
import * as React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface QuantitySelectorProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
}

export default function QuantitySelector({ value, onChange, min = 1, max = 99 }: QuantitySelectorProps) {
    const handleDecrease = () => {
        if (value > min) {
            onChange(value - 1);
        }
    };

    const handleIncrease = () => {
        if (value < max) {
            onChange(value + 1);
        }
    };

    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                bgcolor: '#F0F0F0',
                borderRadius: 62,
                px: 1,
            }}
        >
            <IconButton
                size="small"
                onClick={handleDecrease}
                disabled={value <= min}
                sx={{
                    color: 'black',
                    '&:disabled': { color: 'rgba(0,0,0,0.3)' }
                }}
            >
                <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography
                sx={{
                    minWidth: { xs: 32, md: 48 },
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '1rem'
                }}
            >
                {value}
            </Typography>
            <IconButton
                size="small"
                onClick={handleIncrease}
                disabled={value >= max}
                sx={{
                    color: 'black',
                    '&:disabled': { color: 'rgba(0,0,0,0.3)' }
                }}
            >
                <AddIcon fontSize="small" />
            </IconButton>
        </Box>
    );
}
