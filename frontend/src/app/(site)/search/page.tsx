import { Suspense } from 'react';
import Search from "@/appPages/site/components/pages/search/Search";

export const dynamic = 'force-dynamic';

const SearchPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Search />
  </Suspense>
);

export default SearchPage;