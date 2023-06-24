import React, { Component } from 'react'
import Profile from '../Profile/index'
import { NavLink } from 'react-router-dom'
import './index.css'

export class index extends Component {

    state = {
        showProfile: false
    }

    profile = () => {
        this.setState({
            showProfile: !this.state.showProfile
        })
    }

    render() {

        if (this.state.showProfile) {
            return (
                <Profile profile={this.profile} />
            )
        }


        return (
            <>
                <div className="hide-sidebar" style={{color:"rgba(0,0,0,.54)"}}>
                    <div className="position-fixed fixed-top d-flex flex-column border-right  align-items-center shadow p-3 mb-5 bg-white rounded" style={{ width: "100px", height: "100vh" }}>
                        <div className="p-2 text-center mb-2">
                            <span onClick={this.profile} style={{ cursor: "pointer"}}><i className="fas fa-bars"></i></span>
                            <i onClick={() => this.props.toggleClass()} className="small-srceen-sidebar fas fa-times text-danger ml-5" style={{ cursor: "pointer",display:"none"}}></i>
                        </div>
                        <div className="p-2 text-center">
                            <NavLink to="/" exact activeClassName="text-success" style={{textDecoration:"none",color:"rgba(0,0,0,.54)"}}>
                                <i className="fas fa-credit-card"></i>
                                <p>Transactions</p>
                            </NavLink>
                        </div>
                        <div className="p-2 text-center">
                            <NavLink to="report" activeClassName="text-success" style={{textDecoration:"none",color:"rgba(0,0,0,.54)"}}>
                                <i className="fas fa-clone"></i>
                                <p>Report</p>
                            </NavLink>
                        </div>
                        <div className="p-2 text-center">
                            <NavLink to="budget" activeClassName="text-success" style={{textDecoration:"none",color:"rgba(0,0,0,.54)"}}>
                                <i className="fas fa-coins"></i>
                                <p>Budget</p>
                                <hr />
                            </NavLink>
                        </div>

                        <div className="p-2 text-center">
                            <NavLink to="store" activeClassName="text-success" style={{textDecoration:"none",color:"rgba(0,0,0,.54)"}}>
                                <i className="fas fa-shopping-cart"></i>
                                <p>Store</p>
                            </NavLink>
                        </div>
                        <div className="p-2 text-center">
                            <NavLink to="help-desk" activeClassName="text-success" style={{textDecoration:"none",color:"rgba(0,0,0,.54)"}}>
                                <i className="fas fa-question-circle"></i>
                                <p>Help</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default index
