import React from 'react'
import { useLocation, useNavigate, withRouter } from "react-router-dom";
import classes from './CarDetails.module.css'
import {FaExclamationTriangle} from 'react-icons/fa'
import MyRentForm from '../../UI/MyModalForms/MyRentForm';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from 'universal-cookie'

const CarDetails = () => {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get('id')

  const navigate = useNavigate()

  const cookies = new Cookies()

  const [carDets, setCarDets] = useState({
    "modelName": "",
    "horsePowers": null,
    "description": "",
    "category": "",
    "personId": null,
    "price": null,
    "imageName": ""
  })

  const get_car_details = async () => {
    try {
      const {data} = await axios.get(`http://localhost:8088/cars/${id}`)
      setCarDets(data)
    }
    catch (e) {
      console.log(e.message)
      navigate("/")
    }
  }

  useEffect(() => {
    get_car_details()
  }, [])

  return (
    <div className={classes.dets}>
        <div className={classes.gallery}>
          <img src={"./assets/" + carDets.imageName} />
        </div>
        <div className={classes.desc}>
          <h1>{carDets.modelName}</h1>
          <p>Класс автомобиля: <i>{carDets.category}</i></p>
          <p>Стоимость: <i>{carDets.price} руб./сутки</i></p>
          <h3>Описание:</h3>
          <p>{carDets.description}</p>
        </div>
        <div className={classes.chars}>
          <h3>Характеристики:</h3>
          <p><b>Объем двигателя:</b> 1.6л</p>
          <p><b>Мультимедиа:</b> Аудиосистема (FM, USB, SD-карта, Bluetooth, Hands free)</p>
          <p><b>Привод:</b> Передний</p>
          <p><b>Салон:</b> Ткань черная</p>
          <p><b>Мощность двигателя:</b> 90 л.с.</p>
          <p><b>Камера заднего вида:</b> Нет</p>
          <p><b>Парктроники:</b> Нет</p>
          <p><b>Кондиционер:</b> Да</p>
        </div>
        <div className={classes.reqs}>
          <h3><FaExclamationTriangle style={{transform: "translateY(20%)"}} fontSize="1.5em"/> Требования к арендатору:</h3>
          <ul>
            <li><b>Автомобили классов <i>Эконом</i> и <i>Стандарт</i> : </b>возраст от 20 лет и стаж вождения не менее 1 года</li>
            <li><b>Остальные классы автомобилей : </b>возраст от 23 лет и стаж вождения не менее 2-х лет</li>
          </ul>
          <h3><FaExclamationTriangle style={{transform: "translateY(20%)"}} fontSize="1.5em"/> Необходимые документы:</h3>
          <ul>
            <li><b>Паспорт</b></li>
            <li><b>Водительское удостоверение</b></li>    
            <li><b>Именная банковская карта</b></li>  
          </ul>   
        </div>
        <MyRentForm/>
    </div>
  )
}

export default CarDetails