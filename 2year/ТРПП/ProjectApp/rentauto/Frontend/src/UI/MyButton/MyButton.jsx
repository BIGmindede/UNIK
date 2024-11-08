import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({text, action}) => {
  return (
    <button className={classes.button} onClick = {(event) => {
      event.preventDefault()
      action()
    }}>{text}</button>
  )
}

export default MyButton