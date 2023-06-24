import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class index extends Component {

    state = {
        selected: "running"
    }

    budgetSelect = (data) => {
        this.setState({
            selected: data
        })
    }

    selectedBudget = () => {
        return (
            <>
                <p className="card-text text-center">{this.state.selected} Budget</p>
            </>
        )
    }

    render() {
        const activeClass = {
            color: "#2db84c",
            borderBottom: "2px solid #2db84c",
        }
        const cardStyle = {
            cursor: "pointer",
        }
        return (
            <>
                <div className="container" style={{ color: "rgba(0,0,0,.54)" }}>
                    <div className="row">
                        <div className="col-md-6 col-sm-10 mx-auto">
                            <div className="d-flex justify-content-center align-items-center mt-5" >
                                <div className="card w-100 shadow-lg p-3 mb-5 bg-white rounded" style={{ height: "300px" }}>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-around" style={cardStyle}>
                                            <h5 style={this.state.selected == 'running' ? activeClass : null} onClick={() => this.budgetSelect("running")} className="card-title">Running</h5>
                                            <h5 style={this.state.selected == 'finished' ? activeClass : null} onClick={() => this.budgetSelect("finished")} className="card-title">Finished</h5>
                                        </div>
                                        <hr />
                                        <div>
                                            {this.selectedBudget()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default index
