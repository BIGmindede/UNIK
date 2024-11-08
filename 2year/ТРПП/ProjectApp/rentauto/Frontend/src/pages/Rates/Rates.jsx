import React from 'react'
import MyHeader from '../../UI/MyHeader/MyHeader'
import MySlider from '../../UI/MySlider/MySlider'
import MyNavBar from '../../UI/MyNavBar/MyNavBar'
import RateList from '../../components/RateList/RateList'
import MyFooter from '../../UI/MyFooter/MyFooter'

const Rates = () => {
  return (
    <div>
        <MyHeader/>
        <MySlider/>
        <MyNavBar/>
        <RateList/>
        <MyFooter/>
    </div>
  )
}

export default Rates