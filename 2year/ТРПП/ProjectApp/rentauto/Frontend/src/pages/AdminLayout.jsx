import React, { useEffect } from 'react'
import Cookies from "universal-cookie"
import { useDispatch, useSelector } from 'react-redux';
import { adminAuthSelector, loginSuccess } from '../redux/slices/adminAuth'
import AdminPage from '../components/AdminPage/AdminPage';
import AdminLogin from '../components/AdminLogin/AdminLogin';

const AdminLayout = () => {

  const cookies = new Cookies() 
  const dispatch = useDispatch()
  useEffect(() => {
    if (cookies.get("token")) dispatch(loginSuccess({token: cookies.get("token")}))
  }, [])
  const authorized = useSelector(adminAuthSelector)
  return (
    // authorized.token
       <AdminPage/>
    //   <AdminLogin/>
  )
}

export default AdminLayout