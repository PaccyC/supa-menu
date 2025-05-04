import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Menu from './pages/Menu'
import Orders from './pages/Orders'
import Overview from './pages/Overview'
import Users from './pages/Users'
import Clients from './pages/Clients'

function App() {

  return (
 

        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route  path='/register' element={<Register/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/overview' element={<Overview/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/clients' element={<Clients/>}/>
          </Routes>
        </Router>
  )
}

export default App
