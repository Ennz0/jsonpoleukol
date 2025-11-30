import React from "react";
import { Rating } from "../types";

interface ReviewListProps {
  ratings: Rating[];
}

export default function ReviewList({ ratings }: ReviewListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold px-1 text-base-content">
        Recenze zákazníků 
        <span className="text-base-content/50 text-lg font-normal ml-2">({ratings.length})</span>
      </h2>
      
      {ratings.length > 0 ? (
        <div className="grid gap-4">
          {ratings.map((rating, index) => (
            <div key={index} className="card bg-base-100 shadow-sm border border-base-200">
              <div className="card-body p-5">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8 h-8 bg-base-300 flex items-center justify-center">
                        <span className="text-xs font-bold text-base-content">{rating.name.charAt(0)}</span>
                      </div>
                    </div>
                    <span className="font-bold text-base-content">{rating.name}</span>
                  </div>
                  
                  <div className="text-warning text-sm tracking-widest">
                    {'★'.repeat(rating.score)}
                    <span className="text-base-content/20">{'★'.repeat(5 - rating.score)}</span>
                  </div>
                </div>
                
                <p className="text-base-content/80 italic">&quot;{rating.comment}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert bg-base-100 shadow-sm border border-base-200 text-base-content">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Tento produkt zatím nikdo nehodnotil. Buďte první!</span>
        </div>
      )}
    </div>
  );
}