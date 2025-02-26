import React, { useEffect, useTransition } from "react";
import { getCountryData } from "../api/Postapi";
import CountryCard from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("All");

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountryData();
      setCountries(response.data);
    });
  }, []);
  // console.log(countries);

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  console.log(search , filter);
  const searchCountry = (country) => {
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    } 
    else{
      return country;
    }
  }
  const filterRegion = (country) => {
    if(filter === "All"){
      return country;
    }
    else{
      return country.region === filter
    }
  }

  const filteredCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

  
  

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 text-white">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries = {countries}
        setCountries = {setCountries}
      />
      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {filteredCountries.map((country, index) => {
          return <CountryCard key={index} countryData={country} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
