import React, { useState } from 'react'
import classes from './MyCategorySelector.module.css'

const MyCategorySelector = ({value, action}) => {
  const [selected, setSelected] = useState(false)
  return (
    <div className={selected ? [classes.option, classes.selected].join(" ") : classes.option} onClick={() => {
      setSelected(!selected)
      action()
    }}>{value}</div>
  )
}

export default MyCategorySelector