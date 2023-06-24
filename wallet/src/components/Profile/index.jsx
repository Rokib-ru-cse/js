import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class index extends Component {

    state = {
        profileModal: false
    }

    closeALL = () => {
        this.props.profile()
        console.log('xxxxxxxxxxxxxxxx',this.props);
        this.setState({ profileModal: !this.state.profileModal })
    }

    render() {
        return (
            <>
                <div className="container" style={{ color: "rgba(0,0,0,.54)" }}>
                    <div className="position-fixed fixed-top d-flex flex-column border-right  align-items-center shadow p-3 mb-5 bg-white rounded" style={{ width: "300px", height: "100vh" }}>
                        <div className="p-2 text-center mb-2 ml-auto">
                            <span onClick={() => this.props.profile()} style={{ cursor: "pointer" }}><i className="fas fa-bars"></i></span>
                        </div>
                        <div className="p-2 text-center d-flex flex-column justify-content-between w-100 align-items-center py-3">
                            <div><i className="fas fa-user-alt p-4 bg-info rounded-circle"></i></div>
                            <p>rokibahmed.ru.cse</p>
                            <p>rokibahmed.ru.cse@gmail.com</p>
                        </div>
                        <div style={{ cursor: "pointer" }} onClick={() => this.setState({ profileModal: !this.state.profileModal })} className="p-2 text-center d-flex justify-content-between w-100 align-items-center py-3">
                            <i className="fas fa-user-alt"></i>

                            <span className="ml-3" >My Account</span>
                            <i className="ml-auto fas fa-arrow-right"></i>
                        </div>
                        <div className="p-2 text-center  w-100  py-3">
                            <Link to="mywallet" onClick={() => this.props.profile()} className="text-decoration-none d-flex align-items-center justify-content-between" style={{ color: "rgba(0,0,0,.54)" }}>

                                <i className="fas fa-wallet"></i>
                                <span className="ml-3" >My Wallets</span>
                                <i className="ml-auto fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="p-2 text-center  w-100  py-3">
                            <Link to="categories" onClick={() => this.props.profile()} className="text-decoration-none d-flex align-items-center justify-content-between" style={{ color: "rgba(0,0,0,.54)" }}>

                                <i className="fas fa-sitemap"></i>
                                <span className="ml-3" >Categories</span>
                                <i className="ml-auto fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="p-2 text-center  w-100  py-3">
                            <Link to="linked-wallet" onClick={() => this.props.profile()} className="text-decoration-none d-flex align-items-center justify-content-between" style={{ color: "rgba(0,0,0,.54)" }}>
                                <i className="fas fa-link"></i>
                                <span className="ml-3" >Connect to banks</span>
                                <i className="ml-auto fas fa-arrow-right"></i>
                            </Link>
                        </div>

                    </div>

                    {/* profile modal */}
                    <Modal show={this.state.profileModal} style={{ color: "rgba(0,0,0,.54)" }}>
                        <Modal.Header>
                            <div className="row w-100 text-center">
                                <div className="col-md-4 col-sm-12">
                                    <span style={{ cursor: "pointer" }} onClick={() => this.setState({ profileModal: !this.state.profileModal })} ><i className="fas fa-times"></i></span>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <Modal.Title>My Account</Modal.Title>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <button className="btn btn-info">Signout</button>
                                </div>
                            </div>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="p-2 text-center d-flex justify-content-around w-100 align-items-center py-3">
                                <div className="row w-100">
                                    <div className="col-md-4 col-sm-12">
                                        <i className="fas fa-user-alt p-5 bg-info rounded-circle"></i>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <p>rokibahmed.ru.cse</p>
                                        <p>rokibahmed.ru.cse@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center py-4" style={{ backgroundColor: "tomato" }}>
                                <p className="text-white">Get the most out of Money Lover. Upgrade now!</p>
                                <Link to="store" onClick={this.closeALL} className="btn btn-success">VIEW UPGRADE OPTIONS</Link>
                            </div>
                            <div className="mt-2">
                                <p>Device(1/5)</p>
                                <div className="text-center d-flex align-items-center">
                                    <i className="fas fa-user-alt p-2 bg-info rounded-circle"></i>
                                    <div className="ml-5">
                                        <p>Web Browser</p>
                                        <p>This Device</p>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                    {/* !profile modal  */}
                </div>
            </>
        )
    }
}

export default index
