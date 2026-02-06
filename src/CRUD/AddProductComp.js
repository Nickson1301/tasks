import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductComp = () => {
    const nav = useNavigate();
    const [products,setProducts]=useState({
        pname:"",
        pprice:"",
        pcompany:""
    })

    const changeData =(e)=>{
        const {name,value}=e.target;
        setProducts({...products,[name]:value})
    }

    const addProductData= (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3008/products",products).then((res)=>{
            window.alert("Product added Successfully")
            nav('/dashboard/productdetails')
        }).catch((error)=>{})
    }
    return (
        <div>
            {/* <h2>This is Add Product Components</h2> */}
            <form onSubmit={addProductData}>
                
                <input type='text' name='pname' placeholder='Enter product name' onChange={changeData} value={products.pname}></input>{" "}<br></br>
                <input type='text' name='pprice' placeholder='Enter product price' onChange={changeData} value={products.pprice}></input>{" "}<br/>
                <input type='text' name='pcompany' placeholder='Enter product company' onChange={changeData} value={products.pcompany}></input>{" "}<br/>
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}

export default AddProductComp
