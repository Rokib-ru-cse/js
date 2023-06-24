import React, { Component } from 'react'
import { changeCategoryGetProduct, getProductPage } from '../../../store/actions/index'
import { connect } from 'react-redux'
import getParams from '../../../utils/index'
import Loading from '../../../components/UI/Loading'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '../../../components/UI/Card/index'
import { ClipSpinner, CircleSpinner, DotSpinner,RingSpinner } from '../../../components/UI/Spinner/index'

import { Link } from 'react-router-dom'

const mapDispatchToProps = (dispatch) => {
    return {
        getProductPage: (payload) => dispatch(getProductPage(payload)),
        changeCategoryGetProduct:(flag)=>dispatch(changeCategoryGetProduct(flag))

    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export class index extends Component {

    componentDidMount() {
        const params = getParams(this.props.location.search)
        const payload = { params }
        this.props.getProductPage(payload)
        console.log('PRODUCT PAGE PROPS', this.props.productReducers);
        this.props.changeCategoryGetProduct(false)

    }


    render() {
        if (this.props.productReducers.categoryChanged) {
            const params = getParams(this.props.location.search)
            const payload = { params }
            this.props.getProductPage(payload)
            console.log('PRODUCT PAGE PROPS', this.props.productReducers);
            this.props.changeCategoryGetProduct(false)
        }
        if (this.props.productReducers.loading) {
            return (
                <>
                    {/* <ClipSpinner /> */}
                    <CircleSpinner />
                    {/* <DotSpinner /> */}

                </>
            )
        }

        return (
            <div style={{ margin: "0 10px" }}>
                <h1>{this.props.productReducers.page.title}</h1>
                <Carousel
                    renderThumbs={() => { }}
                >
                    {
                        this.props.productReducers.page.banners && this.props.productReducers.page.banners.map((banner, index) => {
                            return (
                                <Link
                                    key={index}
                                    className="d-block"
                                    to={banner.navigateTo}
                                >
                                    <img src={banner.image} alt='' width="100%" height="300px" />
                                </Link>
                            )
                        })
                    }
                </Carousel>
                <div className="d-flex justify-content-center flex-wrap" style={{ margin: "10px 0" }}>
                    {
                        this.props.productReducers.page.products && this.props.productReducers.page.products.map((product, index) => {
                            return (
                                <Card
                                    key={index}
                                    style={{ width: "400px", height: "200px", margin: "5px" }}
                                >
                                    <img src={product.image} alt='' width="100%" height="100%" />
                                </Card>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
