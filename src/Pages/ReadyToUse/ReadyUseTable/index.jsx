

import React from 'react';
import { Col, Container, Row  } from "reactstrap";
import PatientsTable from "../../../Components/Readytousetable/PatientsTable";
import DataTable from 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import StudentsTable from "../../../Components/Readytousetable/StudentsTable";
import PaymentTable from "../../../Components/Readytousetable/PaymentTable";
import JobTable from "../../../Components/Readytousetable/JobTable";
import TicketTable from "../../../Components/Readytousetable/TicketTable";

const Blank = () => {
    return (
        <>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Ready to use table</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-hand-heart f-s-16"></i> Ready to use
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Ready to use table</a>
                            </li>
                        </ul>
                    </Col>
                </Row>


                <Row>
                    <Col xs={12}>
                        <PatientsTable/>
                    </Col>
                    <Col xs={12}>
                        <StudentsTable/>
                    </Col>
                    <Col xs={12}>
                        <PaymentTable/>
                    </Col>
                    <Col xs={12}>
                        <JobTable/>
                    </Col>
                    <Col xs={12}>
                        <TicketTable/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blank;
