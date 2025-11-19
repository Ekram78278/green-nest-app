import { Link } from "react-router";

const PlantCard = ({ data }) => {
  return (
    <div className="relative w-full h-[350px] sm:h-[400px] group cursor-pointer overflow-hidden">
      {/* Top Half - Slides Down */}
      <div className="absolute w-full h-1/2 flex flex-col transition-all duration-500 translate-y-1/2 group-hover:translate-y-0 z-10">
        {/* Full Width Image */}
        <div className="flex-1 w-full overflow-hidden">
          <img
            src={data.image}
            alt={data.plantName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Green Title Bar */}
        <div className="bg-gradient-to-br from-green-700 to-green-900 py-2 sm:py-3 px-3 sm:px-4">
          <h2 className="text-white text-xs sm:text-sm md:text-base font-bold text-center truncate">
            {data.plantName}
          </h2>
          <p className="text-white/80 text-[10px] sm:text-xs text-center">
            {data.category}
          </p>
        </div>
      </div>

      {/* Bottom Half - Slides Up */}
      <div className="absolute w-full h-1/2 bottom-0 bg-white/90 backdrop-blur-sm border border-green-600 flex items-center justify-center transition-all duration-500 -translate-y-1/2 group-hover:translate-y-0 shadow-2xl">
        <div className="p-3 sm:p-4 md:p-6 w-full">
          <p className="text-gray-800 text-[10px] sm:text-xs leading-relaxed mb-2 sm:mb-4 line-clamp-3">
            {data.description}
          </p>
          <div className="flex items-center justify-between mb-2 sm:mb-4 text-[10px] sm:text-xs">
            <span className="text-gray-700">
              <strong>Care:</strong> {data.careLevel}
            </span>
            <span className="text-gray-700">
              <strong>Stock:</strong> {data.availableStock}
            </span>
          </div>
          <Link
            to={`/plant-details/${data.plantId}`}
            className="w-full bg-gradient-to-br from-green-700 to-green-900 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-sm font-semibold hover:from-green-900 hover:to-green-700 transition-all duration-300"
          >
            Learn More - ${data.price}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
