import React from 'react';
import {
    Col,
    Card,
    CardHeader,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Container, Row
} from "reactstrap";

const Modals = () => {
    return (
        <div>
            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Modals</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                              <span>
                                <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                              </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Modals</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Default Modal</h5>
                                <p className="mb-0 text-secondary">if you want to keep the default modal then you can
                                    keep it using <span className="text-danger">modal-dialog</span></p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-primary btn-md " data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                    Default Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Small Modal</h5>
                                <p className="mb-0 text-secondary">if you want to keep the default modal then you can
                                    keep it using <span className="text-danger">modal-dialog or app_modal_sm</span></p>
                            </CardHeader>
                            <div className="card-body modal-btn">
                                <Button color='primary' type="button" className="btn btn-primary btn-md" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                    small Modal
                                </Button>
                                <Button  type="button" className="btn btn-secondary btn-md" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalLarge">
                                    Large Modal
                                </Button>
                                <Button type="button" className="btn btn-success btn-md" data-bs-toggle="modal"
                                        data-bs-target="#bd-example-modal-xl">
                                    Extra Large Modal
                                </Button>
                            </div>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Center Modal</h5>
                                <p className="mb-0 text-secondary">if you want to keep the default modal then you can
                                    keep it using <span className="text-danger">modal-dialog-centered</span></p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-danger btn-md" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalToggle">
                                    Center Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Scrollable Modal</h5>
                                <p className="mb-0 text-secondary">if you want to keep the default modal then you can
                                    keep it using <span className="text-danger">modal-dialog-centered or modal-dialog-scrollable</span>
                                </p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-info btn-md" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalScrollable">
                                    Scrollable Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Full Screen Modal</h5>
                                <p className="mb-0 text-secondary">if you want to keep the default modal then you can
                                    keep it using <span className="text-danger">modal-fullscreen</span></p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-dark btn-md" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalFullscreen">
                                    Full Screen Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Full Screen Sm Down Modal</h5>
                                <p className="mb-0 text-secondary">if you want to keep the default modal then you can
                                    keep it using <span className="text-danger"> modal-fullscreen-sm-down</span></p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-secondary btn-md" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalFullscreenSm">
                                    Full Screen Sm Down Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Full-Screen Md Down Modal</h5>
                                <p className="mb-0 text-secondary">if you want to keep the default modal then you can
                                    keep it using <span className="text-danger">modal-fullscreen-md-down</span></p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-success btn-md" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalFullscreenSm">
                                    Full Screen Md Down Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Full Screen Lg Down Modal</h5>
                                <p className="mb-0 text-secondary">if you want to keep the default modal then you can
                                    keep it using <span className="text-danger">modal-fullscreen-lg-down</span></p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-danger btn-md" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalFullscreenLg">
                                    Full Screen Lg Down Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Full Screen Xl Down Modal</h5>
                                <p className="mb-0 text-secondary">if you want to keep the default modal then you can
                                    keep it using <span className="text-danger">modal-fullscreen-Xl-down</span></p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-info btn-md" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalFullscreenXl">
                                    Full Screen Xl Down Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Full Screen Xxl Down Modal</h5>
                                <p className="mb-0 text-secondary">if you want to keep the default modal then you can
                                    keep it using <span className="text-danger">modal-fullscreen-Xxl-down</span></p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-warning btn-md" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalFullscreenXxl">
                                    Full Screen Xxl Down Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h4 className="">Themes Modal</h4>
                                <p>You can use custom modals with themes colors.</p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button color='primary' className="btn m-1 btn-outline-primary" data-bs-toggle="modal"
                                        data-bs-target="#box_1">Primary
                                </Button>
                                <Button className="btn m-1 btn-outline-secondary" data-bs-toggle="modal"
                                        data-bs-target="#box_2">secondary
                                </Button>
                                <Button className="btn m-1 btn-outline-success" data-bs-toggle="modal"
                                        data-bs-target="#box_3">success
                                </Button>
                                <Button className="btn m-1 btn-outline-warning" data-bs-toggle="modal"
                                        data-bs-target="#box_4">warning
                                </Button>
                                <Button className="btn m-1 btn-outline-info" data-bs-toggle="modal"
                                        data-bs-target="#box_5">info
                                </Button>
                                <Button className="btn m-1 btn-outline-danger" data-bs-toggle="modal"
                                        data-bs-target="#box_6">danger
                                </Button>
                                <Button className="btn m-1 btn-outline-dark" data-bs-toggle="modal"
                                        data-bs-target="#box_7">dark
                                </Button>
                                 {/*box-1-start*/}
                                <div className="modal fade" id="box_1" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header bg-primary ">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel4">Primary Modal</h5>
                                                <Button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></Button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-primary">Quos modi tempora illo fuga blanditiis
                                                    voluptatum atque.</h5>
                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-primary fs-6">
                                                    Save changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 {/*box-1-end*/}
                                 {/*box-2-start*/}
                                <div className="modal fade" id="box_2" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header bg-secondary ">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel5">Secondary Modal</h5>
                                                <Button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></Button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-secondary">Quos modi tempora illo fuga
                                                    blanditiis voluptatum atque.
                                                </h5>

                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-secondary fs-6">Save
                                                    changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 {/*box-2-end*/}
                                 {/*box-3-start*/}
                                <div className="modal fade" id="box_3" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header bg-success ">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel13">Success Modal</h5>
                                                <Button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></Button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-success">Quos modi tempora illo fuga blanditiis
                                                    voluptatum atque.</h5>

                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-success fs-6">Save
                                                    changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*box-3-end*/}
                                {/* box-4-start*/}
                                <div className="modal fade" id="box_4" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header bg-warning ">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel12">Warning Modal</h5>
                                                <Button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></Button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-warning">Quos modi tempora illo fuga blanditiis
                                                    voluptatum atque.</h5>

                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-warning fs-6">Save
                                                    changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 {/*box-4-end*/}
                                 {/*   box-5-start*/}
                                <div className="modal fade" id="box_5" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header bg-info">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel7">Info Modal</h5>
                                                <Button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></Button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-info">Quos modi tempora illo fuga blanditiis
                                                    voluptatum atque.</h5>

                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-info fs-6">Save
                                                    changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 {/*box-5-end*/}
                                 {/*box-6-start*/}
                                <div className="modal fade" id="box_6" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header bg-danger ">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel9">Danger Modal</h5>
                                                <Button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></Button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-danger">Quos modi tempora illo fuga blanditiis
                                                    voluptatum atque.</h5>

                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-danger fs-6">Save
                                                    changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 {/*box-6-end*/}

                                {/*box-7-start*/}
                                <div className="modal fade" id="box_7" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header bg-secondary-900">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel11">Dark Modal</h5>
                                                <Button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></Button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-dark">Quos modi tempora illo fuga blanditiis
                                                    voluptatum atque.</h5>

                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-dark fs-6">Save
                                                    changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               {/*box-7-end*/}
                            </CardBody>
                        </Card>
                    </div>
                </Row>

                {/*default modal start */}
                <div className="modal fade" id="exampleModalDefault" tabIndex="-1"
                     aria-labelledby="exampleModalDefault" aria-hidden="true">
                    <div className="modal-dialog app_modal_md">
                        <div className="modal-content">
                            <div className="modal-header bg-primary-800">
                                <h1 className="modal-title fs-5 text-white" id="exampleModalDefault13">Default
                                    Modal</h1>
                                <Button type="button" className="fs-5 border-0  bg-none text-white "
                                        data-bs-dismiss="modal"
                                        aria-label="Close"><i className="fa-solid fa-xmark fs-3"></i></Button>
                            </div>
                            <div className="modal-body ">
                                <div className="row">
                                    <div className="col-lg-3 text-center align-self-center">
                                        <img src="../assets/images/modals/04.png" alt="" className="img-fluid b-r-10"/>
                                    </div>
                                    <div className="col-lg-9 ps-4">
                                        <h5>Wed designer</h5>
                                        <ul className="mt-2 mb-0 list-disc">
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button type="button" className="btn btn-light-secondary"
                                        data-bs-dismiss="modal">Close
                                </Button>
                                <Button type="button" className="btn btn-light-primary ">Save changes</Button>
                            </div>
                        </div>
                    </div>
                </div>


                {/*small modal start */}
                <div className="modal fade" id="exampleModal" tabIndex="-1"
                     aria-hidden="true">
                    <div className="modal-dialog app_modal_sm">
                        <div className="modal-content">
                            <div className="modal-header bg-primary-800">
                                <h1 className="modal-title fs-5 text-white" id="exampleModal2">Small Modal</h1>
                                <Button type="button" className="fs-5 border-0 bg-none  text-white"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"><i className="fa-solid fa-xmark fs-3"></i></Button>
                            </div>
                            <div className="modal-body text-center">
                                <div className="d-flex gap-2">
                                    <img src="../assets/images/modals/06.jpg" alt=""
                                         className="rounded-pill object-fit-cover h-90 w-90 b-r-10"/>
                                        <div className="text-start d-flex flex-column gap-2">
                                            <h5>Content marketing</h5>
                                            <p className="m-0">Lorem, ipsum dolor sit amet consectetur adipisicing
                                                elit.</p>
                                        </div>
                                </div>


                            </div>
                            <div className="modal-footer">
                                <Button type="button" className="btn btn-light-secondary"
                                        data-bs-dismiss="modal">Close
                                </Button>
                                <Button color='primary' type="button" className="btn btn-light-primary">Save changes</Button>
                            </div>
                        </div>
                    </div>
                </div>


             {/*large modal start */}
                <div className="modal fade" id="exampleModalLarge" tabIndex="-1"
                     aria-hidden="true">
                    <div className="modal-dialog app_modal_lg ">
                        <div className="modal-content">
                            <div className="modal-header bg-primary-800">
                                <h1 className="modal-title fs-5 text-white" id="exampleModalLarge2">Large Modal</h1>
                                <Button color='primary' type="button" className="fs-5 border-0 bg-none text-white"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"><i className="fa-solid fa-xmark fs-3"></i></Button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-4 text-center">
                                        <img src="../assets/images/modals/05.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="col-lg-8 align-self-center">
                                        <div className="error-content text-center">
                                            <h4 className=" mb-3">DO NOT ENTER</h4>
                                            <Button color='primary' type="button" className="btn btn-light-primary">Back to Dashboard
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button  type="button" className="btn btn-light-secondary"
                                        data-bs-dismiss="modal">Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>


                {/*extra large modal start */}
                <div className="modal fade" id="bd-example-modal-xl" tabIndex="-1"
                     aria-labelledby="bd-example-modal-xl" aria-hidden="true">
                    <div className="modal-dialog app_modal_xl">
                        <div className="modal-content">
                            <div className="modal-header bg-primary-800">
                                <h1 className="modal-title fs-5 text-white">Extra Large Modal</h1>
                                <Button type="button" className="fs-5 border-0 bg-none text-white"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"><i className="fa-solid fa-xmark fs-3"></i></Button>
                            </div>
                            <div className="modal-body">
                                <p>In a professional context it often happens that private or corporate clients corder a
                                    publication to be made and presented with the actual content still not being ready.
                                    Think of a news blog that's filled with content hourly on the day of going live.</p>
                            </div>

                            <div className="modal-footer">
                                <Button color='primary' type="button" className="btn btn-light-primary">Save changes</Button>
                                <Button type="button" className="btn btn-light-secondary"
                                        data-bs-dismiss="modal">Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>


                {/*center modal start */}
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Center Modal</h5>
                                <Button type="button" className="btn-close m-0 fs-5" data-bs-dismiss="modal"
                                        aria-label="Close"></Button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-3 text-center align-self-center">
                                        <img src="../assets/images/modals/04.png" alt="" className="img-fluid b-r-10"/>
                                    </div>
                                    <div className="col-lg-9 ps-4">
                                        <h5>Web designer</h5>
                                        <ul className="mt-3 mb-0 list-disc">
                                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button color='primary' type="button" className="btn btn-light-primary">Save changes</Button>
                                <Button type="button" className="btn btn-light-secondary"
                                        data-bs-dismiss="modal">Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>


                {/*scrollbar model start */}
                <div className="modal fade" id="exampleModalScrollable" data-bs-backdrop="static"
                     data-bs-keyboard="false" aria-hidden="true" tabIndex="-1">
                    <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel3">Scroll Modal</h5>
                                <Button type="button" className="btn-close m-0 fs-5" data-bs-dismiss="modal"
                                        aria-label="Close"></Button>
                            </div>
                            <div className="modal-body h-90">
                                <p><i className="ti ti-chevron-right text-secondary f-w-600"></i> However, reviewers
                                    tend to
                                    be distracted by comprehensible content, say, a random text copied from a newspaper
                                    or
                                    the internet. They are likely to focus on the text, disregarding the layout and its
                                    elements</p>


                                <p><i className="ti ti-chevron-right text-secondary f-w-600"></i> It was found by
                                    Richard McClintock, a philologist, director of publications at Hampden-Sydney
                                    College in Virginia; he searched for citings of consectetur in classical Latin
                                    literature, a term of remarkably low frequency in that literary corpus.</p>
                            </div>
                            <div className="modal-footer">
                                <Button color='primary' type="button" className="btn btn-light-primary">Save changes</Button>
                                <Button type="button" className="btn btn-light-secondary"
                                        data-bs-dismiss="modal">Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*full screen modal start */}
                <div className="modal fade" id="exampleModalFullscreen" tabIndex="-1"
                     aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title" id="exampleModalFullscreenLabel">Full screen modal</h6>
                                <Button type="button" className="btn-close m-0 fs-5" data-bs-dismiss="modal"
                                        aria-label="Close"></Button>
                            </div>
                            <div className="modal-body">
                                <p><i className="ti ti-chevrons-right text-secondary f-w-600"></i> I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was born and I
                                    will give you a complete account of the system, and expound the actual teachings of
                                    the great explorer of the truth, the master-builder of human happiness. </p>


                                <p><i className="ti ti-chevrons-right text-secondary f-w-600"></i> I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was born and I
                                    will give you a complete account of the system, and expound the actual teachings of
                                    the great explorer of the truth, the master-builder of human happiness. </p>


                                <p><i className="ti ti-chevrons-right text-secondary f-w-600"></i> I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was born and I
                                    will give you a complete account of the system, and expound the actual teachings of
                                    the great explorer of the truth, the master-builder of human happiness. </p>


                                <p><i className="ti ti-chevrons-right text-secondary f-w-600"></i> I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was born and I
                                    will give you a complete account of the system, and expound the actual teachings of
                                    the great explorer of the truth, the master-builder of human happiness. </p>


                                <p><i className="ti ti-chevrons-right text-secondary f-w-600"></i> I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was born and I
                                    will give you a complete account of the system, and expound the actual teachings of
                                    the great explorer of the truth, the master-builder of human happiness. </p>


                                <p><i className="ti ti-chevrons-right text-secondary f-w-600"></i> I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was born and I
                                    will give you a complete account of the system, and expound the actual teachings of
                                    the great explorer of the truth, the master-builder of human happiness. I must
                                    explain to you how all this mistaken idea of denouncing pleasure and praising pain
                                    was born and I will give you a complete account of the system, and expound the
                                    actual teachings of the great explorer of the truth, the master-builder of human
                                    happiness. </p>


                                <p><i className="ti ti-chevrons-right text-secondary f-w-600"></i> I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was born and I
                                    will give you a complete account of the system, and expound the actual teachings of
                                    the great explorer of the truth, the master-builder of human happiness. </p>


                                <p><i className="ti ti-chevrons-right text-secondary f-w-600"></i> I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was born and I
                                    will give you a complete account of the system, and expound the actual teachings of
                                    the great explorer of the truth, the master-builder of human happiness. I must
                                    explain to you how all this mistaken idea of denouncing pleasure and praising pain
                                    was born and I will give you a complete account of the system, and expound the
                                    actual teachings of the great explorer of the truth, the master-builder of human
                                    happiness. </p>


                                <p><i className="ti ti-chevrons-right text-secondary f-w-600"></i> I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was born and I
                                    will give you a complete account of the system, and expound the actual teachings of
                                    the great explorer of the truth, the master-builder of human happiness. </p>


                                <p><i className="ti ti-chevrons-right text-secondary f-w-600"></i> I must explain to you
                                    how all this mistaken idea of denouncing pleasure and praising pain was born and I
                                    will give you a complete account of the system, and expound the actual teachings of
                                    the great explorer of the truth, the master-builder of human happiness. </p>

                            </div>
                            <div className="modal-footer">
                                <Button type="button" className="btn btn-light-secondary"
                                        data-bs-dismiss="modal">Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>


               {/*Full-screen-sm-down modal start */}
                <div className="modal fade" id="exampleModalFullscreenSm" tabIndex="-1"
                     aria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen-sm-down">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title" id="exampleModalFullscreenSmLabel">Full screen below sm</h6>
                                <Button type="button" className="btn-close m-0 fs-5" data-bs-dismiss="modal"
                                        aria-label="Close"></Button>
                            </div>
                            <div className="modal-body">
                                <p><i className="ti ti-caret-right text-secondary f-w-600"></i> I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>

                                <p><i className="ti ti-caret-right text-secondary f-w-600"></i> I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                            </div>
                            <div className="modal-footer">
                                <Button type="button" className="btn btn-light-secondary btn-sm"
                                        data-bs-dismiss="modal">Close</Button>
                            </div>
                        </div>
                    </div>
                </div>
              {/*Full-screen-sm-down modal end  */}


                 {/*Full-screen-md-down modal start*/}
                <div className="modal fade" id="exampleModalFullscreenMd" tabIndex="-1"
                     aria-labelledby="exampleModalFullscreenMdLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen-md-down">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title" id="exampleModalFullscreenMdLabel">Full screen below md</h6>
                                <Button type="button" className="btn-close m-0 fs-5" data-bs-dismiss="modal"
                                        aria-label="Close"></Button>
                            </div>
                            <div className="modal-body">
                                <p><i className="ti ti-arrow-big-right text-secondary f-w-600"></i> I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                            </div>
                            <div className="modal-footer">
                                <Button type="button" className="btn btn-light-secondary btn-sm"
                                        data-bs-dismiss="modal">Close</Button>
                            </div>
                        </div>
                    </div>
                </div>
                 {/*Full-screen-md-down modal end */}

             {/*Full-screen-lg-down modal start  */}
                <div className="modal fade" id="exampleModalFullscreenLg" tabIndex="-1"
                     aria-labelledby="exampleModalFullscreenLgLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen-lg-down">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title" id="exampleModalFullscreenLgLabel">Full screen below lg</h6>
                                <Button type="button" className="btn-close m-0 fs-5" data-bs-dismiss="modal"
                                        aria-label="Close"></Button>
                            </div>
                            <div className="modal-body">
                                <p><i className="ti ti-arrow-right text-secondary f-w-600"></i>  I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>


                                <p><i className="ti ti-arrow-right text-secondary f-w-600"></i> I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>


                                <p><i className="ti ti-arrow-right text-secondary f-w-600"></i> I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>

                            </div>
                            <div className="modal-footer">
                                <Button type="button" className="btn btn-light-secondary btn-sm"
                                        data-bs-dismiss="modal">Close</Button>
                            </div>
                        </div>
                    </div>
                </div>
                 {/*Full-screen-lg-down modal end */}


               {/*Full-screen-xl-down modal start  */}
                <div className="modal fade" id="exampleModalFullscreenXl" tabIndex="-1"
                     aria-labelledby="exampleModalFullscreenXlLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen-xl-down">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title" id="exampleModalFullscreenXlLabel">Full screen below xl</h6>
                                <Button type="button" className="btn-close m-0 fs-5" data-bs-dismiss="modal"
                                        aria-label="Close"></Button>
                            </div>
                            <div className="modal-body">
                                <p><i className="ti ti-arrow-big-right text-secondary f-w-600"></i> I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                            </div>
                            <div className="modal-footer">
                                <Button type="button" className="btn btn-light-secondary btn-sm"
                                        data-bs-dismiss="modal">Close</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Full-screen-xl-down modal end */}


                 {/*Full-screen-xxl-down modal start */}
                <div className="modal fade" id="exampleModalFullscreenXxl" tabIndex="-1"
                     aria-labelledby="exampleModalFullscreenXxlLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen-xxl-down">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title" id="exampleModalFullscreenXxlLabel">Full screen below xxl</h6>
                                <Button type="button" className="btn-close m-0 fs-5" data-bs-dismiss="modal"
                                        aria-label="Close"></Button>
                            </div>
                            <div className="modal-body">
                                <p><i className="ti ti-arrow-big-right-lines text-secondary f-w-600"></i>  I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                            </div>
                            <div className="modal-footer">
                                <Button type="button" className="btn btn-light-secondary btn-sm"
                                        data-bs-dismiss="modal">Close</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*< Full-screen-xxl-down modal end */}



            </Container>
        </div>
    );
};

export default Modals;