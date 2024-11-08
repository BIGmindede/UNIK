import React, { useRef, useState } from 'react'
import classes from './UserRegPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'

const UserRegPage = () => {

  const name = useRef()
  const tel = useRef()
  const email = useRef()
  const pass = useRef()
  const pass_conf = useRef()
  const birthDate = useRef()

  const cookies = new Cookies()

  const navigate = useNavigate()

  const action = async (event) => {
    event.preventDefault()
    if (pass.current.value === pass_conf.current.value) {
      try {
        const resp = await axios.post("http://localhost:8088/register", {
          name: name.current.value,
          email: email.current.value,
          tel: tel.current.value,
          password: pass.current.value,
          birthDate: birthDate.current.value
        })
        cookies.set("token", resp.data.token)
        navigate("/main")
      } catch (e) {
        console.log(e.message)
      }
    }
  }

  return (
  <div className={classes.reg}>
          <h1>Регистрация</h1>
          <label htmlFor="name">ФИО:</label>
          <input ref={name} type="name" name='name'/>
          <label htmlFor="email">E-mail:</label>
          <input ref={email} type="email" name='email'/>
          <label htmlFor="tel">Телефон:</label>
          <input ref={tel} type="tel" name='tel'/>
          <label htmlFor="date">Дата рождения:</label>
          <input ref={birthDate} type="date" name='date'/>
          <label htmlFor="pass">Пароль:</label>
          <input ref={pass} type="password" name='pass'/>
          <label htmlFor="pass_confirm">Подтверждение пароля:</label>
          <input ref={pass_conf} type="password" name='pass_confirm'/>
          <button onClick={(event) => {action(event)}}>Зарегестрироваться</button>
          <div className={classes.navs}>
            <Link to='/log'>Уже рзарегистрированы? &raquo;</Link>
            <Link to='/main'>&laquo; Вернуться на главную</Link>
          </div>
    </div>
  )
}

export default UserRegPage