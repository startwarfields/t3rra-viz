import React from 'react';

const Button = () => {
  const [clicked, setClicked] = React.useState(false);
  
  const handleClick = () => {
    setClicked(!clicked)
  };

  return (
  <div className="text-orange-50">
   <button onClick={handleClick}>
        {clicked ? "Clicked" : "Not Clicked"}
      </button>
  </div>
  );
};

export default Button;
