import React from "react";
import TwoPanelLayout from "../../../layouts/TwoPanelLayout";
import LeftPanel from "../../../components/Modules/Module2/EDA2/LeftPanel";
import RightPanel from "../../../components/Modules/Module2/EDA2/RightPanel";

const Eda2: React.FC = () => {
  return (
    <TwoPanelLayout leftPanel={<LeftPanel />} rightPanel={<RightPanel />} />
  );
};

export default Eda2;
