import React from 'react'
import classes from "./MyNavbar.module.css"
import { Link, Navigate } from 'react-router-dom'
import CarsList from '../../components/CarsList/CarsList'

const MyNavBar = () => {
  return (
    <div className={classes.navbar}>
      <Link className={classes.link} to='/main'>Автомобили</Link>
      <hr/>
      <Link className={classes.link} to='/rates'>Тарифы</Link>
      <hr/>
      <Link className={classes.link} to='/policies'>Условия аренды</Link>
      <hr/>
      <Link className={classes.link} to='/about'>О компании</Link>
    </div>
  )
}

export default MyNavBar