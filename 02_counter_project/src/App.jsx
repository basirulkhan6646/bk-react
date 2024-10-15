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

  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h2>Hello Welcome to my Counter App</h2>
      <h3>Counter Default Value: {counter}</h3>
      <div>
        <button onClick={addValue}>Add Value</button>

        <button onClick={removeValue}>Remove value</button>
      </div>

      <div>
        <button onClick={() => setCounter(counter * 5)}>5X Value</button>
        <button onClick={() => setCounter(1)}>Reset Value</button>
        <p>New Value: {counter}</p>
      </div>
    </>
  );
}
