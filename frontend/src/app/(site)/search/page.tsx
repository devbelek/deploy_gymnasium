"use client";
import React, { Suspense } from "react";
import dynamic from 'next/dynamic';

const SearchContent = dynamic(() => import('./SearchContent'), { ssr: false });

const Search: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
};

export default Search;