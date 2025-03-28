// import React from "react";
// import { useNavigate } from "react-router-dom";

// const LeftPanel: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full md:w-1/2 p-12 space-y-8 bg-black text-white relative">
//       {/* NeoMyst Logo with Blue Glow */}
//       <button
//         onClick={() => navigate("/")}
//         className="text-3xl font-bold text-blue-400 relative hover:text-blue-300 transition duration-300"
//       >
//         NeoMyst
//         <span className="absolute inset-0 blur-lg opacity-75 text-blue-500">
//           NeoMyst
//         </span>
//       </button>

//       {/* Section Subtitle & Archive Label */}
//       <div className="flex justify-between items-center text-lg text-gray-400 italic">
//         <span>
//           | The Digital Crime Scene:{" "}
//           <span className="underline">Understanding Raw Data</span>
//         </span>
//         <span className="text-blue-400 underline italic">Archive 1.1</span>
//       </div>

//       {/* Main Heading */}
//       <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
//         Riley’s journey into the heart of NeoVerse’s data will
//         <span className="text-yellow-400">
//           {" "}
//           teach you everything you need to know
//         </span>{" "}
//         about data preprocessing.
//         <br /> Here’s how the story unfolds:
//       </h2>

//       <hr className="border-gray-500 w-full" />

//       {/* Story Content */}
//       <p className="text-lg md:text-xl leading-relaxed text-gray-300">
//         Riley logs into the NeoVerse servers and is greeted with a chaotic mess
//         of data:
//       </p>

//       <ul className="list-disc pl-6 text-lg md:text-xl text-gray-300 space-y-2">
//         <li>Server logs with missing timestamps.</li>
//         <li>User profiles with incomplete or corrupted entries.</li>
//         <li>Transaction records filled with outliers and errors.</li>
//       </ul>

//       <p className="text-lg md:text-xl leading-relaxed text-gray-300">
//         This is your raw dataset. In machine learning, raw data is often messy,
//         incomplete, and unstructured. Your first task is to understand what
//         you’re working with.
//       </p>

//       {/* Buttons Section */}
//       <div className="flex items-center justify-between pt-6">
//         {/* Go Back Button */}
//         <button
//           onClick={() => navigate("/pages/Module1A")}
//           className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-gray-500 rounded-full relative transition duration-300
//           hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
//         >
//           <span className="text-xl">&laquo;&laquo;</span>
//           <span>Go Back</span>
//           <span className="absolute inset-0 blur-lg opacity-50 bg-gray-500 rounded-full"></span>
//         </button>

//         {/* Investigate Further Button */}
//         <button
//           onClick={() => navigate("/pages/PreProc2")}
//           className="flex items-center space-x-2 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full relative transition duration-300
//           hover:bg-yellow-400 hover:scale-105 hover:shadow-lg"
//         >
//           <span>Investigate Further</span>
//           <span className="text-xl">&raquo;&raquo;&raquo;</span>
//           <span className="absolute inset-0 blur-lg opacity-50 bg-yellow-500 rounded-full"></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LeftPanel;

import React from "react";
import { useNavigate } from "react-router-dom";

const LeftPanel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:w-1/2 p-12 bg-black text-white relative flex flex-col min-h-screen font-oxanium">
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
            | The Digital Crime Scene: <span>Understanding Raw Data</span>
          </span>
          <span className="text-blue-400 underline italic">Archive 1.1</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
          Riley's journey into the heart of NeoVerse's data will
          <span className="text-yellow-400">
            {" "}
            teach you everything you need to know
          </span>{" "}
          about data preprocessing.
          <br /> Here's how the story unfolds:
        </h2>

        <hr className="border-gray-500 w-full" />

        {/* Story Content */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          Riley logs into the NeoVerse servers and is greeted with a chaotic
          mess of data:
        </p>

        <ul className="list-disc pl-6 text-lg md:text-xl text-gray-300 space-y-2">
          <li>Server logs with missing timestamps.</li>
          <li>User profiles with incomplete or corrupted entries.</li>
          <li>Transaction records filled with outliers and errors.</li>
        </ul>

        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          This is your raw dataset. In machine learning, raw data is often
          messy, incomplete, and unstructured. Your first task is to understand
          what you're working with.
        </p>
      </div>

      {/* Buttons Section - Fixed at bottom with margin */}
      <div className="flex items-center justify-between mt-auto mb-0">
        {/* Go Back Button */}
        <button
          onClick={() => navigate("/pages/IntroStory")}
          className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-gray-500 rounded-full relative transition duration-300 
          hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
        >
          <span className="text-xl">&laquo;</span>
          <span>Go Back</span>
          <span className="absolute inset-0 blur-lg opacity-50 bg-gray-500 rounded-full"></span>
        </button>

        {/* Investigate Further Button */}
        <button
          onClick={() => navigate("/pages/PreProc2")}
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
