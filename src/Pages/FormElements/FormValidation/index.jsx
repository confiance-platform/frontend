
import React from 'react';
import { Col, Container, Row  } from "reactstrap";
import TooltipsValidation from "../../../Components/Filevalidation/TooltipsValidation";
import CustomValidation from "../../../Components/Filevalidation/CustomValidation";
import DefaultsValidation from "../../../Components/Filevalidation/DefaultsValidation";
import SupportedValidation from "../../../Components/Filevalidation/SupportedValidation";


const FormValidation = () => {
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Form Validation</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Form Validation</a>
                            </li>

                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <TooltipsValidation/>
                    </Col>
                    <Col xs={12}>
                        <CustomValidation/>
                    </Col>
                    <Col xs={12}>
                        <DefaultsValidation/>
                    </Col>
                    <Col xs={12}>
                        <SupportedValidation/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FormValidation;
