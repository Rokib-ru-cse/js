import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { generatePublicUrl } from '../../utils';

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export class index extends Component {
    render() {
        const yourImage = this.props.photoReducer.photo.filter((pic) => pic.user == this.props.authReducer.user._id);
        return (
            <>
                <div className="container">
                    <h1 className="text-center my-4">Your Profile</h1>
                    <div>
                        <h1>name : {this.props.authReducer.user.username}</h1>
                        <h3>email : {this.props.authReducer.user.email}</h3>
                    </div>
                    <h1 className="text-center">Your Images</h1>

                    <div className="d-flex flex-wrap justify-content-center my-4">
                        {yourImage.length>0? yourImage.map((photo, index) => {
                            return (
                                <Card style={{ width: '18rem' }} key={index} className="mx-2 my-5">
                                    <Card.Img style={{ height: "200px" }} fluid="true" variant="top" src={generatePublicUrl(photo.photo)} />
                                    <Card.Body>
                                        <Card.Title>{photo.name}</Card.Title>
                                        <Link to={`/photodetails/${photo._id}/p`} className="btn btn-outline-primary">info</Link>
                                    </Card.Body>
                                </Card >
                            )
                        }): <p>You don't upload any image.....</p> }
                    </div>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps)(index)
