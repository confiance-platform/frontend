import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Wrapper = () => {
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Wrapper</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                        <span>
                          <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
                        </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Wrapper</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="overlay-page">
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                <h5>Custom overlay</h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm={6} lg={4} xxl={3}>
                                        <div className="custome-wrapper">
                                            <img src="/assets/images/wrapper/custome-overlay.jpg" alt=""/>
                                            <div className="custome-wrapper-content">
                                                <h5>Custom Overlay</h5>
                                                <span>overlay design</span>
                                            </div>
                                            <ul className="icon">
                                                <li>
                                                    <a href="#" className="text-outline-light h-35 w-35 d-flex-center b-r-50">
                                                        <i className="ti ti-search"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="text-outline-light h-35 w-35 d-flex-center b-r-50">
                                                        <i className="ti ti-link"></i>
                                                    </a>
                                                </li>
                                            </ul>

                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4} xxl={3}>
                                        <div className="custome-wrapper-2">
                                            <img src="/assets/images/wrapper/custome-overlay-1.jpg" alt=""/>
                                            <div className="custome-wrapper-2-content">
                                                <h5>Custom Overlay</h5>
                                                <p>
                                                    CSS gradients allow us to display smooth transitions between two or
                                                    more colors.
                                                </p>
                                                <a href="#" role="button" className=" btn btn-sm btn-success b-r-5">
                                                    Check Now
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4} xxl={3}>
                                        <div className="custome-wrapper-3">
                                            <img src="/assets/images/wrapper/custome-overlay-2.jpg" alt=""/>
                                            <div className="custome-wrapper-content-3">
                                                <h5>Custom Overlay</h5>
                                                <span>Overlay Design</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4} xxl={3}>
                                        <div className="custome-wrapper-4">
                                            <img src="/assets/images/wrapper/custome-overlay-3.jpg" alt=""/>
                                            <div className="custome-wrapper-content-4">
                                                <h5>Custom Overlay</h5>
                                                <span>Overlay Design</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                <h5>Content overlay</h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm={6} lg={4} xxl={3}>
                                        <div className="content-overlay">
                                            <img src="/assets/images/wrapper/content-overlay.jpg" alt=""/>
                                            <div className="content-overlay-text">
                                                <h5>Left Overlay</h5>
                                                <p>
                                                    This overlay could be static, appearing on the page load, or
                                                    dynamic, appearing based on user
                                                    page..
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4} xxl={3}>
                                        <div className="content-overlay content-overlay-right">
                                            <img src="/assets/images/wrapper/content-overlay-2.jpg" alt=""/>
                                            <div className="content-overlay-text">
                                                <h5>Right Overlay</h5>
                                                <p> It seems like you're referring to a technique or feature
                                                    related to displaying application.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4} xxl={3}>
                                        <div className="content-overlay content-overlay-top">
                                            <img src="/assets/images/wrapper/content-overlay-3.jpg" alt=""/>
                                            <div className="content-overlay-text">
                                                <h5>Top Overlay</h5>
                                                <p>To create an overlay that appears over the main content when
                                                    you hover HTML, CSS, for more complex behaviors.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4} xxl={3}>
                                        <div className="content-overlay content-overlay-bottom">
                                            <img src="/assets/images/wrapper/content-overlay-4.jpg" alt=""/>
                                            <div className="content-overlay-text">
                                                <h5>Bottom Overlay</h5>
                                                <p>
                                                    Bottom overlay related content typically refers to
                                                    additional the main content of a webpage
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                <h5>Basic overlay</h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm={6} lg={4} xxl={3}>
                                        <div className="wraper">
                                            <img src="/assets/images/wrapper/overlay-1.jpg" alt=""/>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4} xxl={3}>
                                        <div className="wraper wrapper-bottom">
                                            <img src="/assets/images/wrapper/overlay-2.jpg" alt=""/>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4} xxl={3}>
                                        <div className="wraper wrapper-top">
                                            <img src="/assets/images/wrapper/overlay-3.jpg" alt=""/>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={4} xxl={3}>
                                        <div className="wraper wrapper-top">
                                            <img src="/assets/images/wrapper/overlay-4.jpg" alt=""/>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Wrapper;