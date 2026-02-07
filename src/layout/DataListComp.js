import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchData} from '../redux/apiSlice'


const DataListComp = () => {
    const dispatch=useDispatch();
    const data=useSelector((state)=>{state.api.data})
    const status=useSelector((state)=>{state.api.status})

    const [newData,setNewData]=useState('')

    useEffect(()=>{
        dispatch(fetchData());
    },[])


  return (
    <div>
      <h2>data list</h2>
      <table className='table table-stripped table-bordered'>
                <thead>
                    <tr>
                        <th>s.no</th><th>name</th><th>Price</th><th>Company</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 && data.map((value, index) => (
                            <tr key={value.id}>
                                <td>{index+1}</td>
                                <td>{value.pname}</td>
                                <td>{value.pprice}</td>
                                <td>{value.pcompany}</td>
                                <td>
                                    {/* //<Link to={`/dashboard/updateproducts/${value.id}`} className='btn btn-outline-success btn-sm'><BorderColorIcon/></Link>
                                    //<button type='button' onClick={() => deleteproduct(value.id)} className='btn btn-outline-danger btn-sm'><DeleteIcon/></button>
                                     */}
                                </td>

                            </tr>

                        ))
                    }
                </tbody>
            </table>
    </div>
  )
}

export default DataListComp
