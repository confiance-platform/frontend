import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Ribbon = () => {
    return (
        <div>
            <Container fluid >
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Ribbon</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
									<span>
									  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
									</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Ribbon</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Basic Ribbons</h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xl={2} lg={3} md={4} className="mb-3">
                                        <div className="ribbon-box h-150 bg-primary-500">
                                            <div className="ribbon ribbon-left ribbon-primary">
                                                Ribbon
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xl={2} lg={3} md={4} className="mb-3">
                                        <div className="ribbon-box h-150 bg-light-500">
                                            <div className="cross-shadow-ribbon cross-left ribbon-light">Cross</div>
                                        </div>
                                    </Col>

                                    <Col xl={2} lg={3} md={4} className="mb-3">
                                        <div className="ribbon-box h-150 bg-success-500">
                                            <div className="ribbon-shape shape-left ribbon-success">shape</div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} className="mb-3">
                                        <div className="ribbon-box h-150 bg-danger-500">
                                            <div className="arrow-ribbon arrow-left ribbon-danger">Arrow</div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} className="mb-3">
                                        <div className="ribbon-box h-150 bg-info-500">
                                            <div className="ribbon-side side-left ribbon-info">
                                                Side
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xl={2} lg={3} md={4} className="mb-3">
                                        <div className="ribbon-box h-150 bg-light-500">
                                            <div className="ribbon-top top-left ribbon-light">
                                                <i className="fa-solid  fa-gift fa-fw"></i>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xl={2} lg={3} md={4} className="mb-3 mb-md-0">
                                        <div className="ribbon-box h-150 bg-dark-500">
                                            <div className="circle-ribbon circle-left ribbon-dark">
                                                50%
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xl={2} lg={3} md={4} className="mb-3 mb-md-0">
                                        <div className="ribbon-file h-150 bg-info-500">
                                            <div className="ribbon file-left ribbon-info">25%</div>
                                        </div>
                                    </Col>

                                    <Col xl={2} lg={3} md={4} className="mb-3 mb-md-0">
                                        <div className="ribbon-box h-150 bg-primary-500">
                                            <div className="box-ribbon box-left">
                                                <div className="ribbonbox ribbon-primary">Box</div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Ribbons With Position</h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-primary-300 mb-3">
                                            <div className="ribbon ribbon-right ribbon-primary">
                                                Ribbon
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-secondary-500 mb-3">
                                            <div className="ribbon ribbon-left-bottom ribbon-secondary">
                                                Ribbon
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-success-500 mb-3">
                                            <div className="ribbon ribbon-right-bottom ribbon-success">
                                                Ribbon
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-danger-500 mb-3">
                                            <div className="ribbon-shape shape-right ribbon-danger">shape</div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-info-500 mb-3">
                                            <div className="ribbon-shape shape-left-bottom ribbon-info">shape</div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-light-500 mb-3">
                                            <div className="ribbon-shape shape-right-bottom ribbon-light">shape</div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-dark-500 mb-3">
                                            <div className="arrow-ribbon arrow-right ribbon-dark">Arrow</div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-info-500 mb-3">
                                            <div className="arrow-ribbon arrow-left-bottom ribbon-info">Arrow</div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-primary-500 mb-3">
                                            <div className="arrow-ribbon arrow-right-bottom ribbon-primary">Arrow</div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-secondary-500 mb-3">
                                            <div className="ribbon-top top-right ribbon-secondary">
                                                <i className="fa-solid  fa-gift fa-fw"></i>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-success-500 mb-3">
                                            <div className="ribbon-top top-left-bottom ribbon-success">
                                                <i className="fa-solid  fa-gift fa-fw"></i>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-danger-500 mb-3">
                                            <div className="ribbon-top top-right-bottom ribbon-danger">
                                                <i className="fa-solid  fa-gift fa-fw"></i>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-info-500 mb-3">
                                            <div className="circle-ribbon circle-right ribbon-info">
                                                50%
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-light-500 mb-3">
                                            <div className="circle-ribbon circle-left-bottom ribbon-light">
                                                50%
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-dark-500 mb-3">
                                            <div className="circle-ribbon circle-right-bottom ribbon-dark">
                                                50%
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box ribbon-file h-150 bg-info-500 mb-3">
                                            <div className="ribbon file-right ribbon-info">25%</div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box ribbon-file h-150 bg-primary-500 mb-3">
                                            <div className="ribbon file-left-bottom ribbon-primary">25%</div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box ribbon-file h-150 bg-secondary-500 mb-3">
                                            <div className="ribbon  file-right-bottom ribbon-secondary">25%</div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-success-500 mb-3">
                                            <div className="box-ribbon box-right">
                                                <div className="ribbonbox ribbon-success">Box</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-danger-500 mb-3">
                                            <div className="box-ribbon box-left-bottom">
                                                <div className="ribbonbox ribbon-danger">Box</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-info-500 mb-3">
                                            <div className="box-ribbon box-right-bottom">
                                                <div className="ribbonbox ribbon-info">Box</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-light-500 mb-3">
                                            <div className="ribbon-side side-right ribbon-light">
                                                Side
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box h-150 bg-dark-500 mb-3">
                                            <div className="ribbon-side side-left-bottom ribbon-dark">
                                                Side
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box  h-150 bg-info-500 mb-3">
                                            <div className="ribbon-side side-right-bottom ribbon-info">
                                                Side
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box mb-4 h-150 bg-primary-500 ">
                                            <div className="cross-shadow-ribbon cross-right ribbon-primary">Cross</div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box mb-4 h-150 bg-secondary-500">
                                            <div
                                                className="cross-shadow-ribbon cross-left-bottom ribbon-secondary">Cross
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={3} md={4}>
                                        <div className="ribbon-box mb-4 h-150 bg-success-500">
                                            <div
                                                className="cross-shadow-ribbon cross-right-bottom ribbon-success">Cross
                                            </div>
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

export default Ribbon;