import React, { PureComponent } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  x: number;
  y: number;
  z: number;
}

const data: DataPoint[] = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-scatter-chart-edeu2s';

  render() {
    return (
      <div style={{ width: 300, height: 300 }}>
        <ResponsiveContainer>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="white" />
            <XAxis type="number" dataKey="x" name="stature" unit="cm" stroke="white" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" stroke="white" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={data} fill="white" stroke="black" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

