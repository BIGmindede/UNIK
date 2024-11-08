import React, { useRef, useState } from 'react'
import MyInput from '../MyInput/MyInput'
import MySelect from '../MySelect/MySelect'
import classes from './MyRentForm.module.css'

const MyRentForm = () => {
    const name = useRef()
    const tel = useRef()
    const email = useRef()
    const begin = useRef()
    const end = useRef()

    const [info, setInfo] = useState({
        user: "",
        number: "",
        email: "",
        carId: "Выберите машину",
        date: "",
        exp: null
    })

    return (
        <div className={classes.wrap}>
            <h3>Оформление аренды:</h3>
            <form className={classes.form}>
                <div>
                    <label htmlFor="name">ФИО:</label>
                    <input type="text" name="name"/>
                    <label htmlFor="tel">Телефон:</label>
                    <input type="tel" name="tel"/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="start_date">Начало аренды:</label>
                    <div>
                        <input type="date" name="start_date"/>
                        <input type='time'/>
                    </div>
                    <label htmlFor="start_date">Окончание аренды:</label>
                    <div>
                        <input type="date" name="start_date"/>
                        <input type="time"/>
                    </div>
                </div>
                <button>Оформить</button>
            </form>
        </div>
    )
}

export default MyRentForm