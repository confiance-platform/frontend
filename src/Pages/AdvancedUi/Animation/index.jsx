import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Button, Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Animation = () => {

    useEffect(() => {
        new Masonry(".animation-blocks", {
            percentPosition: true
        });
        Prism.highlightAll();

        const notes = document.querySelectorAll('.animation-blocks > .animation-card  a')
        for (var i = 0; i < notes.length; i++) {
            notes[i].addEventListener('mouseenter', function (e) {
                const ani = e.target.dataset.ani;
                e.target.classList.add('animate__animated', 'animate__1', 'animate__' + ani);

                window.setTimeout(function () {
                    e.target.classList.remove('animate__animated', 'animate__1', 'animate__' + ani);
                }, 1000);
            });
        }
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Animation</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                              <span>
                                <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                              </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Animation</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Where can use? some example ..!</h5>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <Row>
                                        <Col xs={12}>
                                            <div className="d-flex flex-wrap gap-3">
                                                <div
                                                    className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-primary">
                                                    <img src="/assets/images/avtar/2.png" alt=""
                                                         className="img-fluid animate__pulse animate__animated animate__infinite animate__faster"/>
                                                </div>
                                                <span
                                                    className="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                                                    <img src="/assets/images/avtar/1.png" alt=""
                                                         className="img-fluid b-r-50"/>
                                                    <span
                                                        className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle animate__animated animate__zoomIn animate__infinite animate__fast"></span>
                                                  </span>
                                                <span
                                                    className="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                                                    <img src="/assets/images/avtar/6.png" alt=""
                                                         className="img-fluid b-r-50"/>
                                                    <span
                                                        className="position-absolute top-10 start-40 translate-middle d-flex-center bg-danger border border-light rounded-circle text-center h-20 w-20 f-s-10">
                                                      <i
                                                          className="ti ti-message-circle animate__animated animate__heartBeat animate__infinite animate__fast"></i>
                                                    </span>
                                                  </span>
                                                <span className="text-outline-primary h-45 w-45 d-flex-center b-r-50">
                                                    <i
                                                        className="ti ti-bell-ringing animate__animated animate__rubberBand animate__infinite animate__fast"></i>
                                                  </span>
                                                <Button type="button" className="btn btn-success btn-lg"> Submit <i
                                                    className="ti ti-chevrons-right animate__animated animate__fadeOutRight  animate__infinite animate__fast"></i>
                                                </Button>
                                                <Button type="button" className="btn btn-danger btn-lg">
                                                    <i
                                                        className="ti ti-trash animate__animated animate__bounceIn  animate__infinite animate__fast"></i>
                                                    Delete
                                                </Button>
                                                <Button type="button" className="btn btn-primary btn-lg">
                                                    <i
                                                        className="ti ti-download animate__animated animate__bounceInDown  animate__infinite animate__slow"></i>
                                                    Download
                                                </Button>
                                                <Button type="button" className="btn btn-warning btn-lg"> Upload <i
                                                    className="ti ti-upload animate__animated animate__fadeOutRight  animate__infinite animate__fast"></i>
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <div className="animation-blocks" data-masonry='{"percentPosition": true }'>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#attention-seekers" aria-expanded="false">Attention
                                        seekers</a>
                                </div>
                                <div className="collapse  card-body show px-4" id="attention-seekers">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="bounce"> bounce</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="flash"> flash</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="pulse"> pulse</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rubberBand"> rubberBand</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="shakeX"> shakeX</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="shakeY"> shakeY</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="headShake"> headShake</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="swing"> swing</a>
                                                <a href="#" className="btn btn-light-primary" data-ani="tada"> tada</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="wobble"> wobble</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="jello"> jello</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="heartBeat"> heartBeat</a>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </Card>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#back-entrances" aria-expanded="false">
                                        Back entrances
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="back-entrances">
                                    <ul>
                                        <li className="d-flex flex-wrap gap-3">
                                            <a href="#" className="btn btn-light-primary"
                                               data-ani="backInDown"> backInDown</a>
                                            <a href="#" className="btn btn-light-primary"
                                               data-ani="backInLeft"> backInLeft</a>
                                            <a href="#" className="btn btn-light-primary"
                                               data-ani="backInRight"> backInRight</a>
                                            <a href="#" className="btn btn-light-primary"
                                               data-ani="backInUp"> backInUp</a>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#back-exits" aria-expanded="false">
                                        Back exits
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="back-exits">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="backOutDown"> backOutDown</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="backOutLeft"> backOutLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="backOutRight"> backOutRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="backOutUp"> backOutUp</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#bouncing-entrances" aria-expanded="false">
                                        Bouncing entrances
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="bouncing-entrances">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="bounceIn"> bounceIn</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="bounceInDown"> bounceInDown</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="bounceInLeft"> bounceInLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="bounceInRight"> bounceInRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="bounceInUp"> bounceInUp</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#bouncing-exits" aria-expanded="false">
                                        Bouncing exits
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="bouncing-exits">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="bounceOut"> bounceOut</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="bounceOutDown"> bounceOutDown</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="bounceOutLeft"> bounceOutLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="bounceOutRight"> bounceOutRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="bounceOutUp"> bounceOutUp</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#fading-entrances" aria-expanded="false">
                                        Fading entrances
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="fading-entrances">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeIn"> fadeIn</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeInDown"> fadeInDown</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeInDownBig"> fadeInDownBig</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeInLeft"> fadeInLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeInLeftBig"> fadeInLeftBig</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeInRight"> fadeInRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeInRightBig"> fadeInRightBig</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeInUp"> fadeInUp</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeInUpBig"> fadeInUpBig</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeInTopLeft"> fadeInTopLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeInTopRight"> fadeInTopRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeInBottomLeft"> fadeInBottomLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeInBottomRight">
                                                    fadeInBottomRight</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#fading-exits" aria-expanded="false">
                                        Fading exits
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="fading-exits">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOut"> fadeOut</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOutDown"> fadeOutDown</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOutDownBig"> fadeOutDownBig</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOutLeft"> fadeOutLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOutLeftBig"> fadeOutLeftBig</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOutRight"> fadeOutRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOutRightBig"> fadeOutRightBig</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOutUp"> fadeOutUp</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOutUpBig"> fadeOutUpBig</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOutTopLeft"> fadeOutTopLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOutTopRight"> fadeOutTopRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOutBottomRight">
                                                    fadeOutBottomRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="fadeOutBottomLeft">
                                                    fadeOutBottomLeft</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#flippers" aria-expanded="false">
                                        Flippers
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="flippers">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary" data-ani="flip"> flip</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="flipInX"> flipInX</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="flipInY"> flipInY</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="flipOutX"> flipOutX</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="flipOutY"> flipOutY</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#lightspeed" aria-expanded="false">
                                        Lightspeed
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="lightspeed">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="lightSpeedInRight">
                                                    lightSpeedInRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="lightSpeedInLeft"> lightSpeedInLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="lightSpeedOutRight">
                                                    lightSpeedOutRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="lightSpeedOutLeft">
                                                    lightSpeedOutLeft</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#rotating-entrances" aria-expanded="false">
                                        Rotating entrances
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="rotating-entrances">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rotateIn"> rotateIn</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rotateInDownLeft"> rotateInDownLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rotateInDownRight">
                                                    rotateInDownRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rotateInUpLeft"> rotateInUpLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rotateInUpRight"> rotateInUpRight</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#rotating-exits" aria-expanded="false">
                                        Rotating exits
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="rotating-exits">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rotateOut"> rotateOut</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rotateOutDownLeft">
                                                    rotateOutDownLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rotateOutDownRight">
                                                    rotateOutDownRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rotateOutUpLeft"> rotateOutUpLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rotateOutUpRight"> rotateOutUpRight</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className=" cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#specials" aria-expanded="false">
                                        Specials
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="specials">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="hinge"> hinge</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="jackInTheBox"> jackInTheBox</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rollIn"> rollIn</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="rollOut"> rollOut</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#zooming-entrances" aria-expanded="false">
                                        Zooming entrances
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="zooming-entrances">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="zoomIn"> zoomIn</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="zoomInDown"> zoomInDown</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="zoomInLeft"> zoomInLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="zoomInRight"> zoomInRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="zoomInUp"> zoomInUp</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className=" cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#zooming-exits" aria-expanded="false">
                                        Zooming entrances
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="zooming-exits">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="zoomOut"> zoomOut</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="zoomOutDown"> zoomOutDown</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="zoomOutLeft"> zoomOutLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="zoomOutRight"> zoomOutRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="zoomOutUp"> zoomOutUp</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className=" cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#sliding-entrances" aria-expanded="false">
                                        Sliding entrances
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="sliding-entrances">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="slideInDown"> slideInDown</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="slideInLeft"> slideInLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="slideInRight"> slideInRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="slideInUp"> slideInUp</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card className="cheatsheet-card animation-card">
                                <div className="card-header p-0">
                                    <a className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                                       data-bs-toggle="collapse" href="#sliding-exits" aria-expanded="false">
                                        Sliding exits
                                    </a>
                                </div>
                                <div className="collapse card-body show" id="sliding-exits">
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="slideOutDown"> slideOutDown</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="slideOutLeft"> slideOutLeft</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="slideOutRight"> slideOutRight</a>
                                                <a href="#" className="btn btn-light-primary"
                                                   data-ani="slideOutUp"> slideOutUp</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>How to use</h5>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <Row>
                                        <Col xs={12}>
                                            <ol className="list-group list-group-numbered">
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <h6> By adding clases </h6>
                                                        <p>Add the class <code>animate__animated</code> to an element,
                                                            along with any of the
                                                            animation names (don't forget
                                                            the <code>animate__</code> prefix!): </p>
                                                        <p>
                                                            <code>
                                                                {`
                                                                <h5 class="animate__animated animate__bounce">An animated element</h5>
                                                                `}
                                                            </code>
                                                        </p>
                                                        <p className="fw-600 ms-3 mt-3">Utility Classes </p>
                                                        <div className="ms-4">
                                                            <p>Animate.css provides the following delays:</p>
                                                            <code>animate__delay-2s, animate__delay-3s,
                                                                animate__delay-4s, animate__delay-5s</code>
                                                            <p className="mt-2">Slow, slower, fast, and Faster
                                                                classes</p>
                                                            <code>animate__slow, animate__slower, animate__fast,
                                                                animate__faster</code>
                                                            <p className="mt-2">Repeating classes</p>
                                                            <code>animate__repeat-1, animate__repeat-2,
                                                                animate__repeat-3, animate__infinite</code>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <h6> Using @keyframes</h6>
                                                        <p>Even though the library provides you a few helper classes
                                                            like the
                                                            <code>animated</code> class to get you up running quickly,
                                                            you can directly use the
                                                            provided animations <code>keyframes</code>. This provides a
                                                            flexible way to use
                                                            Animate.css with your current projects without having to
                                                            refactor your HTML code.
                                                        </p>
                                                        <p className="fw-500">Example:</p>
                                                        <code className="d-flex flex-column">
                                                            <span>{`.my-element {`}</span>
                                                            <span>{`  display: inline-block;`}</span>
                                                            <span>{`  margin: 0 0.5rem;`}</span>
                                                            <span>{`  animation: bounce; /* referring directly to the animation's @keyframe declaration */`}</span>
                                                            <span>{`  animation-duration: 2s; /* don't forget to set a duration! */`}</span>
                                                            <span>{`}`}</span>
                                                        </code>
                                                    </div>
                                                </li>
                                                <li className="list-group-item d-sm-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <h6> CSS Custom Properties (CSS Variables) </h6>
                                                        <p>Animate.css uses custom properties (also known as CSS
                                                            variables) to define the
                                                            animation's duration, delay, and iterations. This makes
                                                            Animate.css very flexible and
                                                            customizable. Need to change an animation duration? Just set
                                                            a new value globally or
                                                            locally.</p>
                                                        <p className="fw-500">Example:</p>
                                                        <p>
                                                            <code className="d-flex flex-column">
                                                                {`/* This only changes this particular animation duration */`}
                                                                <span>{`.animate__animated.animate__bounce {`}</span>
                                                                <span>{`  --animate-duration: 2s;`}</span>
                                                                <span>{`}`}</span>
                                                                <br/>
                                                                {`/* This changes all the animations globally */`}
                                                                <span>{`:root {`}</span>
                                                                <span>{`  --animate-duration: 800ms;`}</span>
                                                                <span>{`  --animate-delay: 0.9s;`}</span>
                                                                <span>{`}`}</span>
                                                            </code>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ol>
                                        </Col>
                                        <div className="col-6"></div>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Animation;