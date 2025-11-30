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
        <div className="stat-title text-base-content opacity-70">Nalezené produkty</div>
        <div className="stat-value text-primary">{totalItems}</div>
        <div className="stat-desc text-base-content opacity-60">Z celkového počtu {totalProductsCount}</div>
      </div>

      <div className="stat">
        <div className="stat-title text-base-content opacity-70">Hodnota skladu</div>
        <div className="stat-value text-success">
          {totalValue.toLocaleString('cs-CZ')} Kč
        </div>
        <div className="stat-desc text-base-content opacity-60">Cena × Počet kusů (filtr)</div>
      </div>
    </div>
  );
}