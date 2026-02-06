import React from 'react'
import { Link,  } from 'react-router-dom'
import UseEffectComp from '../ReactHooks/UseEffectComp'

const DashboardComp = () => {
  return (
    <div>
      <h2>this is Dashboard component</h2>
      <div className="container">
        <div className="card-header border-success">
        </div>
        <div className="card-body border-primary">
          <Link to="/dashboard/images" className='btn btn-primary btn-sm'>images</Link>{" "}
          <Link to="/dashboard/usestate" className='btn btn-primary btn-sm'>usestate</Link>{" "}
          <Link to="/dashboard/useeffect" className='btn btn-primary btn-sm'>useeffect</Link>{" "}
          <Link to="productdetails" className='btn btn-primary btn-sm'> product details</Link>{" "}
          <Link to="datalist" className='btn btn-primary btn-sm'>data list</Link>{" "}

        </div>
        <div className="card-footer border-primary">
        </div>
      </div>

    </div>
  )
}

export default DashboardComp
