import { useState } from "react";
import PlantCard from "../components/PlantCard";
import Spinner from "../components/Spinner";
import usePlants from "../hooks/usePlantData";

const Plants = () => {
  const { plants, loading } = usePlants();
  const [search, setSearch] = useState("");

  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  const term = search.trim().toLocaleLowerCase();
  const searchedPlants = term
    ? plants.filter((data) => data.plantName.toLocaleLowerCase().includes(term))
    : plants;

  if (searchedPlants.length === 0)
    return (
      <div className="mx-auto flex flex-col justify-center items-center">
        <p className="text-green-700 font-bold text-5xl">
          opss !! No Plant Found
        </p>
      </div>
    );

  return (
    <div>
      <label className="input mx-auto justify-center flex flex-row ">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
          placeholder="Search Plants"
        />
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4">
        {searchedPlants.map((data) => (
          <PlantCard key={data.plantId} data={data}></PlantCard>
        ))}
      </div>
    </div>
  );
};

export default Plants;
