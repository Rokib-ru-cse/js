import React, { Component } from 'react'
import { Navbar, Nav, Modal, Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/index'
import { Link } from 'react-router-dom'
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

export class index extends Component {

    renderLoggedInMenu = () => {
        return (
            <Nav className="ml-auto">
                <Link className="nav-link" to="/profile">Profile</Link>
                <Nav.Link onClick={() => this.props.logout()} >Logout</Nav.Link>
            </Nav>
        )
    }
    renderNonLoggedInMenu = () => {
        return (
            <Nav className="ml-auto">
                <Link className="nav-link" to="/login">login</Link>
                <Link className="nav-link" to="/signup">Register</Link>
            </Nav>
        )
    }
    render() {
        return (
            <>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <div className="container">
                        <Link className="nav-link text-white" to="/hotel-booking-client">Cheaper Hotel</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link className="nav-link" to="/hotel-booking-client">Home</Link>
                            </Nav>
                            {this.props.authReducer.authenticate ? this.renderLoggedInMenu() : this.renderNonLoggedInMenu()}
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
