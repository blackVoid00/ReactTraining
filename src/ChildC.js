import React, { useState } from 'react'

const ChildC = ({getColor}) => {
    const [currentCol,setCurrentCol]=useState("")
    const handleChange = (e) => {
        const {value}=e.target
         setCurrentCol(value)
         getColor(currentCol)
    }
  return (
   <input type="text"
   value={currentCol}
   onChange={handleChange}
   >
   </input>
  )
}

export default ChildC