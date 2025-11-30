import React from "react";
import Link from "next/link";

export default function BackButton() {
  return (
    <div className="mb-4">
      <Link 
        href="/" 
        className="btn btn-ghost btn-sm gap-2 pl-0 hover:bg-transparent hover:text-primary text-base-content/70"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Zpět na seznam
      </Link>
    </div>
  );
}