import React, {useState} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footers/Footer.js";
import {
    Button,
    Col,
    Container,
    Form, Input,
    InputGroup,
    InputGroupAddon, InputGroupText,
    Row
} from "reactstrap";
import room1 from '../assets/img/room1.jpg'
import room2 from '../assets/img/room2.jpg'
import room3 from '../assets/img/room3.jpg'
import '../assets/scss/common-style.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import face1 from '../assets/img/face1.png'
import face2 from '../assets/img/face2.png'
import face3 from '../assets/img/face3.png'
import '../assets/scss/testimonials.scss'

function Index(props) {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("index");
        return function cleanup() {
            document.body.classList.remove("index");
        };
    });

    const [rooms, setRooms] = useState([
        {
            img: room1,
            noOfBeds: 10,
            ratePerHour: 20
        },
        {
            img: room2,
            noOfBeds: 7,
            ratePerHour: 5
        },
        {
            img: room3,
            noOfBeds: 2,
            ratePerHour: 4
        }
    ])

    return (
        <>
            <IndexNavbar/>
            <IndexHeader/>
            <div className="main">
                <div className="section text-center">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="title">What is Hotel App?</h2>
                                <h5 className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores culpa
                                    deleniti esse eum, magni molestiae mollitia natus nobis nostrum nulla qui quia,
                                    quis, reiciendis sapiente suscipit veritatis voluptas voluptate.
                                </h5>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                    </Container>
                </div>
                <div className="section section-dark text-center">
                    <Container>
                        <h2 className="title">Available Rooms</h2>
                        <Row>
                            {
                                rooms.map(item => <Col md="4">
                                    <div className={'card-room'}>
                                        <img src={item.img}/>
                                        <Button className={'btn-info btn-rooms'} onClick={() => {
                                            props.history.push('/rooms')
                                        }}>More Details</Button>
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
                <div className="section landing-section">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="12">
                                <h2 className={'testimonials-title'}>Testimonials</h2>
                                <Carousel
                                    showArrows={false}
                                    infiniteLoop={true}
                                    showThumbs={false}
                                    showStatus={false}
                                    autoPlay={true}
                                    interval={6100}
                                >
                                    <div>
                                        <img src={face1} width={100}/>
                                        <div className="myCarousel">
                                            <h3>Shirley Fultz</h3>
                                            <h4>Designer</h4>
                                            <p>
                                                It's freeing to be able to catch up on customized news and not be
                                                distracted by a social media element on the same site
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <img src={face2} width={100}/>
                                        <div className="myCarousel">
                                            <h3>Daniel Keystone</h3>
                                            <h4>Designer</h4>
                                            <p>
                                                The simple and intuitive design makes it easy for me use. I highly
                                                recommend Fetch to my peers.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <img src={face3} width={100}/>
                                        <div className="myCarousel">
                                            <h3>Theo Sorel</h3>
                                            <h4>Designer</h4>
                                            <p>
                                                I enjoy catching up with Fetch on my laptop, or on my phone when
                                                I'm on the go!
                                            </p>
                                        </div>
                                    </div>
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Index;
