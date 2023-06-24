import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bookRoom } from '../../redux/actions'
import { generatePublicUrl } from '../../utils'

function Index(props) {

    const [room, setroom] = useState()
    const [thisCategoryRoom, setCategoryRoom] = useState()
    const [category, setcategory] = useState()
    const [modal, setmodal] = useState(false)
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const allroom = useSelector(state => state.roomReducer)
    const allcategory = useSelector(state => state.categoryReducer.category)
    const auth = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        if (allroom.room.length > 0) {
            const clickedRoom = allroom.room.find((room) => room._id == props.match.params.id)
            setroom(clickedRoom)
            if (room) {
                const cate = allcategory.find((cat) => cat._id == room.category)
                setCategoryRoom((allroom.room.filter((rom)=>(rom.category == room.category) && rom.book == undefined)).length)
                setcategory(cate)
            }
        }
    }, [room, allcategory, allroom])
    const handleModal = (id) => {
        if(auth.authenticate){
            setmodal(true)
        }else{
            props.history.push('/login')
            // console.log(props);
        }
    }
    const handleRoomBook = ()=>{
        if(name=='' || phone=='' ){
            alert('name and phone are required')
            return
        }
        let con = window.confirm("Do You Want To Book This Room !")
        if(con){
            const data = {
                _id : props.match.params.id,
                book:{
                    user:auth.user._id,
                    name:name,
                    phone:phone
                }
            }
            dispatch(bookRoom(data))
            setmodal(false)
            setname('')
            setphone('')

        }else{
            return
        }
    }
    return (
        <>
            <div className="container my-5">
                {
                    room ? <>
                        <div className="d-flex flex-wrap justify-content-between">
                            <Card style={{ width: '18rem' }} className="mx-2 my-5">
                                <Card.Img style={{ height: "200px" }} fluid="true" variant="top" src={generatePublicUrl(room.image)} />
                                <Card.Body>
                                    <Card.Title>{room.name}</Card.Title>
                                    <Card.Text>Rent : {room.rent} /day</Card.Text>
                                    <Card.Text>Category : {category ? category.name : null} - ({thisCategoryRoom == 0 ? 'all room are booked' : thisCategoryRoom == 1 ? 'one room is available': `${thisCategoryRoom} rooms are left`})</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="mx-2 my-5 w-50">
                                <Card.Body>
                                    <Card.Title>Room Facilities : </Card.Title>
                                    <hr />
                                    {
                                        room.facilities ? Object.keys(room.facilities).map((key, index) => {
                                            return (
                                                <Card.Text key={index}>{key}&nbsp;&nbsp;:&nbsp;&nbsp;{room.facilities[key]}</Card.Text>
                                            )
                                        }) : null
                                    }
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <h1>Book now :{room.book ? <Button className="mx-2">Already Booked</Button> : <Button variant="outline-success" onClick={handleModal} className="mx-2">Book</Button>} </h1>
                        </div>
                    </> : null
                }

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
            </div>
        </>
    )
}

export default Index
