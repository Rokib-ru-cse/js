import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { generatePublicUrl } from '../../utils';
import { bookRoom } from '../../redux/actions'



const Index = () => {

    const auth = useSelector(state => state.authReducer.user)
    const allRoom = useSelector(state => state.roomReducer.room)
    const [booked, setbooked] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const filterBook = allRoom.filter((room) => {
            if (room.book) {
                return room.book.user == auth._id
            }
        })
        setbooked(filterBook)
    }, [allRoom,auth])


    const handleRoomBook = (id) => {
        let con = window.confirm("Do You Want To Cancel Booking For This Room !")
        if (con) {
            const data = {
                _id: id,
                book: {}
            }
            dispatch(bookRoom(data))
        } else {
            return
        }

    }



    const renderBookedRoom = () => {
        return (
            <>
                {
                    booked.length > 0 ? booked.map((book, index) => {
                        return (
                            <Card style={{ width: '18rem' }} key={index} className="mx-2 my-5">
                                <Card.Img style={{ height: "200px" }} fluid="true" variant="top" src={generatePublicUrl(book.image)} />
                                <Card.Body>
                                    <Card.Title>{book.name}</Card.Title>
                                    <Card.Text>Name : {book.book.name}</Card.Text>
                                    <Card.Text>Phone : {book.book.phone}</Card.Text>
                                    <div className="d-flex flex-wrap justify-content-between">
                                        <Link to={`/roomdetails/${book._id}/r`} className="btn btn-outline-primary">info</Link>
                                        <Button variant="outline-danger" onClick={() => handleRoomBook(book._id)}>Cancel Booking</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    }) : null
                }
            </>
        )
    }
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx', booked);
    return (
        <>
            <div className="container">
                <h1 className="text-center my-4">Your Profile</h1>
                <div>
                    <h1>name : {auth.username}</h1>
                    <h3>email : {auth.email}</h3>
                </div>
                <h1 className="text-center">Your Booked Room</h1>

                <div className="d-flex flex-wrap justify-content-center my-4">
                    {booked.length > 0 ? renderBookedRoom() : <h1>No Room Booked Yet</h1>}
                </div>
            </div>
        </>
    )

}

export default Index
