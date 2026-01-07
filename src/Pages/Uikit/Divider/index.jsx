import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Divider = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Divider</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
									<span>
									  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
									</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Divider</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xl={8}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Default</h5>
                                <a data-bs-toggle="collapse" href="#divider1" aria-expanded="false"
                                   aria-controls="divider1">
                                    <i className="ti ti-code source" data-source="divi1"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="app-divider-v"></div>
                                <div className="app-divider-v dotted"></div>
                                <div className="app-divider-v dashed"></div>
                            </CardBody>

                            <pre className="divi1 collapse mt-3" id="divider1">
                    <code className="language-html">

{`<div class="card">
    <div class="card-header">
        <h5>Default</h5>
    </div>
    <div class="card-body">
        <div class="app-divider-v"></div>
        <div class="app-divider-v dotted"></div>
        <div class="app-divider-v dashed"></div>
    </div>
</div>`}

                    </code>
                  </pre>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className="h-100">
                            <CardHeader className="code-header">
                                <h5>Horizontal</h5>
                                <a data-bs-toggle="collapse" href="#divider2" aria-expanded="false"
                                   aria-controls="divider2">
                                    <i className="ti ti-code source" data-source="divi2"></i>
                                </a>
                            </CardHeader>
                            <div className="card-body divider-body">
                                <div className="d-flex h-100">
                                    <div className="app-divider-h"></div>
                                    <div className="app-divider-h dotted"></div>
                                    <div className="app-divider-h dashed"></div>
                                </div>
                            </div>
                            <pre className="divi2 collapse mt-3" id="divider2">
                    <code className="language-html">

{`<div class="card h-100">
    <div class="card-header">
        <h5>Horizontal</h5>
    </div>
    <div class="card-body divider-body">
        <div class="d-flex h-100">
            <div class="app-divider-h"></div>
            <div class="app-divider-h dotted"></div>
            <div class="app-divider-h dashed"></div>
        </div>
    </div>
</div>`}

                    </code>
                  </pre>
                        </Card>
                    </Col>
                    <div className="col-md-6 col-xl-8">
                        <Card>
                            <CardHeader className="code-header">
                                <h5 className="txt-ellipsis">Divider With Text & Aligns</h5>
                                <a data-bs-toggle="collapse" href="#divider3" aria-expanded="false"
                                   aria-controls="divider3">
                                    <i className="ti ti-code source" data-source="divi3"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="app-divider-v">
                                    <p>justify-content-start</p>
                                </div>
                                <div className="app-divider-v justify-content-center">
                                    <p>justify-content-center</p>
                                </div>
                                <div className="app-divider-v justify-content-end">
                                    <p>justify-content-end</p>
                                </div>
                            </CardBody>

                            <pre className="divi3 collapse mt-3" id="divider3">
                    <code className="language-html">

{`<div class="card">
    <div class="card-header">
        <h5>Divider with text & aligns</h5>
    </div>
    <div class="card-body">
        <div class="app-divider-v">
            <p>justify-content-start</p>
        </div>
        <div class="app-divider-v justify-content-center">
            <p>justify-content-center</p>
        </div>
        <div class="app-divider-v justify-content-end">
            <p>justify-content-end</p>
        </div>
    </div>
</div>`}

                    </code>
                  </pre>
                        </Card>

                    </div>
                    <Col md={6} xl={4}>
                        <Card className="h-100">
                            <CardHeader className="code-header">
                                <h5>Horizontal</h5>
                                <a data-bs-toggle="collapse" href="#divider4" aria-expanded="false"
                                   aria-controls="divider4">
                                    <i className="ti ti-code source" data-source="divi4"></i>
                                </a>
                            </CardHeader>
                            <div className="card-body divider-body d-flex">
                                <div className="app-divider-h">
                                    <p>Or</p>
                                </div>
                                <div className="app-divider-h align-items-center">
                                    <p>align-items-center</p>
                                </div>
                                <div className="app-divider-h align-items-end">
                                    <p>Or</p>
                                </div>
                            </div>

                            <pre className="divi4 collapse mt-3" id="divider4">
                    <code className="language-html">

{`<div class="card h-100">
    <div class="card-header">
        <h5>Horizontal</h5>
    </div>
    <div class="card-body divider-body d-flex">
        <div class="app-divider-h">
            <p>Or</p>
        </div>
        <div class="app-divider-h align-items-center">
            <p>align-items-center</p>
        </div>
        <div class="app-divider-h align-items-end">
            <p>Or</p>
        </div>
    </div>
</div>`}

                    </code>
                  </pre>
                        </Card>
                    </Col>
                    <div className="col-md-6  col-xl-8">
                        <Card>
                            <CardHeader className="code-header">
                                <h5 className="txt-ellipsis">Color Options With Icon Button And so on..</h5>
                                <a data-bs-toggle="collapse" href="#divider5" aria-expanded="false"
                                   aria-controls="divider5">
                                    <i className="ti ti-code source" data-source="divi5"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="app-divider-v primary">
                                    <p className="text-primary">Align Left</p>
                                </div>
                                <div className="app-divider-v secondary justify-content-center">
                                    <span className="badge text-bg-secondary">Login With Social</span>
                                </div>
                                <div className="app-divider-v success justify-content-end">
                                    <p className="text-success">Align Right</p>
                                </div>
                                <div className="app-divider-v danger">
                                    <span className="badge text-bg-danger">Choose from below option</span>
                                </div>
                                <div className="app-divider-v info justify-content-center gap-1">
                                    <button type="button" className="btn btn-facebook icon-btn b-r-22"><i
                                        className="ti ti-brand-facebook text-white"></i></button>
                                    <button type="button" className="btn btn-twitter icon-btn b-r-22"><i
                                        className="ti ti-brand-twitter text-white"></i></button>
                                    <button type="button" className="btn btn-linkedin icon-btn b-r-22"><i
                                        className="ti ti-brand-linkedin text-white"></i></button>
                                </div>
                                <div className="app-divider-v warning justify-content-end gap-1">

                                </div>

                                <div className="app-divider-v dark justify-content-center">
                                    <p>Dark</p>
                                </div>
                            </CardBody>

                            <pre className="divi5 collapse mt-3" id="divider5">
                    <code className="language-html">

{`<div class="card">
    <div class="card-header">
        <h5>Color Options With icon button and so on..</h5>
    </div>
    <div class="card-body">
        <div class="app-divider-v primary">
            <p class="text-primary">Align Left</p>
        </div>
        <div class="app-divider-v secondary justify-content-center">
            <span class="badge text-bg-secondary">Login With Social</span>
        </div>
        <div class="app-divider-v success justify-content-end">
            <p class="text-success">Align Right</p>
        </div>
        <div class="app-divider-v danger">
            <span class="badge text-bg-danger">Choose from below option</span>
        </div>
        <div class="app-divider-v info justify-content-center gap-1">
            <button type="button" class="btn btn-facebook icon-btn b-r-22">
                <i class="ti ti-brand-facebook text-white"></i>
            </button>
            <button type="button" class="btn btn-twitter icon-btn b-r-22">
                <i class="ti ti-brand-twitter text-white"></i>
            </button>
            <button type="button" class="btn btn-linkedin icon-btn b-r-22">
                <i class="ti ti-brand-linkedin text-white"></i>
            </button>
        </div>
        <div class="app-divider-v warning justify-content-end gap-1">
            
        </div>
        
        <div class="app-divider-v dark justify-content-center">
            <p>Dark</p>
        </div>
    </div>
</div>`}

                    </code>
                  </pre>
                        </Card>

                    </div>
                    <Col md={6} xl={4}>
                        <Card className="h-100">
                            <CardHeader className="code-header">
                                <h5>Horizontal</h5>
                                <a data-bs-toggle="collapse" href="#divider6" aria-expanded="false"
                                   aria-controls="divider6">
                                    <i className="ti ti-code source" data-source="divi6"></i>
                                </a>
                            </CardHeader>
                            <div className="card-body divider-body d-flex">
                                <div className="app-divider-h primary"></div>
                                <div className="app-divider-h secondary"></div>
                                <div className="app-divider-h success"></div>
                                <div className="app-divider-h danger"></div>
                                <div className="app-divider-h warning"></div>
                                <div className="app-divider-h info"></div>
                                <div className="app-divider-h light"></div>
                                <div className="app-divider-h dark"></div>
                            </div>
                            <pre className="divi6 collapse mt-3" id="divider6">
                    <code className="language-html">

{`<div class="card h-100">
    <div class="card-header">
        <h5>Horizontal</h5>
    </div>
    <div class="card-body divider-body d-flex">
        <div class="app-divider-h primary"></div>
        <div class="app-divider-h secondary"></div>
        <div class="app-divider-h success"></div>
        <div class="app-divider-h danger"></div>
        <div class="app-divider-h warning"></div>
        <div class="app-divider-h info"></div>
        <div class="app-divider-h light"></div>
        <div class="app-divider-h dark"></div>
    </div>
</div>`}

                    </code>
                  </pre>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Divider;