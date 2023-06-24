import React, { Component } from "react";
import Card from "../../components/UI/Card";

/**
 * @author
 * @function PriceDetails
 **/

class index extends Component {
    render() {
        return (
            <Card headerleft={"Price Details"} style={{ maxWidth: "380px" }}>
                <div
                    style={{
                        padding: "20px",
                        boxSizing: "border-box",
                    }}
                >
                    <div className="flexRow sb" style={{ margin: "10px 0" }}>
                        <div>Price ({this.props.totalItem} items)</div>
                        <div>{this.props.totalPrice}</div>
                    </div>
                    <div className="flexRow sb" style={{ margin: "10px 0" }}>
                        <div>Delivery Charges</div>
                        <div>FREE</div>
                    </div>
                    <div className="flexRow sb" style={{ margin: "10px 0" }}>
                        <div>Total Amount</div>
                        <div>{this.props.totalPrice}</div>
                    </div>
                </div>
            </Card>
        );
    };
}
export default index;