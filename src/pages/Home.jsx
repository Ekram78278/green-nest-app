import { useLoaderData } from "react-router";
import PlantCard from "../components/PlantCard";
import PlantDetails from "./PlantDetails";
import Slider from "../components/Slider";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "../components/Spinner";
import rubberPlantImage from "../assets/rubber-plant.png";


const Home = () => {
  const {plantData, plantTips} = useLoaderData();
  const {loading} = useContext(AuthContext);

   if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }
  
  console.log(plantTips)
  console.log(plantData);
  const featuredPlant = plantData.slice(0,8)
  return (
    <div className="">
    <div className="relative">
    
    <Slider></Slider>
    

    {/* Desktop: Text on image  Mobile: Text below image */}
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

<div>
  <div className="flex flex-col justify-center ">
    <h1 className="text-3xl font-bold items-center mx-auto text-green-700">Plant Care Tips </h1>   
  </div>
  <div className="grid md:grid-cols-3 grid-cols-1 space-y-5">
    {
      plantTips.map((data) =>( <div className="card w-96 bg-base-100 card-md shadow-sm mx-auto mt-4">
  <div className="card-body">
    <h2 className="card-title">{data.plantName}</h2>
    <p> <span className="font-semibold text-green-800">Sunlight Level:</span>  {data.sunlight.level} </p>
    <p> <span className="font-semibold text-green-800">Fertilizing:</span>  {data.fertilizing.frequency} </p>
    <p> <span className="font-semibold text-green-800">Watering:</span>  {data.watering.frequency} </p>
    
  </div>
</div>) )
    }

  </div>
  <div
  className="hero min-h-screen mt-10"
  style={{
    backgroundImage:
      `url(${rubberPlantImage})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Plant of the Week</h1>
      <p className="mb-5">
        A stylish, architectural plant with large, glossy, dark burgundy-green leaves. Grows into a small tree.
      </p>
     
    </div>
  </div>
</div>
</div>


    </div>
  );
};

export default Home;
