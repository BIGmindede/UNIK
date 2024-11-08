import React from 'react'
import MyHeader from '../../UI/MyHeader/MyHeader'
import MyNavBar from '../../UI/MyNavBar/MyNavBar'
import MySlider from '../../UI/MySlider/MySlider'
import MyFooter from '../../UI/MyFooter/MyFooter'
import CompanyInfo from '../../components/CompanyInfo/CompanyInfo'

const About = () => {
  return (
    <div>
        <MyHeader/>
        <MySlider/>
        <MyNavBar/>
        <CompanyInfo/>
        <MyFooter/>
    </div>
  )
}

export default About