import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Background = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Background</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
									<span>
									  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
									</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Background</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row className="gap-4">
                    <Col xs={12} >
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Background colors</h5>
                                <a data-bs-toggle="collapse" href="#button1" aria-expanded="false"
                                   aria-controls="button1">
                                    <i className="ti ti-code source" data-source="btn1"></i>
                                </a>
                            </CardHeader>
                            <CardBody className="d-flex justify-content-between align-items-center">
                                <div className="d-flex gap-2 flex-wrap">
                                    <button type="button" className="btn bg-primary text-white">bg-primary</button>
                                    <button type="button" className="btn bg-secondary text-white">bg-secondary</button>
                                    <button type="button" className="btn bg-success text-white">bg-success</button>
                                    <button type="button" className="btn bg-danger text-white">bg-danger</button>
                                    <button type="button" className="btn bg-warning text-white">bg-warning</button>
                                    <button type="button" className="btn bg-info text-white">bg-info</button>
                                    <button type="button" className="btn bg-light text-dark">bg-light</button>
                                    <button type="button" className="btn bg-dark text-white">bg-dark</button>
                                </div>
                            </CardBody>

                            <pre className="btn1 collapse mt-3" id="button1">
<code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Background colors</h5>
  </div>
  <div class="card-body d-flex justify-content-between align-items-center">
    <div class="d-flex gap-2 flex-wrap">
      <button type="button" class="btn bg-primary text-white">bg-primary</button>
      <button type="button" class="btn bg-secondary text-white">bg-secondary</button>
      <button type="button" class="btn bg-success text-white">bg-success</button>
      <button type="button" class="btn bg-danger text-white">bg-danger</button>
      <button type="button" class="btn bg-warning text-white">bg-warning</button>
      <button type="button" class="btn bg-info text-white">bg-info</button>
      <button type="button" class="btn bg-light text-dark">bg-light</button>
      <button type="button" class="btn bg-dark text-white">bg-dark</button>
    </div>
  </div>
</div>`}
</code>
                  </pre>
                        </Card>
                    </Col>
                    <Col xs={12} >
                        <Card>
                            <CardHeader className="code-header">
                                <h5 className="txt-ellipsis">Background color shades</h5>
                                <a data-bs-toggle="collapse" href="#button2" aria-expanded="false"
                                   aria-controls="button2">
                                    <i className="ti ti-code source" data-source="btn2"></i>
                                </a>
                            </CardHeader>
                            <CardBody className="d-flex justify-content-between align-items-center">
                                <div className="d-flex gap-2 flex-wrap">
                                    <button type="button" className="btn bg-primary-900">bg-primary-900</button>
                                    <button type="button" className="btn bg-primary-800">bg-primary-800</button>
                                    <button type="button" className="btn bg-primary-700">bg-primary-700</button>
                                    <button type="button" className="btn bg-primary-600">bg-primary-600</button>
                                    <button type="button" className="btn bg-primary-500">bg-primary-500</button>
                                    <button type="button" className="btn bg-primary-400">bg-primary-400</button>
                                    <button type="button" className="btn bg-primary-300">bg-primary-300</button>
                                </div>
                            </CardBody>
                            <pre className="btn2 collapse mt-3" id="button2">
<code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Background color shades</h5>
  </div>
  <div class="card-body d-flex justify-content-between align-items-center">
    <div class="d-flex gap-2 flex-wrap">
      <button type="button" class="btn bg-primary-900">bg-primary-900</button>
      <button type="button" class="btn bg-primary-800">bg-primary-800</button>
      <button type="button" class="btn bg-primary-700">bg-primary-700</button>
      <button type="button" class="btn bg-primary-600">bg-primary-600</button>
      <button type="button" class="btn bg-primary-500">bg-primary-500</button>
      <button type="button" class="btn bg-primary-400">bg-primary-400</button>
      <button type="button" class="btn bg-primary-300">bg-primary-300</button>
    </div>
  </div>
</div>`}
</code></pre>
                        </Card>
                    </Col>
                    <Col xs={12} >
                        <Card>
                            <CardHeader className="code-header">
                                <h5> Outline Background</h5>
                                <a data-bs-toggle="collapse" href="#button3" aria-expanded="false"
                                   aria-controls="button3">
                                    <i className="ti ti-code source" data-source="btn3"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-2 flex-wrap">
                                    <button type="button" className="btn bg-outline-primary">bg-outline-primary</button>
                                    <button type="button" className="btn bg-outline-secondary">bg-outline-secondary
                                    </button>
                                    <button type="button" className="btn bg-outline-success">bg-outline-success</button>
                                    <button type="button" className="btn bg-outline-danger">bg-outline-danger</button>
                                    <button type="button" className="btn bg-outline-warning">bg-outline-warning</button>
                                    <button type="button" className="btn bg-outline-info">bg-outline-info</button>
                                    <button type="button" className="btn bg-outline-light">bg-outline-light</button>
                                    <button type="button" className="btn bg-outline-dark">bg-outline-dark</button>
                                </div>
                            </CardBody>

                            <pre className="btn3 collapse mt-3" id="button3">
<code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Outline Background</h5>
  </div>
  <div class="card-body">
    <div class="d-flex gap-2 flex-wrap">
      <button type="button" class="btn bg-outline-primary">bg-outline-primary</button>
      <button type="button" class="btn bg-outline-secondary">bg-outline-secondary</button>
      <button type="button" class="btn bg-outline-success">bg-outline-success</button>
      <button type="button" class="btn bg-outline-danger">bg-outline-danger</button>
      <button type="button" class="btn bg-outline-warning">bg-outline-warning</button>
      <button type="button" class="btn bg-outline-info">bg-outline-info</button>
      <button type="button" class="btn bg-outline-light">bg-outline-light</button>
      <button type="button" class="btn bg-outline-dark">bg-outline-dark</button>
    </div>
  </div>
</div>`}
</code></pre>
                        </Card>
                    </Col>
                    <Col xs={12} >
                        <Card>
                            <CardHeader className="code-header">
                                <h5> Soft Background</h5>
                                <a data-bs-toggle="collapse" href="#button4" aria-expanded="false"
                                   aria-controls="button4">
                                    <i className="ti ti-code source" data-source="btn4"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-2 flex-wrap">
                                    <button type="button" className="btn bg-light-primary">bg-light-primary</button>
                                    <button type="button" className="btn bg-light-secondary">bg-light-secondary</button>
                                    <button type="button" className="btn bg-light-success">bg-light-success</button>
                                    <button type="button" className="btn bg-light-danger">bg-light-danger</button>
                                    <button type="button" className="btn bg-light-warning">bg-light-warning</button>
                                    <button type="button" className="btn bg-light-info">bg-light-info</button>
                                    <button type="button" className="btn bg-light-light">bg-light-light</button>
                                    <button type="button" className="btn bg-light-dark">bg-light-dark</button>
                                    <button type="button" className="btn bg-light-link">bg-light-link</button>
                                </div>
                            </CardBody>

                            <pre className="btn4 collapse mt-3" id="button4">
<code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Soft Background</h5>
  </div>
  <div class="card-body">
    <div class="d-flex gap-2 flex-wrap">
      <button type="button" class="btn bg-light-primary">bg-light-primary</button>
      <button type="button" class="btn bg-light-secondary">bg-light-secondary</button>
      <button type="button" class="btn bg-light-success">bg-light-success</button>
      <button type="button" class="btn bg-light-danger">bg-light-danger</button>
      <button type="button" class="btn bg-light-warning">bg-light-warning</button>
      <button type="button" class="btn bg-light-info">bg-light-info</button>
      <button type="button" class="btn bg-light-light">bg-light-light</button>
      <button type="button" class="btn bg-light-dark">bg-light-dark</button>
      <button type="button" class="btn bg-light-link">bg-light-link</button>
    </div>
  </div>
</div>
`}
</code></pre>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Background;