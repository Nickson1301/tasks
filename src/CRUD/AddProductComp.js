import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductComp = () => {
  const nav = useNavigate();
  const [product, setProduct] = useState({
    pname: "",
    pprice: "",
    pcompany: "",
  });

  const changeData = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const addProductData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3008/products", product)
      .then((res) => {
        window.alert("Product added Successfully");
        nav("/dashboard/productdetails");
      })
      .catch((error) => {});
  };
  return (
    <div>
      {/* <h2>This is Add Product Components</h2> */}
      <form onSubmit={addProductData}>
        <input
          type="text"
          name="pname"
          onChange={changeData}
          placeholder="enter product name"
          value={product.pname}
        />
        <br />
        <br />
        <input
          type="text"
          name="pprice"
          onChange={changeData}
          placeholder="enter product price"
          value={product.pprice}
        />
        <br />
        <br />
        <input
          type="text"
          name="pcompany"
          onChange={changeData}
          placeholder="enter product company"
          value={product.pcompany}
        />
        <br />
        <button type="submit" className="btn btn-primary mt-1">
          submit
        </button>{" "}
      </form>
    </div>
  );
};

export default AddProductComp;
