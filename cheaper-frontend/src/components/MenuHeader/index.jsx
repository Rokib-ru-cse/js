import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeCategoryGetProduct, getProductsBySlug } from '../../store/actions/index'

const mapStateToProps = state => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getProductsBySlug :(slug)=>dispatch(getProductsBySlug(slug)),
        changeCategoryGetProduct:(flag)=>dispatch(changeCategoryGetProduct(flag))
    }
}

export class index extends Component {

    renderProducts = () => {
        this.props.changeCategoryGetProduct(true)
    }

    renderCategories = (allcategories) => {
        let categories = []
        for (let category of allcategories) {
            categories.push(
                <li key={category.name} onClick={this.renderProducts}>
                    {category.parentId ? <Link to={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name}</Link> :
                        <span>{category.name}</span>
                    }
                    {category.children.length > 0 ?
                        <ul>
                            {this.renderCategories(category.children)}
                        </ul>
                        : null}
                </li>
            )
        }
        return categories
    }

    render() {
        return (
            <div className="menuHeader">
                <ul>
                    {this.props.categoryReducers.categories.length > 0 ?
                        this.renderCategories(this.props.categoryReducers.categories) : null}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(index)
