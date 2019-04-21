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
  console.log(`Current title "${document.title}"`);
  const initialDocTitle = useRef(document.title);
  console.log(`Stored ref title "${initialDocTitle.current}"`);

  // change document title if count changes
  useEffect(() => {
    // this doesn't work, initialDocTitle gets messed up on re-render
    // const docTitle = initialDocTitle.current;
    // but this works fine, with the proper cleanup
    const docTitle = document.title;
    console.log(`Changing title to "(${count}) ${docTitle}" on count ${count}`);
    document.title = `(${count}) ${docTitle}`;
    return () => {
      console.log(`Reseting title to "${docTitle}"`);
      console.log(`Stored ref title "${initialDocTitle.current}"`);
      document.title = docTitle;
    };
  }, [count]);

  return (
    <div>
      <p>
        Count is:: <code>{count}</code>
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
