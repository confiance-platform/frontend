import React, {useRef} from 'react';
import {Container, Row} from "reactstrap";
import {Link} from 'react-router-dom'

const VerificationBgImg = () => {

    const inputsRef = useRef([]);

    const digitValidate = (e, index) => {
        const newValue = e.target.value.replace(/[^0-9]/g, '');
        e.target.value = newValue;
        if (newValue && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus();
        } else if (!newValue && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };
    return (
        <div>
            <Container fluid>

                <Row>
                    <div className="col-12 p-0 ">
                        <div className="login-form-container">
                            <div className="mb-4">
                                <Link className="logo d-inline-block" to="/dashboard/ecommerce">
                                    <img src="../assets/images/logo/1.png" width="250" alt="#"/>
                                </Link>
                            </div>
                            <div className="form_container">
                                <form className="app-form">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-5 text-center">
                                                <h2 className="text-primary">Verify OTP</h2>
                                                <p>Enter the 5 digit code sent to the registered email Id</p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="verification-box justify-content-lg-start mb-3">
                                                {[0, 1, 2, 3, 4].map((_, index) => (
                                                    <input
                                                        className="form-control h-60 w-60 text-center"
                                                        key={index}
                                                        type="text"
                                                        maxLength="1"
                                                        ref={(el) => (inputsRef.current[index] = el)}
                                                        onInput={(e) => digitValidate(e, index)}
                                                    />
                                                ))}
                                            </div>

                                        </div>
                                        <div className="col-12">
                                            <p>
                                                Did not recieve a code <Link to="#"
                                                                          className="link-primary text-decoration-underline"> Resend!</Link>
                                            </p>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <button type="reset" className="btn btn-primary w-100">Verify</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default VerificationBgImg;
