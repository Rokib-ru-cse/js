import React, { Component } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { signup } from '../../redux/actions/index'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapDispatchToProps = dispatch => {
    return {
        signup: (data) => dispatch(signup(data))
    }
}
const mapStateToProps = state =>{
    return{
        ...state
    }
}
export class index extends Component {
    state = {
        username: "",
        email: "",
        password: ""
    }
    signup = (e) => {
        e.preventDefault()
        this.props.signup({ username: this.state.username, email: this.state.email, password: this.state.password })
    }
    render() {
        if (this.props.authReducer.authenticate) {
            return <Redirect to="/hotel-booking-client" />
        }
        return (
            <>
                <div className="container">
                    <h1 className="text-center">Sign Up</h1>
                    <Card className="w-50 mx-auto p-4">
                        <Form onSubmit={(e) => this.signup(e)}>
                            <Form.Group>
                                <Form.Label>username</Form.Label>
                                <Form.Control value={this.state.username} name="username" onChange={(e) => this.setState({ username: e.target.value })} size="sm" type="text" placeholder="enter username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={this.state.email} name="email" onChange={(e) => this.setState({ email: e.target.value })} size="sm" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={this.state.password} name="password" onChange={(e) => this.setState({ password: e.target.value })} size="sm" type="password" placeholder="Enter Password" />
                            </Form.Group>
                            <Button variant="outline-primary" type="submit">
                                signup
                        </Button>
                        </Form>
                    </Card>
                </div>

            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
