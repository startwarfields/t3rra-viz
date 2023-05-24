import React from "react";

const CapPage: React.FC = () => {
  return (
    <div>
      <h1> Cap Projects</h1>
      <div className="project">
        <h2>Project 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          lacinia risus vitae elit vehicula, at sodales enim eleifend. Vivamus
          non nulla et ante lacinia commodo. Nullam auctor tristique mauris, ac
          dignissim ex.
        </p>
        <p>
          Project Details: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec ultrices placerat eleifend. Nulla venenatis turpis non
          sagittis eleifend.
        </p>
      </div>
      <div className="project">
        <h2>Project 2</h2>
        <p>
          Integer a fermentum velit, nec aliquam arcu. Curabitur feugiat
          pharetra ante vitae feugiat. Fusce placerat efficitur ligula, at
          efficitur est elementum at.
        </p>
        <p>
          Project Details: Phasellus id malesuada nunc, ut tincidunt nisl.
          Pellentesque malesuada eu mauris eget vulputate.
        </p>
      </div>
    </div>
  );
};

export default CapPage;
