import React, { useState } from 'react'

const UseStateComp = () => {
     const[count,setCount]=useState(0)
     const[name,setName]=useState("nickson")
    const[course,setCourse]=useState(["python","react","angular","java","mysql"])
      const increment=()=>{
        setCount(count+1)
      }
      const decrement=()=>{
        setCount(count-1)
      }
  return (
    <div>
       <h2>this is use state component</h2>
       <h2>{count}</h2>
       <button onClick={()=>increment()}>increment</button>
    <button onClick={()=>decrement()}>Decrement</button>
    <h2>{name}</h2>
    <button onClick={()=>setName("Rojar Nickson")}>name change</button>
    

    <br></br><hr></hr>
    <ul>
        {
            course.map((value,index)=>{
                return <li key={index}>{value}</li>
            })
        }
    </ul>
    </div>
  )
}

export default UseStateComp
