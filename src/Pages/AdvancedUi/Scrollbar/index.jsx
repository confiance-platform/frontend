import React, {useEffect} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Scrollbar = () => {
    useEffect(() => {
        const elements = [
            { id: 'vertical_scroll', options: { autoHide: true } },
            { id: 'vertical_scroll_content', options: { autoHide: false } },
            { id: 'horizontal_scroll', options: { autoHide: false } },
            { id: 'both_scroll', options: { autoHide: false } },
        ];

        elements.forEach(({ id, options }) => {
            const element = document.getElementById(id);
            if (element) {
                new SimpleBar(element, options);
            }
        });
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Scrollbar</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                              <span>
                                <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                              </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Scrollbar</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Vertical Scrollbar</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="scroll-bar vertical-scrollbar-box" id="vertical_scroll">
                                    <h5 className="mb-2">Vertically scrollbar:</h5>
                                    <p className="">To create a vertically scrollable container with detailed control
                                        over the scrollbar, you can use a combination of HTML and CSS. Here's a more
                                        detailed example that includes customization of the scrollbar </p>
                                    <img src="../assets/images/blog-app/02.jpg" alt="" className="w-100"/>
                                        <ul>
                                            <li className="mb-2 mt-2 ">
                                                <span className="f-w-600">Overflow Content:</span> When content within a
                                                container exceeds the container’s height, a vertical scrollbar is used
                                                to access the hidden content.
                                            </li>
                                            <li className="mb-2">
                                                <span className="f-w-600">Text Blocks:</span> Displaying lengthy
                                                articles, documents, or lists of comments.
                                            </li>
                                            <li className="mb-2">
                                                <span className="f-w-600">Data Tables: </span>Viewing large datasets or
                                                tables that extend beyond the visible area.
                                            </li>
                                        </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Both Scrollbar</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="scroll-bar both-scroll" id="both_scroll">
                                    <img src="../assets/images/blog-app/09.jpg" alt=""/>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Horizontal Scrollbar</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="scroll-bar horizontal-scrollbar" id="horizontal_scroll">
                                    <div className="horizontal-content">
                                        <div className="row flex-nowrap">
                                            <div className="col-4">
                                                <div className="horizontal-img">
                                                    <img src="../assets/images/profile-app/07.jpg" alt=""
                                                         className="img-fluid"/>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="horizontal-img">
                                                    <img src="../assets/images/profile-app/09.jpg" alt=""
                                                         className="img-fluid"/>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="horizontal-img">
                                                    <img src="../assets/images/profile-app/10.jpg" alt=""
                                                         className="img-fluid"/>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="horizontal-img">
                                                    <img src="../assets/images/profile-app/05.jpg" alt=""
                                                         className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Badges Scrollbar</h5>
                            </CardHeader>
                            <CardBody>
                                <ol className="list-group scroll-bar scroll-list-group" id="vertical_scroll_content">
                                    <li className="list-group-item b-r-0 d-flex justify-content-between align-items-center flex-wrap">
                                        <div className="ms-2">1. Stella Nowland</div>
                                        <span className="badge text-bg-primary">Freelance</span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="ms-2">2.Lola Stanford</div>
                                        <span className="badge text-bg-secondary">Issue</span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="ms-2">3. Caitlin Coungeau</div>
                                        <span className="badge text-bg-success">Social</span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="ms-2">4. Graciela W. McClaran</div>

                                        <span className="badge text-bg-danger">Issue</span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="ms-2">5. Derek T. Aldridge</div>
                                        <span className="badge text-bg-warning">Freelance</span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="ms-2">6.Annie A. Riley</div>
                                        <span className="badge text-bg-primary">Social</span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="ms-2">7. Hana J. Boyd</div>
                                        <span className="badge text-bg-danger">Issue</span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="ms-2">8. Karen R. Pryce</div>
                                        <span className="badge text-bg-warning">Freelance</span>
                                    </li>
                                    <li className="list-group-item b-r-0 d-flex justify-content-between align-items-center flex-wrap">
                                        <div className="ms-2">9. Annie A. Riley</div>
                                        <span className="badge text-bg-primary">Social</span>
                                    </li>
                                    <li className="list-group-item b-r-0 d-flex justify-content-between align-items-center flex-wrap">
                                        <div className="ms-2">10.Graciela W. McClaran</div>
                                        <span className="badge text-bg-danger">Issue</span>
                                    </li>
                                    <li className="list-group-item b-r-0 d-flex justify-content-between align-items-center flex-wrap">
                                        <div className="ms-2">11. Hana J. Boyd</div>
                                        <span className="badge text-bg-warning">Freelance</span>
                                    </li>
                                    <li className="list-group-item b-r-0 d-flex justify-content-between align-items-center flex-wrap">
                                        <div className="ms-2">12. Stella Nowland</div>
                                        <span className="badge text-bg-primary">Social</span>
                                    </li>
                                </ol>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Scrollbar;
