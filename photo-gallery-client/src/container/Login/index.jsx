import React, { Component } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { login } from '../../redux/actions/index'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(login(data))
    }
}
const mapStateToProps = state => {
    return {
        ...state
    }
}

export class index extends Component {
    state = {
        email: "",
        password: "",
    }
    login = (e) => {
        e.preventDefault()
        this.props.login({ email: this.state.email, password: this.state.password })
    }
    render() {
        if (this.props.authReducer.authenticate) {
            return <Redirect to="/photo-gallery-client" />
        }
        return (
            <>
                <div className="container">
                    <h1 className="text-center">Login</h1>
                    <Card className="w-50 mx-auto p-4">
                        <Form onSubmit={(e) => this.login(e)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={this.state.email} name="email" onChange={(e) => this.setState({ email: e.target.value })} size="sm" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={this.state.password} name="password" onChange={(e) => this.setState({ password: e.target.value })} size="sm" type="password" placeholder="Enter Password" />
                            </Form.Group>
                            <Button variant="outline-primary" type="submit">
                                login
                        </Button>
                        </Form>
                    </Card>
                </div>

            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
