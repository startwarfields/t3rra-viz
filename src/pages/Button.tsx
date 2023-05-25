import React from 'react';
import inference from './inference';

const Button = () => {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () =>{
    setClicked(!clicked);
    inference()
      .then(() => console.log('inference success'))
      .catch((error) => console.error(`failed to inference ONNX model`, error));
  };

  return (
    <div className="text-orange-50">
      <button onClick={handleClick}>
        {clicked ? 'Clicked' : 'Not Clicked'}
      </button>
    </div>
  );
};

export default Button;

