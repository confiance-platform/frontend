import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from 'react-router-dom'

const LockScreen = () => {
    return (
        <div className="sign-in-bg">
            <div className="app-wrapper d-block">
                <div className="main-container">
                    <Container>
                        <Row className="sign-in-content-bg">
                            <Col lg={6} className="image-contentbox d-none d-lg-block">
                                <div className="form-container">
                                    <div className="signup-content mt-4">
                  <span>
                    <img src="../assets/images/logo/1.png" alt="avtar" className="img-fluid "/>
                  </span>
                                    </div>
                                    <div className="signup-bg-img">
                                        <img src="../assets/images/login/06.png" alt="avtar" className="img-fluid"/>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="form-contentbox">
                                <div className="form-container">
                                    <form className="app-form">
                                        <Row>
                                            <Col xs={12}>
                                                <div className="mb-3 user-screen">
                                                    <div
                                                        className="w-90 h-90 b-r-15 d-flex-center overflow-hidden text-bg-primary">
                                                        <img src="../assets/images/avtar/14.png" alt="avtar"
                                                             className="img-fluid"/>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xs={12}>
                                                <div className="mb-5 text-center text-lg-start">
                                                    <h2 className="text-primary f-w-600">Lock Screen</h2>
                                                    <p>Hello enter your password to unlock the screen</p>
                                                </div>
                                            </Col>

                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    <input type="password" className="form-control"
                                                           placeholder="Enter Your Password" id="password"
                                                           required=""/>
                                                    <p className="text-dark f-s-12 mt-2">Enter Your Password to View your
                                                        Screen</p>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="invalidCheck" required=""/>
                                                    <label className="form-check-label" htmlFor="invalidCheck">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <Link to="/dashboard/ecommerce" role="button"
                                                       className="btn btn-primary w-100">Unlock</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default LockScreen;
