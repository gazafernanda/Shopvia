import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
    // Generate paths for all product IDs used in the mock data
    // For now, these are 1-13 based on newArrivals, topSelling and relatedProducts
    return Array.from({ length: 13 }, (_, i) => ({
        id: (i + 1).toString(),
    }));
}

export default function ProductDetailPage() {
    return <ProductDetailClient />;
}
