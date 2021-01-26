import React, { useState } from 'react'
import '../02-useEffect/Effects.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
export default function ReactExampleRef() {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real example Ref</h1>
            <hr />

            { show && <MultipleCustomHooks /> }
            <button 
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow(!show);
                }}
            > 
                Show/Hide 
            </button>
        </div>
    )
}
