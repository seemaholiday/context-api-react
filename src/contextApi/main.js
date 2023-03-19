import React, {createContext, useState} from 'react'
import A from './A'
export const AppContext = createContext(null)

const Main=() => {
    const [name, setName] = useState("Seema")
    const [count, setCount] = useState(0);
  return (
        <AppContext.Provider value={{name,setName, count, setCount}}>
            <A/>
        </AppContext.Provider>
  )
}

export default Main