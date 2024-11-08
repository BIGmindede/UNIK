import './App.css'
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import AdminLayout from './pages/AdminLayout';
import Rates from './pages/Rates/Rates';
import SelCarPage from './pages/SelCarPage/SelCarPage';
import About from './pages/AboutPage/AboutPage';
import UserRegPage from './pages/UserRegPage/UserRegPage';
import UserLogPage from './pages/UserLogPage/UserLogPage';
import PoliciesPage from './pages/PoliciesPage/PoliciesPage';

function App() {
  return (
    <BrowserRouter class="App">
      <Routes>
        {/* Клиентская часть */}
        <Route path='/' element = {<Navigate replace to="/main"/>}/>
        <Route path='/main' element = {<MainPage/>}/>
        <Route path='/rates' element = {<Rates/>}/>
        <Route path='/policies' element = {<PoliciesPage/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/reg' element = {<UserRegPage/>}/>
        <Route path='/log' element = {<UserLogPage/>}/>
        <Route path='/cur_car_page' element = {<SelCarPage/>}/>
        {/* Админка */}
        <Route path='/admin' element = {<AdminLayout/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
