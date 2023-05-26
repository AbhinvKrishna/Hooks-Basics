import React, { useRef } from 'react'
import User from './User'

function ForwardRef() {

    const inputRef = useRef(null);

    const updateInput = ()=>{
        inputRef.current.value = "1000"
        inputRef.current.style.color="red"
        inputRef.current.focus();
    }

  return (
    <div>
        <h3>ForwardRef</h3>
        <User ref={inputRef}/>
        <button onClick={updateInput} >Update Input box</button>
    </div>
  )
}

export default ForwardRef;