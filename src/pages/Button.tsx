import React from 'react';
import InferenceComponent from './inference'

const Button = () => {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () =>{
    setClicked(!clicked);
    // Call InferenceComponent


  };

  return (
    <div className="text-orange-50">
      <button onClick={handleClick}>
        {clicked ? 'Clicked' : 'Not Clicked'}
      </button>
      {clicked && <InferenceComponent />}
    </div>
  );
};

export default Button;

