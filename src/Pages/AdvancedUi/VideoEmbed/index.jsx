import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const VideoEmbed = () => {
    return (
        <div>
            <Container fluid >
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Video Embed</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                            <span>
                              <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                            </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Video Embed</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Ratio Video 1x1 </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="ratio ratio-1x1">
                                    <div>
                                        <iframe className="w-100 h-100" src="https://www.youtube.com/embed/BcKOz6kAgg0"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h5>Ratio Video 4x3 </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="ratio  ratio-4x3">
                                    <div>
                                        <iframe className="w-100 h-100" src="https://www.youtube.com/embed/BcKOz6kAgg0"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Ratio Video 16x9 </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="ratio ratio-16x9">
                                    <div>
                                        <iframe className="w-100 h-100" src="https://www.youtube.com/embed/PIa17rsNSEE"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>Custom ratios 50% </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="ratio" style={{"--bs-aspect-ratio": "50%"}}>
                                    <div>
                                        <iframe className="w-100 h-100" src="https://www.youtube.com/embed/EwzynNhx4Y8"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5> Ratio Video 21x9 </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="ratio ratio-21x9">
                                    <div>
                                        <iframe className="w-100 h-100" src="https://www.youtube.com/embed/Ep5kNwmDRlg"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
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

export default VideoEmbed;