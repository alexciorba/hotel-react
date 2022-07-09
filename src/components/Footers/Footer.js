import React, {useState, useEffect} from "react";
import {Row, Container, Col} from "reactstrap";
import '../../assets/scss/common-style.scss'

function Footer() {

    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className={'footer-info'}>
                            <h4 className={'info-title'}>Hotel App</h4>
                            <p className={'info-address'}>Celeste Slater
                                <br/>
                                606-3727 Ullamcorper. Street
                                <br/>
                                Roseville NH 11523
                                <br/>
                                (786) 713-8616</p>
                        </div>
                    </Col>

                    <Col md={4}></Col>
                    <Col md={4}>
                        <div className={'footer-info'} align={'center'}>
                            <h4 className={'info-title-social'}>Social Links</h4>

                            <i className="fa fa-facebook"/>
                            <i className="fa fa-twitter"/>
                            <i className="fa fa-instagram"/>
                        </div>
                    </Col>
                </Row>
                <div className={'hr'}/>
                <Row>
                    <nav className="footer-nav">
                        <ul>
                            <li>
                                <a
                                    href="/rooms"
                                >
                                    Rooms
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/reservation"
                                >
                                    RESERVATION
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                >
                                    CONTACT
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="credits ml-auto">
            <span className="copyright dark-footer">
              © {new Date().getFullYear()}, All Rights Reserved.
            </span>
                    </div>
                </Row>
            </Container>
            {showTopBtn && <div onClick={() => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }} className={'scroll-to-top'}>
                <i className={'fa fa-arrow-circle-o-up'}/>
            </div>}
        </footer>
    );
}

export default Footer;
