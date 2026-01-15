import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandBar from "@/components/BrandBar";
import Features from "@/components/Features";
import ProductList from "@/components/ProductList";
import DressStyleGrid from "@/components/DressStyleGrid";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBanner />
      <Navbar />
      <Hero />
      <BrandBar />
      <Features />
      <ProductList />
      <DressStyleGrid />
      <Testimonials />
      <Footer />
    </Box>
  );
}
