import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import { getProductDetailsById } from '../../store/actions'
import {Link} from 'react-router-dom'
import {
  IoIosArrowForward,
  IoIosStar,
  IoMdCart
} from 'react-icons/io';
import { BiRupee } from 'react-icons/bi';
import { AiFillThunderbolt } from 'react-icons/ai';
import { MaterialButton } from '../../components/MaterialUI';
import './style.css';
import { generatePublicUrl } from '../../urlConfig';
import {addToCart} from "../../store/actions"

import './style.css'

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetailsById: (productId) => dispatch(getProductDetailsById(productId)),
    addToCart: (product) => dispatch(addToCart(product)),
  }
}
const mapStateToProps = (state) => {
  return {
    ...state
  }
}
export class index extends Component {
  componentDidMount() {
    const productId = this.props.match.params.productId
    this.props.getProductDetailsById(productId)
  }
  addToCartBtn = ()=>{
    const {_id,name,price} = this.props.productReducers.productDetails
    const img = this.props.productReducers.productDetails.productPictures[0].img    
    this.props.addToCart({_id,name,price,img})
    this.props.history.push('/cart')
  }
  render() {
    if (Object.keys(this.props.productReducers.productDetails).length === 0) {
      return null
    }
    return (
      <Layout>
        {/* <div>{product.productDetails.name}</div> */}
        <div className="productDescriptionContainer">
          <div className="flexRow">
            <div className="verticalImageStack">
              {
                this.props.productReducers.productDetails.productPictures.map((thumb, index) =>
                  <div className="thumbnail" key={index}>
                    <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
                  </div>
                )
              }
              {/* <div className="thumbnail active">
                      {
                        product.productDetails.productPictures.map((thumb, index) => 
                        <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />)
                      }
                    </div> */}
            </div>
            <div className="productDescContainer">
              <div className="productDescImgContainer">
                <img src={generatePublicUrl(this.props.productReducers.productDetails.productPictures[0].img)} alt={`${this.props.productReducers.productDetails.productPictures[0].img}`} />
              </div>

              {/* action buttons */}
              <div className="flexRow">
                <MaterialButton
                  title="ADD TO CART"
                  bgColor="#ff9f00"
                  textColor="#ffffff"
                  style={{
                    marginRight: '5px'
                  }}
                  icon={<IoMdCart />}
                  onClick ={this.addToCartBtn}
                />
                <MaterialButton
                  title="BUY NOW"
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    marginLeft: '5px'
                  }}
                  icon={<AiFillThunderbolt />}
                />
              </div>
            </div>
          </div>
          <div>

            {/* home > category > subCategory > productName */}
            <div className="breed">
              <ul>
                <li><Link to="#">Home</Link><IoIosArrowForward /></li>
                <li><Link to="#">Mobiles</Link><IoIosArrowForward /></li>
                <li><Link to="#">Samsung</Link><IoIosArrowForward /></li>
                <li><Link to="#">{this.props.productReducers.productDetails.name}</Link></li>
              </ul>
            </div>
            {/* product description */}
            <div className="productDetails">
              <p className="productTitle">{this.props.productReducers.productDetails.name}</p>
              <div>
                <span className="ratingCount">4.3 <IoIosStar /></span>
                <span className="ratingNumbersReviews">72,234 Ratings & 8,140 Reviews</span>
              </div>
              <div className="extraOffer">Extra <BiRupee />4500 off </div>
              <div className="flexRow priceContainer">
                <span className="price"><BiRupee />{this.props.productReducers.productDetails.price}</span>
                <span className="discount" style={{ margin: '0 10px' }}>22% off</span>
                {/* <span>i</span> */}
              </div>
              <div>
                <p style={{
                  color: '#212121',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>Available Offers</p>
                <p style={{ display: 'flex' }}>
                  <span style={{
                    width: '100px',
                    fontSize: '12px',
                    color: '#878787',
                    fontWeight: '600',
                    marginRight: '20px'
                  }}>Description</span>
                  <span style={{
                    fontSize: '12px',
                    color: '#212121',
                  }}>{this.props.productReducers.productDetails.description}</span>
                </p>
              </div>
            </div>


          </div>
        </div>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
