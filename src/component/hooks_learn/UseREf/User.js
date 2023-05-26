import React,{forwardRef} from 'react'

function User(props, inputRef) {
  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default forwardRef(User);