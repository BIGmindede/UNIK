import React, { useState } from 'react'
import classes from './MyItemCard.module.css'
import MyButton from '../MyButton/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRemoveUser } from '../../redux/slices/users'
import MyModalUserEd from '../MyModalForms/MyModalUserEd'
import { adminAuthSelector } from '../../redux/slices/adminAuth';

const MyUserCard = ({user}) => {

    const [isEditing, setIsEditing] = useState(false)

    const dispatch = useDispatch()

    const token = useSelector(adminAuthSelector).token

    return (
        <div className={classes.card}>
            <h1>{user.name}</h1>
            <label htmlFor="email">E-mail:
                <input disabled id = "email" placeholder={user.email}/>
            </label>
            <label htmlFor="tel">Phone number:
                <input disabled id = "tel" placeholder={user.tel}/>
            </label>
            <label htmlFor="date">Дата рождения:
                <input disabled id = "date" placeholder={user.dateOfBirth}/>
            </label>
            <label htmlFor="vehicle">Привязанное ТС:
                {user.carDTO
                ? <div>
                    <label htmlFor="vehicle_id">ID ТС:
                        <input disabled id = "vehicle_id" placeholder={user.carDTO.id}/>
                    </label>
                    <label htmlFor="vehicle_modelName">Модель авто:
                        <input disabled id = "vehicle_id" placeholder={user.carDTO.modelName}/>
                    </label>
                    <label htmlFor="vehicle_category">Класс авто:
                        <input disabled id = "vehicle_category" placeholder={user.carDTO.category}/>
                    </label>
                </div>
                : <div>Нет</div>
                }
            </label>
            <MyModalUserEd activated = {isEditing} action = {setIsEditing} user = {user}/>
            <MyButton
                text = {"Изменить"}
                action = {() => {setIsEditing(true)}}
            />
            <MyButton
                text = {"Удалить"}
                action = {() => {dispatch(fetchRemoveUser(user.carDTO.personId))}}
            />
        </div>
  )
}

export default MyUserCard