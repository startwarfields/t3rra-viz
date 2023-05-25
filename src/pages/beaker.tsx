import React from "react";
import Example from "./chart";

const BeakerPage: React.FC = () => {
  return (
    <div className="text-white">
      <h1>Beaker Projects</h1>
      
      <section>
        <h2>Project 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          lacinia risus vitae elit vehicula, at sodales enim eleifend. Vivamus
          non nulla et ante lacinia commodo. Nullam auctor tristique mauris, ac
          dignissim ex.
        </p>
        <p>
          <strong>Project Details:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec ultrices placerat eleifend. Nulla venenatis turpis non
          sagittis eleifend.
        </p>
      </section>
      
      <section className="project">
        <h2>Project 2</h2>
        <p>
          Integer a fermentum velit, nec aliquam arcu. Curabitur feugiat
          pharetra ante vitae feugiat. Fusce placerat efficitur ligula, at
          efficitur est elementum at.
        </p>
        <p>
          <strong>Project Details:</strong> Phasellus id malesuada nunc, ut tincidunt nisl.
          Pellentesque malesuada eu mauris eget vulputate.
        </p>
      </section>
      
      <div className="flex justify-center items-center">
        <Example />
      </div>
    </div>
  );
};

export default BeakerPage;

