import React from "react";
import { useNavigate } from "react-router-dom";

const LeftPanel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:w-1/2 p-12 bg-black text-white relative flex flex-col min-h-screen">
      {/* Main content wrapper */}
      <div className="flex-grow space-y-8">
        {/* NeoMyst Logo with Blue Glow */}
        <button
          onClick={() => navigate("/")}
          className="text-3xl font-bold text-blue-400 relative hover:text-blue-300 transition duration-300"
        >
          NeoMyst
          <span className="absolute inset-0 blur-lg opacity-75 text-blue-500">
            NeoMyst
          </span>
        </button>

        {/* Section Subtitle & Archive Label */}
        <div className="flex justify-between items-center text-lg text-gray-400 italic">
          <span>
            | Scaling the Matrix:{" "}
            <span className="underline">Feature Scaling</span>
          </span>
          <span className="text-blue-400 underline italic">Archive 1.5</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
          Riley realizes that the data is on
          <span className="text-yellow-400"> different scales</span>. For
          example, player levels range from
          <span className="text-yellow-400"> 0 to 100</span>, while transaction
          amounts range from
          <span className="text-yellow-400"> $0 to $1 million</span>. This
          difference in scale could distort the analysis.
        </h2>

        <hr className="border-gray-500 w-full" />

        {/* Story Content */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          Feature scaling ensures that all features (variables) are on a similar
          scale. Common methods include:
        </p>

        <ul className="list-disc pl-6 text-lg md:text-xl text-gray-300 space-y-2">
          <li>Normalization (scaling values to a range of 0 to 1).</li>
          <li>
            Standardization (scaling values to have a mean of 0 and a standard
            deviation of 1).
          </li>
        </ul>
      </div>

      {/* Buttons Section - Fixed at bottom with margin */}
      <div className="flex items-center justify-between mt-auto mb-0">
        {/* Go Back Button */}
        <button
          onClick={() => navigate("/pages/PreProc4")}
          className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-gray-500 rounded-full relative transition duration-300 
          hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
        >
          <span className="text-xl">&laquo;</span>
          <span>Go Back</span>
          <span className="absolute inset-0 blur-lg opacity-50 bg-gray-500 rounded-full"></span>
        </button>

        {/* Investigate Further Button */}
        <button
          onClick={() => navigate("/pages/PreProc6")}
          className="flex items-center space-x-2 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full relative transition duration-300 
          hover:bg-yellow-400 hover:scale-105 hover:shadow-lg"
        >
          <span>Investigate Further</span>
          <span className="text-xl">&raquo;</span>
          <span className="absolute inset-0 blur-lg opacity-50 bg-yellow-500 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default LeftPanel;
