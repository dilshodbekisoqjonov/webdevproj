import React, { useState, useEffect } from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(`Counter updated: ${count}`);
  }, [count]); // This will run whenever 'count' changes

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(initialCount);

  return (
    <section>
      <header>
        <h2>Counter</h2>
      </header>
      <p>Count: {count}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
}

export default Counter;