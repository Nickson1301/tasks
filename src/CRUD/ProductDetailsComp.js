import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ProductDetailsComp = () => {
    return (
        <div>
            <h2>this is product detail Component</h2>
            <div>
                <Link to="addproduct" className='btn btn-success btn-sm'>Add product</Link>{" "}
                <Link to="updateproduct" className='btn btn-success btn-sm'>update product</Link>{" "}


            </div>
            <Outlet />
        </div>
    )
}

export default ProductDetailsComp
