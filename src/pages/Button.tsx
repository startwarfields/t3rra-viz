import React, { useState } from 'react';
import InferenceComponent from './inference';

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ label, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    onChange(newValue);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="range" min={0} max={10} step={0.1} value={value} onChange={handleChange} />
      <span>{value.toFixed(1)}</span>
    </div>
  );
};

const Button: React.FC = () => {
  const [values, setValues] = useState([5.5, 6.5, 4.3, 2.3]);
  const [clicked, setClicked] = useState(false);
  const [inferenceResult, setInferenceResult] = useState<Float32Array | undefined>(undefined);
  const [inferencePerformed, setInferencePerformed] = useState(false);

  const handleSliderChange = (index: number, newValue: number) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  const handleInferenceResult = (result: Float32Array | undefined) => {
    if(inferencePerformed) {
      setInferenceResult(result);
      console.log('Inference result:', result);
      setClicked(false);
    }
  
  };

  const handleClick = () => {
      setClicked(true);
      setInferencePerformed(true);
      
  };

  return (
    <div className='text-slate-100' >
      {!clicked && (
        <>
          <Slider label="Petal Width" value={values[0] ?? 0} onChange={(value) => handleSliderChange(0, value)} />
          <Slider label="Petal Length" value={values[1] ?? 0} onChange={(value) => handleSliderChange(1, value)} />
          <Slider label="Sepal Width" value={values[2] ?? 0} onChange={(value) => handleSliderChange(2, value)} />
          <Slider label="Sepal Length" value={values[3] ?? 0} onChange={(value) => handleSliderChange(3, value)} />
          <div className='flex flex-shrink justify-center items-center bg-red-950 rounded-2xl'>
          <button onClick ={handleClick}>Predict</button>
          </div>
        </>
      )}

      {clicked && <InferenceComponent values={values} onResult={handleInferenceResult} />}
      

      {inferencePerformed && (
        <div className='items-center'>
          <h3>Inference Result:</h3>
          <ul>
            <li>Setosa: {inferenceResult?.[0]?.toFixed(3)}</li>
            <li>Versicolor: {inferenceResult?.[1]?.toFixed(3)}</li>
            <li>Virginica: {inferenceResult?.[2]?.toFixed(3)}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Button;

