import React, { Component } from 'react'
import Layout from '../../../components/Layout/index'
import { changeCategoryGetProduct, getProductsBySlug } from '../../../store/actions/index'
import { connect } from 'react-redux'
import './style.css'
import { generatePublicUrl } from '../../../urlConfig'
import Loading from '../../../components/UI/Loading'
import { Link } from 'react-router-dom'
import Card from '../../../components/UI/Card/index'
import { ClipSpinner, CircleSpinner, DotSpinner,RingSpinner } from '../../../components/UI/Spinner/index'
import Rating from '../../../components/UI/Rating'
import Price from '../../../components/UI/Price'
import { MaterialButton } from '../../../components/MaterialUI'

const mapStateToProps = state => {
    return {
        ...state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getProductsBySlug: (slug) => dispatch(getProductsBySlug(slug)),
        changeCategoryGetProduct:(flag)=>dispatch(changeCategoryGetProduct(flag))

    }
}

export class index extends Component {

  

    componentDidMount() {
        const { match } = this.props
        const slug = match.params.slug
        this.props.getProductsBySlug(slug)
        console.log('PRODUCT STORE PROPS', this.props.productReducers);
        this.props.changeCategoryGetProduct(false)

    }
    render() {
        if (this.props.productReducers.categoryChanged) {
            const { match } = this.props
            const slug = match.params.slug
            this.props.getProductsBySlug(slug)
            console.log('PRODUCT STORE PROPS', this.props.productReducers);
            this.props.changeCategoryGetProduct(false)
        }
        if (this.props.productReducers.loading) {
            return (
                <>
                    {/* <ClipSpinner /> */}
                    {/* <CircleSpinner /> */}
                    {/* <DotSpinner /> */}
                    <RingSpinner/>

                </>
            )
        }
        return (
            <>
                {

                    this.props.productReducers.products.length > 0 ?
                        Object.keys(this.props.productReducers.productsByPrice).map((key, index) => {
                            console.log('keyyyyyyyyyyyyyyyy',key);
                            return (
                                <Card
                                    key={index}
                                    headerleft={`${this.props.match.params.slug} mobile under ${this.props.productReducers.priceRange[key]}`}
                                    headerright={
                                        <MaterialButton
                                            title={"VIEW ALL"}
                                            style={{
                                                width: "96px",
                                            }}
                                            bgColor="#2874f0"
                                            fontSize="12px"
                                        />
                                    }
                                    style={{
                                        width: "calc(100% - 40px)",
                                        margin: "20px",
                                    }}
                                >
                                    <div style={{ display: "flex" }}>
                                        {this.props.productReducers.productsByPrice[key].map((product, _index) => (
                                            <Link
                                                key={_index}
                                                to={`/${product.slug}/${product._id}/p`}
                                                style={{
                                                    display: "block",
                                                    textDecoration: "none",
                                                    color: "#000",
                                                }}
                                                className="productContainer"
                                            >
                                                <div className="productImgContainer">
                                                    <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                                                </div>
                                                <div className="productInfo">
                                                    <div style={{ margin: "10px 0" }}>{product.name}</div>
                                                    <div>
                                                        <Rating value="4.3" />
                                                                &nbsp;&nbsp;
                                                         <span
                                                            style={{
                                                                color: "#777",
                                                                fontWeight: "500",
                                                                fontSize: "12px",
                                                            }}
                                                        >
                                                            (3353)
                                                         </span>
                                                    </div>
                                                    <Price value={product.price} />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Card>
                            )
                        }) : null

                }
            </>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(index)
