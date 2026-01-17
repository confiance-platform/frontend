import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from 'react-router-dom'

const SignInBgImage = () => {
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
                                        <h3>Login to your Account</h3>
                                        <p className="f-s-12 text-secondary">Get started with our app, just create an
                                            account and enjoy the experience.</p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control"/>
                                        <div className="form-text text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control"/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="formCheck1"/>
                                        <label className="form-check-label" htmlFor="formCheck1">remember me</label>
                                    </div>
                                    <div>
                                        <Link to="/dashboard/ecommerce" role="button"
                                           className="btn btn-primary w-100">Submit</Link>
                                    </div>
                                    <div className="app-divider-v justify-content-center">
                                        <p>OR</p>
                                    </div>
                                    <div className="mb-3">
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary icon-btn b-r-5 m-1"><i
                                                className="ti ti-brand-facebook text-white"></i></button>
                                            <button type="button" className="btn btn-danger icon-btn b-r-5 m-1"><i
                                                className="ti ti-brand-google text-white"></i></button>
                                            <button type="button" className="btn btn-dark icon-btn b-r-5 m-1"><i
                                                className="ti ti-brand-github text-white"></i></button>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/other/terms-condition"
                                           className="text-secondary text-decoration-underline">Terms of
                                            use &amp; Conditions</Link>
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

export default SignInBgImage;
