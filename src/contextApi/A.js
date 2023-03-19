import React, {useContext} from 'react'
import {AppContext} from './main'
import B from './B';
 const A=() => {
    const {name, count} = useContext(AppContext)
  return (
    <div>
        <h1>A Parent</h1>
        {count}
        {name}
        <B/>
    </div>
  )
}
export default A