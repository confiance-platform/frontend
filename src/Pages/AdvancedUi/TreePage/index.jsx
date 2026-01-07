import React, {useEffect} from 'react';
import $ from "jquery";
import "jstree";
import {basicView, checkBox} from "@/Data";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const TreePage = () => {
        useEffect(() => {
            $('#theme_tree').jstree({
                "core": {
                    themes: {
                        variant: "large"
                    },
                    data: basicView
                },
            });
            $('#level_tree').jstree({
                core: {
                    themes: {
                        variant: "large"
                    },
                    data: checkBox
                },
                plugins : [ "themes", "html_data", "checkbox", "sort", "ui" ],
            });
        }, [])
    return (
        <div>
            <Container fluid>
                <Row >
                    <Col xs={12} >
                        <h4 className="main-title">Tree View</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                                            <span>
                                                <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                                            </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Tree View</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="tree-view">
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Basic Tree</h5>
                            </CardHeader>

                            <CardBody>
                                <div className="level-nestable">
                                    <div className='jstree-default-large jstree-default'>
                                        <div id="theme_tree"/>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Tree With Checkbox</h5>
                            </CardHeader>

                            <CardBody>
                                <div className="level-nestable">
                                    <div className='jstree-default-large'>
                                        <div id="level_tree"/>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TreePage;
