import React from 'react'
import { FaUserAlt, FaCarAlt } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { setTypeDBs } from '../../redux/slices/DBs'
import classes from './DBSelection.module.css'

const DBSelection = () => {
  const dispatch = useDispatch() 
  return (
    <div className={classes.wrap}>
        <div>
            <FaUserAlt className={classes.icons} onClick = {
              () => dispatch(setTypeDBs(
              {
                typeDB: "people"
              }))
            }/> 
            <h2>База данных клиентов</h2>
        </div>
        <div>
            <FaCarAlt className={classes.icons} onClick = {
              () => {
              dispatch(setTypeDBs(
              {
                typeDB: "cars"
              }))
            }}/>
            <h2>База данных ТС</h2>
        </div>
    </div>
  )
}

export default DBSelection