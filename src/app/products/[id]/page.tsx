import React from "react";
import Link from "next/link";
import productsData from "../../../data/products.json";
import { Product } from "../../../types";

import BackButton from "../../../components/BackButton";
import ProductDetailCard from "../../../components/ProductDetailCard";
import ReviewList from "../../../components/ReviewList";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id);

  const product = (productsData as Product[]).find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-base-200 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-error mb-4">Produkt nenalezen 😕</h1>
          <Link href="/" className="btn btn-primary">Zpět na seznam</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8 flex justify-center items-start">
      <div className="w-full max-w-3xl space-y-8">
        <BackButton />
        <ProductDetailCard product={product} />
        <ReviewList ratings={product.ratings} />

      </div>
    </div>
  );
}