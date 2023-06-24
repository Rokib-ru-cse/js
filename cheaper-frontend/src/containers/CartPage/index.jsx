import React, { Component } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import CartItem from "./CartItem";
import { addToCart, getCartItems, removeCartItem } from "../../store/actions/index";
import PriceDetails from "../../components/PriceDetails/index";
import { connect } from 'react-redux'
import "./style.css";
import { MaterialButton } from "../../components/MaterialUI";


/*
Before Login
Add product to cart
save in localStorage
when try to checkout ask for credentials and 
if logged in then add products to users cart database from localStorage
*/
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (_id, qty) => dispatch(addToCart(_id, qty)),
        getCartItems: () => dispatch(getCartItems()),
        removeCartItem: (productId) => dispatch(removeCartItem(productId))
    }
}

class index extends Component {
    // const cart = useSelector((state) => state.cart);
    // const auth = useSelector((state) => state.auth);
    // // const cartItems = cart.cartItems;
    // const[cartItems, setCartItems] = useState(cart.cartItems);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     setCartItems(cart.cartItems);
    // }, [cart.cartItems]);

    // useEffect(() => {
    //     if (auth.authenticate) {
    //         dispatch(getCartItems());
    //     }
    // }, [auth.authenticate]);
    state = {
        cartItems: { ...this.props.cartReducer.cartItems }
    }
    onQuantityIncrement = (_id, qty) => {
        //console.log({_id, qty});
        const { name, price, img } = this.props.cartReducer.cartItems[_id];
        this.props.addToCart({ _id, name, price, img }, 1);
    };

    onQuantityDecrement = (_id, qty) => {
        const { name, price, img } = this.props.cartReducer.cartItems[_id];
        this.props.addToCart({ _id, name, price, img }, -1);
    };

    onRemoveCartItem = (_id) => {
        this.props.removeCartItem({ productId: _id });
    };

    componentDidMount() {
        console.log('cartpage index component did mount');
        this.props.getCartItems()
    }
    
    getTotalItem = (qty, key) => {
        return this.props.cartReducer.cartItems[key].qty + qty
    }
    getTotalPrice = (totalPrice, key) => {
        const { price, qty } = this.props.cartReducer.cartItems[key]
        return totalPrice + (price * qty)
    }
    render() {
        if(this.props.onlyCartItems) {
            return (
                <>
                    {Object.keys(this.state.cartItems).map((key, index) => (
                        <CartItem
                            key={index}
                            cartItem={this.state.cartItems[key]}
                            onQuantityInc={this.onQuantityIncrement}
                            onQuantityDec={this.onQuantityDecrement}
                        />
                    ))}
                </>
            );
        }
        return (
            <Layout>
                <div className="cartContainer" style={{ alignItems: "flex-start" }}>
                    <Card
                        headerleft={`My Cart`}
                        headerright={<div>Deliver to</div>}
                        style={{ width: "calc(100% - 400px)", overflow: "hidden" }}
                    >
                        {Object.keys(this.props.cartReducer.cartItems).map((key, index) =>
                            <CartItem
                                key={index}
                                cartItem={this.props.cartReducer.cartItems[key]}
                                onQuantityInc={this.onQuantityIncrement}
                                onQuantityDec={this.onQuantityDecrement}
                                onRemoveCartItem={this.onRemoveCartItem}
                            />
                        )}

                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                background: "#ffffff",
                                justifyContent: "flex-end",
                                boxShadow: "0 0 10px 10px #eee",
                                padding: "10px 0",
                                boxSizing: "border-box",
                            }}
                        >
                            <div style={{ width: "250px" }}>
                                <MaterialButton
                                    title="PLACE ORDER"
                                    onClick={() => this.props.history.push(`/checkout`)}
                                />
                            </div>
                        </div>
                    </Card>
                    <PriceDetails
                        totalItem={Object.keys(this.props.cartReducer.cartItems).reduce(this.getTotalItem, 0)}
                        totalPrice={Object.keys(this.props.cartReducer.cartItems).reduce(this.getTotalPrice, 0)}
                    />
                </div>
            </Layout>
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(index);