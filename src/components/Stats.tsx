import React from "react";

interface StatsProps {
  totalItems: number;
  totalValue: number;
  totalProductsCount: number;
}

export default function Stats({ totalItems, totalValue, totalProductsCount }: StatsProps) {
  return (
    <div className="stats shadow w-full mb-8 bg-base-100 block sm:inline-grid">
      <div className="stat">
        <div className="stat-title">Nalezené produkty</div>
        <div className="stat-value text-primary">{totalItems}</div>
        <div className="stat-desc">Z celkového počtu {totalProductsCount}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Hodnota skladu</div>
        <div className="stat-value text-secondary">
          {totalValue.toLocaleString()} Kč
        </div>
        <div className="stat-desc">Cena × Počet kusů (filtr)</div>
      </div>
    </div>
  );
}