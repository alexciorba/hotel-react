/**
 * @author Sahan Dinuka
 * @CreatedBy IntelliJ IDEA
 * @created 30/05/2022 - 11:07 AM
 */
import React, {Component} from 'react'
import Footer from "../components/Footers/Footer";
import IndexNavbar from "../components/Navbars/IndexNavbar";
import {Button, Col, Container, Input, Label, Row} from "reactstrap";
import '../assets/scss/common-style.scss'
import room1 from '../assets/img/room1.jpg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import headerRoom from "../assets/img/header-room1.jpg";

class Reservation extends Component {

    state = {
        checkInDate: new Date()
    }

    render() {
        return (<>
            <div className={'nav-color'}>
                <IndexNavbar/>
            </div>
            <div className={'header'}>
                <img className={'header-img'} src={headerRoom}/>
                <h3 className={'header-title'}>Reservation</h3>
                <p className={'header-sub-title'}>Select your desire room</p>
            </div>
            <div className={'reservation'}>
                <Container>
                    <Row>
                        <Col md={8}>
                            <h3>Reservation Details</h3>
                            <div className={'form'}>
                                <Row>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>First Name <span>*</span></Label>
                                            <Input/>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Last Name <span>*</span></Label>
                                            <Input/>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Address Line 1 <span>*</span></Label>
                                            <Input/>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Address Line 2</Label>
                                            <Input/>
                                        </div>
                                    </Col>

                                    <Col md={4}>
                                        <div className={'form-group'}>
                                            <Label>City <span>*</span></Label>
                                            <Input/>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className={'form-group'}>
                                            <Label>State <span>*</span></Label>
                                            <Input/>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className={'form-group'}>
                                            <Label>Zip Code <span>*</span></Label>
                                            <Input/>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Phone <span>*</span></Label>
                                            <Input/>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Email Address</Label>
                                            <Input/>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Check In <span>*</span></Label>
                                            <DatePicker className={'date-picker'} selected={this.state.checkInDate}
                                                        onChange={(date) => this.setState({checkInDate: date})}/>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={'form-group'}>
                                            <Label>Check Out <span>*</span></Label>
                                            <DatePicker className={'date-picker'} selected={this.state.checkInDate}
                                                        onChange={(date) => this.setState({checkInDate: date})}/>
                                        </div>
                                    </Col>

                                    <Col md={12}>
                                        <div align={'right'}>
                                            <Button className={'btn-warning btn-reservation'}>Submit</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col md={4}>
                            <h3>Selected Room</h3>
                            <div className={'card-room'}>
                                <img src={room1}/>
                                <div className={'card-data'}>
                                    <i className="fa fa-bed"/>
                                    <span>No Of Beds</span>
                                    <span>-</span>
                                    <span>2</span>
                                </div>

                                <div className={'card-data'}>
                                    <i className="fa fa-money"/>
                                    <span>Rate Per Hour</span>
                                    <span>-</span>
                                    <span>$100</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>);
    }
}

export default Reservation
