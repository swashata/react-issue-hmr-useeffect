import React, { useRef, useEffect, useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

const Counter = () => {
  // some state
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const { count } = state;
  // get initial document.title and persist it
  // based on initial title, so we use useRef
  const initialDocTitle = useRef(document.title);

  // change document title if count changes
  useEffect(() => {
    const docTitle = initialDocTitle.current;
    document.title = `(${count}) ${docTitle}`;
    return () => {
      document.title = docTitle;
    };
  }, [count]);

  return (
    <div>
      <p>
        Count is: <code>{count}</code>
      </p>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
