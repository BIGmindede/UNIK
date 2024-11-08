import React, { useEffect, useState } from 'react'
import MyButton from '../../UI/MyButton/MyButton'
import classes from './AdminLogin.module.css'
import { useDispatch } from 'react-redux';
import { authAdmin, regAdmin } from '../../services/adminAuthService';
import { setTypeDBs } from '../../redux/slices/DBs';

const AdminLogin = () => {
  
  const [admAuth, setAdmAuth] = useState({
    email: "",
    password: ""
  })
  
  const [admReg, setAdmReg] = useState({
    email: "",
    password: ""
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTypeDBs({typeDB: "none"}))
  },[])

  return (
    <>
      <form className={classes.form}>
        <h1>Логин</h1>
        <label htmlFor="logAdm">Login</label>
        <input name='logAdm' type="email" required onChange={(event) => {
          setAdmAuth({...admAuth, email: event.target.value})
        }}/>
        <label htmlFor="logAdm">Password</label>
        <input type="password" required onChange={(event) => {
          setAdmAuth({...admAuth, password: event.target.value})        
        }}/>
        <MyButton text = "Войти" action = {() => {
            dispatch(authAdmin(admAuth, dispatch))
        }}/>
      </form>
      <form className={classes.form}>
        <h1>Регистрация(testOnly)</h1>
        <label htmlFor="logAdm">Login</label>
        <input type="email" required onChange={(event) => {
          setAdmReg({...admReg, email: event.target.value})
        }}/>
        <label htmlFor="logAdm">Password</label>
        <input type="password" required onChange={(event) => {
          setAdmReg({...admReg, password: event.target.value})      
        }}/>
        <MyButton text = "Войти" action = {() => {
            dispatch(regAdmin(admReg, dispatch))
        }}/>
      </form>
    </>
  )
}

export default AdminLogin