/**
 * @author Sahan Dinuka
 * @CreatedBy IntelliJ IDEA
 * @created 30/05/2022 - 10:43 AM
 */
import React, {Component} from 'react'
import IndexNavbar from "../components/Navbars/IndexNavbar";
import '../assets/scss/common-style.scss'
import Footer from "../components/Footers/Footer";
import {Button, Col, Container, Row} from "reactstrap";
import room1 from '../assets/img/room1.jpg'
import room2 from '../assets/img/room2.jpg'
import room3 from '../assets/img/room3.jpg'
import headerRoom from '../assets/img/header-room.jpg'

class Rooms extends Component {

    state = {
        rooms: [
            {
                img: room1,
                noOfBeds: 10,
                ratePerHour: 20
            },
            {
                img: room2,
                noOfBeds: 10,
                ratePerHour: 20
            },
            {
                img: room3,
                noOfBeds: 10,
                ratePerHour: 20
            },
            {
                img: room1,
                noOfBeds: 10,
                ratePerHour: 20
            },
            {
                img: room2,
                noOfBeds: 10,
                ratePerHour: 20
            },
            {
                img: room3,
                noOfBeds: 10,
                ratePerHour: 20
            },
            {
                img: room1,
                noOfBeds: 10,
                ratePerHour: 20
            },
            {
                img: room2,
                noOfBeds: 10,
                ratePerHour: 20
            },
            {
                img: room3,
                noOfBeds: 10,
                ratePerHour: 20
            },
            {
                img: room1,
                noOfBeds: 10,
                ratePerHour: 20
            },
            {
                img: room2,
                noOfBeds: 10,
                ratePerHour: 20
            },
            {
                img: room3,
                noOfBeds: 10,
                ratePerHour: 20
            }
        ]
    }

    render() {
        return <>
            <div className={'nav-color'}>
                <IndexNavbar/>
            </div>
            <div className={'header'}>
                <img className={'header-img'} src={headerRoom}/>
                <h3 className={'header-title'}>Rooms</h3>
                <p className={'header-sub-title'}>Select your desire room</p>
            </div>
            <div className={'rooms'}>
                <Container>
                    <Row>
                        {
                            this.state.rooms.map((item, i) => <Col md="4" key={i}>
                                <div className={'card-room'}>
                                    <img src={item.img}/>
                                    <Button onClick={() => {
                                        this.props.history.push('/reservation')
                                    }} className={'btn-success btn-rooms'}>Book Now</Button>
                                    <div className={'card-data'}>
                                        <i className="fa fa-bed"/>
                                        <span>No Of Beds</span>
                                        <span>-</span>
                                        <span>{item.noOfBeds}</span>
                                    </div>

                                    <div className={'card-data'}>
                                        <i className="fa fa-money"/>
                                        <span>Rate Per Hour</span>
                                        <span>-</span>
                                        <span>${item.ratePerHour}</span>
                                    </div>
                                </div>
                            </Col>)
                        }
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    }
}

export default Rooms
