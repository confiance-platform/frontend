
import React from 'react';
import { Col, Container, Row  } from "reactstrap";
import NumberWizard from "./NumberWizard";
import IconWizards from "./IconWizards";
import VerticalNumberWizard from "./VerticalNumberWizard";
import VerticalIconWizards from "./VerticalIconWizards";




const FormWizards = () => {
    return (
        <div>
            <Container fluid>

                <Row className="m-1">
                    <Col xs={12} >
                        <h4 className="main-title">form wizards</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-hand-heart f-s-16"></i> Ready To Use
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">form wizards</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} lg={6}>
                        <NumberWizard/>
                    </Col>
                    <Col xs={12} lg={6}>
                        <IconWizards/>
                    </Col>
                    <Col xs={12} lg={6}>
                        <VerticalNumberWizard/>
                    </Col>
                    <Col xs={12} lg={6}>
                        <VerticalIconWizards/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FormWizards;

