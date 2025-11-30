import React from "react";
import { Product } from "../types";

interface ProductDetailCardProps {
  product: Product;
}

export default function ProductDetailCard({ product }: ProductDetailCardProps) {
  
  const calculateAverage = () => {
    if (product.ratings.length === 0) return "Nehodnoceno";
    const sum = product.ratings.reduce((acc, curr) => acc + curr.score, 0);
    return (sum / product.ratings.length).toFixed(1);
  };

  const averageRating = calculateAverage();

  return (
    <div className="card bg-base-100 shadow-xl overflow-hidden">
      <div className="card-body">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
          <div>
            <h1 className="card-title text-3xl mb-1 text-base-content">{product.name}</h1>
            <div className="flex gap-2">
               <div className="badge badge-error badge-outline">{product.category}</div>
               <div className="badge badge-ghost text-base-content/80">Dodavatel: {product.supplier.name}</div>
            </div>
          </div>
          <div className="text-right">
             <div className="text-3xl font-bold text-base-content font-mono">{product.price.toLocaleString('cs-CZ')} Kč</div>
          </div>
        </div>

        <div className="divider my-0"></div>

        <div className="py-4">
           <h3 className="font-bold text-sm text-base-content/60 uppercase mb-2">Popis produktu</h3>
           <p className="text-base-content leading-relaxed">{product.description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-base-200 p-4 rounded-box mt-2">
           <div>
              <span className="text-xs text-base-content/60 uppercase block">Dostupnost</span>
              <span className={`font-bold ${product.stockCount > 0 ? 'text-success' : 'text-error'}`}>
                {product.stockCount > 0 ? 'Skladem' : 'Vyprodáno'}
              </span>
           </div>
           <div>
              <span className="text-xs text-base-content/60 uppercase block">Počet kusů</span>
              <span className="font-bold text-base-content">{product.stockCount} ks</span>
           </div>
           <div>
              <span className="text-xs text-base-content/60 uppercase block">Hodnocení</span>
              <span className="font-bold text-warning">★ {averageRating}</span>
           </div>
           <div>
              <span className="text-xs text-base-content/60 uppercase block">Recenze</span>
              <span className="font-bold text-base-content">{product.ratings.length}x</span>
           </div>
        </div>
      </div>
    </div>
  );
}