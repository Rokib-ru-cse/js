import React, { Component } from 'react'
import Layout from '../../components/Layout/index'
import { connect } from 'react-redux'
import getParams from '../../utils/index'
import './index.css'

import ProductStore from './ProductStore'
import ProductPage from './ProductPage/index'
import ClothingAndAccessories from './ClothingAndAccessoris/index'
const mapStateToProps = state => {
    return {
        ...state
    }
}

export class index extends Component {
    renderProduct = () => {
        const params = getParams(this.props.location.search)
        let content = null
        switch (params.type) {
            case "store":
              content = <ProductStore {...this.props} />;
              break;
            case "page":
              content = <ProductPage {...this.props} />;
              break;
            default:
              content = <ClothingAndAccessories {...this.props} />;
          }
        return content
    }
    render() {
        return (
            <Layout>
                {this.renderProduct()}
            </Layout>

        )
    }
}
export default connect(mapStateToProps)(index)
