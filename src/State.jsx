import React, { useState } from 'react'

export default function State() {

    let [count,setCount]=useState(0)

    let lowerNum=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>counter</h1>
        <button onClick={()=>setCount(count+1)} >+</button>
        <h5> {count} </h5>
        <button onClick={lowerNum} >1</button>
    </div>
  )
}
