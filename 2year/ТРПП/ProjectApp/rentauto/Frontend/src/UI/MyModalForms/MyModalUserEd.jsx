import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEditUser } from '../../redux/slices/users'
import MyButton from '../MyButton/MyButton'
import { FaExclamationTriangle } from "react-icons/fa"
import classes from './MyModalEd.module.css'
import { adminAuthSelector } from '../../redux/slices/adminAuth';

const MyModalUserEd = ({activated, action, user}) => {

  const dispatch = useDispatch(fetchEditUser(user))

  const [unchanged, setUnchanged] = useState(null)

      // name: 'Хитров Никита Сергеевич',
    // email: 'hitrov.qazws@gmail.com',
    // tel: '89915374415',
    // dateOfBirth: null,
    // carDTO: {
        //  category: "Премиум"
        //  description: "hadsfasdfasdg"
        //  horsePowers: 300
        //  id: 1
        //  imageName: "granta.jpg"
        //  modelName: "silvia"
        //  personId: 1
        //  price : 7000
        //  taken: false
    // }

    const [uInf, setUInf] = useState({
      name: "",
      email: "",
      dateOfBirth: ""
  })


  const token = useSelector(adminAuthSelector).token

  return (
    <div className={activated ? classes.vis : classes.hid}>
        <form>
          <h1>{user.name}</h1>
          <label htmlFor="name"><span>Name:</span>
          <input id = "name" type="text" placeholder="Khitrov Nikita"
              value={uInf.name}
              onChange ={(event) => setUInf(
                  {...uInf, name: event.target.value}
              )}
          />
          </label>
          <label htmlFor="tel"><span>Phone:</span>
              <input id = "tel" type="tel" placeholder="89298439515"
                  value={uInf.tel}
                  onChange ={(event) => setUInf(
                      {...uInf, tel: event.target.value}
                  )}
              />
          </label>
          <label htmlFor="email"><span>E-mail:</span>
              <input id = "email" type="email" placeholder="hitrov.qazws@gmail.com"
                  value={uInf.email}
                  onChange ={(event) => setUInf(
                      {...uInf, email: event.target.value}
                  )}
              />
          </label>
          <div className={unchanged ? classes.unchWarn : classes.unchWarnHid}>
            <FaExclamationTriangle style={{margin: "5px", transform: "translateY(8px)"}}/>
            <span style={{margin: "5px"}}>Проверьте введенные данные!</span>
          </div>
          
          <MyButton text='Сохранить изменения' action={() => {
              const newInf = {
                ...user,
                ...uInf
              }
              if (JSON.stringify(newInf) !== JSON.stringify(user) &&
                  newInf["name"] !== "" &&
                  newInf["email"] !== "" &&
                  newInf["tel"] !== "" &&
                  newInf["username"] !== "" &&
                  newInf["age"] !== "") 
              {
                dispatch(fetchEditUser(newInf, token))
                action(false)
              }
              else setUnchanged(true)
            }
          }/>
          
          <MyButton text='Отмена' action={() => {
              setUInf({
                email: user.email,
                tel: user.tel,
                username: user.username
              })
              setUnchanged(null)
              action(false)
            }
          }/>
        </form>
    </div>
  )
}

export default MyModalUserEd