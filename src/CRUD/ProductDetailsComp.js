import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, Outlet } from 'react-router-dom'
import BorderColorIcon from '@mui/icons-material/BorderColor';

const ProductDetailsComp = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:3008/products").then((res) => {
            console.log(res.data);
            setProducts(res.data)
        }).catch((error) => { })
    }

    const deleteproduct = (id) => {
        if (window.confirm(`Are you sure to delete product with id : ${id}`)) {
            axios.delete(`http://localhost:3008/products/${id}`).then(() => {
                window.alert("product deleeted successfully")
                fetchData();
                console.log("deleted")
            }).catch((error) => { })
        }

    }
    return (
        <div>
            <h2>this is product detail Component</h2>
            <Link to={"/dashboard/addproducts"} className='btn btn-primary mt-2 mb-1'><BorderColorIcon/>Add</Link>
            
            <table className='table table-stripped table-bordered'>
                <thead>
                    <tr>
                        <th>s.no</th><th>name</th><th>Price</th><th>Company</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 && products.map((value, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{value.pname}</td>
                                <td>{value.pprice}</td>
                                <td>{value.pcompany}</td>
                                <td>
                                    <Link to={`/dashboard/updateproducts/${value.id}`} className='btn btn-outline-success btn-sm'><BorderColorIcon/></Link>
                                    <button type='button' onClick={() => deleteproduct(value.id)} className='btn btn-outline-danger btn-sm'><DeleteIcon/></button>
                                    
                                </td>

                            </tr>

                        ))
                    }
                </tbody>
            </table>


            {/* <div>
                <Link to="addproduct" className='btn btn-success btn-sm'>Add product</Link>{" "}
                <Link to="updateproduct" className='btn btn-success btn-sm'>update product</Link>{" "}


            </div>*/}
            
        </div>
    )
}

export default ProductDetailsComp
