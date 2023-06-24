import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategoryGetProduct, getProductsBySlug } from "../../../store/actions/index";
import Card from "../../../components/UI/Card/index";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ClipSpinner, CircleSpinner, DotSpinner,RingSpinner } from '../../../components/UI/Spinner/index'
import "./style.css";
import { generatePublicUrl } from "../../../urlConfig";
import { connect } from 'react-redux'
/**
 * @author
 * @function ClothingAndAccessories
 **/

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getProductsBySlug: (slug) => dispatch(getProductsBySlug(slug)),
    changeCategoryGetProduct: (flag) => dispatch(changeCategoryGetProduct(flag))

  }
}

class ClothingAndAccessories extends Component {
  // const product = useSelector((state) => state.productReducers);
  // const dispatch = useDispatch();


  componentDidMount() {
    const { match } = this.props;
    const slug = match.params.slug;
    this.props.getProductsBySlug(slug);
    this.props.changeCategoryGetProduct(false)

    // console.log('CHOTHING PAGE PROPS', product);
  }

  // if (product.loading) {
  //   return (
  //     <>
  //       {/* <ClipSpinner /> */}
  //       {/* <CircleSpinner /> */}
  //       <DotSpinner />

  //     </>
  //   )
  // }
  // if (product.categoryChanged) {
  //   const { match } = props;
  //   const slug = match.params.slug;
  //   dispatch(getProductsBySlug(slug));
  //   console.log('CHOTHING PAGE PROPS', product);

  // }
  render() {
    if (this.props.productReducers.loading) {
      return (
          <>
              {/* <ClipSpinner /> */}
              {/* <CircleSpinner /> */}
              <DotSpinner />

          </>
      )
  }
    if (this.props.productReducers.categoryChanged) {
      const { match } = this.props
      const slug = match.params.slug
      this.props.getProductsBySlug(slug)
      console.log('PRODUCT STORE PROPS', this.props.productReducers);
      this.props.changeCategoryGetProduct(false)
    }
    return (
      <div style={{ padding: "10px" }}>
        <Card
          style={{
            boxSizing: "border-box",
            padding: "10px",
            display: "flex",
          }}
        >
          {this.props.productReducers.products.map((product, index) => (
            <div className="caContainer" key={index}>
              <Link
                className="caImgContainer"
                to={`/${product.slug}/${product._id}/p`}
              >
                <img src={generatePublicUrl(product.productPictures[0].img)} />
              </Link>
              <div>
                <div className="caProductName">{product.name}</div>
                <div className="caProductPrice">
                  <BiRupee />
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    );
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ClothingAndAccessories);
