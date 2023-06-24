import React, { Component } from 'react'
import './App.css';
import Home from './container/Home/index'
import { connect } from 'react-redux'
import { getPhotos, isUserLoggedIn,getAllUser, getAllCategory } from './redux/actions/index'
import Signup from './container/Signup/index'
import Login from './container/Login/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import PhotoDetails from './container/PhotoDetails/index'
import Profile from './container/Profile';
const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: () => dispatch(getPhotos()),
    isUserLoggedIn: () => dispatch(isUserLoggedIn()),
    getAllUser:()=>dispatch(getAllUser()),
    getAllCategory:()=>dispatch(getAllCategory())
  }
}
export class index extends Component {
  componentDidMount() {
    this.props.getPhotos()
    this.props.isUserLoggedIn()
    this.props.getAllUser()
    this.props.getAllCategory()
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/photodetails/:id/p' component={PhotoDetails} />
          <Route exact path='/photo-gallery-client' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} />
          
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(null, mapDispatchToProps)(index)
