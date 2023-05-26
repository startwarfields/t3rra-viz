import React from "react";
import Example from "./chart";

const BeakerPage: React.FC = () => {
  return (
    <div className="text-white justify-center">
      <h1 className="text-slate-500">Flower Predictor</h1>
      
      <section>
        <p>
         Adjust the sliders below and click predict to see what flower has the highest prediction score. 
          This application inferences a xgboost model trained on the iris dataset. 
          onnxruntime allows native typescript inference!         
        </p>
       
      </section>

 
      <section>
             <p>This website is a test bench for me learning web development </p>
     
      </section>

      
            
      <div className="flex justify-center items-center">
      </div>
    </div>
  );
};

export default BeakerPage;

