import Books from "@/components/Books";
import SearchInput from "@/components/SearchInput";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  mt-5 mx-5 md:mx-0">
      <div className="w-full max-w-[600px] mx-auto text-center mb-4">
        <h1 className="text-2xl md:text-4xl font-medium">
          Search for your favorite books
        </h1>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2">
          Welcome to our book searching app! You can search for books by title,
          author, or ISBN. Just enter your query in the search bar below and hit
          enter or click the search button.
        </p>
        <div className=" flex justify-center items-center mt-2">
          <ThemeSwitcher />
        </div>
      </div>
      <SearchInput />
      <Books />
    </div>
  );
}
