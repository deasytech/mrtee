"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const SearchBar = () => {
  const router = useRouter();
  const [ query, setQuery ] = useState("");

  return (
    <div className="flex gap-3 bg-white border border-gray-300 px-3 py-1 items-center rounded-full">
      <input
        className="outline-none w-full bg-transparent text-black/75"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        disabled={query === ""}
        onClick={() => router.push(`/search/${query}`)}
      >
        <Search className="cursor-pointer h-4 w-4 text-black/75 hover:text-gold" />
      </button>
    </div>
  );
};

export default SearchBar;
