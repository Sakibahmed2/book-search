"use client";

import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

const Books = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!searchQuery) {
        setBooks([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(
            searchQuery
          )}&limit=20`
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();

        setBooks(data.docs);
      } catch (err) {
        setError("Failed to fetch books. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [searchQuery]);

  if (!searchQuery) {
    return (
      <div className="text-center py-6 text-gray-500 dark:text-gray-4">
        Please enter a search term to find books.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-gray-600 dark:text-gray-300" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500 dark:text-gray-4">
        {error}
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        No books found for &quot;{searchQuery}&quot;. Try a different search
        term.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[1100px] mx-auto my-5">
      {books.map((book, idx) => (
        <BookCard key={idx} book={book} />
      ))}
    </div>
  );
};

export default Books;
