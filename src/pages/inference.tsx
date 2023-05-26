import { InferenceSession, Tensor, env} from 'onnxruntime-web';
import { useState, useEffect } from 'react';

async function inference(values: number[]) {
  try {
    env.wasm.wasmPaths = '_next/static/wasm/node_modules/onnxruntime-web/dist/';
    env.wasm.simd = true;
    const session = await InferenceSession.create('pipeline_xgboost.onnx');

    const input = Float32Array.from(values);
    const tensorA = new Tensor('float32', input, [1, 4]);

    const feeds = { input: tensorA };

    const output = await session.run(feeds);
    return output.probabilities?.data;
  } catch (e) {
    console.error('Failed to inference ONNX model:', e);
    throw e;
  }
}

interface InferenceComponentProps {
  values: number[];
  onResult: (result: Float32Array | undefined ) => void;
}

const InferenceComponent: React.FC<InferenceComponentProps> = ({ values, onResult }) => {
  useEffect(() => {
    inference(values)
      .then((result) => {
        console.log('Inference success');
      
        onResult(result as Float32Array | undefined)
      })
      .catch((error) => {
        console.error('Failed to inference ONNX model', error);
        onResult(undefined);
      });
  }, [values, onResult]);

  return <div>Inference Component</div>;
};

export default InferenceComponent;

