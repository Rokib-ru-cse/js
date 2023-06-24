import React, { Component } from "react";
import "./style.css";
import { connect } from 'react-redux'
import { generatePublicUrl } from '../../../urlConfig';
import {removeCartItem} from '../../../store/actions/index'
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onRemoveCartItem:(id)=>dispatch(removeCartItem(id))
    }
}
class index extends Component {
    state = {
        qty: 0,
        ...this.props

    }
    onQuantityIncrement = () => {
        this.setState({ qty: this.state.qty + 1 })
        this.state.onQuantityInc(this.state.cartItem._id, this.state.qty + 1);
    };

    onQuantityDecrement = () => {
        if (this.state.qty <= 1) return;
        this.setState({ qty: this.state.qty - 1 })
        this.state.onQuantityDec(this.state.cartItem._id, this.state.qty - 1);
    };
    removeCart = (id)=>{
        this.props.onRemoveCartItem(id)
    }
    componentDidMount() {
         const itemExist = this.state.cartReducer.cartItems[this.state.cartItem._id] 
        if (itemExist) {
            this.setState({ qty: itemExist.qty })
        }
    }
    render() {
        console.log('cartitems state', this.state);
        return (
            <div className="cartItemContainer">
                <div className="flexRow">
                    <div className="cartProImgContainer">
                        <img src={generatePublicUrl(this.state.cartItem.img)} alt={""} />
                    </div>
                    <div className="cartItemDetails">
                        <div>
                            <p>{this.state.cartItem.name}</p>
                            <p>Rs. {this.state.cartItem.price}</p>
                        </div>
                        <div>Delivery in 3 - 5 days</div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        margin: "5px 0",
                    }}
                >
                    {/* quantity control */}
                    <div className="quantityControl">
                        <button onClick={this.onQuantityDecrement}>-</button>
                        <input value={this.state.qty} readOnly />
                        <button onClick={this.onQuantityIncrement}>+</button>
                    </div>
                    <button className="cartActionBtn">save for later</button>
                    <button
                        className="cartActionBtn"
                        onClick={() => this.removeCart(this.state.cartItem._id)}
                    >
                        Remove
        </button>
                </div>
            </div>
        );
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(index);