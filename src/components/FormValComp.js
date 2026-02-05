import React, { useState } from 'react'

const FormValComp = () => {
    const[user,setUser]=useState({
        fname:"",
        lname:"",
        password:""
    })

     const inputchange=(event)=>{
        const{name,value}=event.target
        setUser({...user,[name]:value})

        const checkdata=()=>{
            event.preventDefault();
            
        }
    }
  return (
    <div>
      <h2>Form Validation</h2>
      <form>
        <input type='text' name='fname' onChange={inputchange} placeholder='enter first name' value={user.fname}></input>
      </form>
    </div>
  )
}

export default FormValComp
