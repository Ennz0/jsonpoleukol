"use client";

import { useState } from "react";
import productsData from "../data/products.json";
import { Product } from "../types";

import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import FilterBar from "../components/FilterBar";
import ProductTable from "../components/ProductTable";

export default function InventoryManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const categories = Array.from(new Set((productsData as Product[]).map((p) => p.category)));

  const filteredProducts = (productsData as Product[]).filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStock = onlyInStock ? product.stockCount > 0 : true;

    const matchesCategory = selectedCategory === "" || product.category === selectedCategory;

    const price = product.price;
    const min = minPrice !== "" ? Number(minPrice) : 0;
    const max = maxPrice !== "" ? Number(maxPrice) : Infinity;
    const matchesPrice = price >= min && price <= max;

    return matchesSearch && matchesStock && matchesCategory && matchesPrice;
  });

  const totalItems = filteredProducts.length;
  const totalValue = filteredProducts.reduce((acc, curr) => acc + (curr.price * curr.stockCount), 0);

  return (
    <div className="min-h-screen bg-base-200 font-sans">
      <Navbar />

      <main className="container mx-auto p-4 max-w-7xl">
        <Stats 
          totalItems={totalItems} 
          totalValue={totalValue} 
          totalProductsCount={productsData.length}
        />

        <FilterBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
          onlyInStock={onlyInStock} 
          onStockChange={setOnlyInStock}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          minPrice={minPrice}
          onMinPriceChange={setMinPrice}
          maxPrice={maxPrice}
          onMaxPriceChange={setMaxPrice}
          categories={categories}
        />

        <ProductTable products={filteredProducts} />
      </main>
    </div>
  );
}