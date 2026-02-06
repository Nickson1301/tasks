// import React ,{useEffect,useState} from 'react'
// import axios from 'axios'
// import { useNavigate, useParams } from 'react-router-dom'

// const UpdateProductComp = () => {
//     const {id}=useParams();
//     const nav=useNavigate();
//      const [products,setProducts]=useState({
//             pname:"",
//             pprice:"",
//             pcompany:""
//         })

//     useEffect(() => {
//        axios.get(`http://localhost:3008/products/${id}`).then((res)=>{
//         console.log(res.data);

//        }).catch((error)=>{});
//     }, [])

//     const addProductData= (e)=>{
//         e.preventDefault();
//         axios.post("http://localhost:3008/products/addproducts",products).then((res)=>{
//             window.alert("Product added Successfully")
//             nav('/dashboard/productdetails')
//         }).catch((error)=>{})
//     }
//   return (
//     <div>
//       <h2>this is update product Component</h2>
//     </div>
//   )
// }

// export default UpdateProductComp



import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
 
const UpdateProductComp = () => {
  const { id } = useParams();
  const nav = useNavigate();
 
  const [products, setProducts] = useState({
    id: "",
    pname: "",
    pprice: "",
    pcompany: "",
  });
 
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setProducts({ ...products, [name]: value });
  };
 
  const addproductData = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3008/products/${id}`, products)
      .then(() => {
        window.alert("Product updated Successfully");
        nav("/dashboard/productdetails"); // it will navigate to this path
      })
      .catch((error) => {});
  };
 
  useEffect(() => {
    axios
      .get(`http://localhost:3008/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data)
      })
      .catch((error) => {});
  }, []);
  return (
    <div>
      <h2>This is UpdateProductComp</h2>
      <form onSubmit={addproductData}>
    <input type='text' name='pname' onChange={inputChangeHandler}
     placeholder='enter product name' value={products.pname}/><br/><br/>
    <input type='text' name='pprice' onChange={inputChangeHandler}
    placeholder='enter product price' value={products.pprice}/><br/><br/>
    <input type='text' name='pcompany' onChange={inputChangeHandler}
    placeholder='enter product company' value={products.pcompany}/><br/>
     <button type='submit' className='btn btn-primary mt-1'>submit</button>
  </form>
    </div>
  );
};
 
export default UpdateProductComp;