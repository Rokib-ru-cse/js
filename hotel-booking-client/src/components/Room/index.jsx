import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { generatePublicUrl } from '../../utils'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { bookRoom } from '../../redux/actions'
import Loading from '../UI/Loading'

function Index(props) {
    const [selectedCategory, setSelectedCategory] = useState()
    const [thisCategoryRoom, setCategoryRoom] = useState()
    const [rooms, setRooms] = useState([])
    const category = useSelector(state => state.categoryReducer.category)
    const allRoom = useSelector(state => state.roomReducer)
    const [modal, setmodal] = useState(false)
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const auth = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const [id, setId] = useState()
    useEffect(() => {
        const x = allRoom.room.filter((room) => room.category == selectedCategory)
        const y = allRoom.room.filter((room) => (room.category == selectedCategory)  && room.book == undefined)
        setRooms(x)
        setCategoryRoom(y.length)

    }, [selectedCategory, allRoom])


    const handleModal = (id) => {
        if(auth.authenticate){
            setmodal(true)
            setId(id)
        }
    }
    const handleRoomBook = () => {
        if (name == '' || phone == '') {
            alert('name and phone are required')
            return
        }
        let con = window.confirm("Do You Want To Book This Room !")
        if (con) {
            const data = {
                _id: id,
                book: {
                    user: auth.user._id,
                    name: name,
                    phone: phone
                }
            }
            dispatch(bookRoom(data))
            setmodal(false)
            setname('')
            setphone('')

        } else {
            return
        }
    }


    const renderCategory = () => {
        return (
            <>
                {
                    category.map((cat, index) => {
                        return (
                            <button key={index} onClick={() => setSelectedCategory(cat._id)} className="btn btn-outline-info mx-1">{cat.name}</button>
                        )
                    })
                }
            </>
        )
    }
    const renderCarousel = () => {
        return (
            <>
                {
                    allRoom.room.length > 0 ?
                        <Carousel>
                            {allRoom.room.map((room, index) => {
                                return (
                                    <div key={index}>
                                        <img src={generatePublicUrl(room.image)} />
                                        <p className="legend">{room.name}</p>
                                        {/* <p className="legend">{room.facilities.bed_type}</p> */}
                                    </div>
                                )
                            })}
                        </Carousel>

                        : <h1>No Room Found</h1>
                }
            </>
        )
    }
    const renderRoom = () => {
        return (
            <div>
                <h1 className="text-center text-success">{thisCategoryRoom == 0 ? 'All rooms are booked' : thisCategoryRoom == 1 ? 'One room is available' : `${thisCategoryRoom} rooms are left`}</h1>
                <div className="d-flex flex-wrap justify-content-center my-5">
                    {
                        rooms.map((room, index) => {
                            return (
                                <Card style={{ width: '18rem' }} key={index} className="mx-2 my-5">
                                    <Card.Img style={{ height: "200px" }} fluid="true" variant="top" src={generatePublicUrl(room.image)} />
                                    <Card.Body>
                                        {/* <Card.Title>{room.facilities.bed_type}</Card.Title> */}
                                        <Card.Title>{room.name}</Card.Title>
                                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                                            <Link to={`/roomdetails/${room._id}/r`} className="btn btn-outline-primary">info</Link>
                                            <h1>{!auth.authenticate ?<Link to='/login' className="btn btn-outline-success">Book Now</Link> : room.book ? <Button className="mx-2">Already Booked</Button> : <Button variant="outline-success" onClick={() => handleModal(room._id)} className="mx-2">Book Now</Button>} </h1>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container my-5">
                {renderCategory()}
                <div className="d-flex flex-wrap justify-content-center my-5">
                    {allRoom.loading ? <Loading/> : rooms.length > 0 ? renderRoom() : renderCarousel()}
                </div>
            </div>
            <Modal show={modal} onHide={() => setmodal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Book This Room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control className="my-2" value={name} onChange={(e) => setname(e.target.value)} size="sm" type="text" placeholder="enter name" />
                    <Form.Control className="my-2" value={phone} onChange={(e) => setphone(e.target.value)} size="sm" type="text" placeholder="enter phone number" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setmodal(false)}>
                        Close
                        </Button>
                    <Button onClick={handleRoomBook} variant="primary" >
                        Done
                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Index
