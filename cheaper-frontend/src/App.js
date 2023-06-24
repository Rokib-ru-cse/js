import HomePage from "./containers/HomePage/index";
import "./App.css";
import { Component } from "react";
import { connect } from "react-redux";
import { getAllCategory, isUserLoggedIn, updateCart,getAddress } from "./store/actions";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductListPage from './containers/ProductListPage/index'
import ProductDetailsPage from './containers/ProductDetailsPage'
import CartPage from './containers/CartPage/index'
import CheckoutPage from './containers/CheckoutPage/index'
import OrderDetailsPage from './containers/OrderDetailsPage/index'

import './App.css'
import OrderPage from "./containers/OrderPage";
const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategory: () => dispatch(getAllCategory()),
    isUserLoggedIn: () => dispatch(isUserLoggedIn()),
    updateCart : ()=>dispatch(updateCart()),
    getAddress:()=>dispatch(getAddress())

  };
};


class App extends Component {
  componentDidMount() {
    this.props.getAllCategory();
    this.props.isUserLoggedIn();
    this.props.updateCart();
    this.props.getAddress()
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/account/orders"  component={OrderPage} />
            <Route exact path="/checkout"  component={CheckoutPage} />
            <Route exact path="/cart"  component={CartPage} />
            <Route exact path="/"  component={HomePage} />
            <Route path="/order_details/:orderId" component={OrderDetailsPage} />
            <Route path="/:productSlug/:productId/p" component={ProductDetailsPage} />
            <Route path="/:slug" component={ProductListPage} />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(App);
