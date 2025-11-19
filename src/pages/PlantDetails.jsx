import { useParams } from "react-router";
import Spinner from "../components/Spinner";
import usePlants from "../hooks/usePlantData";

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, loading } = usePlants();
  const plant = plants.find((p) => p.plantId === parseInt(id));

  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <div>
      <img
        src={plant.image}
        alt={plant.plantName}
        className="w-full md:w-1/3 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default PlantDetails;
