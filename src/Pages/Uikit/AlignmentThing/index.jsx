import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const AlignmentThing = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Alignment</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                                  <span>
                                    <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
                                  </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Alignment</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Col xs={12}>
                    <Card>
                        <CardHeader className="code-header">
                            <h5>Text Alignment</h5>
                            <a data-bs-toggle="collapse" href="#textalignmentExample"
                               aria-expanded="false" aria-controls="textalignmentExample">
                                <i className="ti ti-code source" data-source="textalignment"></i>
                            </a>
                        </CardHeader>

                        <CardBody>
                            <Row className="center-thing-responsive">
                                <Col xs={4} md={3} xxl={2}>
                                    <div className="center-thing mt-3">
                                        <div className="top-center">
                                            <i className="ti ti-align-center"></i>
                                        </div>

                                    </div>
                                    <p className="f-s-16 text-center m-2">top-center</p>
                                </Col>
                                <Col xs={4} md={3} xxl={2}>
                                    <div className="center-thing mt-3">
                                        <div className="center">
                                            <i className="ti ti-align-center"></i>
                                        </div>
                                    </div>
                                    <p className="f-s-16 text-center m-2">center</p>
                                </Col>
                                <Col xs={4} md={3} xxl={2}>
                                    <div className="center-thing mt-3">
                                        <div className="bottom-center">
                                            <i className="ti ti-align-center"></i>

                                        </div>
                                    </div>
                                    <p className="f-s-16 text-center m-2">bottom-center</p>
                                </Col>
                                <Col xs={4} md={3} xxl={2}>
                                    <div className="center-thing mt-3">
                                        <div className="left-center">
                                            <i className="ti ti-align-left"></i>

                                        </div>
                                    </div>
                                    <p className="f-s-16 text-center m-2">left-center</p>
                                </Col>
                                <Col xs={4} md={3} xxl={2}>
                                    <div className="center-thing mt-3">
                                        <div className="right-center">
                                            <i className="ti ti-align-right"></i>

                                        </div>
                                    </div>
                                    <p className="f-s-16 text-center m-2">right-center</p>
                                </Col>
                                <Col xs={4} md={3} xxl={2}>
                                    <div className="center-thing mt-3">
                                        <div className="top-left">
                                            <i className="ti ti-align-left"></i>
                                        </div>
                                    </div>
                                    <p className="f-s-16 text-center m-2">top-left</p>
                                </Col>
                                <Col xs={4} md={3} xxl={2}>
                                    <div className="center-thing mt-3">
                                        <div className="top-right">
                                            <i className="ti ti-align-right"></i>
                                        </div>
                                    </div>
                                    <p className="f-s-16 text-center m-2">top-right</p>
                                </Col>
                                <Col xs={4} md={3} xxl={2}>
                                    <div className="center-thing mt-3">
                                        <div className="bottom-left">
                                            <i className="ti ti-align-left"></i>
                                        </div>
                                    </div>
                                    <p className="f-s-16 text-center m-2">bottom-left</p>
                                </Col>
                                <Col xs={4} md={3} xxl={2}>
                                    <div className="center-thing mt-3">
                                        <div className="bottom-right ">
                                            <i className="ti ti-align-right"></i>
                                        </div>
                                    </div>
                                    <p className="f-s-16 text-center m-2">bottom-right</p>
                                </Col>
                                <Col xs={4} md={3} xxl={2}>
                                    <div className="center-thing mt-3">
                                        <div className="center-horizantal">
                                            <i className="ti ti-layout-align-middle"></i>
                                        </div>
                                    </div>
                                    <p className="f-s-16 text-center m-2">center-horizantal</p>
                                </Col>
                                <Col xs={4} md={3} xxl={2}>
                                    <div className="center-thing mt-3">
                                        <div className="center-vertical">
                                            <i className="ti ti-layout-align-center"></i>
                                        </div>
                                    </div>
                                    <p className="f-s-16 text-center m-2">center-vertical</p>
                                </Col>
                            </Row>
                            <pre className="textalignment collapse mt-3" id="textalignmentExample">
                                <code className="language-html">
{`<div class="row center-thing-responsive">
    <div class="col-4 col-md-3 col-xxl-2">
        <div class="center-thing mt-3">
            <div class="top-center">
                <i class="ph-light ph-text-align-center"></i>
            </div>
        </div>
        <p class="f-s-16 text-center m-2">top-center</p>
    </div>
    <div class="col-4 col-md-3 col-xxl-2">
        <div class="center-thing mt-3">
            <div class="center">
                <i class="ph-light ph-text-align-center"></i>
            </div>
        </div>
        <p class="f-s-16 text-center m-2">center</p>
    </div>
    <div class="col-4 col-md-3 col-xxl-2">
        <div class="center-thing mt-3">
            <div class="bottom-center">
                <i class="ph-light  ph-text-align-center"></i>
            </div>
        </div>
        <p class="f-s-16 text-center m-2">bottom-center</p>
    </div>
    <div class="col-4 col-md-3 col-xxl-2">
        <div class="center-thing mt-3">
            <div class="left-center">
                <i class="ph-light ph-text-align-left"></i>
            </div>
        </div>
        <p class="f-s-16 text-center m-2">left-center</p>
    </div>
    <div class="col-4 col-md-3 col-xxl-2">
        <div class="center-thing mt-3">
            <div class="right-center">
                <i class="ph-light ph-text-align-right"></i>
            </div>
        </div>
        <p class="f-s-16 text-center m-2">right-center</p>
    </div>
    <div class="col-4 col-md-3 col-xxl-2">
        <div class="center-thing mt-3">
            <div class="top-left">
                <i class="ph-light ph-text-align-left"></i>
            </div>
        </div>
        <p class="f-s-16 text-center m-2">top-left</p>
    </div>
    <div class="col-4 col-md-3 col-xxl-2">
        <div class="center-thing mt-3">
            <div class="top-right">
                <i class="ph-light ph-text-align-right"></i>
            </div>
        </div>
        <p class="f-s-16 text-center m-2">top-right</p>
    </div>
    <div class="col-4 col-md-3 col-xxl-2">
        <div class="center-thing mt-3">
            <div class="bottom-left">
                <i class="ph-light ph-text-align-left"></i>
            </div>
        </div>
        <p class="f-s-16 text-center m-2">bottom-left</p>
    </div>
    <div class="col-4 col-md-3 col-xxl-2">
        <div class="center-thing mt-3">
            <div class="bottom-right ">
                <i class="ph-light ph-text-align-right"></i>
            </div>
        </div>
        <p class="f-s-16 text-center m-2">bottom-right</p>
    </div>
    <div class="col-4 col-md-3 col-xxl-2">
        <div class="center-thing mt-3">
            <div class="center-horizantal">
                <i class="ph-light  ph-align-center-horizontal"></i>
            </div>
        </div>
        <p class="f-s-16 text-center m-2">center-horizantal</p>
    </div>
    <div class="col-4 col-md-3 col-xxl-2">
        <div class="center-thing mt-3">
            <div class="center-vertical">
                <i class="ph-light  ph-align-center-vertical"></i>
            </div>
        </div>
        <p class="f-s-16 text-center m-2">center-vertical</p>
    </div>
</div>`}
                                </code>
                            </pre>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12}>
                    <Card>
                        <CardHeader className="code-header">
                            <h5>image alignment</h5>
                            <a data-bs-toggle="collapse" href="#imagealignmentExample"
                               aria-expanded="false" aria-controls="imagealignmentExample">
                                <i className="ti ti-code source" data-source="imagealignment"></i>
                            </a>
                        </CardHeader>

                        <CardBody>
                            <Col xl={12}>
                                <Row >
                                    <Col xl={3}>
                                        <div className="image-center-thing">
                                            <div className="image-top-left">
                                                <img src="/assets/images/placeholder/05.png" alt=""/>
                                            </div>
                                        </div>
                                        <p className="f-s-16 text-center m-2">image-top-left</p>
                                    </Col>
                                    <Col xl={3}>
                                        <div className="image-center-thing">
                                            <div className="image-center">
                                                <img src="/assets/images/placeholder/05.png" alt=""/>
                                            </div>
                                        </div>
                                        <p className="f-s-16 text-center m-2">image-center</p>
                                    </Col>
                                    <Col xl={3}>
                                        <div className="image-center-thing">
                                            <div className="image-bottom-right">
                                                <img src="/assets/images/placeholder/05.png" alt=""/>
                                            </div>
                                        </div>
                                        <p className="f-s-16 text-center m-2">image-bottom-right</p>

                                    </Col>
                                    <Col xl={3}>
                                        <div className="image-center-thing">
                                            <div className="image-top-right">
                                                <img src="/assets/images/placeholder/05.png" alt=""/>
                                            </div>
                                        </div>
                                        <p className="f-s-16 text-center m-2">image-top-right</p>
                                    </Col>
                                    <Col xl={3}>
                                        <div className="image-center-thing mt-3">
                                            <div className="image-bottom-left">
                                                <img src="/assets/images/placeholder/05.png" alt=""/>
                                            </div>
                                        </div>
                                        <p className="f-s-16 text-center m-2">image-bottom-left</p>

                                    </Col>
                                </Row>

                            </Col>
                            <pre className="imagealignment collapse mt-3" id="imagealignmentExample">
                                <code className="language-html">
{`<div class="col-xl-12">
    <div class="row">
        <div class="col-xl-3">
            <div class="image-center-thing">
                <div class="image-top-left">
                    <img src="../assets/images/placeholder/05.png" alt="">
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="image-center-thing">
                <div class="image-center">
                    <img src="../assets/images/placeholder/05.png" alt="">
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="image-center-thing">
                <div class="image-bottom-right">
                    <img src="../assets/images/placeholder/05.png" alt="">
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="image-center-thing">
                <div class="image-top-right">
                    <img src="../assets/images/placeholder/05.png" alt="">
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="image-center-thing mt-3">
                <div class="image-bottom-left">
                    <img src="../assets/images/placeholder/05.png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>`}
                                </code>
                             </pre>
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default AlignmentThing;