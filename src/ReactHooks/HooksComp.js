import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const HooksComp = () => {
  return (
    <div>
       <h2>this is Hooks component</h2>
       <div className='card border-primary'>
          <div className='card-header border-primary'>
            <Link to="usestate" className='btn btn-success btn-sm'>usestate</Link>{" "}
            <Link to="useeffect" className='btn btn-success btn-sm'>useeffect</Link>{" "}
            <Link to="images" className='btn btn-success btn-sm'>images</Link>{" "}
            <Link to="virtualdom" className='btn btn-success btn-sm'>virtualdom</Link>
          </div>
       </div>
       <Outlet/>
    </div>
  )
}

export default HooksComp

