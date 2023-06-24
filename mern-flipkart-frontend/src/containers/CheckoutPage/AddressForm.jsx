import React, { Component } from "react";
import { addAddress,getAddress, getCartItems } from "../../store/actions/index";
import { MaterialButton, MaterialInput } from "../../components/MaterialUI/index";
import { connect } from 'react-redux'

/**
 * @author
 * @function AddressForm
 **/
const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addAddress: (payload) => dispatch(addAddress(payload)),
    getAddress: () => dispatch(getAddress()),
    getCartItems: () => dispatch(getCartItems())
  }
}

class AddressForm extends Component {
  state={
    id:this.props.initialData ? this.props.initialData._id:"",
    address:this.props.initialData ? this.props.initialData.address:"",
    addressType:this.props.initialData ? this.props.initialData.addressType:"",
    alternatePhone:this.props.initialData ? this.props.initialData.alternatePhone:"",
    landmark:this.props.initialData ? this.props.initialData.landmark:"",
    state:this.props.initialData ? this.props.initialData.state:"",
    cityDistrictTown:this.props.initialData ? this.props.initialData.cityDistrictTown:"",
    locality:this.props.initialData ? this.props.initialData.locality:"",
    pinCode:this.props.initialData ? this.props.initialData.pinCode:"",
    mobileNumber:this.props.initialData ? this.props.initialData.mobileNumber:"",
    name:this.props.initialData ? this.props.initialData.name:"",
    submitFlag:false,
    user: this.props.userReducer,

  }

  // const { initialData } = props;
  // const [name, setName] = useState(initialData ? initialData.name : "");
  // const [mobileNumber, setMobileNumber] = useState(
  //   initialData ? initialData.mobileNumber : ""
  // );
  // const [pinCode, setPinCode] = useState(
  //   initialData ? initialData.pinCode : ""
  // );
  // const [locality, setLocality] = useState(
  //   initialData ? initialData.locality : ""
  // );
  // const [address, setAddress] = useState(
  //   initialData ? initialData.address : ""
  // );
  // const [cityDistrictTown, setCityDistrictTown] = useState(
  //   initialData ? initialData.cityDistrictTown : ""
  // );
  // const [state, setState] = useState(initialData ? initialData.state : "");
  // const [landmark, setLandmark] = useState(
  //   initialData ? initialData.landmark : ""
  // );
  // const [alternatePhone, setAlternatePhone] = useState(
  //   initialData ? initialData.alternatePhone : ""
  // );
  // const [addressType, setAddressType] = useState(
  //   initialData ? initialData.addressType : ""
  // );
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  // const [submitFlag, setSubmitFlag] = useState(false);
  // const [id, setId] = useState(initialData ? initialData._id : "");

 

   onAddressSubmit = (e) => {
    const payload = {
      address: {
        name:this.state.name,
        mobileNumber:this.state.mobileNumber,
        pinCode:this.state.pinCode,
        locality:this.state.locality,
        address:this.state.address,
        cityDistrictTown:this.state.cityDistrictTown,
        state:this.state.state,
        landmark:this.state.landmark,
        alternatePhone:this.state.alternatePhone,
        addressType:this.state.addressType,
      },
    };
    if (this.state.id) {
      payload.address._id = this.state.id;
    }
    this.props.addAddress(payload);
    this.props.getAddress()
    this.props.getCartItems()
    // this.setState({submitFlag:true})
    if (true) {
      let _address = {};
      if (this.state.id) {
        _address = {
          _id: this.state.id,
          name:this.state.name,
          mobileNumber:this.state.mobileNumber,
          pinCode:this.state.pinCode,
          locality:this.state.locality,
          address:this.state.address,
          cityDistrictTown:this.state.cityDistrictTown,
          state:this.state.state,
          landmark:this.state.landmark,
          alternatePhone:this.state.alternatePhone,
          addressType:this.state.addressType,
        };
      } else {
        _address = this.state.user.address.slice(this.state.user.address.length - 1)[0];
      }
      this.props.onSubmitForm(_address);
    }
  };



  renderAddressForm = () => {
    const inputContainer = {
      width: "100%",
      marginRight: 10,
    };
    return (
      <>
        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="Name"
              value={this.state.name}
              onChange={(e) => this.setState({name:e.target.value})}
            />
          </div>
          <div style={inputContainer}>
            <MaterialInput
              label="10-digit mobile number"
              value={this.state.mobileNumber}
              onChange={(e) => this.setState({mobileNumber:e.target.value})}
            />
          </div>
        </div>
        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="Pincode"
              value={this.state.pinCode}
              onChange={(e) => this.setState({pinCode:e.target.value})}
            />
          </div>
          <div style={inputContainer}>
            <MaterialInput
              label="Locality"
              value={this.state.locality}
              onChange={(e) => this.setState({locality:e.target.value})}
            />
          </div>
        </div>
        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="Address"
              value={this.state.address}
              onChange={(e) => this.setState({address:e.target.value})}
            />
          </div>
        </div>

        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="City/District/Town"
              value={this.state.cityDistrictTown}
              onChange={(e) => this.setState({cityDistrictTown:e.target.value})}
            />
          </div>
          <div style={inputContainer}>
            <MaterialInput
              label="State"
              value={this.state.state}
              onChange={(e) => this.setState({state:e.target.value})}
            />
          </div>
        </div>
        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="Landmark (Optional)"
              value={this.state.landmark}
              onChange={(e) => this.setState({landmark:e.target.value})}
            />
          </div>
          <div style={inputContainer}>
            <MaterialInput
              label="Alternate Phone (Optional)"
              value={this.state.alternatePhone}
              onChange={(e) => this.setState({alternatePhone:e.target.value})}
            />
          </div>
        </div>
        <div>
          <label>Address Type</label>
          <div className="flexRow">
            <div>
              <input
                type="radio"
                onClick={() => this.setState({addressType:"home"})}
                name="addressType"
                value="home"
              />
              <span>Home</span>
            </div>
            <div>
              <input
                type="radio"
                onClick={() => this.setState({addressType:"work"})}
                name="addressType"
                value="work"
              />
              <span>Work</span>
            </div>
          </div>
        </div>
        <div className="flexRow">
          <MaterialButton
            title="SAVE AND DELIVER HERE"
            onClick={this.onAddressSubmit}
            style={{
              width: "250px",
              margin: "20px 0",
            }}
          />
        </div>
      </>
    );
  };

  render(){
    if (this.props.withoutLayout) {
      return <div>{this.renderAddressForm()}</div>;
    }
    return (
      <div className="checkoutStep" style={{ background: "#f5faff" }}>
        <div className={`checkoutHeader`}>
          <div>
            <span className="stepNumber">+</span>
            <span className="stepTitle">{"ADD NEW ADDRESS"}</span>
          </div>
        </div>
        <div
          style={{
            padding: "0 60px",
            paddingBottom: "20px",
            boxSizing: "border-box",
          }}
        >
          {this.renderAddressForm()}
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm)