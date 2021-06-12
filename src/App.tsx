import React from 'react';
import './App.css';
import { Model1 } from './model1';
import { Example1 } from './Example1';
import { Example2 } from './Example2';
import { Model2 } from './model2';
import { uuidv4 } from './utils';
const data1 = new Model1();
const data2 = new Model2();

/**
 * The models are updated in the background.
 * The 'observing' components are able to
 * re-render as the properties chane.
 */
setInterval(() => (data1.age = data1.age + 1), 100);
setInterval(() => (data2.id = uuidv4()), 1000);

function App() {
  return (
    <div>
      <Example1 model1={data1} model2={data2} />
      <Example2 model={data1} />
    </div>
  );
}

export default App;
