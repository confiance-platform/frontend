
import React from 'react';
import {Col, Container, Row} from "reactstrap";
import EcommerceChartCard from "../../Components/Widget/EcommerceChartCard";
import WidgetsCards from "../../Components/Widget/WidgetsCards";



const Widgets = () => {
    return (
        <>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Widget</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-squares-four f-s-16"></i> Widget
                      </span>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <EcommerceChartCard/>
                    <WidgetsCards/>
                </Row>
            </Container>

        </>
    );
};

export default Widgets;