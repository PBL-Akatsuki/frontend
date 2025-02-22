import React from "react";
import LeftPanel from "../../../components/Modules/Module2/EDA1/LeftPanel";
import RightPanel from "../../../components/Modules/Module2/EDA1/RightPanel";

const Eda1: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col md:flex-row bg-black min-h-screen text-white">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};

export default Eda1;
