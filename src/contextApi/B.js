import React, {useContext} from 'react'
import {AppContext} from './main'
import C from './C'

 const B=() => {
    const {name, count} = useContext(AppContext)
  return (
    <div>
        <h1>B child</h1>
        {name}

        <C/>
    </div>
  )
}
export default B