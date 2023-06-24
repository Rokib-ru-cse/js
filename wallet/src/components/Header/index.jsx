import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import "./index.css";
import globalpic from '../../images/global.png'
import filepic from '../../images/file.png'
import { connect } from 'react-redux'
import { selectMonth } from '../../redux/actions/index'
import { Link } from "react-router-dom";
import { Modal } from 'react-bootstrap'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const mapDispatchToProps = (dispatch) => {
    return {
        selectMonth: (id) => dispatch(selectMonth(id))
    }
}


export class index extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        addTransactionModalShow: false,
        totalModal: false,
        categoryModal: false,
        selectedCategory: "expence",
        customDateModalShow: false,
        customStartDate: new Date(),
        startDatePickerIsOpen: false,
    }
    handleCustomDateModal = () => {
        this.setState({
            customDateModalShow: !this.state.customDateModalShow
        })
    }
    openStartDatePicker = () => {
        this.setState({
            startDatePickerIsOpen: !this.state.startDatePickerIsOpen
        });
    };
    handleStartDate = (date) => {
        console.log(date);
        this.setState({
            customStartDate: date
        });
    }
    handleTotalModal = () => {
        this.setState({
            totalModal: !this.state.totalModal
        })
    }
    handleCategoryModal = () => {
        this.setState({
            categoryModal: !this.state.categoryModal
        })
    }
    handleAddTransactionModal = () => {
        this.setState({
            addTransactionModalShow: !this.state.addTransactionModalShow
        })
    }
    handleSelectCategory = (item) => {
        this.setState({
            selectedCategory: item
        })
    }
    render() {
        const activeClass = {
            color: "#2db84c",
            borderBottom: "2px solid #2db84c",
        }
        return (
            <>
                <div className=" border-bottom position-sticky fixed-top" style={{ color: "rgba(0,0,0,.54)" }} >
                    <div className="d-flex justify-content-between flex-wrap">
                        <div onClick={() => this.props.sidebar()} style={{width:"110px"}}>
                            <i className="fas fa-bars ml-3 mt-3" style={{fontSize:"30px"}}></i>
                        </div>
                        <div className="mr-auto mt-2">
                            <div className="d-flex align-items-center" style={{ color: "rgba(0,0,0,.54)"}}>
                                <img src={filepic} alt="filepic" width="50px" className="img-fluid" />
                                <div className="d-flex flex-column align-items-center">
                                    <NavDropdown title="rokibrucse" id="basic-nav-dropdown">
                                        <small className="text-center d-block" style={{ color: "rgba(0,0,0,.54)", width: "300px" }}>Select Wallet</small>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className="d-flex" href="#action/3.1">
                                            <div>
                                                <img src={globalpic} alt="globalpic" className="rounded-circle img-fluid" width="50px" />
                                            </div>
                                            <div className="ml-4">
                                                <p>Total</p>
                                                <p>$ 0</p>
                                            </div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <small className="ml-4" style={{ color: "rgba(0,0,0,.54)" }}>Included in Tota</small>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className="d-flex" href="#action/3.1">
                                            <div>
                                                <img src={filepic} alt="filepic" className="rounded-circle img-fluid" width="50px" />
                                            </div>
                                            <div className="ml-4">
                                                <p>rokibrucse</p>
                                                <p>$ 0</p>
                                            </div>
                                        </NavDropdown.Item>

                                    </NavDropdown>
                                    <div>$0</div>
                                </div>

                            </div>
                        </div>
                        <div className="my-4">
                            <i style={{ cursor: "pointer" }} onClick={() => this.props.selectMonth(1)} title="Jump to today" className="fas fa-calendar-week mx-3"></i>
                            <i style={{ cursor: "pointer" }} title="View by category" className="fas fa-eye mx-3"></i>
                            <Link to="search"> <i style={{ cursor: "pointer" }} title="Search" className="fas fa-search mx-3"></i></Link>
                            <button onClick={this.handleAddTransactionModal} className="btn btn-success mx-3" >ADD TRANSECTION</button>
                        </div>
                    </div> 
                    {/* </Navbar.Collapse> */}
                </div>
                {/* add transaction modal */}
                <Modal show={this.state.addTransactionModalShow} size="lg">
                    <Modal.Header>
                        <Modal.Title>Add Transaction</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={this.handleAddTransactionModal}><i className="fas fa-times"></i></span>

                    </Modal.Header>
                    <Modal.Body>


                        <div className="my-5 d-flex flex-wrap">
                            <div style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "235px" }} className="p-2 m-2">
                                <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Wallet</small>
                                <div className="d-flex" onClick={this.handleTotalModal} style={{ cursor: "pointer" }}>
                                    <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                    <p>Total</p>
                                    <i className="ml-auto fas fa-arrow-right"></i>
                                </div>
                            </div>
                            <div onClick={this.handleCategoryModal} style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "235px", cursor: "pointer" }} className="p-2 m-2">
                                <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Category</small>
                                <div className="d-flex">
                                    <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                    <p>All Category</p>
                                    <i className="ml-auto fas fa-arrow-right"></i>
                                </div>
                            </div>

                            <div style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "235px" }} className="p-2 m-2">
                                <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Amount</small>
                                <div className="d-flex">
                                    <input style={{ border: "1px solid transparent", outline: "none", backgroundColor: "rgba(0,0,0,0.01)" }} type="text" placeholder="Amount" />
                                </div>
                            </div>
                            <div onClick={this.handleCustomDateModal} style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "235px", cursor: "pointer" }} className="p-2 m-2">
                                <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Date</small>
                                <div className="d-flex">
                                    <p>Select Date</p>
                                    <i className="ml-auto fas fa-arrow-right"></i>
                                </div>
                            </div>
                            <div style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "235px" }} className="p-2 m-2">
                                <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Note</small>
                                <div className="d-flex">
                                    <input style={{ border: "1px solid transparent", outline: "none", backgroundColor: "rgba(0,0,0,0.01)" }} type="text" placeholder="Note" />
                                </div>
                            </div>

                        </div>

                        <div className="d-flex justify-content-around">
                            <button className="btn btn-danger">Cancle</button>
                            <button className="btn btn-success">Done</button>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* !add transaction modal */}
                {/* custom date modal */}
                <Modal show={this.state.customDateModalShow}>
                    <Modal.Header>
                        <Modal.Title>SELECT DATE</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={this.handleCustomDateModal}><i className="fas fa-times"></i></span>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex flex-column justify-content-around">
                            <div>
                                <button onClick={this.openStartDatePicker} className="btn btn-primary mr-3" >Date</button>
                                <DatePicker
                                    selected={this.state.customStartDate}
                                    onChange={this.handleStartDate}
                                    onClickOutside={this.openStartDatePicker}
                                    open={this.state.startDatePickerIsOpen}
                                />
                            </div>


                        </div>
                        <div className="text-center">

                            <button onClick={this.setCustomDate} className="btn btn-info">Done</button>
                        </div>
                    </Modal.Body>
                </Modal>

                {/* !custom date modal */}
                {/* total section modal */}
                <Modal show={this.state.totalModal}>
                    <Modal.Header>
                        <Modal.Title>Select Wallet</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={this.handleTotalModal}><i className="fas fa-times"></i></span>
                    </Modal.Header>
                    <Modal.Body>
                        <div title="rokibrucse" id="basic-nav-dropdown">

                            <small className="mb-4 d-block" style={{ color: "rgba(0,0,0,.54)" }}>Included in Tota</small>
                            <div />
                            <div className="d-flex" href="#action/3.1">
                                <div>
                                    <img src={filepic} alt="filepic" className="rounded-circle img-fluid" width="50px" />
                                </div>
                                <div className="ml-4">
                                    <p>rokibrucse</p>
                                    <p>$ 0</p>
                                </div>
                            </div>

                        </div>

                    </Modal.Body>
                </Modal>
                {/* !total section modal */}
                {/* category modal */}
                <Modal show={this.state.categoryModal}>
                    <Modal.Header>
                        <Modal.Title>Select Category</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={this.handleCategoryModal}><i className="fas fa-times"></i></span>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="w-75 mx-auto p-2 mb-3" style={{ borderRadius: "30px", backgroundColor: "rgba(0,0,0,0.1)" }}>
                            <i className="fas fa-search" style={{ color: "rgba(0,0,0,0.54)" }}></i>
                            <input style={{ border: "1px solid transparent", outline: "none", backgroundColor: "rgba(0,0,0,0.01)" }} type="text" placeholder="search" />
                        </div>
                        <div className="d-flex justify-content-center" style={{ color: "rgba(0,0,0,0.54)", cursor: "pointer" }} >
                            <p style={this.state.selectedCategory == 'debt' ? activeClass : null} onClick={() => this.handleSelectCategory("debt")}>DEBT/LOAN</p>
                            <p style={this.state.selectedCategory == 'expence' ? activeClass : null} onClick={() => this.handleSelectCategory("expence")} className="mx-4">EXPENCE</p>
                            <p style={this.state.selectedCategory == 'income' ? activeClass : null} onClick={() => this.handleSelectCategory("income")}>INCOME</p>
                        </div>

                    </Modal.Body>
                </Modal>
                {/* !category modal */}
            </>
        )
    }
}

export default connect(null, mapDispatchToProps)(index)
