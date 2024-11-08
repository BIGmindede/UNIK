import React, { useRef, useState } from 'react'
import classes from './UserLogPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'

const UserLogPage = () => {

  const email = useRef()
  const pass = useRef()

  const cookies = new Cookies()

  const navigate = useNavigate()

  const action = async (event) => {
    event.preventDefault()
    try {
      const resp = await axios.post('http://localhost:8088/authenticate', {
        email: email.current.value,
        password: pass.current.value
      })
      cookies.set("token", resp.data.token)
      navigate("/main")
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
  <div className={classes.log}>
          <h1>Вход</h1>
          <label htmlFor="email">E-mail:</label>
          <input ref={email} type="email" name='email'/>
          <label htmlFor="pass">Пароль:</label>
          <input ref={pass} type="password" name='pass'/>
          <button onClick={(event) => {action(event)}}>Войти</button>
          <div className={classes.navs}>            
            <Link to='/reg'>Еще нет аккаунта?  &raquo;</Link>
            <Link to='/main'>&laquo; Вернуться на главную</Link>
          </div>
    </div>
  )
}

export default UserLogPage