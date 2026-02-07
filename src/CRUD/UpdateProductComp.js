import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
 
const UpdateProductComp = () => {
  const { id } = useParams();
  const nav = useNavigate();
 
  const [product, setProduct] = useState({
    id: "",
    pname: "",
    pprice: "",
    pcompany: "",
  });
 
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };
 
  const addproductData = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3008/products/${id}`, product)
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
        setProduct(res.data)
      })
      .catch((error) => {});
  }, []);
  return (
    <div>
      <h2>This is UpdateProductComp</h2>
      <form onSubmit={addproductData}>
    <input type='text' name='pname' onChange={inputChangeHandler}
     placeholder='enter product name' value={product.pname}/><br/><br/>
    <input type='text' name='pprice' onChange={inputChangeHandler}
    placeholder='enter product price' value={product.pprice}/><br/><br/>
    <input type='text' name='pcompany' onChange={inputChangeHandler}
    placeholder='enter product company' value={product.pcompany}/><br/>
     <button type='submit' className='btn btn-primary mt-1'>submit</button>
  </form>
    </div>
  );
};
 
export default UpdateProductComp;