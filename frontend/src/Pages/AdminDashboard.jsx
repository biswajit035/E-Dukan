import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem("isAdmin")){
      navigate('/')
    }
  }, [])
  

  return (
    <React.Fragment>
        <div className='admin-dash'>
          <div className="left">
          <button >User</button>
          </div>
          <div className="right"></div>
        </div>
    </React.Fragment>
  )
}

export default AdminDashboard