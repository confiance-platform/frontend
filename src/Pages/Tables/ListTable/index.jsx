

import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row, CardFooter} from "reactstrap";
import EditTable from "../../../Components/Listtable/EditTable";
import ListTable from "../../../Components/Listtable/ListTable";
import TablesLists from "../../../Components/Listtable/TablesLists";



const Blank = () => {
    return (
        <>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">List Table</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-table f-s-16"></i> Table
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">List Table</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <EditTable/>
                    <ListTable/>
                    <TablesLists/>
                </Row>
            </Container>
        </>
    );
};

export default Blank;
