import { Book } from "lucide-react";
import Image from "next/image";
import React from "react";

const BookCard = ({ book }) => {
  const { title, author_name, cover_i, first_publish_year, subtitle } = book;
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : null;

  return (
    <div className="flex border-2 border-gray-300 p-2 rounded-md hover:shadow-xl transition-shadow duration-200 ease-in-out ">
      <div className="w-1/3 relative  flex items-center justify-center">
        {coverUrl ? (
          <Image
            src={coverUrl || "/placeholder.svg"}
            alt={`Cover for ${book.title}`}
            width={120}
            height={180}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full p-4 bg-gray-100">
            <Book className="h-12 w-12 text-gray-600" />
          </div>
        )}
      </div>
      <div className="w-2/3 p-4">
        <h3 className="font-semibold text-lg line-clamp-2">{book.title}</h3>
        {book.author_name && book.author_name.length > 0 && (
          <p className="text-sm text-gray-500 mt-1">
            By {book.author_name.slice(0, 2).join(", ")}
            {book.author_name.length > 2 ? " and others" : ""}
          </p>
        )}
        {book.first_publish_year && (
          <p className="text-sm mt-2">
            First published: {book.first_publish_year}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
