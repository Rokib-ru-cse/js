import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { generatePublicUrl } from '../../utils/index'
import { Link } from 'react-router-dom'
import Loading from '../UI/Loading'
const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export class index extends Component {
    state = {
        photo: null
    }
    changePhoto = (id) => {
        const selectedPhoto = this.props.photoReducer.photo.filter((pic) => pic.category == id)
        this.setState({ photo: selectedPhoto })
    }
    renderCategory = () => {
        return (
            <>
                <button onClick={() => this.setState({ photo: this.props.photoReducer.photo })} className="btn btn-outline-info mr-1">All</button>
                {this.props.categoryReducer.category.map((cat, i) => {
                    return (
                        <button key={i} onClick={() => this.changePhoto(cat._id)} className="btn btn-outline-info mx-1">{cat.name}</button>
                    )
                })}
            </>
        )
    }

    renderImages = () => {
        return (
            <>
                {!this.state.photo ? this.props.photoReducer.photo.map((photo, index) => {
                    return (
                        <Card style={{ width: '18rem' }} key={index} className="mx-2 my-5">
                            <Card.Img style={{ height: "200px" }} fluid="true" variant="top" src={generatePublicUrl(photo.photo)} />
                            <Card.Body>
                                <Card.Title>{photo.name}</Card.Title>
                                <Link to={`/photodetails/${photo._id}/p`} className="btn btn-outline-primary">info</Link>
                            </Card.Body>
                        </Card >
                    )
                }) : this.state.photo.map((photo, i) => {
                    return (
                        <Card style={{ width: '18rem' }} key={i} className="mx-2 my-5">
                            <Card.Img style={{ height: "200px" }} fluid="true" variant="top" src={generatePublicUrl(photo.photo)} />
                            <Card.Body>
                                <Card.Title>{photo.name}</Card.Title>
                                <Link to={`/photodetails/${photo._id}/p`} className="btn btn-outline-primary">info</Link>
                            </Card.Body>
                        </Card >
                    )
                })
                }
            </>
        )
    }

    render() {
        if(this.props.photoReducer.loading){
            return(
                <Loading/>
            )
        }
        return (
            <>
                <div className="container my-5">
                    {this.renderCategory()}

                    <div className="d-flex flex-wrap justify-content-center">
                        {this.renderImages()}
                    </div>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps)(index)
