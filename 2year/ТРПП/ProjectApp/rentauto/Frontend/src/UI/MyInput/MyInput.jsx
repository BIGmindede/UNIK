import React from 'react'
import classes from './MyInput.module.css'

//some comment to make commit tree not clean
const MyInput = React.forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref} className={classes.input}/>
  )
});

export default MyInput