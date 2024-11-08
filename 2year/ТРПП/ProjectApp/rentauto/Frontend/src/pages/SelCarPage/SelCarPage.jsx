import React from 'react'
import MyHeader from '../../UI/MyHeader/MyHeader'
import MySlider from '../../UI/MySlider/MySlider'
import MyNavBar from '../../UI/MyNavBar/MyNavBar'
import MyFooter from '../../UI/MyFooter/MyFooter'
import CarDetails from '../../components/CarDetails/CarDetails'

const SelCarPage = () => {
  return (
    <div>
        <MyHeader/>
        <MySlider/>
        <MyNavBar/>
        <CarDetails/>
        <MyFooter/>
    </div>
  )
}

export default SelCarPage