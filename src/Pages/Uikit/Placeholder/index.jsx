import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Placeholder = () => {
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Placeholder</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                                            <span>
                                                <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
                                            </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Placeholder</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="list-item">
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Card Placeholder</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="card-placeholder">
                                    <Row >
                                        <Col sm={6} xxl={3}>
                                            <Card className="equal-card">
                                                <div className="placeholder-glow">
                                                    <img src="/assets/images/placeholder/placeholder-3.jpg"
                                                         className="card-img-top placeholder" alt="..."/>
                                                </div>
                                                <CardBody>
                                                    <h5 className="card-title ">Card title</h5>
                                                    <p className="card-text card-responsive">Some quick example text
                                                        to build
                                                        on the
                                                        card title and make up content.
                                                    </p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm={6} xxl={3}>
                                            <Card className="equal-card">
                                                <img src="/assets/images/placeholder/placholder-1.jpg"
                                                     className="card-img-top" alt="..."/>
                                                <CardBody>
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text card-responsive">Some quick example text
                                                        to build
                                                        on the
                                                        card title the card's content.
                                                    </p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm={6} xxl={3}>
                                            <Card aria-hidden="true">
                                                <img src="/assets/images/placeholder/placholder-2.jpg"
                                                     className="card-img-top" alt="..."/>
                                                <CardBody>
                                                            <span className="card-title placeholder-glow">
                                                                <span className="placeholder col-6"></span>
                                                            </span>
                                                    <p className="card-text placeholder-glow">
                                                        <span className="placeholder col-7"></span>
                                                        <span className="placeholder col-4"></span>
                                                        <span className="placeholder col-4"></span>
                                                        <span className="placeholder col-6"></span>
                                                        <span className="placeholder col-8"></span>
                                                    </p>

                                                    <div className="d-flex gap-2">
                                                        <a className="btn btn-primary  placeholder col-6"
                                                           aria-disabled="true"></a>
                                                        <a className="btn btn-primary invisible placeholder col-6"
                                                           aria-disabled="true"></a>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm={6} xxl={3}>
                                            <Card aria-hidden="true">
                                                <img src="/assets/images/placeholder/placeholder-4.jpg"
                                                     className="card-img-top" alt="..."/>
                                                <CardBody>
                                                            <span className="card-title placeholder-glow">
                                                                <span className="placeholder col-6 bg-primary"></span>
                                                            </span>
                                                    <p className="card-text placeholder-glow">
                                                        <span className="placeholder col-6 bg-secondary"></span>
                                                        <span className="placeholder col-4 bg-secondary"></span>
                                                        <span className="placeholder col-2 bg-secondary"></span>
                                                        <span className="placeholder col-9 bg-secondary"></span>
                                                        <span className="placeholder col-7 bg-secondary"></span>
                                                    </p>
                                                    <div className="d-flex gap-2">
                                                        <a className="btn btn-secondary  placeholder col-6"
                                                           aria-disabled="true"></a>
                                                        <a className="btn btn-primary  placeholder col-6"
                                                           aria-disabled="true"></a>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>

                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <CardHeader>
                                <h5>Width</h5>
                            </CardHeader>

                            <CardBody>
                                <div className="card-placeholder">
                                    <div className="d-flex flex-column gap-3">
                                        <div className="placeholder col-6"></div>
                                        <div className="placeholder w-75"></div>
                                        <div className="placeholder" style={{width: "25%"}}></div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>Animation</h5>
                            </CardHeader>

                            <CardBody>
                                <div className="card-placeholder">
                                    <div className="d-flex flex-column gap-4">
                                        <p className="placeholder-glow">
                                            <span className="placeholder col-12"></span>
                                        </p>

                                        <p className="placeholder-wave">
                                            <span className="placeholder col-12"></span>
                                        </p>
                                    </div>

                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Color Variant</h5>
                            </CardHeader>

                            <CardBody>
                                <div className="card-placeholder">
                                    <div className="d-flex flex-column">
                                        <p className="placeholder-glow">
                                            <span className="placeholder col-12"></span>
                                        </p>

                                        <p className="placeholder-glow">
                                            <span className="placeholder col-12 bg-primary"></span>
                                        </p>
                                        <p className="placeholder-glow">
                                            <span className="placeholder col-12 bg-secondary"></span>
                                        </p>
                                        <p className="placeholder-glow">
                                            <span className="placeholder col-12 bg-success"></span>
                                        </p>
                                        <p className="placeholder-glow">
                                            <span className="placeholder col-12 bg-danger"></span>
                                        </p>
                                        <p className="placeholder-glow">
                                            <span className="placeholder col-12 bg-warning"></span>
                                        </p>
                                        <p className="placeholder-glow">
                                            <span className="placeholder col-12 bg-info"></span>
                                        </p>
                                        <p className="placeholder-glow">
                                            <span className="placeholder col-12 bg-light"></span>
                                        </p>
                                        <p className="placeholder-glow">
                                            <span className="placeholder col-12 bg-dark"></span>
                                        </p>
                                    </div>

                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Sizing</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="card-placeholder">
                                    <div className="d-flex flex-column gap-3">
                                        <span className="placeholder col-12 placeholder-lg"></span>
                                        <span className="placeholder col-12"></span>
                                        <span className="placeholder col-12 placeholder-sm"></span>
                                        <span className="placeholder col-12 placeholder-xs"></span>
                                    </div>

                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Placeholder;