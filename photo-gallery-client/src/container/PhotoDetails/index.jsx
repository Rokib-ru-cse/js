import React, { Component } from 'react'
import { connect } from 'react-redux'
import { generatePublicUrl } from '../../utils'
import { Button, Card, Form } from "react-bootstrap";
import { updatePhoto } from '../../redux/actions/index'
import { Link } from 'react-router-dom';
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updatePhoto: (data) => dispatch(updatePhoto(data))
    }
}
export class index extends Component {
    state = {
        review: ""
    }
    giveReview = () => {
        const data = {
            _id: this.props.match.params.id,
            review: {
                user: {
                    userId: this.props.authReducer.user._id,
                    review: this.state.review
                }
            }
        }
        this.props.updatePhoto(data)
    }
    render() {
        const photo = this.props.photoReducer.photo.find((photo) => photo._id == this.props.match.params.id)
        const uploader = this.props.authReducer.alluser && this.props.authReducer.alluser.find((user) => user._id == photo.user)
        let review = []
        this.props.authReducer.alluser && this.props.authReducer.alluser.forEach((user) => {
            photo.review.forEach((rev) => {
                if (rev.user.userId == user._id) {
                    review.push({ username: user.username, review: rev.user.review })
                }
            })
        })
        return (
            <div className="container my-5 d-flex flex-wrap justify-content-center">
                <Card style={{ width: '30rem' }} className="mr-4">
                    <Card.Img variant="top" src={photo && generatePublicUrl(photo.photo)} />
                    <Card.Body>
                        <Card.Title>{photo && photo.name}</Card.Title>
                        <hr />
                        <div className="my-4">
                            <h5>Give Review</h5>
                            <Form.Control className="my-3" value={this.state.review} name="review" onChange={(e) => this.setState({ review: e.target.value })} size="sm" type="text" placeholder="write review" />
                            {this.props.authReducer.authenticate ? <Button variant="outline-primary" onClick={this.giveReview}>
                                Done
                            </Button> : <Link className="btn btn-outline-primary" to="/login" >Done</Link>}

                        </div>
                    </Card.Body>
                </Card >
                <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>Uploader : {uploader ? uploader.username : null}</Card.Title>
                        <hr />
                        <h2 className="text-center">All Review</h2>
                        <hr />
                        {review.length > 0 ? review.map((singlerev, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <h4>name: {singlerev.username}</h4>
                                    {
                                        singlerev.review.length > 0 ? singlerev.review.map((rev, _index) => {
                                            return (
                                                <p key={_index}>&nbsp;&nbsp;&nbsp;&nbsp;{rev}</p>
                                            )
                                        }) : null
                                    }
                                    <hr/>
                                </React.Fragment>
                            )
                        })
                            : null
                        }
                    </Card.Body>
                </Card >
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(index)
