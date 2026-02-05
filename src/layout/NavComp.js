import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
  return (
    <div>
      <h2>this is Navbar Component</h2>
      <Link to="images" className='btn btn-primary btn-sm'>images</Link>{" "}
      <Link to="usestate" className='btn btn-primary btn-sm'>usestate</Link>{" "}
      <Link to="useeffect" className='btn btn-primary btn-sm'>useeffect</Link>{" "}
    </div>
  )
}

export default NavComp
