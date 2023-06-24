import React, { Component } from "react";
import { login, addOrder, getAddress, getCartItems } from "../../store/actions/index";
import Layout from "../../components/Layout/index";
import {
  Anchor,
  MaterialButton,
  MaterialInput,
} from "../../components/MaterialUI/index";
import PriceDetails from "../../components/PriceDetails";
import Card from "../../components/UI/Card";
import CartPage from "../CartPage";
import AddressForm from "./AddressForm";
import { connect } from 'react-redux'

import "./style.css";


const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
    addOrder: (payload) => dispatch(addOrder(payload)),
    getAddress: () => dispatch(getAddress()),
    getCartItems: () => dispatch(getCartItems())
  }
}

const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div
        onClick={props.onClick}
        className={`checkoutHeader ${props.active && "active"}`}
      >
        <div>
          <span className="stepNumber">{props.stepNumber}</span>
          <span className="stepTitle">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
};

const Address = ({
  adr,
  selectAddress,
  enableAddressEditForm,
  confirmDeliveryAddress,
  onAddressSubmit,
}) => {
  return (
    <div className="flexRow addressContainer">
      <div>
        <input name="address" onClick={() => selectAddress(adr)} type="radio" />
      </div>
      <div className="flexRow sb addressinfo">
        {!adr.edit ? (
          <div style={{ width: "100%" }}>
            <div className="addressDetail">
              <div>
                <span className="addressName">{adr.name}</span>
                <span className="addressType">{adr.addressType}</span>
                <span className="addressMobileNumber">{adr.mobileNumber}</span>
              </div>
              {adr.selected && (
                <Anchor
                  name="EDIT"
                  onClick={() => enableAddressEditForm(adr)}
                  style={{
                    fontWeight: "500",
                    color: "#2874f0",
                  }}
                />
              )}
            </div>
            <div className="fullAddress">
              {adr.address} <br /> {`${adr.state} - ${adr.pinCode}`}
            </div>
            {adr.selected && (
              <MaterialButton
                title="DELIVERY HERE"
                onClick={() => confirmDeliveryAddress(adr)}
                style={{
                  width: "200px",
                  margin: "10px 0",
                }}
              />
            )}
          </div>
        ) : (
            <AddressForm
              withoutLayout={true}
              onSubmitForm={onAddressSubmit}
              initialData={adr}
              onCancel={() => { }}
            />
          )}
      </div>
    </div>
  );
};

class CheckoutPage extends Component {
  // const user = useSelector((state) => state.user);
  // const auth = useSelector((state) => state.auth);
  // const [newAddress, setNewAddress] = useState(false);
  // const [address, setAddress] = useState([]);
  // const [confirmAddress, setConfirmAddress] = useState(false);
  // const [selectedAddress, setSelectedAddress] = useState(null);
  // const [orderSummary, setOrderSummary] = useState(false);
  // const [orderConfirmation, setOrderConfirmation] = useState(false);
  // const [paymentOption, setPaymentOption] = useState(false);
  // const [confirmOrder, setConfirmOrder] = useState(false);
  // const cart = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  state = {
    address: this.props.userReducer.address,
    selectedAddress: null,
    confirmAddress: false,
    newAddress: false,
    orderSummary: false,
    orderConfirmation: false,
    confirmOrder: false,
    paymentOption: false,
    paymentOption: false,
    // cart: null,
    // auth: null,
    // user: null
    // cart: this.props.cartReducer.cartItems,
    // user: this.props.userReducer,
    email: "",
    password: ""
  }

  onAddressSubmit = (addr) => {
    this.props.getAddress()
    this.props.getCartItems()
    this.setState({
      selectedAddress: addr,
      confirmAddress: true,
      orderSummary: true
    })
  };

  selectAddress = (addr) => {
    const updatedAddress = this.state.address.map((adr) =>
      adr._id === addr._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    this.setState({
      address: updatedAddress
    })
  };

  confirmDeliveryAddress = (addr) => {
    this.setState({
      selectedAddress: addr,
      confirmAddress: true,
      orderSummary: true
    })
  };

  enableAddressEditForm = (addr) => {
    const updatedAddress = this.props.userReducer.address.map((adr) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    this.setState({
      address: updatedAddress
    })
  };

  userOrderConfirmation = () => {
    this.setState({
      orderConfirmation: true,
      orderSummary: false,
      paymentOption: true,
    })
  };

  onConfirmOrder = () => {
    const totalAmount = Object.keys(this.props.cartReducer.cartItems).reduce(
      (totalPrice, key) => {
        const { price, qty } = this.props.cartReducer.cartItems[key];
        return totalPrice + price * qty;
      },
      0
    );
    const items = Object.keys(this.props.cartReducer.cartItems).map((key) => ({
      productId: key,
      payablePrice: (this.props.cartReducer.cartItems[key].price * this.props.cartReducer.cartItems[key].qty),
      purchasedQty: this.props.cartReducer.cartItems[key].qty,
    }));
    const payload = {
      addressId: this.state.selectedAddress._id,
      totalAmount,
      items,
      paymentStatus: "pending",
      paymentType: "cod",
    };
    this.props.addOrder(payload)
    this.setState({
      confirmOrder: true
    })
    this.props.history.push('/account/orders')
  };


  componentDidMount() {
    if (this.props.authReducers.authenticate) {
      this.props.getCartItems()
    }
  }
  setAddress = () => {
    const address = this.props.userReducer.address.map((adr) => ({
      ...adr,
      selected: false,
      edit: false,
    }));
    this.setState({
      address: address,
    })
  }
  // useEffect(() => {
  //   this.props.authReducers.authenticate && dispatch(getAddress());
  //   this.props.authReducers.authenticate && dispatch(getCartItems());
  // }, [this.props.authReducers.authenticate]);

  // useEffect(() => {
  //   const address = user.address.map((adr) => ({
  //     ...adr,
  //     selected: false,
  //     edit: false,
  //   }));
  //   setAddress(address);
  //   //user.address.length === 0 && setNewAddress(true);
  // }, [user.address]);

  // useEffect(() => {
  //   if (confirmOrder && user.placedOrderId) {
  //     props.history.push(`/order_details/${user.placedOrderId}`);
  //   }
  // }, [user.placedOrderId]);
  loginUser = () => {
    this.props.login({ email: this.state.email, password: this.state.password })
    this.props.getAddress()
    this.props.getCartItems()
    this.setAddress()
  }

  render() {
    const getTotalItem = (qty, key) => {
      return this.props.cartReducer.cartItems[key].qty + qty
    }
    const getTotalPrice = (totalPrice, key) => {
      const { price, qty } = this.props.cartReducer.cartItems[key]
      return totalPrice + (price * qty)
    }

    return (
      <Layout>
        <div className="cartContainer" style={{ alignItems: "flex-start" }}>
          <div className="checkoutContainer">
            {/* check if user logged in or not */}
            <CheckoutStep
              stepNumber={"1"}
              title={"LOGIN"}
              active={!this.props.authReducers.authenticate}
              body={
                this.props.authReducers.authenticate ? (
                  <div className="loggedInId">
                    <span style={{ fontWeight: 500 }}>{this.props.authReducers.user.fullName}</span>
                    <span style={{ margin: "0 5px" }}>{this.props.authReducers.user.email}</span>
                  </div>
                ) : (
                    <div>
                      <MaterialInput
                        label="Email"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                      />
                      <br />
                      <MaterialInput
                        label="Password"
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                      />
                      <br />
                      <MaterialButton
                        title="Login"
                        onClick={this.loginUser}
                        style={{
                          width: "200px",
                          margin: "0 0 20px 20px",
                        }}
                      />
                    </div>
                  )
              }
            />
            <CheckoutStep
              stepNumber={"2"}
              title={"DELIVERY ADDRESS"}
              active={!this.state.confirmAddress && this.props.authReducers.authenticate}
              body={
                <>
                  {this.state.confirmAddress ? (
                    <div className="stepCompleted">{`${this.state.selectedAddress.name} ${this.state.selectedAddress.address} - ${this.state.selectedAddress.pinCode}`}</div>
                  ) : (
                      this.state.address.map((adr, index) => (
                        <Address
                          selectAddress={this.selectAddress}
                          enableAddressEditForm={this.enableAddressEditForm}
                          confirmDeliveryAddress={this.confirmDeliveryAddress}
                          onAddressSubmit={this.onAddressSubmit}
                          adr={adr}
                          key={index}
                        />
                      ))
                    )}
                </>
              }
            />

            {/* AddressForm */}
            {this.state.confirmAddress ? null : this.state.newAddress ? (
              <AddressForm onSubmitForm={this.onAddressSubmit} onCancel={() => { }} />
            ) : this.props.authReducers.authenticate ? (
              <CheckoutStep
                stepNumber={"+"}
                title={"ADD NEW ADDRESS"}
                active={false}
                onClick={() => this.setState({ newAddress: true })}
              />
            ) : null}

            <CheckoutStep
              stepNumber={"3"}
              title={"ORDER SUMMARY"}
              active={this.state.orderSummary}
              body={
                this.state.orderSummary ? (
                  <CartPage onlyCartItems={true} />
                ) : this.state.orderConfirmation ? (
                  <div className="stepCompleted">
                    {Object.keys(this.props.cartReducer.cartItems).length} items
                  </div>
                ) : null
              }
            />

            {this.state.orderSummary && (
              <Card
                style={{
                  margin: "10px 0",
                }}
              >
                <div
                  className="flexRow sb"
                  style={{
                    padding: "20px",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontSize: "12px" }}>
                    Order confirmation email will be sent to{" "}
                    <strong>{this.props.authReducers.user.email}</strong>
                  </p>
                  <MaterialButton
                    title="CONTINUE"
                    onClick={this.userOrderConfirmation}
                    style={{
                      width: "200px",
                    }}
                  />
                </div>
              </Card>
            )}

            <CheckoutStep
              stepNumber={"4"}
              title={"PAYMENT OPTIONS"}
              active={this.state.paymentOption}
              body={
                this.state.paymentOption && (
                  <div>
                    <div
                      className="flexRow"
                      style={{
                        alignItems: "center",
                        padding: "20px",
                      }}
                    >
                      <input type="radio" name="paymentOption" value="cod" />
                      <div>Cash on delivery</div>
                    </div>
                    <MaterialButton
                      title="CONFIRM ORDER"
                      onClick={this.onConfirmOrder}
                      style={{
                        width: "200px",
                        margin: "0 0 20px 20px",
                      }}
                    />
                  </div>
                )
              }
            />
          </div>

          {/* Price Component */}
          <PriceDetails
            totalItem={Object.keys(this.props.cartReducer.cartItems).reduce(getTotalItem, 0)}
            totalPrice={Object.keys(this.props.cartReducer.cartItems).reduce(getTotalPrice, 0)}
          />
        </div>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);