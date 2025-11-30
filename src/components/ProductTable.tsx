import React from "react";
import Link from "next/link";
import { Product } from "../types";
import StarRating from "./StarRating";

interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
  
  const getAverageScore = (ratings: Product["ratings"]) => {
    if (!ratings || ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, curr) => acc + curr.score, 0);
    return sum / ratings.length;
  };

  return (
    <div className="overflow-x-auto bg-base-100 rounded-box shadow-xl border border-base-200">
      <table className="table table-zebra w-full">
        <thead className="bg-base-200 text-base-content uppercase text-xs font-bold">
          <tr>
            <th>Produkt</th>
            <th>Kategorie</th>
            <th>Cena</th>
            <th>Stav skladu</th>
            <th>Hodnocení</th>
            <th className="text-right">Akce</th>
          </tr>
        </thead>
        <tbody className="text-base-content">
          {products.map((product) => {
            const avgRating = getAverageScore(product.ratings);

            return (
              <tr key={product.id} className="hover">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar placeholder">
                    </div>
                    <div>
                      <div className="font-bold text-base-content">{product.name}</div>
                      <div className="text-xs opacity-50 badge badge-outline badge-sm mt-1 text-base-content">
                        {product.supplier.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="font-medium text-base-content/80">{product.category}</span>
                </td>
                <td className="font-mono font-bold text-base text-base-content">
                  {product.price.toLocaleString('cs-CZ')} Kč
                </td>
                <td>
                  {product.stockCount > 0 ? (
                    <div
                      className={`badge ${
                        product.stockCount < 5 ? "badge-warning" : "badge-success"
                      } gap-2 text-white border-none`}
                    >
                      {product.stockCount} ks
                    </div>
                  ) : (
                    <div className="badge badge-error gap-2 text-white border-none">
                      Vyprodáno
                    </div>
                  )}
                </td>
                <td>
                  {product.ratings.length > 0 ? (
                    <div className="flex flex-col items-start gap-1">
                      <StarRating rating={avgRating} id={product.id} />
                      <span className="text-[10px] uppercase font-bold tracking-wider opacity-50 ml-1 text-base-content">
                        {avgRating.toFixed(1)} / 5
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs italic opacity-50 text-base-content">Nehodnoceno</span>
                  )}
                </td>
                <td className="text-right">
                  <Link href={`/products/${product.id}`}>
                    <button className="btn btn-sm btn-ghost text-primary hover:bg-primary hover:text-white transition-colors">
                      Detail
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {products.length === 0 && (
        <div className="flex flex-col items-center justify-center p-16 text-center text-base-content">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-bold">Nebyly nalezeny žádné produkty</h3>
          <p className="text-base-content opacity-60">
            Zkuste změnit filtry nebo hledaný výraz.
          </p>
        </div>
      )}
    </div>
  );
}