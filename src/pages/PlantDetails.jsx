import { useParams } from "react-router";
import Spinner from "../components/Spinner";
import usePlants from "../hooks/usePlantData";
import ConsultationForm from "../components/ConsultationForm";

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
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="mb-6 text-green-700 hover:text-green-900 flex items-center gap-2 font-semibold transition-colors"
        >
          <span>←</span> Back to Plants
        </button>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Left Side - Image */}
            <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-full object-cover"
              />
              
              {/* Price Badge */}
              <div className="absolute top-6 right-6 bg-green-700 text-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold">${plant.price}</span>
              </div>
              
              {/* Rating Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <span className="text-yellow-500 text-xl">★</span>
                <span className="font-bold text-gray-900">{plant.rating}</span>
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col">
              
              {/* Header */}
              <div className="mb-6">
                <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {plant.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {plant.plantName}
                </h1>
                <p className="text-gray-500">
                  by <span className="text-green-700 font-semibold">{plant.providerName}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
                {plant.description}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                
                {/* Care Level */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                  <p className="text-gray-500 text-xs uppercase mb-1">Care Level</p>
                  <p className="text-green-900 font-bold text-lg">{plant.careLevel}</p>
                </div>

                {/* Stock */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
                  <p className="text-gray-500 text-xs uppercase mb-1">In Stock</p>
                  <p className="text-blue-900 font-bold text-lg">{plant.availableStock}</p>
                </div>

                {/* Rating */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl border border-yellow-200">
                  <p className="text-gray-500 text-xs uppercase mb-1">Rating</p>
                  <p className="text-yellow-900 font-bold text-lg">{plant.rating} ⭐</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-8 rounded-full font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg">
                  Add to Cart
                </button>
                <button className="sm:w-auto px-8 py-4 border-2 border-green-600 text-green-600 rounded-full font-bold hover:bg-green-50 transition-all">
                  <span className="text-2xl">♡</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Care Instructions */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Care</h3>
            <p className="text-gray-600 text-sm">
              Perfect for beginners. Requires minimal maintenance and thrives indoors.
            </p>
          </div>

          {/* Fast Delivery */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Get your plants delivered within 2-3 business days with care.
            </p>
          </div>

          {/* Guarantee */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">100% Guarantee</h3>
            <p className="text-gray-600 text-sm">
              30-day money-back guarantee. We stand behind our plants.
            </p>
            
          </div>
          

        </div>
          <ConsultationForm></ConsultationForm>
      </div>
      
    </div>
  );
};

export default PlantDetails
