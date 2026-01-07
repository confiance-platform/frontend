import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Misc = () => {
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <h4 className="main-title">Misc</h4>
                    <ul className="app-line-breadcrumbs mb-3">
                        <li className="">
                            <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone ph-certificate"></i> Misc
                      </span>
                            </a>
                        </li>
                    </ul>
                </Row>
                <Row>
                    <Col lg={5}>
                        <Card>
                            <CardHeader>
                                <h5>Breadcrumbs</h5>
                            </CardHeader>
                            <CardBody className=" app-breadcrumb">
                                <div>
                                    <ol className="breadcrumb  bg-light-secondary p-2">
                                        <li className="breadcrumb-item"><a href="#"><i
                                            className="ti ti-home"></i>Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page"><i
                                            className="ti ti-books"></i>Library
                                        </li>
                                    </ol>
                                </div>

                                <div>
                                    <ol className="breadcrumb bg-light-secondary p-2">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </div>

                                <div>
                                    <ol className="breadcrumb flex-wrap bg-light-secondary p-2">
                                        <li className="breadcrumb-item"><a href="#"><i className="ti ti-home"></i> Home</a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#"><i
                                            className="ti ti-books"></i>Library</a></li>
                                        <li className="breadcrumb-item active" aria-current="page"><i
                                            className="ti ti-file-filled"></i>File
                                        </li>
                                    </ol>
                                </div>

                                <div className="bootstrap-breadcrumb divider">
                                    <ol className="breadcrumb bg-light-secondary p-2">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </div>

                                <div className="bootstrap-breadcrumb divider1">
                                    <ol className="breadcrumb bg-light-secondary p-2 mb-0">
                                        <li className="breadcrumb-item"><a href="#"><i className="ti ti-home"></i> Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page"><i
                                            className="ti ti-books"></i> Library
                                        </li>
                                    </ol>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={7}>
                        <Card className=" equal-card">
                            <CardHeader>
                                <h5>Custom Breadcrumbs</h5>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <ul className="line-breadcrumbs">
                                        <li><a href="#" className="active"> page1</a></li>
                                        <li className="active"><a href="#"> page2</a></li>
                                        <li><a href="#"> page3</a></li>
                                        <li><a href="#"> page4</a></li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <ul className="breadcrumbs">
                                        <li><a href="#" className="active"><i className="ti ti-home"></i> page1</a></li>
                                        <li className="active"><a href="#"><i className="ti ti-books"></i> page2</a>
                                        </li>
                                        <li><a href="#"><i className="ti ti-file-filled"></i> page3</a></li>
                                        <li><a href="#"><i className="ti ti-database-export"></i> page4</a></li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <ul className="circle-breadcrumbs breadcrumbs-primary">
                                        <li className="active"><a href="#"><i className="ti ti-home"></i></a></li>
                                        <li><a href="#"><i className="ti ti-books"></i></a></li>
                                        <li><a href="#"><i className="ti ti-file-filled"></i></a></li>
                                        <li><a href="#"><i className="ti ti-database-export"></i></a></li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <ul className="simple-breadcrumbs">
                                        <li className="active"><a href="#">Page 1</a></li>
                                        <li><a href="#">Page 2</a></li>
                                        <li><a href="#">Page 3</a></li>
                                        <li><a href="#">Page 4</a></li>
                                        <li><a href="#">Page 5</a></li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <ul className="simple-shape-breadcrumbs">
                                        <li className="active"><a href="#">Page 1</a></li>
                                        <li className="active"><a href="#">Page 2</a></li>
                                        <li><a href="#">Page 3</a></li>
                                        <li><a href="#">Page 4</a></li>
                                        <li><a href="#">Page 5</a></li>
                                    </ul>
                                </div>


                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className=" equal-card">
                            <CardHeader>
                                <h5>Custom Breadcrumb</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="mb-3">
                                    <ul className="shape-breadcrumbs">
                                        <li className="active"><a href="#">Page 1</a></li>
                                        <li className="active"><a href="#">Page 2</a></li>
                                        <li><a href="#">Page 3</a></li>
                                        <li><a href="#">Page 4</a></li>
                                        <li><a href="#">Page 5</a></li>
                                    </ul>
                                </div>
                                <div className="">
                                    <ul className="shape-breadcrumbs">
                                        <li className="active"><a href="#">Page 1</a></li>
                                        <li className="active"><a href="#"><i className="ti ti-clipboard-data"></i>Page
                                            2</a></li>
                                        <li className="active"><a href="#">Page 3</a></li>
                                        <li><a href="#">Page 4</a></li>
                                        <li><a href="#">Page 5</a></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6} >
                        <Card className=" equal-card">
                            <CardHeader>
                                <h5>Rounded Breadcrumb</h5>
                            </CardHeader>
                            <CardBody>

                                <div className="mb-3">
                                    <ul className="rounded-breadcrumbs">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Gallery</a></li>
                                        <li><a href="#">Library</a></li>
                                        <li><a href="#">Web</a></li>
                                        <li className="active">Data</li>
                                    </ul>
                                </div>

                                <div className="mb-3">
                                    <ul className="rounded-breadcrumbs">
                                        <li><a href="#"><i className="ti ti-home mg-e-4 f-s-18"></i>Home</a></li>
                                        <li><a href="#"><i className="ti ti-books mg-e-4 f-s-18"></i>Gallery</a></li>
                                        <li><a href="#"><i className="ti ti-file-filled mg-e-4 f-s-18"></i>Library</a>
                                        </li>
                                        <li><a href="#"><i className="ti ti-database-export mg-e-4 f-s-18"></i>Web</a>
                                        </li>
                                        <li className="active"><i className="ti ti-clipboard-data mg-e-4 f-s-18"></i>Data
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="rounded-breadcrumbs">
                                        <li><a href="#"><i className="ti ti-home mg-e-4 f-s-22"></i></a></li>
                                        <li><a href="#"><i className="ti ti-books mg-e-4 f-s-22"></i></a></li>
                                        <li><a href="#"><i className="ti ti-file-filled mg-e-4 f-s-22"></i></a></li>
                                        <li><a href="#"><i className="ti ti-database-export mg-e-4 f-s-22"></i></a></li>
                                        <li className="active"><i className="ti ti-clipboard-data mg-e-4 f-s-22"></i>
                                        </li>
                                    </ul>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <CardHeader>
                                <h5>Steps</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="form-wizard">

                                    <div className="form-wizard-header">
                                        <ul className="form-wizard-steps">
                                            <li className="active">
                                                <span className="wizard-steps">1</span>
                                            </li>
                                            <li>
                                                <span className="wizard-steps">2</span>
                                            </li>
                                            <li>
                                                <span className="wizard-steps">3</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="form-wizard">
                                    <div className="form-wizard-header">
                                        <ul className="form-wizard-steps">
                                            <li className="active">
                                                <span className="wizard-steps circle-steps"><i
                                                    className="ti ti-users"></i></span>
                                            </li>
                                            <li>
                                                    <span className="wizard-steps circle-steps"><i
                                                        className="ti ti-info-circle"></i></span>
                                            </li>
                                            <li>
                                                    <span className="wizard-steps circle-steps"><i
                                                        className="ti ti-table-export"></i></span>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                                <div className="mb-3">
                                    <ul className="shape-step">
                                        <li className="active"><a href="#"><i className="ti ti-circle-check-filled"></i>Cart</a>
                                        </li>
                                        <li className="active"><a href="#">Billing</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Payment</a></li>

                                    </ul>
                                </div>

                            </CardBody>
                        </Card>


                    </Col>
                    <Col lg={6}>
                        <Card className=" equal-card">
                            <CardHeader>
                                <h5>Pagination</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="app-pagination-link">
                                    <ul className="pagination app-pagination">
                                        <li className="page-item"><a className="page-link b-r-left"
                                                                     href="#">Previous</a></li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <ul className="pagination app-pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <ul className="pagination app-pagination">
                                        <li className="page-item disabled">
                                            <a className="page-link b-r-left">Previous</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <ul className="pagination pagination-sm justify-content-end app-pagination">
                                        <li className="page-item disabled">
                                            <a className="page-link b-r-left">Previous</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <div>
                                        <ul className="pagination pagination-lg justify-content-end app-pagination">
                                            <li className="page-item disabled">
                                                <a className="page-link b-r-left">«</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item active" aria-current="page">
                                                <a className="page-link" href="#">2</a>
                                            </li>
                                            <li className="page-item d-none d-sm-block"><a className="page-link"
                                                                                           href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link b-r-right" href="#">»</a>
                                            </li>
                                        </ul>
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

export default Misc;