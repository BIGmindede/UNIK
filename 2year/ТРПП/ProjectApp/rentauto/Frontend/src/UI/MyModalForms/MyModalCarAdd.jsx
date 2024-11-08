import React, { useState } from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddCar } from '../../redux/slices/cars'
import MyButton from '../MyButton/MyButton'
import classes from './MyModalAdd.module.css'
import { adminAuthSelector } from '../../redux/slices/adminAuth';

const MyModalUserAdd = ({activated, action}) => {

    const dispatch = useDispatch()

    const [cInf, setCInf] = useState({
        modelName: "",
        horsePowers: 0,
        description: "",
        category: "",
        personId: 1,
        price: 0,
        imageName: ""
    })

    const [empty, setEmpty] = useState(null)

    const token = useSelector(adminAuthSelector).token

  return (
    <div className={activated ? classes.vis : classes.hid}>
        <form>
            <h2>Добавить автомобиль</h2>
            <label>Модель автомобиля:
            <input type="text"
                value = {cInf.modelName}
                onChange = {(event) => setCInf(
                    {...cInf, modelName: event.target.value}
                )}
            /></label>
            <label>Класс:
            <input type="text"
                value = {cInf.category}
                onChange = {(event) => setCInf(
                    {...cInf, category: event.target.value}
                )}
            /></label>
            <label>Мощность:
            <input type="number"
                value = {cInf.horsePowers}
                onChange = {(event) => setCInf(
                    {...cInf, horsePowers: event.target.value}
                )}
            /></label>
            <label>Описание:
            <textarea cols="30" rows="10"
                value = {cInf.description}
                onChange = {(event) => setCInf(
                    {...cInf, description: event.target.value}
                )}
            ></textarea></label>
            <label>Стоимость:
            <input type="number"
                value = {cInf.price}
                onChange = {(event) => setCInf(
                    {...cInf, price: event.target.value}
                )}
            /></label>
            <div className={empty ? classes.unchWarn : classes.unchWarnHid}>
                <FaExclamationTriangle style={{margin: "5px", transform: "translateY(8px)"}}/>
                <span>Введите все необходимые данные!</span>
            </div>
            <MyButton text="Добавить" action={() => {
                if (cInf.modelName === "" ||
                    cInf.horsePowers === 0 ||
                    cInf.description === "" ||
                    cInf.category === "" ||
                    cInf.price === 0) setEmpty(true)
                else {
                    dispatch(fetchAddCar((cInf)))
                    setCInf({
                        modelName: "",
                        horsePowers: 0, 
                        description: "",
                        category: "",
                        personId: 1,
                        price: 0,
                        imageName: ""
                    })
                    setEmpty(null)
                    action(false)
                }
            }}/>
            <MyButton text="Отмена" action={() => {
                setCInf({
                    modelName: "",
                    horsePowers: 0, 
                    description: "",
                    category: "",
                    personId: 1,
                    price: 0,
                    imageName: ""
                })
                setEmpty(null)
                action(false)
            }}/>
        </form>
    </div>
  )
}

export default MyModalUserAdd