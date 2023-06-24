import { Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import filepic from '../../images/file.png'
import { Link } from 'react-router-dom'
import globalpic from '../../images/global.png'


export class index extends Component {

    state = {
        walletDetails: false,
        addWalletModal: false,
        addBasicWalletModal: false,
        selectIcon: false,
        selectCurrency: false,
        shareWallet: false,
        transferMoney: false,
        fromWalletModal: false,
        categoryModal: false,
        selectedCategory: "expence",
        toWalletModal: false,
        adjustBalance: false,
        editWalletModal:false
    }
    showWalletDetails = () => {
        return (
            <div className="card w-100" >
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <i className="fas fa-times" onClick={() => this.setState({ walletDetails: !this.state.walletDetails })} style={{ cursor: "pointer" }}></i>
                            <p className="ml-5 card-title">Waller Details</p>
                        </div>
                        <div>
                            <button className="btn btn-outline-danger mr-5">Delete</button>
                            <button onClick={()=>this.setState({editWalletModal:!this.state.editWalletModal})} className="btn btn-outline-success">Edit</button>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center">
                        <img src={filepic} alt="filepic" width="50px" height="50px" />
                        <div className="ml-3 d-flex flex-column align-items-center">
                            <p>rokibrucse</p>
                            <div>United States Dollar</div>
                        </div>
                    </div>
                    <hr />
                    <p>User</p>
                    <div className="d-flex align-items-center">
                        <img src={filepic} alt="filepic" width="50px" height="50px" />
                        <div className="ml-3 d-flex flex-column align-items-center">
                            <p>rokibrucse <span className="p-1" style={{ backgroundColor: "orange", borderRadius: "5px", color: "white" }}>Owner</span></p>
                            <div>rokibahemd.ru.cse@gmail.com</div>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-3 ml-1">
                        <div className="form-check form-check-inline">
                            <input style={{ cursor: "pointer" }} type="checkbox" />
                        </div>
                        <div >
                            <p>Excluded From Total</p>
                            <small style={{ color: "rgba(0,0,0,0.54)" }}>Ignore this wallet and its balance in the "Total" mode.</small>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-3 ml-1">
                        <div className="form-check form-check-inline">
                            <input style={{ cursor: "pointer" }} type="checkbox" />
                        </div>
                        <div >
                            <p>Archived</p>
                            <small style={{ color: "rgba(0,0,0,0.54)" }}>Freeze this wallet and stop generating bills & recuring transactions.</small>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center py-2" style={{ cursor: "pointer" }} onClick={() => this.setState({ shareWallet: !this.state.shareWallet })}><p className="text-decoration-none text-success">SHARE WALLET</p> </div>
                    <hr />
                    <div className="text-center py-2" style={{ cursor: "pointer" }} onClick={() => this.setState({ transferMoney: !this.state.transferMoney })}><p className="text-decoration-none text-success">TRANSFER MONEY</p> </div>
                    <hr />
                    <div className="text-center py-2" style={{ cursor: "pointer" }} onClick={() => this.setState({ adjustBalance: !this.state.adjustBalance })}><p className="text-decoration-none text-success">ADJUST BALANCE</p> </div>
                    <hr />
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                <div className="text-center mt-5"><button onClick={() => this.setState({ addWalletModal: !this.state.addWalletModal })} className="btn btn-outline-info">ADD WALLET</button></div>
                .<div className="customcontainer" style={{ color: "rgba(0,0,0,.54)" }}>
                    <div className="d-flex justify-content-center mt-3 flex-wrap" >
                        <div className="card w-100 mb-2" style={{ height: "150px" }}>
                            <div className="card-body">
                                <p className="card-title">Included in Total</p>
                                <hr />
                                <div onClick={() => this.setState({ walletDetails: !this.state.walletDetails })} className="d-flex align-items-center" style={{ cursor: "pointer" }}>
                                    <img src={filepic} alt="filepic" width="50px" height="50px" />
                                    <div className="ml-3 d-flex flex-column align-items-center">
                                        <p>rokibrucse</p>
                                        <div>$0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.state.walletDetails ? this.showWalletDetails() : null}
                    </div>
                </div>
                {/* ADD WALLET modal */}
                <Modal show={this.state.addWalletModal} style={{ color: "rgba(0,0,0,.54)" }}>
                    <Modal.Header>
                        <div className="row w-100 text-center">
                            <div className="col-md-4 col-sm-12">
                                <Modal.Title>ADD WALLET</Modal.Title>
                            </div>
                            <div className="col-md-4 col-sm-12 ml-auto">
                                <span style={{ cursor: "pointer" }} onClick={() => this.setState({ addWalletModal: !this.state.addWalletModal })} ><i className="fas fa-times"></i></span>
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex flex-wrap justify-content-between">
                            <div onClick={() => this.setState({ addBasicWalletModal: !this.state.addBasicWalletModal })} className="w-25 bg-info text-center" style={{ height: "100px", borderRadius: "20px", cursor: "pointer", color: "#fff" }}><h6 className="mt-4">Basic Wallet</h6></div>
                            <Link to="linked-wallet" className="w-25 bg-success text-center" style={{ height: "100px", borderRadius: "20px", textDecoration: "none", color: "#fff" }}>
                                <h6 className="mt-4">Linked Wallet </h6>
                            </Link>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* !ADD WALLET modal  */}
                {/* ADD basic  WALLET modal */}
                <Modal show={this.state.addBasicWalletModal} style={{ color: "rgba(0,0,0,.54)" }}>
                    <Modal.Header>
                        <div className="row w-100 text-center">
                            <div className="col-md-4 col-sm-12">
                                <Modal.Title>ADD WALLET</Modal.Title>
                            </div>
                            <div className="col-md-4 col-sm-12 ml-auto">
                                <span style={{ cursor: "pointer" }} onClick={() => this.setState({ addBasicWalletModal: !this.state.addBasicWalletModal })}><i className="fas fa-times"></i></span>
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div onClick={() => this.setState({ selectIcon: !this.state.selectIcon })} className="col-md-4 col-sm-12" style={{ cursor: "pointer" }}>
                                <img src={filepic} alt="filepic" width="50px" height="50px" />
                                <i class="fas fa-arrow-circle-down"></i>
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <p>Wallet Name</p>
                                <input className="w-100 form-control" style={{ color: "rgba(0,0,0,.54)" }} placeholder="Your Wallet Name?" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div style={{ cursor: "pointer" }} className="col-md-8 col-sm-12" onClick={() => this.setState({ selectCurrency: !this.state.selectCurrency })}>
                                <p>Currency</p>
                                <i className="fas fa-dollar-sign p-2 bg-info text-white rounded-circle"></i><span> select currnecy</span>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <p>Initial Balance</p>
                                <input className="w-100 form-control" style={{ color: "rgba(0,0,0,.54)" }} placeholder="0" />
                            </div>
                        </div>
                        <div className="row mt-3 ml-1">
                            <div className="form-check form-check-inline">
                                <input style={{ cursor: "pointer" }} type="checkbox" />
                            </div>
                            <div >
                                <p>Included From Total</p>
                                <small style={{ color: "rgba(0,0,0,0.54)" }}>Ignore this wallet and its balance in the "Total" mode.</small>
                            </div>
                        </div>
                        <div className="w-50 ml-auto mt-3">
                            <button className="mr-5 btn btn-danger" onClick={() => this.setState({ addBasicWalletModal: !this.state.addBasicWalletModal })}>Cancle</button>
                            <button className="btn btn-success">Save</button>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* !ADD basic WALLET modal  */}
                {/* select icon  modal */}
                <Modal show={this.state.selectIcon} style={{ color: "rgba(0,0,0,.54)" }}>
                    <Modal.Header>
                        <div className="row w-100 text-center">
                            <div className="col-md-4 col-sm-12">
                                <Modal.Title>Select Icon</Modal.Title>
                            </div>
                            <div className="col-md-4 col-sm-12 ml-auto">
                                <span style={{ cursor: "pointer" }} onClick={() => this.setState({ selectIcon: !this.state.selectIcon })}><i className="fas fa-times"></i></span>
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex flex-wrap justify-content-between">
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                        </div>
                    </Modal.Body>
                </Modal>
                {/* !select icon  modal  */}
                {/* select currency  modal */}
                <Modal show={this.state.selectCurrency} style={{ color: "rgba(0,0,0,.54)" }}>
                    <Modal.Header>
                        <div className="row w-100 text-center">
                            <div className="col-md-4 col-sm-12">
                                <Modal.Title>Select Currency</Modal.Title>
                            </div>
                            <div className="col-md-4 col-sm-12 ml-auto">
                                <span style={{ cursor: "pointer" }} onClick={() => this.setState({ selectCurrency: !this.state.selectCurrency })}><i className="fas fa-times"></i></span>
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex flex-wrap justify-content-between">
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                            <img src={filepic} alt="filepic" width="50px" height="50px" />
                        </div>
                    </Modal.Body>
                </Modal>
                {/* !select currency  modal  */}
                {/* share wallet  modal */}
                <Modal show={this.state.shareWallet} style={{ color: "rgba(0,0,0,.54)" }}>
                    <Modal.Header>
                        <div className="row w-100 text-center">
                            <div className="col-md-4 col-sm-12">
                                <Modal.Title>Share Wallet</Modal.Title>
                            </div>
                            <div className="col-md-4 col-sm-12 ml-auto">
                                <span style={{ cursor: "pointer" }} onClick={() => this.setState({ shareWallet: !this.state.shareWallet })}><i className="fas fa-times"></i></span>
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mt-3 d-flex">
                            <i className="fas fa-envelope-square p-2 bg-info rounded-circle text-white mr-3" style={{ fontSize: "30px" }}></i>
                            <input className="w-100 form-control" style={{ color: "rgba(0,0,0,.54)" }} placeholder="Email which you want to share with" />
                        </div>
                        <div className="mt-3 d-flex">
                            <i className="fas fa-envelope-square p-2 bg-success rounded-circle text-white mr-3" style={{ fontSize: "30px" }}></i>
                            <input className="w-100 form-control" style={{ color: "rgba(0,0,0,.54)" }} placeholder="Message" />
                        </div>
                        <div className="w-50 ml-auto mt-3">
                            <button className="mr-5 btn btn-outline-danger" onClick={() => this.setState({ shareWallet: !this.state.shareWallet })}>Cancle</button>
                            <button className="btn btn btn-outline-success">Done</button>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* !share wallet modal  */}
                {/* transfer money  modal */}
                <Modal size="lg" show={this.state.transferMoney} style={{ color: "rgba(0,0,0,.54)" }}>
                    <Modal.Header>
                        <div className="row w-100 text-center">
                            <div className="col-md-4 col-sm-12">
                                <Modal.Title>Transfer Money</Modal.Title>
                            </div>
                            <div className="col-md-4 col-sm-12 ml-auto">
                                <span style={{ cursor: "pointer" }} onClick={() => this.setState({ transferMoney: !this.state.transferMoney })}><i className="fas fa-times"></i></span>
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <h5>From</h5>
                            <div className="my-5 d-flex flex-wrap">
                                <div style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "235px" }} className="p-2 m-2">
                                    <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Wallet</small>
                                    <div className="d-flex" onClick={() => this.setState({ fromWalletModal: !this.state.fromWalletModal })} style={{ cursor: "pointer" }}>
                                        <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                        <p>Total</p>
                                        <i className="ml-auto fas fa-arrow-right"></i>
                                    </div>
                                </div>
                                <div onClick={() => this.setState({ categoryModal: !this.state.categoryModal })} style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "235px", cursor: "pointer" }} className="p-2 m-2">
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

                            </div>
                        </div>
                        <div>
                            <h5>To</h5>
                            <div className="my-5 d-flex flex-wrap">
                                <div style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", width: "235px" }} className="p-2 m-2">
                                    <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Wallet</small>
                                    <div className="d-flex" onClick={() => this.setState({ toWalletModal: !this.state.toWalletModal })} style={{ cursor: "pointer" }}>
                                        <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                        <p>Total</p>
                                        <i className="ml-auto fas fa-arrow-right"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row mt-3 ml-1">
                            <div className="form-check form-check-inline">
                                <input style={{ cursor: "pointer" }} type="checkbox" check="checked" />
                            </div>
                            <div >
                                <p className="mt-3" style={{ color: "rgba(0,0,0,0.54)" }}>Excluded from report</p>
                                <small style={{ color: "rgba(0,0,0,0.54)" }}>These transactions will be excluded from report in both wallets.</small>
                            </div>
                        </div>
                        <div className="row mt-3 ml-1">
                            <div className="form-check form-check-inline">
                                <input style={{ cursor: "pointer" }} type="checkbox" />
                            </div>
                            <div >
                                <p className="mt-3" style={{ color: "rgba(0,0,0,0.54)" }}>Add transfer fee</p>
                            </div>
                        </div>
                        <div className="w-50 ml-auto mt-3">
                            <button className="mr-5 btn btn-outline-danger" onClick={() => this.setState({ transferMoney: !this.state.transferMoney })}>Cancle</button>
                            <button className="btn btn btn-outline-success">Done</button>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* !transfer money modal  */}
                {/* adjust balance  modal */}
                <Modal show={this.state.adjustBalance} style={{ color: "rgba(0,0,0,.54)" }}>
                    <Modal.Header>
                        <div className="row w-100 text-center">
                            <div className="col-md-4 col-sm-12">
                                <Modal.Title>ADJUST BALANCE</Modal.Title>
                            </div>
                            <div className="col-md-4 col-sm-12 ml-auto">
                                <span style={{ cursor: "pointer" }} onClick={() => this.setState({ adjustBalance: !this.state.adjustBalance })}><i className="fas fa-times"></i></span>
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px"}} className="p-2 m-2">
                            <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Wallet</small>
                            <div className="d-flex" onClick={() => this.setState({ fromWalletModal: !this.state.fromWalletModal })} style={{ cursor: "pointer" }}>
                                <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                <p>Total</p>
                                <i className="ml-auto fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px"}} className="p-2 m-2">
                            <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Amount</small>
                            <div className="d-flex">
                                <input style={{ border: "1px solid transparent", outline: "none", backgroundColor: "rgba(0,0,0,0.01)" }} type="text" placeholder="Amount" />
                            </div>
                        </div>
                        <div className="row mt-3 ml-1">
                            <div className="form-check form-check-inline">
                                <input style={{ cursor: "pointer" }} type="checkbox" />
                            </div>
                            <div >
                                <p className="mt-3" style={{ color: "rgba(0,0,0,0.54)" }}>Exclude from report</p>
                                <small style={{ color: "rgba(0,0,0,0.54)" }}>Ignore this wallet and its balance in the "Total" mode.</small>  
                            </div>
                        </div>

                        <div className="w-50 ml-auto mt-3">
                            <button className="mr-5 btn btn-outline-danger" onClick={() => this.setState({ adjustBalance: !this.state.adjustBalance })}>Cancle</button>
                            <button className="btn btn btn-outline-success">Done</button>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* !adjust balance modal  */}
                {/* from wallet section modal */}
                <Modal show={this.state.fromWalletModal}>
                    <Modal.Header>
                        <Modal.Title>Select Wallet</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={() => this.setState({ fromWalletModal: !this.state.fromWalletModal })}><i className="fas fa-times"></i></span>
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
                {/* !from wallet section modal */}
                {/* to wallet section modal */}
                <Modal show={this.state.toWalletModal}>
                    <Modal.Header>
                        <Modal.Title>Select Wallet</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={() => this.setState({ toWalletModal: !this.state.toWalletModal })}><i className="fas fa-times"></i></span>
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
                {/* !to wallet section modal */}
                {/* category modal */}
                <Modal show={this.state.categoryModal}>
                    <Modal.Header>
                        <Modal.Title>Select Category</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={() => this.setState({ categoryModal: !this.state.categoryModal })}><i className="fas fa-times"></i></span>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="w-75 mx-auto p-2 mb-3" style={{ borderRadius: "30px", backgroundColor: "rgba(0,0,0,0.1)" }}>
                            <i className="fas fa-search" style={{ color: "rgba(0,0,0,0.54)" }}></i>
                            <input style={{ border: "1px solid transparent", outline: "none", backgroundColor: "rgba(0,0,0,0.01)" }} type="text" placeholder="search" />
                        </div>
                        <div className="d-flex justify-content-center" style={{ color: "rgba(0,0,0,0.54)", cursor: "pointer" }} >
                            <p style={{ color: "#2db84c", borderBottom: "2px solid #2db84c", }} className="mx-4">EXPENCE</p>
                        </div>

                    </Modal.Body>
                </Modal>
                {/* !category modal */}
                {/* edir wallet modal */}
                <Modal show={this.state.editWalletModal}>
                    <Modal.Header>
                        <Modal.Title>Edit wallet</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={() => this.setState({ editWalletModal: !this.state.editWalletModal })}><i className="fas fa-times"></i></span>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="row">
                            <div onClick={() => this.setState({ selectIcon: !this.state.selectIcon })} className="col-md-4 col-sm-12" style={{ cursor: "pointer" }}>
                                <img src={filepic} alt="filepic" width="50px" height="50px" />
                                <i class="fas fa-arrow-circle-down"></i>
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <p>Wallet Name</p>
                                <input className="w-100 form-control" style={{ color: "rgba(0,0,0,.54)" }} placeholder="Your Wallet Name?" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div style={{ cursor: "pointer" }} className="col-md-8 col-sm-12" onClick={() => this.setState({ selectCurrency: !this.state.selectCurrency })}>
                                <p>Currency</p>
                                <i className="fas fa-dollar-sign p-2 bg-info text-white rounded-circle"></i><span> select currnecy</span>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <p>Initial Balance</p>
                                <input className="w-100 form-control" style={{ color: "rgba(0,0,0,.54)" }} placeholder="0" />
                            </div>
                        </div>
                        <div className="row mt-3 ml-1">
                            <div className="form-check form-check-inline">
                                <input style={{ cursor: "pointer" }} type="checkbox" />
                            </div>
                            <div >
                                <p>Included From Total</p>
                                <small style={{ color: "rgba(0,0,0,0.54)" }}>Ignore this wallet and its balance in the "Total" mode.</small>
                            </div>
                        </div>
                        <div className="w-50 ml-auto mt-3">
                            <button className="mr-5 btn btn-danger" onClick={() => this.setState({ editWalletModal: !this.state.editWalletModal })}>Cancle</button>
                            <button className="btn btn-success">Save</button>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* !edit wallet modal */}

            </>
        )
    }
}

export default index
