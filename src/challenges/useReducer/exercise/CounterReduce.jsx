import { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        default:
            return state; // ✅ Always return state by default
    }
};

const CounterReduce = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
};

export default CounterReduce;
