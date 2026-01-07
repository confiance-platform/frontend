import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from 'react-router-dom'

const PasswordCreateBgImage = () => {
    return (
        <div>
            <Container fluid>

                <Row>
                    <Col xs={12} className="p-0">
                        <div className="login-form-container">
                            <div className="mb-4">
                                <Link className="logo d-inline-block" to="/dashboard/ecommerce">
                                    <img src="../assets/images/logo/1.png" width="250" alt="#"/>
                                </Link>
                            </div>
                            <div className="form_container">
                                <form className="app-form">
                                    <div className="mb-3 text-center">
                                        <h3>Create Password</h3>
                                        <p className="f-s-12 text-secondary">Your new password must be different from
                                            previous used password</p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Current password</label>
                                        <input type="email" className="form-control" placeholder="Enter Your Password"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">New password</label>
                                        <input type="email" className="form-control" placeholder="Enter Your Password"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control"
                                               placeholder="Enter Your Password"/>
                                    </div>
                                    <div>
                                        <Link to="/dashboard/ecommerce" role="button" className="btn btn-primary w-100">Reset
                                            Password</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PasswordCreateBgImage;