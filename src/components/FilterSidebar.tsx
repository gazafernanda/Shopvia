'use client';
import * as React from 'react';
import {
    Box,
    Typography,
    Slider,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Divider,
    Collapse,
    IconButton,
    Stack,
    Drawer,
    Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';

const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Red', hex: '#FF3333' },
    { name: 'Blue', hex: '#3366FF' },
    { name: 'Green', hex: '#00C853' },
    { name: 'Yellow', hex: '#FFC633' },
];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

interface FilterSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

function FilterSection({ title, children, defaultOpen = true }: FilterSectionProps) {
    const [open, setOpen] = React.useState(defaultOpen);

    return (
        <Box sx={{ py: 2 }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                onClick={() => setOpen(!open)}
                sx={{ cursor: 'pointer', mb: open ? 2 : 0 }}
            >
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {title}
                </Typography>
                <IconButton size="small">
                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
            </Stack>
            <Collapse in={open}>
                {children}
            </Collapse>
        </Box>
    );
}

interface FilterSidebarProps {
    isMobile?: boolean;
    mobileOpen?: boolean;
    onMobileClose?: () => void;
}

export default function FilterSidebar({ isMobile = false, mobileOpen = false, onMobileClose }: FilterSidebarProps) {
    const [priceRange, setPriceRange] = React.useState<number[]>([50, 200]);

    const handlePriceChange = (_event: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
    };

    const filterContent = (
        <Box sx={{ p: { xs: 2, md: 0 } }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TuneIcon /> Filters
                </Typography>
                {isMobile && (
                    <IconButton onClick={onMobileClose}>
                        <CloseIcon />
                    </IconButton>
                )}
            </Stack>

            <Divider />

            {/* Categories */}
            <FilterSection title="Categories">
                <FormGroup>
                    {categories.map((category) => (
                        <FormControlLabel
                            key={category}
                            control={<Checkbox size="small" sx={{ '&.Mui-checked': { color: 'black' } }} />}
                            label={<Typography sx={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.7)' }}>{category}</Typography>}
                        />
                    ))}
                </FormGroup>
            </FilterSection>

            <Divider />

            {/* Price */}
            <FilterSection title="Price">
                <Slider
                    value={priceRange}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={500}
                    sx={{
                        color: 'black',
                        '& .MuiSlider-thumb': { bgcolor: 'black' },
                        '& .MuiSlider-track': { bgcolor: 'black' },
                    }}
                />
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary">${priceRange[0]}</Typography>
                    <Typography variant="body2" color="text.secondary">${priceRange[1]}</Typography>
                </Stack>
            </FilterSection>

            <Divider />

            {/* Colors */}
            <FilterSection title="Colors">
                <Stack direction="row" flexWrap="wrap" gap={1}>
                    {colors.map((color) => (
                        <Box
                            key={color.name}
                            sx={{
                                width: 32,
                                height: 32,
                                borderRadius: '50%',
                                bgcolor: color.hex,
                                border: color.hex === '#FFFFFF' ? '1px solid #e0e0e0' : 'none',
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'scale(1.1)' }
                            }}
                            title={color.name}
                        />
                    ))}
                </Stack>
            </FilterSection>

            <Divider />

            {/* Size */}
            <FilterSection title="Size">
                <Stack direction="row" flexWrap="wrap" gap={1}>
                    {sizes.map((size) => (
                        <Box
                            key={size}
                            sx={{
                                px: 2.5,
                                py: 1,
                                borderRadius: 62,
                                bgcolor: '#F0F0F0',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                transition: 'all 0.2s',
                                '&:hover': { bgcolor: 'black', color: 'white' }
                            }}
                        >
                            {size}
                        </Box>
                    ))}
                </Stack>
            </FilterSection>

            <Divider />

            {/* Dress Style */}
            <FilterSection title="Dress Style">
                <FormGroup>
                    {dressStyles.map((style) => (
                        <FormControlLabel
                            key={style}
                            control={<Checkbox size="small" sx={{ '&.Mui-checked': { color: 'black' } }} />}
                            label={<Typography sx={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.7)' }}>{style}</Typography>}
                        />
                    ))}
                </FormGroup>
            </FilterSection>

            <Button
                variant="contained"
                fullWidth
                sx={{
                    mt: 2,
                    bgcolor: 'black',
                    color: 'white',
                    borderRadius: 62,
                    py: 1.5,
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                }}
            >
                Apply Filter
            </Button>
        </Box>
    );

    if (isMobile) {
        return (
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={onMobileClose}
                PaperProps={{
                    sx: { width: '80%', maxWidth: 320, p: 2 }
                }}
            >
                {filterContent}
            </Drawer>
        );
    }

    return (
        <Box
            sx={{
                width: 250,
                flexShrink: 0,
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '20px',
                p: 3,
                height: 'fit-content',
                position: 'sticky',
                top: 100
            }}
        >
            {filterContent}
        </Box>
    );
}
