import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(step);

  function calculateFutureDate() {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + count);
    return futureDate;
  }

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>{`Step: ${step}`}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>{`Count: ${count}`}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        <button
          onClick={() => {
            setStep(0);
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <p>{`Current Date: ${new Date().toDateString()}`}</p>
        <p>{`Future Date: ${calculateFutureDate().toDateString()}`}</p>
      </div>
    </>
  );
}
