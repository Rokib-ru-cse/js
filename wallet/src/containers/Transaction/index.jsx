import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { selectMonth } from '../../redux/actions/index'
import filepic from '../../images/file.png'


const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        selectMonth: (id) => dispatch(selectMonth(id))
    }
}

export class index extends Component {
    state = {
        transaction: ["FUTURE", "THIS MONTH", "LAST MONTH", "01/11/2020-30/11/2020"],
    }
    monthSelect = (id) => {
        this.props.selectMonth(id)
    }
    transactionDate = () => {
        return (
            <Card.Text >transaction for {this.state.transaction[this.props.month]}</Card.Text>
        )
    }

    render() {

        const activeClass = {
            color: "#2db84c",
            borderBottom: "2px solid #2db84c",
            padding: '10px'
        }
        return (
            <>
                <div className="container" style={{ color: "rgba(0,0,0,.54)" }}>
                    <div className="row">
                        <div className="col-md-6 col-sm-10 mx-auto">
                            <div className="d-flex justify-content-center align-items-center mt-5" >
                                <Card className="text-center w-100 shadow-lg p-3 mb-5 bg-white rounded">
                                    <div className="d-flex justify-content-between align-items-end font-weight-bold" style={{ cursor: "pointer" }}>
                                        <div style={this.props.active == this.props.month + 1 ? activeClass : null} onClick={() => this.monthSelect(this.props.month + 1)}>{this.state.transaction[this.props.month + 1]}</div>
                                        <div style={this.props.active == this.props.month ? activeClass : null} onClick={() => this.monthSelect(this.props.month)}>{this.state.transaction[this.props.month]}</div>
                                        <div style={this.props.active == this.props.month - 1 ? activeClass : null} onClick={() => this.monthSelect(this.props.month - 1)}>{this.state.transaction[this.props.month - 1]}</div>
                                    </div>
                                    <hr />
                                    <Card.Body>
                                        <div className="d-flex justify-content-center">
                                            <div className="w-100">
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
                                        {/* {this.transactionDate()} */}
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
