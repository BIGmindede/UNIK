import React from 'react'
import rates from '../../localDataBase/rates.json'
import classes from './RateList.module.css'

const RateList = () => {
  return (
    <table className={classes.table}>
        <h2>Список тарифов:</h2>
        <tr>
            <td><b>Категория</b></td>
            <td><b>Минимальная цена</b></td>
            <td><b>Максимальная цена</b></td>
            <td><b>Депозит</b></td>
        </tr>
        {rates.map(rate =><tr>
            <td>{rate.category}</td>
            <td>{rate.min} руб./сутки</td>
            <td>{rate.max} руб./сутки</td>
            <td>{rate.depos} руб.</td>
        </tr>)}
        <i>Все цены указаны в рублях без НДС</i>
    </table>
  )
}

export default RateList