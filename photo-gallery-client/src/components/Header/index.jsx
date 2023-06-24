import React, { Component } from 'react'
import { Navbar, Nav, Modal, Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout, uploadPhoto } from '../../redux/actions/index'
import { Link, Redirect } from 'react-router-dom'
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        uploadPhoto: (data) => dispatch(uploadPhoto(data))
    }
}

export class index extends Component {

    state = {
        uploadModal: false,
        name: null,
        photo: null,
        category: null
    }
    uploadPhoto = () => {
        if(this.state.category=='' || this.state.name == null || this.state.photo == null){
            alert('name, category and photo are required')
            return
        }
        const form = new FormData()
        form.append('name', this.state.name)
        form.append('photo', this.state.photo)
        form.append('user', this.props.authReducer.user._id)
        form.append('category', this.state.category)
        this.props.uploadPhoto(form)
        this.setState({ uploadModal: false,name:null,category:null,photo:null })
        
    }
    renderLoggedInMenu = () => {
        return (
            <Nav className="ml-auto">
                <Link className="nav-link" to="/profile">Profile</Link>
                {this.props.authReducer.authenticate ? <Nav.Link onClick={() => this.setState({ uploadModal: true })}>Upload</Nav.Link> : <Link className="nav-link" to="/login">Upload</Link>}
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
                        <Link className="nav-link text-white" to="/photo-gallery-client">Photo Gallery</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link className="nav-link" to="/photo-gallery-client">Home</Link>
                            </Nav>
                            {this.props.authReducer.authenticate ? this.renderLoggedInMenu() : this.renderNonLoggedInMenu()}
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <Modal show={this.state.uploadModal} onHide={() => this.setState({ uploadModal: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            this.state.photo ? <p>{this.state.photo.name}</p> : null
                        }
                        <Form.Control className="my-3" name="photo" onChange={(e) => this.setState({ photo: e.target.files[0] })} size="sm" type="file" />
                        <Form.Control className="my-3" value={this.state.name || ''} name="name" onChange={(e) => this.setState({ name: e.target.value })} size="sm" type="text" placeholder="Enter Image Name" />
                        <select className="form-control form-control-sm" name="category" value={this.state.category || ''} onChange={(e) => this.setState({ category: e.target.value })}>
                            <option value='' >Select Category</option>
                            {
                                this.props.categoryReducer.category.map((cat, index) => {
                                    return (
                                        <option key={index} value={cat._id} >{cat.name}</option>
                                    )
                                })
                            }
                        </select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={() => this.setState({ uploadModal: false })}>
                            Close
                        </Button>
                        <Button variant="outline-primary" onClick={this.uploadPhoto}>
                            Upload
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
