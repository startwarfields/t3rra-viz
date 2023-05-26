import React from "react";
import Example from "./chart";

const BeakerPage: React.FC = () => {
  return (
    <div className="flex text-white justify-center">
      <h1 className="text-slate-500">Flower Predictor</h1>
      
      <section>
        <p>
          Adjust the sliders below and click on the predict text to see how the machine learning model thinks which class
          of flower it is 
        </p>
        <p>
          </p>
      </section>
            
      <div className="flex justify-center items-center">
      </div>
    </div>
  );
};

export default BeakerPage;

