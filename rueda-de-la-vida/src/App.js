import React, { useState } from "react";
import WheelOfLifeForm from "./components/WheelOfLifeForm";
import WheelOfLifeChart from "./components/WheelOfLifeChart";

const App = () => {
  const [values, setValues] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <WheelOfLifeForm onGenerate={setValues} />
      {values && (
        <div className="mt-8">
          <WheelOfLifeChart values={values} />
        </div>
      )}
    </div>
  );
};

export default App;
