import React, {useContext} from 'react'
import {AppContext} from './main'
export default function C() {
    const {name, setName, count, setCount} = useContext(AppContext)
  return (
    <div>
          <h1>c child</h1>
        
        <button onClick={()=>setCount(count+5)}>Increament</button>
        <h1>{count}</h1>
    </div>
  )
}
