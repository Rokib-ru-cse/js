import React, { Component } from 'react'
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import flipkartLogo from '../../images/logo/flipkart.png';
import goldenStar from '../../images/logo/golden-star.png';
import { connect } from 'react-redux'
import { login, userLogOut,signup } from '../../store/actions'
import { Link } from 'react-router-dom'
import Cart from '../../components/UI/Cart'
import './style.css'
import {
    Modal,
    MaterialInput,
    MaterialButton,
    DropdownMenu
} from '../MaterialUI';



const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
        userLogOut: () => dispatch(userLogOut()),
        _signup:(user)=>{dispatch(signup(user))}
    }
}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export class index extends Component {
    state = {
        loginModal: false,
        signupModal: false,
        firstName: "",
        lastName: "",
        email: '',
        password: ''
    }
    userSignup = () => {
        const { firstName, lastName, email, password } = this.state
        const user = {
            firstName, lastName, email, password
        }
        if (firstName == "" || lastName == "" || email == "" || password == "") {
            return
        }
        this.props._signup(user)
    }
    renderLoggedInMenu = () => {
        return (
            <DropdownMenu
                menu={
                    <a className="fullName" style={{ color: "#fff" }}>
                        {this.props.authReducers.user.fullName ? this.props.authReducers.user.fullName : 'Unknown'}
                    </a>
                }
                menus={[
                    { label: 'My Profile', href: '', icon: null },
                    { label: 'SuperCoin Zone', href: '', icon: null },
                    { label: 'Flipkart Plus Zone', href: '', icon: null },
                    { label: 'Orders', href: '/account/orders', icon: null },
                    { label: 'Wishlist', href: '', icon: null },
                    { label: 'My Chats', href: '', icon: null },
                    { label: 'Coupons', href: '', icon: null },
                    { label: 'Rewards', href: '', icon: null },
                    { label: 'Notifications', href: '', icon: null },
                    { label: 'Gift Cards', href: '', icon: null },
                ]}
                firstMenu={
                    <div className="firstmenu">
                        <span>Want to logout?</span>
                        <span onClick={this.props.userLogOut} style={{ color: '#2874f0', cursor: "pointer" }}>Logout</span>
                    </div>
                }
            />
        )
    }
    renderNonLoggedInMenu = () => {
        return (
            <DropdownMenu
                menu={
                    <a
                        onClick={() => this.setState({
                            signupModal: false,
                            loginModal: true
                        })}
                        className="loginButton"
                    >
                        Login
                    </a>
                }
                menus={[
                    { label: 'My Profile', href: '', icon: null },
                    { label: 'Flipkart Plus Zone', href: '', icon: null },
                    { label: 'Orders', href: '', icon: null, onClick: () => { !this.props.authReducers.authenticate && this.setState({ loginModal: true }) } },
                    { label: 'Wishlist', href: '', icon: null },
                    { label: 'Rewards', href: '', icon: null },
                    { label: 'Gift Cards', href: '', icon: null },
                ]}
                firstMenu={
                    <div className="firstmenu">
                        <span>New Customer?</span>
                        <a
                            onClick={() => this.setState({
                                signupModal: true,
                                loginModal: false
                            })}
                            className="loginButton"
                        >
                            Sign Up
                    </a>
                    </div>
                }
            />
        )
    }
    userLogin = () => {
        if (this.state.signupModal) {
            this.userSignup()
        } else {
            this.props.login({ email: this.state.email, password: this.state.password })
        }
        this.setState({ loginModal: false, signupModal: false })
    }
    render() {

        return (
            <div className="header">
                <Modal
                    visible={this.state.loginModal || this.state.signupModal}
                    onClose={() => this.setState({ loginModal: false,signupModal:false })}
                >
                    <div className="authContainer">
                        <div className="row">
                            <div className="leftspace">
                                <h2>{this.state.signupModal ? "Register" : "Login"}</h2>
                                <p>Get access to your Orders, Wishlist and Recommendations</p>
                            </div>
                            <div className="rightspace">
                                <div className="loginInputContainer">
                                    {
                                        this.state.signupModal && (
                                            <MaterialInput
                                                type="text"
                                                label="Enter First Name"
                                                value={this.state.firstName}
                                                onChange={(e) => this.setState({ firstName: e.target.value })}
                                            />
                                        )
                                    }
                                    {
                                        this.state.signupModal && (
                                            <MaterialInput
                                                type="text"
                                                label="Enter Last Name"
                                                value={this.state.lastName}
                                                onChange={(e) => this.setState({ lastName: e.target.value })}
                                            />
                                        )
                                    }

                                    <MaterialInput
                                        type="text"
                                        label="Enter Email/Enter Mobile Number"
                                        value={this.state.email}
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                    />

                                    <MaterialInput
                                        type="password"
                                        label="Enter Password"
                                        value={this.state.password}
                                        onChange={(e) => this.setState({ password: e.target.value })}
                                    // rightElement={<Link to="#">Forgot?</Link>}
                                    />
                                    <MaterialButton
                                        title={this.state.signupModal ? "Register" : "Login"}
                                        bgColor="#fb641b"
                                        textColor="#ffffff"
                                        style={{ margin: "40px 0 20px 0" }}
                                        onClick={this.userLogin}
                                    />
                                    <div className="text-center">OR</div>
                                    <MaterialButton
                                        title="Request OTP"
                                        bgColor="#ffffff"
                                        textColor="#2874f0"
                                        style={{ margin: "20px 0" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
                <div className="subHeader">
                    {/* logo */}
                    <Link to='/'>
                        <div className="logo">
                            <a >
                                <img src={flipkartLogo} className="logoimage" alt="" />
                            </a>
                            <a style={{ marginTop: '-10px' }}>
                                <span className="exploreText">Explore</span>
                                <span className="plusText">Plus</span>
                                <img src={goldenStar} className="goldenStar" alt="" />
                            </a>
                        </div>
                    </Link>
                    {/* !logo */}
                    {/* search component */}
                    <div style={{
                        padding: '0 10px'
                    }}>
                        <div className="searchInputContainer">
                            <input
                                className="searchInput"
                                placeholder={'search for products, brands and more'}
                            />
                            <div className="searchIconContainer">
                                <IoIosSearch style={{
                                    color: '#2874f0'
                                }} />
                            </div>

                        </div>
                    </div>
                    {/* !search component */}
                    {/* right side menu         */}
                    <div className="rightMenu">
                        {
                            this.props.authReducers.authenticate
                                ? this.renderLoggedInMenu()
                                : this.renderNonLoggedInMenu()
                        }
                        <DropdownMenu
                            menu={
                                <a className="more" style={{ color: "#fff" }}>
                                    <span>More</span>
                                    <IoIosArrowDown />
                                </a>
                            }
                            menus={[
                                { label: 'Notification Preference', href: '', icon: null },
                                { label: 'Sell on flipkart', href: '', icon: null },
                                { label: '24x7 Customer Care', href: '', icon: null },
                                { label: 'Advertise', href: '', icon: null },
                                { label: 'Download App', href: '', icon: null }
                            ]}
                        />
                        <div >
                            <Link to='/cart' className="cart" style={{ color: "#fff" }}>
                                <Cart count={Object.keys(this.props.cartReducer.cartItems).length}/>
                                {/* <IoIosCart /> */}
                                <span style={{ margin: '0 10px' }}>Cart</span>
                            </Link>
                        </div>
                    </div>
                    {/* !right side menu         */}

                </div>
            </div>
        )

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(index)