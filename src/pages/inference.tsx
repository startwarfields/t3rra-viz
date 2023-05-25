import { InferenceSession, Tensor, env, } from 'onnxruntime-web';
import { useEffect } from 'react';

async function inference() {
  try {
    env.wasm.wasmPaths = process.env.NODE_ENV === 'production' ? '/' : '/';
    env.wasm.simd = true;
    const session = await InferenceSession.create('pipeline_xgboost.onnx');

    // prepare inputs. a tensor needs its corresponding TypedArray as data
    const input = Float32Array.from([5.5, 6.5, 4.3, 2.3]);
    const tensorA = new Tensor('float32', input, [1, 4]);

    const feeds: { [key: string]: Tensor } = { input: tensorA};


    const output  = await session.run(feeds)
    console.log(output.probabilities?.data);

  } catch (e) {
    console.error(`failed to inference ONNX model:.`, e);
  }
}
function InferenceComponent() {
  useEffect(() => {
      inference()
      .then(() => console.log('inference success'))
      .catch((error) => console.error(`failed to inference ONNX model`, error));

  }, []);

  return <div>Inference Component</div>;
}

export default InferenceComponent;

