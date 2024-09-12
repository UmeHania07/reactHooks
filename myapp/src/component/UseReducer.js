import React, { useReducer } from 'react'

function UseReducer() {
    // ye dispatch ek value return kre ga..ye parameter mai (state , action) hota hay.
    // mai koi b button press krogi woh dispatch function vale sent krta h action  mai store krne k liye.

    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case 'Increment':
                return state + 1

            case 'Decrement':
                return state - 1

            case 'Reset':
                return initialState

            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h1>Count ={count}</h1>

            <button onClick={() => dispatch("Increment")}>Increment</button>
            <button onClick={() => dispatch("Decrement")}>Decrement</button>
            <button onClick={() => dispatch("Reset")}>Reset</button>


        </>
    )
}

export default UseReducer
