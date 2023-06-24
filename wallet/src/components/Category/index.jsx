import React, { Component } from 'react'
import './index.css'
import filepic from '../../images/file.png'
import globalpic from '../../images/global.png'
import { Modal } from 'react-bootstrap'

export class index extends Component {

    state = {
        categories: [
            {
                id: "1",
                img: filepic,
                name: "Bills & Utilities"
            },
            {
                id: "2",
                img: filepic,
                name: "Electricity"
            },
            {
                id: "3",
                img: filepic,
                name: "Gas"
            },
            {
                id: "4",
                img: filepic,
                name: "Internet"
            },
            {
                id: "5",
                img: filepic,
                name: "Phone"
            },
            {
                id: "6",
                img: filepic,
                name: "Rentals"
            },
            {
                id: "7",
                img: filepic,
                name: "Television"
            },
            {
                id: "8",
                img: filepic,
                name: "Business"
            },
            {
                id: "9",
                img: filepic,
                name: "Education"
            },
            {
                id: "10",
                img: filepic,
                name: "Entertainment"
            },
        ],
        categoryDetails: false,
        selected: null,
        mergeSelected: null,
        categoryModal: false,
        mergeWithCategoryModal: false,
        editCategoryModal: false,
        addCategoryModal: false,
        selectIcon: false,
        walletModal: false,
        parentCategoryModal: false

    }

    selectCategory = (id) => {
        this.setState({
            selected: this.state.categories.filter((category) => category.id == id),
            categoryDetails: true
        })
    }
    mergeSelectCategory = (id) => {
        this.setState({
            mergeSelected: this.state.categories.filter((category) => category.id == id),
            categoryModal: !this.state.categoryModal
        })
    }

    showCategoryDetails = () => {
        return (
            <div className="card w-100" >
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <i className="fas fa-times" onClick={() => this.setState({ categoryDetails: !this.state.categoryDetails })} style={{ cursor: "pointer" }}></i>
                            <p className="ml-5 card-title">Category Details</p>
                        </div>
                        <div>
                            <button className="btn btn-outline-danger mr-5">Delete</button>
                            <button onClick={()=>this.setState({editCategoryModal:!this.state.editCategoryModal})} className="btn btn-outline-success">Edit</button>
                        </div>
                    </div>
                    <hr />

                    < div >
                        < div className="d-flex align-items-center">
                            <img src={this.state.selected[0].img} alt={this.state.selected[0].img} width="50px" height="50px" />
                            <div className="ml-3 d-flex flex-column align-items-center">
                                <h2>{this.state.selected[0].name}</h2>
                                <p>rokibrucse</p>
                                <p className="bg-danger text-white px-2" style={{ borderRadius: "5px" }}>EXPENSE</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center">

                        <button onClick={() => this.setState({ mergeWithCategoryModal: !this.state.mergeWithCategoryModal })} className="btn btn-outline-info">MERGE CATEGORIES</button>
                    </div>
                </div>
            </div >
        )
    }

    render() {
        return (
            <>
                <div className="text-center mt-5"><button onClick={() => this.setState({ addCategoryModal: !this.state.addCategoryModal })} className="btn btn-outline-info">ADD CATEGORY</button></div>
                <div className="customcontainer" style={{ color: "rgba(0,0,0,.54)" }}>
                    <div className="d-flex justify-content-center mt-5 flex-wrap" >
                        {this.state.categoryDetails ? this.showCategoryDetails() : null}
                        <div className="card w-100">
                            <div className="card-body">
                                <p className="card-title">Expense</p>
                                <hr />
                                {
                                    this.state.categories.map((category, index) => {
                                        return (
                                            <div key={index} className="d-flex align-items-center my-2" onClick={() => this.selectCategory(category.id)} style={{ cursor: "pointer" }}>
                                                <img src={category.img} alt={category.img} width="50px" height="50px" />
                                                <p className="ml-4">{category.name}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>

                    </div>
                </div>
                {/*merge with category modal */}
                <Modal show={this.state.mergeWithCategoryModal}>
                    <Modal.Header>
                        <Modal.Title>Select Category</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={() => this.setState({ mergeWithCategoryModal: !this.state.mergeWithCategoryModal })}><i className="fas fa-times"></i></span>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Merge this category</small>
                            <div className="d-flex">
                                <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                <p>{this.state.selected ? this.state.selected[0].name : null}</p>
                                <i className="ml-auto fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div style={{ cursor: "pointer" }} onClick={() => this.setState({ categoryModal: !this.state.categoryModal })}>
                            <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)", cursor: "pointer" }}>with this category</small>
                            <div className="d-flex">
                                <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                <p>{this.state.mergeSelected ? this.state.mergeSelected[0].name : 'category'}</p>
                                <i className="ml-auto fas fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="w-50 ml-auto mt-3">
                            <button className="mr-5 btn btn-outline-danger" onClick={() => this.setState({ mergeWithCategoryModal: !this.state.mergeWithCategoryModal })}>Cancle</button>
                            <button className="btn btn-outline-success">Merge</button>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* !merge with category modal */}
                {/*category modal */}
                <Modal show={this.state.categoryModal}>
                    <Modal.Header>
                        <Modal.Title>Select merged Category</Modal.Title>
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
                        <hr />
                        {
                            this.state.categories.map((category, index) => {
                                return (
                                    <div key={index} className="d-flex align-items-center my-2" onClick={() => this.mergeSelectCategory(category.id)} style={{ cursor: "pointer" }}>
                                        <img src={category.img} alt={category.img} width="50px" height="50px" />
                                        <p className="ml-4">{category.name}</p>
                                    </div>
                                )
                            })
                        }

                    </Modal.Body>
                </Modal>
                {/* !category modal */}
                {/*edit category modal */}
                <Modal show={this.state.editCategoryModal}>
                    <Modal.Header>
                        <Modal.Title>Edit Category</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={() => this.setState({ editCategoryModal: !this.state.editCategoryModal })}><i className="fas fa-times"></i></span>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="row">
                            <div className="form-check ml-3">
                                <input className="form-check-input p-3" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                <label className="form-check-label" for="exampleRadios1">
                                    Income
                                        </label>
                            </div>
                            <div className="form-check ml-5">
                                <input className="form-check-input p-3" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label" for="exampleRadios2">
                                    Expence
                                </label>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div onClick={() => this.setState({ selectIcon: !this.state.selectIcon })} className="col-md-4 col-sm-12" style={{ cursor: "pointer" }}>
                                <img src={filepic} alt="filepic" width="50px" height="50px" />
                                <i class="fas fa-arrow-circle-down"></i>
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <p>Category Name</p>
                                <input className="w-100 form-control" style={{ color: "rgba(0,0,0,.54)" }} placeholder="Category Name?" />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px",width:"225px"}} className="p-2 m-2">
                                <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Wallet</small>
                                <div className="d-flex" onClick={() => this.setState({ walletModal: !this.state.walletModal })} style={{ cursor: "pointer" }}>
                                    <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                    <p>wallet</p>
                                    <i className="ml-auto fas fa-arrow-right"></i>
                                </div>
                            </div>
                            <div onClick={() => this.setState({ parentCategoryModal: !this.state.parentCategoryModal })} style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", cursor: "pointer",width:"225px" }} className="p-2 m-2 ">
                                <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Category</small>
                                <div className="d-flex">
                                    <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                    <p>All Category</p>
                                    <i className="ml-auto fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-50 ml-auto mt-3">
                            <button className="mr-5 btn btn-outline-danger" onClick={() => this.setState({ addCategoryModal: !this.state.addCategoryModal })}>Cancle</button>
                            <button className="btn btn-outline-success">Save</button>
                        </div>
                    </Modal.Body>
                </Modal>
                {/*!edit category modal */}
                {/*add category modal */}
                <Modal show={this.state.addCategoryModal}>
                    <Modal.Header>
                        <Modal.Title>Add Category</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={() => this.setState({ addCategoryModal: !this.state.addCategoryModal })}><i className="fas fa-times"></i></span>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="form-check ml-3">
                                <input className="form-check-input p-3" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                <label className="form-check-label" for="exampleRadios1">
                                    Income
                                        </label>
                            </div>
                            <div className="form-check ml-5">
                                <input className="form-check-input p-3" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label" for="exampleRadios2">
                                    Expence
                                </label>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div onClick={() => this.setState({ selectIcon: !this.state.selectIcon })} className="col-md-4 col-sm-12" style={{ cursor: "pointer" }}>
                                <img src={filepic} alt="filepic" width="50px" height="50px" />
                                <i class="fas fa-arrow-circle-down"></i>
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <p>Category Name</p>
                                <input className="w-100 form-control" style={{ color: "rgba(0,0,0,.54)" }} placeholder="Category Name?" />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px",width:"225px"}} className="p-2 m-2">
                                <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Wallet</small>
                                <div className="d-flex" onClick={() => this.setState({ walletModal: !this.state.walletModal })} style={{ cursor: "pointer" }}>
                                    <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                    <p>wallet</p>
                                    <i className="ml-auto fas fa-arrow-right"></i>
                                </div>
                            </div>
                            <div onClick={() => this.setState({ parentCategoryModal: !this.state.parentCategoryModal })} style={{ border: "1px solid rgba(0,0,0,0.2)", borderRadius: "10px", cursor: "pointer",width:"225px" }} className="p-2 m-2 ">
                                <small className="d-block mb-1" style={{ color: "rgba(0,0,0,0.54)" }}>Category</small>
                                <div className="d-flex">
                                    <img src={globalpic} alt="globalpic" width="25px" height="25px" className="mr-2" />
                                    <p>All Category</p>
                                    <i className="ml-auto fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-50 ml-auto mt-3">
                            <button className="mr-5 btn btn-outline-danger" onClick={() => this.setState({ addCategoryModal: !this.state.addCategoryModal })}>Cancle</button>
                            <button className="btn btn-outline-success">Save</button>
                        </div>
                    </Modal.Body>
                </Modal>
                {/*!add category modal */}
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
                {/* wallet section modal */}
                <Modal show={this.state.walletModal}>
                    <Modal.Header>
                        <Modal.Title>Select Wallet</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={() => this.setState({ walletModal: !this.state.walletModal })}><i className="fas fa-times"></i></span>
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
                {/* !wallet section modal */}
                {/* parent category modal */}
                <Modal show={this.state.parentCategoryModal}>
                    <Modal.Header>
                        <Modal.Title>Select Category</Modal.Title>
                        <span style={{ cursor: "pointer" }} onClick={() => this.setState({ parentCategoryModal: !this.state.parentCategoryModal })}><i className="fas fa-times"></i></span>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="d-flex justify-content-center" style={{ color: "rgba(0,0,0,0.54)", cursor: "pointer" }} >
                            <p style={{ color: "#2db84c", borderBottom: "2px solid #2db84c", }} className="mx-4">Select Parent Category</p>
                        </div>
                        <hr />
                        <div className="w-75 mx-auto p-2 mb-3" style={{ borderRadius: "30px", backgroundColor: "rgba(0,0,0,0.1)" }}>
                            <i className="fas fa-search" style={{ color: "rgba(0,0,0,0.54)" }}></i>
                            <input style={{ border: "1px solid transparent", outline: "none", backgroundColor: "rgba(0,0,0,0.01)" }} type="text" placeholder="search" />
                        </div>
                        <hr />
                        {
                            this.state.categories.map((category, index) => {
                                return (
                                    <div key={index} className="d-flex align-items-center my-2" onClick={() => this.mergeSelectCategory(category.id)} style={{ cursor: "pointer" }}>
                                        <img src={category.img} alt={category.img} width="50px" height="50px" />
                                        <p className="ml-4">{category.name}</p>
                                    </div>
                                )
                            })
                        }

                    </Modal.Body>
                </Modal>
                {/* !parent category modal */}
            </>
        )
    }
}

export default index
