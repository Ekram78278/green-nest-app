import { useLoaderData } from "react-router";
import PlantCard from "../components/PlantCard";
import PlantDetails from "./PlantDetails";
import Slider from "../components/Slider";


const Home = () => {
  const plantData = useLoaderData();
  const featuredPlant = plantData.slice(0,8)
  return (
    <div className="">
    <div className="relative">
    {/* <img
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
      src="/src/assets/hero-image.jpg"
      alt="Hero"
    /> */}
    <Slider></Slider>
    

    {/* Desktop: Text on image | Mobile: Text below image */}
    <div className="sm:absolute sm:top-1/4 sm:right-10 sm:max-w-md backdrop-blur-lg bg-white/70 p-6 sm:p-8 sm:rounded-lg sm:shadow-lg -mt-10 sm:mt-0 mx-4 sm:mx-0 rounded-lg shadow-lg sm:shadow-none relative z-10">
      <h1 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-tight">
        WELCOME TO SPRING STORE PRODUCTS
      </h1>
      <p className="text-gray-700 text-sm sm:text-base mt-3 sm:mt-4">
        Discover our collection of beautiful plants
      </p>
    </div>
  </div>

  {/* Heading Section */}
  <div className="flex flex-col justify-center gap-2 mt-8 sm:mt-10 items-center px-4">
    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 text-center">
      Top Rated Indoor Plants
    </h4>
    <p className="text-gray-400 text-sm lg:text-base text-center max-w-2xl">
      Explore All the Trending Plants for Purify Your Indoor Air
    </p>
  </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4">
  {featuredPlant.map((data) => (
    <PlantCard data={data} key={data.plantId} />
   
    
  ))}
</div>

    </div>
  );
};

export default Home;
