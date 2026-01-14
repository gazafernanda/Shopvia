import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Hero />
      <Box sx={{ flexGrow: 1 }}>
        <ProductList />
      </Box>
      <Footer />
    </Box>
  );
}
