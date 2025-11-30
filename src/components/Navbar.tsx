import React from "react";
import Link from "next/link"; 

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md mb-8">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl normal-case text-base-content gap-2">
          📦 <span className="hidden sm:inline">Inventory Manager</span>
        </Link>
      </div>
    </div>
  );
}