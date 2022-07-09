/**
 * @author Sahan Dinuka
 * @CreatedBy IntelliJ IDEA
 * @created 30/05/2022 - 8:47 AM
 */
import React, {Component} from 'react'
import IndexNavbar from "../components/Navbars/IndexNavbar";
import '../assets/scss/common-style.scss'
import {Button, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row} from "reactstrap";
import Footer from "../components/Footers/Footer";

class Contact extends Component {
    render() {
        return <>
            <div className={'nav-color'}>
                <IndexNavbar/>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae cum et harum nam nobis pariatur
            possimus quis.
            Cupiditate nam, recusandae? Aspernatur aut corporis dignissimos libero natus neque nostrum vitae.
            <div style={{height: '500', width: '100%'}}>
                <iframe src="https://www.google.com/maps/d/embed?mid=1Iky-AQ9xwFne9jO9HW4RaWAWJYM&hl=en&ehbc=2E312F"
                        width="100%" height="500"></iframe>
            </div>

            <div className={'form-contact'}>
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="8">
                            <h2 className="text-center">Keep in touch?</h2>
                            <Form className="contact-form">
                                <Row>
                                    <Col md="6">
                                        <label>Name</label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="nc-icon nc-single-02"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Name" type="text"/>
                                        </InputGroup>
                                    </Col>
                                    <Col md="6">
                                        <label>Email</label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="nc-icon nc-email-85"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Email" type="text"/>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <label>Message</label>
                                <Input
                                    placeholder="Tell us your thoughts and feelings..."
                                    type="textarea"
                                    rows="4"
                                />
                                <Row>
                                    <Col className="ml-auto mr-auto" md="4">
                                        <Button className="btn-fill" color="danger" size="lg">
                                            Send Message
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer/>
        </>
    }
}

export default Contact
