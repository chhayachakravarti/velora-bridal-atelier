import React, { useState, useEffect } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import FilterSidebar from "./FilterSidebar";

export default function Navbar({ onSearch, onSortChange }) {
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({});

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onSortChange(e.target.value);
  };

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white shadow-sm py-3 sm:py-4">
        <div className="container mx-auto px-4 flex flex-wrap sm:flex-nowrap justify-between sm:justify-center gap-2.5 sm:gap-4 items-center">
          {/* Filter Button */}
          <button
            onClick={() => setFilterOpen((prev) => !prev)}
            className="flex items-center gap-2 bg-pink-600 text-white px-3.5 sm:px-4 py-2 rounded-lg hover:bg-pink-700 transition-transform duration-200 text-sm sm:text-base shrink-0"
          >
            <FaFilter /> Filter
          </button>

          {/* Search Input */}
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="order-3 sm:order-none w-full sm:flex-1 sm:max-w-md border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base outline-none focus:ring-2 focus:ring-pink-500 transition"
          />

          {/* Sort Dropdown */}
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-lg px-2.5 sm:px-3 py-2 text-sm sm:text-base outline-none focus:ring-2 focus:ring-pink-500 transition shrink-0"
          >
            <option value="newest">Newest</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </nav>

      {/* Filter Sidebar */}
      {filterOpen && (
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          onClose={() => setFilterOpen(false)}
        />
      )}
    </>
  );
}
