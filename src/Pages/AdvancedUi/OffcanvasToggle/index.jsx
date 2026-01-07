import React from 'react';
import {Button, Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const OffcanvasToggle = () => {
    return (
        <div>
            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Offcanvas</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                                <span>
                                  <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                                </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Offcanvas</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >
                        <Card>
                            <CardHeader>
                                <h5>Live Demo</h5>
                                <p>Use the buttons below to show and hide an offcanvas element via JavaScript that
                                    toggles the .show
                                    class on an element with the <span className="text-danger">.offcanvas </span>class.
                                </p>
                            </CardHeader>
                            <CardBody>
                                <a className="btn btn-primary m-2" data-bs-toggle="offcanvas" href="#offcanvas_box"
                                   role="button"
                                   aria-controls="offcanvas_box">
                                    Link with href
                                </a>
                                <Button color='primary' className="btn btn-primary m-2" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvas_box" aria-controls="offcanvas_box">
                                    Button with data-bs-target
                                </Button>

                                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvas_box"
                                     aria-labelledby="offcanvas_box">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvas_box1">Offcanvas</h5>
                                        <Button  color='primary' type="button" className="btn-close text-reset fs-5 fs-6 btn-primary"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"></Button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div>
                                            Some text as placeholder. In real life you can have the elements you have
                                            chosen. Like, text,
                                            images, lists, etc.
                                        </div>

                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Placement</h5>
                                <p>Offcanvas Different Placement Example: Left, Right & Bottom</p>
                            </CardHeader>
                            <CardBody>
                                <Button color='primary' className="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasTops" aria-controls="offcanvasTops">Toggle top
                                    offcanvas
                                </Button>

                                <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTops"
                                     aria-labelledby="offcanvasTopsLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasTopsLabel">Offcanvas top</h5>
                                        <Button type="button" className="btn-close  btn-primary" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></Button>
                                    </div>
                                    <div className="offcanvas-body">
                                        ...
                                    </div>
                                </div>

                                <Button color='primary' className="btn btn-primary m-2" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right
                                    offcanvas
                                </Button>

                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight">
                                    <div className="offcanvas-header">
                                        <h5 id="offcanvasRightLabel3">Offcanvas right</h5>
                                        <Button color='primary' type="button" className="btn-close text-reset fs-5"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"></Button>
                                    </div>
                                    <div className="offcanvas-body">
                                        ...
                                    </div>
                                </div>

                                <Button color='primary' className="btn btn-primary m-2" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom
                                    offcanvas
                                </Button>

                                <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom"
                                     aria-labelledby="offcanvasBottomLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title4" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                                        <Button color='primary' type="button" className="btn-close text-reset fs-5"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"></Button>
                                    </div>
                                    <div className="offcanvas-body small">
                                        ...
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Backdrop</h5>
                                <p>Scrolling the <span className="text-danger">
                      </span> element is disabled when an offcanvas and its backdrop are visible. Use the
                                    <span className="text-danger"> data-bs-scroll </span>
                                    attribute to toggle scrolling and <span
                                        className="text-danger"> data-bs-backdrop </span>to toggle the
                                    backdrop.
                                </p>
                            </CardHeader>
                            <CardBody>
                                <Button color='primary' className="btn btn-primary m-2" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable
                                    body
                                    scrolling
                                </Button>
                                <Button color='primary' className="btn btn-primary m-2" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasWithBackdrop"
                                        aria-controls="offcanvasWithBackdrop">Enable backdrop
                                    (default)
                                </Button>
                                <Button color='primary' className="btn btn-primary m-2" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasWithBothOptions"
                                        aria-controls="offcanvasWithBothOptions">Enable both
                                    scrolling & backdrop
                                </Button>

                                <div className="offcanvas offcanvas-start" data-bs-scroll="true"
                                     data-bs-backdrop="false" tabIndex="-1"
                                     id="offcanvasScrolling2" aria-labelledby="offcanvasScrollingLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Colored with
                                            scrolling</h5>
                                        <Button color='primary' type="button" className="btn-close text-reset fs-5 btn-primary"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"></Button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <p>Try scrolling the rest of the page to see this option in action.</p>
                                    </div>
                                </div>
                                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasWithBackdrop">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel5">Offcanvas with
                                            backdrop</h5>
                                        <Button color='primary' type="button" className="btn-close text-reset fs-5 btn-primary"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"></Button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <p>.....</p>
                                    </div>
                                </div>
                                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1"
                                     id="offcanvasWithBothOptions2">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel6">Backdroped
                                            with scrolling</h5>
                                        <Button  color='primary' type="button" className="btn-close text-reset fs-5 btn-primary"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"></Button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <p>Try scrolling the rest of the page to see this option in action.</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <div className=" card-header">
                                <h5>Body Scrolling </h5>
                                <p>Scrolling the element is disabled when an offcanvas and its backdrop are visible.
                                </p>
                            </div>
                            <CardBody>
                                <Button color='primary'  className="btn btn-primary m-2" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable
                                    body
                                    scrolling
                                </Button>

                                <div className="offcanvas offcanvas-start" data-bs-scroll="true"
                                     data-bs-backdrop="false" tabIndex="-1"
                                     id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel7">Offcanvas with
                                            body scrolling</h5>
                                        <Button color='primary' type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></Button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <p>Try scrolling the rest of the page to see this option in action.</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Static Backdrop </h5>
                                <p>When backdrop is set to static, the offcanvas will not close when clicking outside of
                                    it.</p>
                            </CardHeader>
                            <CardBody>
                                <Button color='primary' className="btn btn-primary m-2" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                    Toggle static offcanvas
                                </Button>

                                <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1"
                                     id="staticBackdrop">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="staticBackdropLabel9">Offcanvas</h5>
                                        <Button color='primary' type="button" className="btn-close fs-5" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></Button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div>
                                            I will not close if you click outside of me.
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Body Scrolling And Backdrop </h5>
                                <p>
                                    Scrolling the element is disabled when an offcanvas and its backdrop are visible.
                                    Use the
                                    <span className="text-danger"> data-bs-scroll </span>attribute to toggle scrolling
                                    and
                                    <span className="text-danger"> data-bs-backdrop </span>to toggle the backdrop.
                                </p>
                            </CardHeader>
                            <CardBody>
                                <Button color='primary' className="btn btn-primary m-2" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasWithBothOptions"
                                        aria-controls="offcanvasWithBothOptions">Enable both
                                    scrolling & backdrop
                                </Button>

                                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1"
                                     id="offcanvasWithBothOptions">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel8">Backdrop
                                            with scrolling</h5>
                                        <Button color='primary' type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></Button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <p>Try scrolling the rest of the page to see this option in action.</p>
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

export default OffcanvasToggle;