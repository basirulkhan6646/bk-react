import './App.css';
import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert('Counter is already at maximum value');
    }
  };

  const removeValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    } else {
      alert('Counter is already at minimum value');
    }
  };
  return (
    <>
      <h2>Hello Welcome to my Counter App</h2>
      <h3>Counter Default Value: {counter}</h3>
      <div>
        <button onClick={addValue}>Add Value</button>

        <button onClick={removeValue}>Remove value</button>
      </div>

      <div>
        <p>New Value: {counter}</p>
      </div>
    </>
  );
}
