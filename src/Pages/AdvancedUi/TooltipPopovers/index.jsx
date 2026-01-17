import React, {useEffect} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const TooltipPopovers = () => {

    useEffect(() => {
        $(function() {
            var tooltip_init = {
                init: function () {
                    $("button").tooltip();
                    $("a").tooltip();
                    $("input").tooltip();
                    $("li").tooltip();
                }
            };
            tooltip_init.init()
        });
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Tooltips Popovers</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                              <span>
                                <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                              </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Tooltips Popovers</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Default Tooltips </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex flex-wrap gap-3">
                                    <Button color='primary' type="button" className="btn btn-primary" data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Custom tooltip">Custom tooltip
                                    </Button>
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Disabled tooltip">
                        <Button className="btn bg-secondary-300" type="button" disabled>Disabled Tooltips</Button>
                      </span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Placement </h5>
                            </CardHeader>
                            <CardBody className="d-flex flex-wrap gap-3">
                                <div>
                                    <Button color='primary' type="button" className="btn btn-primary" data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Tooltip on top">
                                        Tooltip on top
                                    </Button>
                                </div>
                                <div>
                                    <Button type="button" className="btn btn-secondary" data-bs-toggle="tooltip"
                                            data-bs-placement="right"
                                            title="Tooltip on right">
                                        Tooltip on right
                                    </Button>

                                </div>
                                <div>
                                    <Button type="button" className="btn btn-success" data-bs-toggle="tooltip"
                                            data-bs-placement="bottom"
                                            title="Tooltip on bottom">
                                        Tooltip on bottom
                                    </Button>
                                </div>

                                <div>
                                    <Button type="button" className="btn btn-danger" data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title="Tooltip on left">
                                        Tooltip on left
                                    </Button>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>HTML</h5>
                            </CardHeader>
                            <CardBody>
                                <Button type="button" className="btn btn-warning" data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
                                    Tooltip with HTML
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Colors Tooltips</h5>
                            </CardHeader>
                            <div className="card-body d-flex flex-wrap gap-2">
                                <Button color='primary' type="button" className="btn btn-primary" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-primary" data-bs-html="true" title="Primary">
                                    Primary
                                </Button>
                                <Button type="button" className="btn btn-secondary" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-secondary" data-bs-html="true" title="Secondary">
                                    Secondary
                                </Button>
                                <Button type="button" className="btn btn-success" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-success" data-bs-html="true" title="Success">
                                    Success
                                </Button>
                                <Button type="button" className="btn btn-danger" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-danger" data-bs-html="true" title="Danger">
                                    Danger
                                </Button>
                                <Button type="button" className="btn btn-warning" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-warning" data-bs-html="true" title="Warning">
                                    Warning
                                </Button>
                                <Button type="button" className="btn btn-info" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-info" data-bs-html="true" title="Info">
                                    Info
                                </Button>
                                <Button type="button" className="btn btn-light" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-light" data-bs-html="true" title="Light">
                                    Light
                                </Button>
                                <Button type="button" className="btn btn-dark" data-bs-toggle="tooltip"
                                        data-bs-custom-class="custom-dark" data-bs-html="true" title="Dark">
                                    Dark
                                </Button>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Custom Popovers </h5>
                            </CardHeader>
                            <CardBody>
                                <a tabIndex="0" className="btn text-light-warning" role="button"
                                   data-bs-toggle="popover"
                                   data-bs-trigger="focus" data-bs-title="Dismissible popover"
                                   data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible
                                    popover</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TooltipPopovers;