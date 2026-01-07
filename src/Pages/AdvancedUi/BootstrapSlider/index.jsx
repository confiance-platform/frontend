import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const BootstrapSlider = () => {
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Bootstrap Slider</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Bootstrap Slider</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

            <Row>
                <Col md={6} xl={4}>
                    <Card>
                        <CardHeader>
                            <h5 className="text-center mt-2">Simple Slider</h5>
                        </CardHeader>
                        <CardBody>
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../assets/images/bootstrapslider/01.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/images/bootstrapslider/07.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/images/bootstrapslider/08.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <CardHeader>
                            <h5 className="text-center mt-2">Indicator Slider</h5>
                        </CardHeader>
                        <CardBody>
                            <div id="carouselExampleIndicators" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0" className="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../assets/images/bootstrapslider/02.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/images/bootstrapslider/07.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/images/bootstrapslider/08.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <CardHeader>
                            <h5 className="text-center mt-2">Slider With Captions</h5>
                        </CardHeader>
                        <CardBody>
                            <div id="carouselExampleCaptions" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions"
                                            data-bs-slide-to="0" className="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../assets/images/bootstrapslider/03.jpg" className="w-100 d-block"
                                             alt="..."/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <p>Some representative placeholder content for the first slide.
                                                </p>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/images/bootstrapslider/07.jpg" className="w-100 d-block"
                                             alt="..."/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <p>Some representative placeholder content for the second slide.
                                                </p>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/images/bootstrapslider/08.jpg" className="w-100 d-block"
                                             alt="..."/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <p>Some representative placeholder content for the third slide.
                                                </p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <CardHeader>
                            <h5 className="text-center mt-2">Auto Slider</h5>
                        </CardHeader>
                        <CardBody>
                            <div id="carouselExampleSlidesOnly" className="carousel slide"
                                 data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../assets/images/bootstrapslider/04.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/images/bootstrapslider/07.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/images/bootstrapslider/08.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <CardHeader>
                            <h5 className="text-center mt-2">Auto Slider With Indicators</h5>
                        </CardHeader>
                        <CardBody>
                            <div id="carouselExampleInterval" className="carousel slide"
                                 data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions1"
                                            data-bs-slide-to="0" className="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions1"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions1"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="1000">
                                        <img src="../assets/images/bootstrapslider/05.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/images/bootstrapslider/07.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/images/bootstrapslider/08.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                </div>

                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <CardHeader>
                            <h5 className="text-center mt-2">Auto Slider With buttons</h5>
                        </CardHeader>
                        <CardBody>
                            <div className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <img src="../assets/images/bootstrapslider/06.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/images/bootstrapslider/07.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/images/bootstrapslider/08.jpg" className="w-100 d-block"
                                             alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default BootstrapSlider;