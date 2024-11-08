import React from 'react'
import classes from './MySelect.module.css'

const MySelect = React.forwardRef(({value, options, defaultValue, onChange}) => {
  return (
    <select value = {value}
        defaultValue={defaultValue}
        onChange = {event => onChange(event.target.value)}
        className = {classes.select}
        >
        <option value={""}>{defaultValue}</option>
        {options.map(option => 
            <option key = {option.value} value = {option.value}>{option.name}</option>
        )}
    </select>
  )
});

export default MySelect