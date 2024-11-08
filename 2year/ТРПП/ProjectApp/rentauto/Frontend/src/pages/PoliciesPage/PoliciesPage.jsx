import React from 'react'
import MyHeader from '../../UI/MyHeader/MyHeader'
import MyNavBar from '../../UI/MyNavBar/MyNavBar'
import MySlider from '../../UI/MySlider/MySlider'
import MyFooter from '../../UI/MyFooter/MyFooter'
import Policies from '../../components/Policies/Policies'

const PoliciesPage = () => {
  return (
    <div>
        <MyHeader/>
        <MySlider/>
        <MyNavBar/>
        <Policies/>
        <MyFooter/>
    </div>
  )
}

export default PoliciesPage