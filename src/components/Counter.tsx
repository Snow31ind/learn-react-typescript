import React, { useReducer } from 'react';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

type CounterStateType = {
  count: number;
};

type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};

type ResetAction = {
  type: 'reset';
};

type CounterActionType = UpdateAction | ResetAction;

const initialState = {
  count: 0,
};

function reducer(state: CounterStateType, action: CounterActionType) {
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + action.payload };
    }
    case 'decrement': {
      return { ...state, count: state.count - action.payload };
    }
    case 'reset': {
      return { ...state, count: 0 };
    }
    default:
      return state;
  }
}

type Props = {};

const Counter = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementHandler = () => {
    dispatch({ type: 'increment', payload: 1 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement', payload: 1 });
  };

  const resetHandler = () => dispatch({ type: 'reset' });

  return (
    <div>
      <p>Current counter: {state.count}</p>
      <button onClick={incrementHandler}>increment 1</button>
      <button onClick={decrementHandler}>decrement 1</button>
      <button onClick={resetHandler}>decrement 1</button>
    </div>
  );
};

export default Counter;
