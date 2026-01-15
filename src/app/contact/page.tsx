'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    TextField,
    Button
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PageLayout from '@/components/PageLayout';
import Breadcrumbs from '@/components/Breadcrumbs';

const contactInfo = [
    { icon: <LocationOnIcon />, title: 'Address', content: '123 Fashion Street, Style City, SC 12345' },
    { icon: <PhoneIcon />, title: 'Phone', content: '+1 (555) 123-4567' },
    { icon: <EmailIcon />, title: 'Email', content: 'support@shopvia.com' },
    { icon: <AccessTimeIcon />, title: 'Hours', content: 'Mon - Fri: 9AM - 6PM' },
];

export default function ContactPage() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <PageLayout>
            <Breadcrumbs items={[{ label: 'Contact Us' }]} />

            {/* Hero Section */}
            <Box sx={{ bgcolor: '#F2F0F1', py: { xs: 6, md: 10 }, textAlign: 'center' }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                            fontFamily: 'var(--font-integral)',
                            mb: 2
                        }}
                    >
                        GET IN TOUCH
                    </Typography>
                    <Typography sx={{ color: 'rgba(0,0,0,0.6)', maxWidth: 600, mx: 'auto' }}>
                        Have a question or feedback? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    {/* Contact Info */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>Contact Information</Typography>

                        <Stack spacing={4}>
                            {contactInfo.map((item) => (
                                <Stack key={item.title} direction="row" spacing={2} alignItems="flex-start">
                                    <Box
                                        sx={{
                                            bgcolor: '#F0F0F0',
                                            borderRadius: '12px',
                                            p: 1.5,
                                            color: 'black'
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: 600, mb: 0.5 }}>{item.title}</Typography>
                                        <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>{item.content}</Typography>
                                    </Box>
                                </Stack>
                            ))}
                        </Stack>

                        {/* Map placeholder */}
                        <Box
                            sx={{
                                mt: 5,
                                bgcolor: '#F0F0F0',
                                borderRadius: '20px',
                                height: 200,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography sx={{ color: 'rgba(0,0,0,0.4)' }}>Map Location</Typography>
                        </Box>
                    </Grid>

                    {/* Contact Form */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                bgcolor: '#F9F9F9',
                                borderRadius: '20px',
                                p: { xs: 3, md: 5 }
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>Send a Message</Typography>

                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        name="name"
                                        label="Your Name"
                                        fullWidth
                                        value={formData.name}
                                        onChange={handleChange}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '12px',
                                                bgcolor: 'white'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        name="email"
                                        label="Email Address"
                                        type="email"
                                        fullWidth
                                        value={formData.email}
                                        onChange={handleChange}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '12px',
                                                bgcolor: 'white'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <TextField
                                        name="subject"
                                        label="Subject"
                                        fullWidth
                                        value={formData.subject}
                                        onChange={handleChange}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '12px',
                                                bgcolor: 'white'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <TextField
                                        name="message"
                                        label="Message"
                                        multiline
                                        rows={5}
                                        fullWidth
                                        value={formData.message}
                                        onChange={handleChange}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '12px',
                                                bgcolor: 'white'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            bgcolor: 'black',
                                            borderRadius: 62,
                                            px: 6,
                                            py: 2,
                                            fontSize: '1rem',
                                            '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
}
