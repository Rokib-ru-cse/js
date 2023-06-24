import React,{useEffect} from 'react'
import './App.css';
import Home from './container/Home/index'
import { isUserLoggedIn,getAllUser, getAllCategory, getAllRoom } from './redux/actions/index'
import Signup from './container/Signup/index'
import Login from './container/Login/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Profile from './container/Profile';
import RoomDetails from './container/RoomDetails'
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllRoom())
    dispatch(isUserLoggedIn())
    dispatch(getAllUser())
    dispatch(getAllCategory())
  },[])
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/hotel-booking-client' component={Home} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route path="/roomdetails/:id/r" component={RoomDetails} /> 
      </Switch>
    </BrowserRouter>
  )
}

export default App
