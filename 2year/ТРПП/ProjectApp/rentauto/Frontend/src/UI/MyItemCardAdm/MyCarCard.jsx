import React, { useState } from 'react'
import classes from './MyItemCard.module.css'
import MyButton from '../MyButton/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRemoveCar } from '../../redux/slices/cars'
import MyModalCarEd from '../MyModalForms/MyModalCarEd'
import { adminAuthSelector } from '../../redux/slices/adminAuth';

const MyCarCard = ({car}) => {

    const [isEditing, setIsEditing] = useState(false)

    const dispatch = useDispatch()
    
    const token = useSelector(adminAuthSelector).token

    // "modelName": "mercedes rs6",
    // "horsePowers": 87,
    // "description": "mashina", \/
    // "category": "sportcar",
    // "personId": 4, \/
    // "price": 1000, \/
    // "imageName": "lada.png" \/

    return (
        <div className={classes.card}>
            <h1>{car.id}. {car.modelName}</h1>
            <p>Класс: {car.category}</p>
            <p>Мощность: {car.horsePowers}</p>
            <label>Цена за сутки:
                <input value={car.price} disabled/>
            </label>
            <label>Описание автомобиля:
                <textarea disabled style={{resize: "none"}} cols="30" rows="10">{car.description}</textarea>
            </label>
            <label>Идентификатор пользователя::
                <input value={car.personId} disabled/>
            </label>
            <MyModalCarEd activated = {isEditing} action = {setIsEditing} car = {car}/>
            <MyButton
                text = {"Изменить"}
                action = {() => {setIsEditing(true)}}
            />
            <MyButton
                text = {"Удалить"}
                action = {() => {dispatch(fetchRemoveCar(car.id))}}
            />
        </div>
  )
}

export default MyCarCard