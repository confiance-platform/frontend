import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from 'react-router-dom'

const ComingSoon = () => {
    return (
        <div>
            <Container fluid>

                <Row>
                    <Col xs={12}>
                        <div className="coming-soon">
                            <div className="coundown-timmer p-5">
                                <div className="content">
                                    <h2 className="text-dark">Ra-admin Coming Soon</h2>
                                    <p className="font-coming-p">
                                        Our Website Under Construction, We Are Working on it, We Will Ready to Lunch it
                                        After
                                    </p>
                                </div>
                                <div className="timmer-content">
                                    <div className="time">
                                        <span id="days" className="numbers">00</span>
                                        <span>Days</span>
                                    </div>
                                    <div className="time">
                                        <span id="hours" className="numbers">00</span>
                                        <span>Hours</span>
                                    </div>
                                    <div className="time">
                                        <span id="minutes" className="numbers">00</span>
                                        <span>Minutes</span>
                                    </div>
                                    <div className="time">
                                        <span id="seconds" className="numbers">00</span>
                                        <span>Second</span>
                                    </div>
                                </div>

                                <div className="app-form mb-3 mt-4">
                                    <input type="email"
                                           className="form-control form-control-lg m-auto text-center coming-soon-input"
                                           placeholder="Enter an Email" id="username"/>

                                </div>
                                <Link className="btn btn-primary btn-xl" to="/other/coming-soon">Subscribe Now</Link>

                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ComingSoon;