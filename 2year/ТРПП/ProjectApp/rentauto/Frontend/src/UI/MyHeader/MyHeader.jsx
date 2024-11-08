import React, { useEffect, useState } from 'react'
import classes from './MyHeader.module.css'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

const MyHeader = () => {

  const cookies = new Cookies()

  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    if (cookies.get("token")) {
      setAuthed(true)
    }
    else {
      setAuthed(false)
    }
  }, [cookies.get("token")])

  return (
    <div className={classes.header}>
        <div className={classes.logo}>
          {/* <MySidebarMenu/> */}
          <Link to="/main"><img src="./assets/logo.png" width="130px" alt='some_problem_occured'/></Link>
        </div>
        <div className={classes.profile}>
          <div style={{display:"flex", alignItems:"center"}}>
            <FaUserAlt style={{fontSize:"1.7em"}}/>
            {authed
              ? <span onClick={() => {
                cookies.remove("token")
                setAuthed(false)
              }}><span>Выйти</span></span> 
              : <span><Link to='/log'>Вход</Link><Link to='/reg'>Регистрация</Link></span>
            }
            
          </div>
        </div>    
    </div>
  )
}

export default MyHeader