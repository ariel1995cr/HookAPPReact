import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './Counter.css';

export const CounterWithCostumHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
          <h1>Counter With Hook: {state}</h1>
          <hr />
          <button className="btn" onClick={() => increment()}>+1</button>
          <button className="btn" onClick={ reset }>reset</button>  
          <button className="btn" onClick={() => decrement()}>-1</button>  
        </>
    )
}
