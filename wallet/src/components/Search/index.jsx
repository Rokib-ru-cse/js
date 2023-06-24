import React, { Component } from 'react'
import globalpic from '../../images/global.png'
import filepic from '../../images/file.png'
import { Modal } from 'react-bootstrap'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export class index extends Component {

    state = {
        totalModal: false,
        categoryModal: false,
        selectedCategory: "expence",
        transaction: [
            {
                monthName: "This month",
                dateFormat: "1/1/2000 - 1/1/2000"
            },
            {
                monthName: "Last month",
                dateFormat: "1/1/2000 - 1/1/2000"
            },
            {
                monthName: "Last 3 month",
                dateFormat: "1/1/2000 - 1/1/2000"
            },
            {
                monthName: "Last 6 month",
                dateFormat: "1/1/2000 - 1/1/2000"
            },
            {
                monthName: "This year",
                dateFormat: "1/1/2000 - 1/1/2000"
            },
            {
                monthName: "Last year",
                dateFormat: "1/1/2000 - 1/1/2000"
            },
        ],
        month: null,
        dateModalShow: false,
        customDateModalShow: false,
        customStartDate: new Date(),
        customEndDate: new Date(),
        startDatePickerIsOpen: false,
        endDatePickerIsOpen: false,
        locationModalShow: false,
        withModalShow: false,

    }

    setCustomDate = () => {
        this.setState({
            month: this.state.transaction.length,
            transaction: [...this.state.transaction, { dateFormat: `${this.state.customStartDate} - ${this.state.customEndDate}` }],
        })
        this.handleCustomDateModal()
        this.handleDateModal()
    }
    handleDateModal = () => {
        this.setState({
            dateModalShow: !this.state.dateModalShow
        })
    }
    monthSelect = (id) => {
        this.setState({
            month: id
        })
        this.handleDateModal()

    }

    openStartDatePicker = () => {
        this.setState({
            startDatePickerIsOpen: !this.state.startDatePickerIsOpen
        });
    };
    openEndDatePicker = () => {
        this.setState({
            endDatePickerIsOpen: !this.state.endDatePickerIsOpen
        });
    };
    handleCustomDateModal = () => {
        this.setState({
            customDateModalShow: !this.state.customDateModalShow
        })
    }

    handleStartDate = (date) => {
        console.log(date);
        this.setState({
            customStartDate: date
        });
    }
    handleEndDate = (date) => {
        console.log(date);
        this.setState({
            customEndDate: date
        });
    }

    handleSelectCategory = (item) => {
        this.setState({
            selectedCategory: item
        })
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
    handleLocationModal = () => {
        this.setState({
            locationModalShow: !this.state.locationModalShow
        })
    }
    handleWithModal = () => {
        this.setState({
            withModalShow: !this.state.withModalShow
        })
    }


    render() {

        const activeClass = {
            color: "#2db84c",
            borderBottom: "2px solid #2db84c",
            // padding:'10px'
        }

        return (
            <>
                <div className="container shadow-lg p-3 mb-5 bg-white rounded">
                    <button className="btn btn-danger " >reset</button>
                    <div className="my-5 d-flex flex-wrap ">
                        <div style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "260px" }} className="p-2 m-2">
                            <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Wallet</small>
                            <div className="d-flex" onClick={this.handleTotalModal} style={{ cursor: "pointer" }}>
                                <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                <p>Total</p>
                                <i className="ml-auto fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div onClick={this.handleCategoryModal} style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "260px", cursor: "pointer" }} className="p-2 m-2">
                            <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Category</small>
                            <div className="d-flex">
                                <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                <p>All Category</p>
                                <i className="ml-auto fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div onClick={this.handleDateModal} style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "260px", cursor: "pointer" }} className="p-2 m-2">
                            <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Date</small>
                            <div className="d-flex">
                                {console.log(this.state.month, this.state.transaction[this.state.month])}
                                <p>{this.state.month ? this.state.transaction[this.state.month].dateFormat : 'Select Time Range'}</p>
                                <i className="ml-auto fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "260px" }} className="p-2 m-2">
                            <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Note</small>
                            <div className="d-flex">
                                <input style={{ border: "1px solid transparent", outline: "none", backgroundColor: "rgba(0,0,0,0.01)" }} type="text" placeholder="Note" />
                            </div>
                        </div>
                        <div onClick={this.handleLocationModal} style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "260px",cursor: "pointer" }} className="p-2 m-2">
                            <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Location</small>
                            <div className="d-flex">
                                <p>Select Location</p>
                                <i className="ml-auto fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div onClick={this.handleWithModal} style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "260px",cursor: "pointer" }} className="p-2 m-2">
                            <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>With</small>
                            <div className="d-flex">
                                <p>With</p>
                                <i className="ml-auto fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "532px" }} className="p-2 m-2">
                            <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Amount</small>
                            <div className="d-flex justify-content-between">
                                <input style={{ border: "1px solid transparent", outline: "none", backgroundColor: "rgba(0,0,0,0.01)" }} type="text" placeholder="start" />
                                <input style={{ border: "1px solid transparent", outline: "none", backgroundColor: "rgba(0,0,0,0.01)" }} type="text" placeholder="end" />

                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <div className="w-50 h-50 shadow-lg p-3 mb-5 bg-white rounded">
                                <div className="d-flex justify-content-between">
                                    <p style={{ color: "rgba(0,0,0,0.54)" }}>Inflow</p>
                                    <p className="text-info">$ 0</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p style={{ color: "rgba(0,0,0,0.54)" }}>Outflow</p>
                                    <p className="text-danger">$ 0</p>
                                </div>
                                <hr className="w-25 mr-0" />
                                <div className="d-flex justify-content-between">
                                    <p style={{ color: "rgba(0,0,0,0.54)" }}></p>
                                    <p className="text-dark">$ 0</p>
                                </div>
                                <div style={{ height: "40px", backgroundColor: "rgba(0,0,0,0.1)" }}>

                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <h1 className="mr-4">27</h1>
                                    <div className="mr-auto">
                                        <small className="d-block" style={{ color: "rgba(0,0,0,0.54)" }}>Wednesday</small>
                                        <small className="d-block" style={{ color: "rgba(0,0,0,0.54)" }}>January 2021</small>

                                    </div>
                                    <p className="text-dark">$ 0</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between mt-3 align-items-center">
                                    <img src={filepic} alt="filepic" width="50px" height="50px" className="mr-4" />
                                    <p className="mr-auto">Electricity</p>
                                    <p className="text-danger">$ 0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* total section modal */}
                    <Modal show={this.state.totalModal}>
                        <Modal.Header>
                            <Modal.Title>Select Wallet</Modal.Title>
                            <span style={{ cursor: "pointer" }} onClick={this.handleTotalModal}><i className="fas fa-times"></i></span>
                        </Modal.Header>
                        <Modal.Body>
                            <div title="rokibrucse" id="basic-nav-dropdown">
                                <small className="text-center d-block" style={{ color: "rgba(0,0,0,.54)" }}>Select Wallet</small>
                                <hr />
                                <div className="d-flex" href="#action/3.1">
                                    <div>
                                        <img src={globalpic} alt="globalpic" className="rounded-circle img-fluid" width="50px" />
                                    </div>
                                    <div className="ml-4">
                                        <p>Total</p>
                                        <p>$ 0</p>
                                    </div>
                                </div>
                                <div />
                                <small className="ml-4" style={{ color: "rgba(0,0,0,.54)" }}>Included in Tota</small>
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
                    {/* date modal */}
                    <Modal show={this.state.dateModalShow}>
                        <Modal.Header>
                            <Modal.Title>Select Time Range</Modal.Title>
                            <span style={{ cursor: "pointer" }} onClick={this.handleDateModal}><i className="fas fa-times"></i></span>
                        </Modal.Header>
                        <Modal.Body>
                            {this.state.transaction.map((month, index) => {
                                return (
                                    <div key={index}>
                                        <p onClick={() => this.monthSelect(index)} style={{ cursor: "pointer" }}>{month.monthName}</p>
                                        <p>{month.dateFormat}</p>
                                    </div>
                                )
                            })}
                            <div>
                                <p style={{ cursor: "pointer" }} onClick={this.handleCustomDateModal}>Custom</p>
                            </div>
                        </Modal.Body>
                    </Modal>

                    {/* custom date modal */}
                    <Modal show={this.state.customDateModalShow}>
                        <Modal.Header>
                            <Modal.Title>SELECT CUSTOM DATE</Modal.Title>
                            <span style={{ cursor: "pointer" }} onClick={this.handleCustomDateModal}><i className="fas fa-times"></i></span>
                        </Modal.Header>
                        <Modal.Body>
                            <div style={{ height: "300px" }} className="d-flex flex-column justify-content-around">
                                <div>
                                    <button onClick={this.openStartDatePicker} className="btn btn-primary mr-3" >Starting Date</button>
                                    <DatePicker
                                        selected={this.state.customStartDate}
                                        onChange={this.handleStartDate}
                                        onClickOutside={this.openStartDatePicker}
                                        open={this.state.startDatePickerIsOpen}
                                    />
                                </div>
                                <div>
                                    <button onClick={this.openEndDatePicker} className="btn btn-success mr-3">Ending Date</button>
                                    <DatePicker
                                        selected={this.state.customEndDate}
                                        onChange={this.handleEndDate}
                                        onClickOutside={this.openEndDatePicker}
                                        open={this.state.endDatePickerIsOpen}
                                    />
                                </div>

                            </div>
                            <div className="text-center">

                                <button onClick={this.setCustomDate} className="btn btn-info">Done</button>
                            </div>
                        </Modal.Body>
                    </Modal>

                    {/* !custom date modal */}
                    {/* !date modal */}

                    {/* location modal */}
                    <Modal show={this.state.locationModalShow}>
                        <Modal.Header>
                            <Modal.Title>Select Location</Modal.Title>
                            <span style={{ cursor: "pointer" }} onClick={this.handleLocationModal}><i className="fas fa-times"></i></span>
                        </Modal.Header>
                        <Modal.Body>
                            <input style={{ border: "1px solid transparent", outline: "none", backgroundColor: "rgba(0,0,0,0.01)" }} type="text" placeholder="search" />


                        </Modal.Body>
                    </Modal>
                    {/* !location modal */}
                    {/* with modal */}
                    <Modal show={this.state.withModalShow}>
                        <Modal.Header>
                            <Modal.Title>With</Modal.Title>
                            <span style={{ cursor: "pointer" }} onClick={this.handleWithModal}><i className="fas fa-times"></i></span>
                        </Modal.Header>
                        <Modal.Body>

                            <input style={{ border: "1px solid transparent", outline: "none", backgroundColor: "rgba(0,0,0,0.01)" }} type="text" placeholder="search" />
                            <div className="text-right">
                                <button className="btn btn-success">Done</button>
                            </div>
                        </Modal.Body>
                    </Modal>
                    {/* !with modal */}

                
            </>
        )
    }
}

export default index
