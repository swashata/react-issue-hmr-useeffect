import React, { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div className="wrap">
      <label htmlFor="show-app-counter">
        Show Counter{" "}
        <input
          type="checkbox"
          name="show-app-counter"
          id="show-app-counter"
          checked={showCounter}
          onChange={() => setShowCounter(shown => !shown)}
        />
      </label>
      {showCounter ? <Counter /> : null}
    </div>
  );
};

export default App;
