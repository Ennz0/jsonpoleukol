import React from "react";

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onlyInStock: boolean;
  onStockChange: (value: boolean) => void;
  
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  minPrice: string;
  onMinPriceChange: (value: string) => void;
  maxPrice: string;
  onMaxPriceChange: (value: string) => void;
  categories: string[];
}

export default function FilterBar({
  searchTerm,
  onSearchChange,
  onlyInStock,
  onStockChange,
  selectedCategory,
  onCategoryChange,
  minPrice,
  onMinPriceChange,
  maxPrice,
  onMaxPriceChange,
  categories,
}: FilterBarProps) {
  return (
    <div className="card bg-base-100 shadow-xl mb-8">
      <div className="card-body p-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <label className="input input-bordered flex items-center gap-2 grow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            <input
              type="text"
              className="grow"
              placeholder="Hledat podle názvu..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </label>

          <div className="form-control">
            <label className="label cursor-pointer gap-3 border border-base-200 rounded-lg px-4 py-2 hover:bg-base-200 transition-colors">
              <span className="label-text font-semibold">Pouze skladem</span>
              <input
                type="checkbox"
                className="toggle toggle-success toggle-sm"
                checked={onlyInStock}
                onChange={(e) => onStockChange(e.target.checked)}
              />
            </label>
          </div>
        </div>

        <div className="divider my-0"></div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          
          <select 
            className="select select-bordered w-full sm:w-1/3"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">Všechny kategorie</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <div className="flex items-center gap-2 w-full sm:w-2/3">
            <div className="join w-full">
              <input 
                className="join-item input input-bordered w-1/2" 
                placeholder="Cena od (Kč)" 
                type="number"
                value={minPrice}
                onChange={(e) => onMinPriceChange(e.target.value)}
              />
              <input 
                className="join-item input input-bordered w-1/2" 
                placeholder="Cena do (Kč)" 
                type="number"
                value={maxPrice}
                onChange={(e) => onMaxPriceChange(e.target.value)}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}