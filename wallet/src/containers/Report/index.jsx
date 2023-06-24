import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export class index extends Component {
    state = {
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
            }
        ],
        month: 0,
        modal: false,
        customModalShow: false,
        customStartDate: new Date(),
        customEndDate: new Date(),
        startDatePickerIsOpen: false,
        endDatePickerIsOpen: false,
        debtModal: false,
        loanModal: false,
        otherModal: false
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


    monthSelect = (id) => {
        this.setState({
            month: id
        })
        this.monthSelectModal()

    }


    monthSelectModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    customModal = () => {
        this.setState({
            customModalShow: !this.state.customModalShow
        })
    }

    handleStartDate = (date) => {
        this.setState({
            customStartDate: date
        });
    }
    handleEndDate = (date) => {
        this.setState({
            customEndDate: date
        });
    }
    

    transactionDate = () => {
        return (
            <div className="card w-100 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-sm-10">
                            <div className="d-flex flex-column align-items-center">
                                <h5 className="card-title">Opening balance</h5>
                                <span className="text-dark">$ 0</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-10">
                            <div className="d-flex flex-column align-items-center">
                                <h5 className="card-title">Ending balance</h5>
                                <span className="text-dark">$ 0</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="d-flex flex-column align-items-center">
                            <p>Net Income</p>
                            <span className="text-dark">$ 0</span>
                        </div>
                        <div>
                            <div className="">
                                <span>1.0 K</span>
                                <span><hr /></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-10">
                            <div className="d-flex flex-column align-items-center" style={{ cursor: "pointer",height:"250px" }}>
                                <h5 className="card-title">Income</h5>
                                <span className="text-info">$ 0</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-10">
                            <div className="d-flex flex-column align-items-center" style={{ cursor: "pointer",height:"250px" }}>
                                <h5 className="card-title">Expence</h5>
                                <span className="text-danger">$ 0</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row" style={{ cursor: "pointer" }} onClick={() => this.setState({ debtModal: !this.state.debtModal })}>
                        <div className="col-sm-10 col-md-6">
                            <h5 className="card-title mr-auto">Debt</h5>
                        </div>
                        <div className="col-sm-10 col-md-6">
                            <div className="d-flex justify-content-end">
                                <span className="text-info mx-3">$ 0</span>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ cursor: "pointer" }} onClick={() => this.setState({ loanModal: !this.state.loanModal })}>
                        <div className="col-sm-10 col-md-6">
                            <h5 className="card-title mr-auto">Load</h5>
                        </div>
                        <div className="col-sm-10 col-md-6">
                            <div className="d-flex justify-content-end">
                                <span className="text-danger mx-3">$ 0</span>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ cursor: "pointer" }} onClick={() => this.setState({ otherModal: !this.state.otherModal })}>
                        <div className="col-sm-10 col-md-6">
                            <h5 className="card-title mr-auto">Other</h5>
                        </div>
                        <div className="col-sm-10 col-md-6">
                            <div className="d-flex justify-content-end">
                                <span className="mx-3 text-dark">$ 0</span>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <p className="card-text">transaction for {this.state.transaction[this.state.month].monthName}</p>
                </div>
            </div >
        )
    }
    render() {

        return (
            <>
                <div className="container" style={{color:"rgba(0,0,0,.54)"}}>
                    <p onClick={this.monthSelectModal} style={{ cursor: "pointer",color:'black' }} className="text-center mt-4">{this.state.transaction[this.state.month].monthName} <span><i className="fas fa-arrow-down"></i></span> </p>
                    <div className="d-flex justify-content-center align-items-center mt-5" >
                        {this.transactionDate()}
                    </div >

                    <Modal show={this.state.modal}>
                        <Modal.Header>
                            <Modal.Title>Select Time Range</Modal.Title>
                            <span style={{ cursor: "pointer" }} onClick={this.monthSelectModal}><i className="fas fa-times"></i></span>
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
                                <p style={{cursor:"pointer"}} onClick={this.customModal}>Custom</p>
                            </div>
                        </Modal.Body>
                    </Modal>
                    <Modal show={this.state.customModalShow}>
                        <Modal.Header>
                            <Modal.Title>SELECT CUSTOM DATE</Modal.Title>
                            <span style={{ cursor: "pointer" }} onClick={this.customModal}><i className="fas fa-times"></i></span>
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

                                <button className="btn btn-info">Done</button>
                            </div>
                        </Modal.Body>
                    </Modal>
                    {/* debt modal */}
                    <Modal show={this.state.debtModal}>
                        <Modal.Header>
                            <span style={{ cursor: "pointer" }} onClick={() => this.setState({ debtModal: !this.state.debtModal })} ><i className="fas fa-times"></i></span>
                            <Modal.Title>Debt</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            no transaction
                    </Modal.Body>
                    </Modal>
                    {/* !debt modal */}
                    {/* loan modal */}
                    <Modal show={this.state.loanModal}>
                        <Modal.Header>
                            <span style={{ cursor: "pointer" }} onClick={() => this.setState({ loanModal: !this.state.loanModal })}><i className="fas fa-times"></i></span>
                            <Modal.Title>Loan</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            no transaction
                    </Modal.Body>
                    </Modal>
                    {/* !loan modal */}
                    {/* other modal */}
                    <Modal show={this.state.otherModal}>
                        <Modal.Header>
                            <span style={{ cursor: "pointer" }} onClick={() => this.setState({ otherModal: !this.state.otherModal })}><i className="fas fa-times"></i></span>
                            <Modal.Title>Other</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            no transaction
                    </Modal.Body>
                    </Modal>
                    {/* !other modal */}
                </div>
            </>
        )
    }
}

export default index
