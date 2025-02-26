import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
 const sortCountries = (value) => {
  const sortCountry = [...countries].sort((a, b) => {
    return value === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common);
  });
  setCountries(sortCountry);
 }
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-52 px-3 py-1.5 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-sm"
      />

      {/* Sort Buttons */}
      <div className="flex gap-2">
        <button
          onClick={()=> sortCountries("asc")}
          className="px-4 py-1.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          Asc
        </button>
        <button
          onClick={()=> sortCountries("desc")}
          className="px-4 py-1.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        >
          Desc
        </button>
      </div>

      {/* Filter Dropdown */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full sm:w-40 px-3 py-1.5 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
      >
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default SearchFilter;
