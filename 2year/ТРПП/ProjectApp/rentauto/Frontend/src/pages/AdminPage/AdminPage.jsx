import MyButton from '../../UI/MyButton/MyButton'
import classes from './AdminPage.module.css'
import { Link } from 'react-router-dom'
import DBSelection from '../DataBaseSelection/DBSelection'
import DataBase from '../DataBase/DataBase'
import { useDispatch, useSelector } from 'react-redux'
import { selectTypeDB, setTypeDBs } from '../../redux/slices/DBs'
import { logout } from '../../redux/slices/adminAuth'

const AdminPage = () => {  

  const dispatch = useDispatch()

  return (
    <div>
        <header className={classes.header}>
            <Link onClick = {(event) => {
              event.preventDefault()
              return dispatch(setTypeDBs({typeDB: "none"}))
            }}>
              <h1>MyAdminPage</h1>
            </Link>
            <MyButton text={"Выйти"} action = {() => {dispatch(logout())}}/>
        </header>
        <main className={classes.main}>
          {useSelector(selectTypeDB) !== "none"
            ? <DataBase/>
            : <DBSelection/>
          }
        </main>
    </div>
  )
}

export default AdminPage