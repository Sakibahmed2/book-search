"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trimEnd()) {
      router.push(`/?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 w-full max-w-[800px]">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className={`py-2 px-4 bg-black text-white hover:bg-gray-800 cursor-pointer transition-all duration-200 rounded-md ${
          query ? "" : "opacity-50 "
        }`}
        onClick={handleSearch}
        disabled={!query.trim()}
      >
        Search
      </button>
      <button
        className={`py-2 px-4 bg-sky-600 text-white hover:bg-sky-700 cursor-pointer transition-all duration-200 rounded-md `}
        onClick={() => {
          setQuery("");
          router.push("/");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default SearchInput;
