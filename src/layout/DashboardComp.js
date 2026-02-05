import React from 'react'
import NavComp from './NavComp'
import { Outlet } from 'react-router-dom'
import UseEffectComp from '../ReactHooks/UseEffectComp'

const DashboardComp = () => {
  return (
    <div>
      <h2>this is Dashboard component</h2>
      <div className="container">
         <div className="card-header border-success">
            <NavComp/>
         </div>
         <div className="card-body border-primary">
            <Outlet/>
         </div>
         <div className="card-footer border-primary">
           <UseEffectComp/>
         </div>
      </div>

    </div>
  )
}

export default DashboardComp
