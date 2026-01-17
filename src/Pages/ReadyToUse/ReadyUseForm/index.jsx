

import React from 'react';
import { Col, Container, Row  } from "reactstrap";
import AppointmentForm from "../../../Components/Readytouseform/AppointmentForm";
import PaymentForm from "../../../Components/Readytouseform/PaymentForm";
import DepartmentsForm from "../../../Components/Readytouseform/DepartmentsForm";
import StudentForm from "../../../Components/Readytouseform/StudentForm";
import ClientRegistration from "../../../Components/Readytouseform/ClientRegistration";



const Blank = () => {
    return (
        <div>
            <Container fluid>

                <Row className="m-1">
                    <Col xs className="col-12 ">
                        <h4 className="main-title">Ready to use form</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-hand-heart f-s-16"></i> Ready to use
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Ready to use form</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <AppointmentForm />
                    </Col>
                    <Col xs={12}>
                        <PaymentForm />
                    </Col>
                    <Col xs={12}>
                        <DepartmentsForm />
                    </Col>
                    <Col xs={12}>
                        <StudentForm />
                    </Col>
                    <Col xs={12}>
                        <ClientRegistration />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blank;
