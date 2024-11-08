import React from 'react'
import classes from './MyFooter.module.css'
import { Link } from 'react-router-dom'

const MyFooter = () => {
  return (
    <div className={classes.footer}>
        <div>
          <h3>Навигация</h3>
          <hr />
          <Link className={classes.link} to='/main'>Автомобили</Link>
          <Link className={classes.link} to='/rates'>Тарифы</Link>
          <Link className={classes.link} to='/policies'>Условия аренды</Link>
          <Link className={classes.link} to='/about'>О компании</Link>
          <Link className={classes.link} to='/faq'>FAQ</Link>
        </div>
        <hr className={classes.separator}/>
        <div>
          <h3>Контакты</h3>
          <hr />
          <Link type='tel' className={classes.link}>+7(991)537-44-15</Link>
          <Link type='email' className={classes.link}>hitrov.qazws@gmail.com</Link>
          <Link className={classes.link}>ул. 11-я парковая, д. 36</Link>
        </div>
        <div className={classes.policy}>
          <p>2023 &copy; RentAuto - аренда автомобилей.</p>
        </div>
    </div>
  )
}

export default MyFooter