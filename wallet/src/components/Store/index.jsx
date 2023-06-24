import React, { Component } from 'react'
import './index.css'


export class index extends Component {

    state = {
        selected : "premium"
    }
    
    handleChange = (item)=>{
        this.setState({
            selected : item
        })
    }

    returnLinkedWallet = () => {
        return (
            <>
                <div className="container">
                    <h4 className="text-center my-5">Connect with your bank account and manage all your money in one place.</h4>
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="text-center mx-2" style={{ width: "180px" }}>
                            <i className="fas fa-search fa-spin p-1 mb-4" style={{ backgroundColor: "green", borderRadius: "50%", color: "white", fontSize: "20px" }}></i>
                            <p>Track your bank account</p>
                            <small style={{ color: "rgba(0,0,0,0.54)" }}>Sync balance and transactions from bank acount to Money Lover. You only need to remember your cash purchases.</small>
                        </div>
                        <div className="text-center mx-2" style={{ width: "180px" }}>
                            <i className="fas fa-file-signature fa-spin p-1 mb-4" style={{ backgroundColor: "white", borderRadius: "50%", color: "yellow", fontSize: "20px" }}></i>
                            <p>Smart reports</p>
                            <small style={{ color: "rgba(0,0,0,0.54)" }}>Label your transactions with categories then show you an overview of your income, expense from bank accounts.</small>
                        </div>
                        <div className="text-center mx-2" style={{ width: "180px" }}>
                            <i className="fas fa-user-shield fa-spin p-1 mb-4" style={{ backgroundColor: "white", borderRadius: "50%", color: "green", fontSize: "20px" }}></i>
                            <p>Privacy protection</p>
                            <small style={{ color: "rgba(0,0,0,0.54)" }}>Encrypt your sensitive data with RSA1024 bit. Linked Wallet is developed with Read-Only mode.</small>
                        </div>
                    <h4 className="text-center my-5">Choose a subscription plan</h4>
                    <small className="my-5" style={{ color: "rgba(0,0,0,0.54)" }}>*Countries supported: Vietnam, Thailand, Indonesia, Malaysia, India & USA.</small>

                    </div>
                </div>
            </>
        )
    }

    returnPremium = () => {
        return (
            <>
                <div className="container">
                    <h4 className="text-center">Start managing personal finances more effectively and conveniently with Money Lover Premium</h4>
                    <div className="row mt-5" style={{ color: "rgba(0,0,0,0.54)" }}>
                        <div className="col-4"></div>
                        <div className="col-4">Money Lover Free</div>
                        <div className="col-4">Money Lover Premium</div>
                    </div>
                    <div className="row mt-5">
                        <p className="col-4">Number of cash wallets</p>
                        <p className="col-4" style={{ color: "rgba(0,0,0,0.54)" }}>1</p>
                        <p className="col-4" style={{ color: "rgba(0,0,0,0.54)" }}>Unlimited</p>
                    </div>
                    <div className="row my-4">
                        <p className="col-4">Number of budgets, savings, events, recurring and bills</p>
                        <p className="col-4" style={{ color: "rgba(0,0,0,0.54)" }}>1</p>
                        <p className="col-4" style={{ color: "rgba(0,0,0,0.54)" }}>Unlimited</p>
                    </div>
                    <div className="row my-4">
                        <p className="col-4">Sync</p>
                        <p className="col-4" style={{ color: "rgba(0,0,0,0.54)" }}>Up to 5 devices</p>
                        <p className="col-4" style={{ color: "rgba(0,0,0,0.54)" }}>Unlimited</p>
                    </div>
                    <div className="row my-4">
                        <p className="col-4">Access to web app</p>
                        <p className="col-4 text-success">_/</p>
                        <p className="col-4 text-success">_/</p>
                    </div>
                    <div className="row my-4">
                        <p className="col-4">Export CSV</p>
                        <p className="col-4" style={{ color: "rgba(0,0,0,0.54)" }}>X</p>
                        <p className="col-4 text-success">_/</p>
                    </div>
                    <div className="row my-4">
                        <p className="col-4">Attach picture to transaction</p>
                        <p className="col-4" style={{ color: "rgba(0,0,0,0.54)" }}>X</p>
                        <p className="col-4 text-success">_/</p>
                    </div>
                    <div className="row my-4">
                        <p className="col-4">No advertisement!</p>
                        <p className="col-4" style={{ color: "rgba(0,0,0,0.54)" }}>X</p>
                        <p className="col-4 text-success">_/</p>
                    </div>
                    <h4 className="text-center my-5">How Money Lover Premium improve your financial management</h4>
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="text-center mx-2" style={{ width: "250px" }}>
                            <i className="fas fa-infinity fa-spin p-1 mb-4" style={{ backgroundColor: "green", borderRadius: "50%", color: "white", fontSize: "20px" }}></i>
                            <p>Unlimited items</p>
                            <small style={{ color: "rgba(0,0,0,0.54)" }}>Many often you will find yourself in the need of more wallets: one for cash, one for family, and one for a fantastic adventure in future! Going Premium will give you the ability to create unlimited wallets, budgets, savings, recurring transactions and bills, as much as you need.</small>
                        </div>
                        <div className="text-center mx-2" style={{ width: "250px" }}>
                            <i className="fas fa-unlock-alt fa-spin p-1 mb-4" style={{ backgroundColor: "white", borderRadius: "50%", color: "yellow", fontSize: "20px" }}></i>
                            <p>Unlock all features</p>
                            <small style={{ color: "rgba(0,0,0,0.54)" }}>Money Lover Premium comes with a handful of tools for you to use, for example: access to Money Lover from your PC via web browser whenever you want, or export your data to CSV to easily import to your reports.</small>
                        </div>
                        <div className="text-center mx-2 my-5" style={{ width: "250px" }}>
                            <i className="fas fa-tablet-alt fa-spin p-1 mb-4" style={{ backgroundColor: "white", borderRadius: "50%", color: "yellow", fontSize: "20px" }}></i>
                            <p>Work on multiple devices</p>
                            <small style={{ color: "rgba(0,0,0,0.54)" }}>You may have many devices, and the ability to access your data from any device you use, any time you want, is just a finger tip away with Money Lover Premium.</small>
                        </div>
                        <div className="text-center mx-2 my-5" style={{ width: "250px" }}>
                            <i className="fas fa-ad fa-spin p-1 mb-4" style={{ backgroundColor: "green", borderRadius: "50%", color: "white", fontSize: "20px" }}></i>
                            <p>Remove ads</p>
                            <small style={{ color: "rgba(0,0,0,0.54)" }}>Ads is so annoying? Going Premium will totally remove ads from the app, and also by doing this you will give us a few more coffee to continue bringing more cool features to Money Lover.</small>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    render() {
        
        return (
            <>
                <div className="container first-container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12" >
                            <div className="row text-white" style={{position:"relative"}} >
                                <div onClick={()=>this.handleChange("premium")} className={this.state.selected == 'premium' ? 'col-12 bg-success py-3 squire' : 'col-12 bg-success py-3'} style={{ borderRadius: "20px 0 0 0",cursor:"pointer" }}>
                                    <h5>Premium</h5>
                                    <small>Get the most out of MoneyLover. Upgrade with easy!</small>
                                </div>
                                <div onClick={()=>this.handleChange("link")} className={this.state.selected == 'link' ? 'col-12 bg-warning py-3 squire' : 'col-12 bg-warning py-3'} style={{cursor:"pointer"}}>
                                    <h5>Linked Wallet Subcription</h5>
                                    <small>Connect with your bank account and manage all your money in one place.</small>
                                </div>
                                <div onClick={()=>this.handleChange("icon")} className={this.state.selected == 'icon' ? 'col-12 bg-info py-3 squire' : 'col-12 bg-info py-3'}  style={{ borderRadius: "0 0 0 20px",cursor:"pointer" }}>
                                    <h5>Icons</h5>
                                    <small>Get more icon for waller, category and events.</small>
                                </div>
                                <div className="col-12 mt-2 ml-2" style={{ color: "rgba(0,0,0,0.54)" }}>
                                    <small className="d-block">Privacy Policy</small>
                                    <small>Money Lover &copy; 2021</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 shadow p-3 mb-5 bg-white rounded mb-5">
                            {
                                this.state.selected === "premium" 
                                ? this.returnPremium() 
                                : this.state.selected === "link" 
                                ? this.returnLinkedWallet() 
                                : null
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default index
