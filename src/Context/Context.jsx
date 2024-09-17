import React, { createContext, useState } from 'react'
export const AddGrvResponseStatusContext=createContext()
export const isPersonContext=createContext()
function Context({children}) {
    const [isPerson,setIsPerson]=useState(true)
    const [AddResponse,setAddResponse]=useState({})
  return (
    <AddGrvResponseStatusContext.Provider value={{AddResponse,setAddResponse}}>
    <isPersonContext.Provider value={{isPerson,setIsPerson}}>
        {children}
    </isPersonContext.Provider>
        </AddGrvResponseStatusContext.Provider>
  )
}

export default Context

