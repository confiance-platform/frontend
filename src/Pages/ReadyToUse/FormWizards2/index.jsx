
import React from 'react';
import { Col, Container, Row  } from "reactstrap";
import Checkout from "../../../Components/Formwizard2/Checkout";
import Financial from "../../../Components/Formwizard2/Financial";
import Booking from "../../../Components/Formwizard2/Booking";




const Blank = () => {
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12} >
                        <h4 className="main-title">Form wizard 2</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-hand-heart f-s-16"></i> Ready to use
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Form wizard 2</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Checkout />
                    </Col>
                    <Col xs={12}>
                        <Financial/>
                    </Col>
                    <Col xs={12}>
                        <Booking/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blank;
