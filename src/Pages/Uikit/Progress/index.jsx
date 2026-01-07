import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Progress = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Progress</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Progress</a>
                            </li>
                        </ul>
                    </Col>

                </Row>
                <Row className=" progress-rtl">
                    <Col md={6}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5>Progress Bars Basic</h5>
                                <a data-bs-toggle="collapse" href="#progressBar1" aria-expanded="false"
                                   aria-controls="progressBar1">
                                    <i className="ti ti-code source" data-source="progress1"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="row">
                                    <div className="d-flex gap-3 flex-wrap">
                                        <div className="progress w-100" role="progressbar" aria-valuenow="0"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-primary" style={{width: "12.5%"}}></div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="25"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-secondary" style={{width: "25%"}}></div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="37.5"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-success" style={{width: "37.5%"}}></div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="50"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-danger" style={{width: "50%"}}></div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="62.5"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-warning" style={{width: "62.5%"}}></div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="75"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-info" style={{width: "75%"}}></div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="82.5"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-light" style={{width: "82.5%"}}></div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="95"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-dark" style={{width: "95%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="progress1 collapse mt-3" id="progressBar1">
                                <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Progress Bars Basic</h5>
  </div>
  <div class="card-body">
    <div class="row">
      <div class="d-flex gap-3 flex-wrap">
        <div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-primary" style="width: 12.5%"></div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-secondary" style="width: 25%"></div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="37.5" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-success" style="width: 37.5%"></div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-danger" style="width: 50%"></div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-warning" style="width: 62.5%"></div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-info" style="width: 75%"></div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="82.5" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-light" style="width: 82.5%"></div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-dark" style="width: 95%"></div>
        </div>
      </div>
    </div>
  </div>
</div>`}

                            </code>
                          </pre>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5 className="txt-ellipsis">Progress Bars Light With Text</h5>
                                <a data-bs-toggle="collapse" href="#progressBar2" aria-expanded="false"
                                   aria-controls="progressBar2">
                                    <i className="ti ti-code source" data-source="progress2"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="row">
                                    <div className="d-flex gap-3 flex-wrap">
                                        <div className="progress w-100" role="progressbar" aria-valuenow="0"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-light-primary"
                                                 style={{width: "12.5%"}}> 12.5%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="25"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-light-secondary" style={{width: "25%"}}> 25%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="37.5"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-light-success"
                                                 style={{width: "37.5%"}}> 37.5%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="50"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-light-danger" style={{width: "50%"}}> 50%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="62.5"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-light-warning"
                                                 style={{width: "62.5%"}}> 62.5%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="75"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-light-info" style={{width: "75%"}}> 75%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="82.5"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-light-light" style={{width: "82.5%"}}> 82.5%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="95"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-light-dark" style={{width: "95%"}}> 95%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="progress2 collapse mt-3" id="progressBar2">
                                <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Progress Bars light with text</h5>
  </div>
  <div class="card-body">
    <div class="row">
      <div class="d-flex gap-3 flex-wrap">
        <div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-light-primary" style="width: 12.5%"> 12.5% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-light-secondary" style="width: 25%"> 25% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="37.5" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-light-success" style="width: 37.5%"> 37.5% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-light-danger" style="width: 50%"> 50% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-light-warning" style="width: 62.5%"> 62.5% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-light-info" style="width: 75%"> 75% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="82.5" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-light-light" style="width: 82.5%"> 82.5% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-light-dark" style="width: 95%"> 95% </div>
        </div>
      </div>
    </div>
  </div>
</div>`}

                            </code>
                          </pre>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5 className="txt-ellipsis">Striped Progress With Animation</h5>
                                <a data-bs-toggle="collapse" href="#progressBar3" aria-expanded="false"
                                   aria-controls="progressBar3">
                                    <i className="ti ti-code source" data-source="progress3"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="row">
                                    <div className="d-flex gap-3 flex-wrap">
                                        <div className="progress w-100" role="progressbar" aria-valuenow="0"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div className="progress-bar bg-primary progress-bar-striped"
                                                 style={{width: "12.5%"}}> 12.5%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="25"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div
                                                className="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                                                style={{width: "25%"}}> 25%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="37.5"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div
                                                className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                style={{width: "37.5%"}}> 37.5%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="50"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div
                                                className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                                style={{width: "50%"}}> 50%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="62.5"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div
                                                className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                                style={{width: "62.5%"}}> 62.5%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="75"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div
                                                className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                                                style={{width: "75%"}}> 75%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="82.5"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div
                                                className="progress-bar bg-light progress-bar-striped progress-bar-animated"
                                                style={{width: "82.5%"}}> 82.5%
                                            </div>
                                        </div>
                                        <div className="progress w-100" role="progressbar" aria-valuenow="95"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            <div
                                                className="progress-bar bg-dark progress-bar-striped progress-bar-animated"
                                                style={{width: "95%"}}> 95%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="progres3 collapse mt-3" id="progressBar3">
                                <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Striped Progress with animation</h5>
  </div>
  <div class="card-body">
    <div class="row">
      <div class="d-flex gap-3 flex-wrap">
        <div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-primary progress-bar-striped" style="width: 12.5%"> 12.5% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-secondary progress-bar-striped progress-bar-animated" style="width: 25%"> 25% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="37.5" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width: 37.5%"> 37.5% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width: 50%"> 50% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style="width: 62.5%"> 62.5% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" style="width: 75%"> 75% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="82.5" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-light progress-bar-striped progress-bar-animated" style="width: 82.5%"> 82.5% </div>
        </div>
        <div class="progress w-100" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-dark progress-bar-striped progress-bar-animated" style="width: 95%"> 95% </div>
        </div>
      </div>
    </div>
  </div>
</div>`}

                            </code>
                          </pre>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5>Progress Sizes</h5>
                                <a data-bs-toggle="collapse" href="#progressBar4" aria-expanded="false"
                                   aria-controls="progressBar4">
                                    <i className="ti ti-code source" data-source="progress4"></i>
                                </a>
                            </CardHeader>
                            <div className="card-body d-flex flex-column gap-3">
                                <div className="progress h-5">
                                    <div className="progress-bar bg-primary h-5" role="progressbar" aria-valuenow="20"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{width: "20%"}}></div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="40"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{width: "30%"}}>This is normal size
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="40"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{width: "40%"}}>This is normal size
                                    </div>
                                </div>
                                <div className="progress h-15">
                                    <div className="progress-bar bg-success h-15" role="progressbar" aria-valuenow="50"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{width: "50%"}}> height 15px
                                    </div>
                                </div>
                                <div className="progress h-15">
                                    <div className="progress-bar bg-info h-15" role="progressbar" aria-valuenow="50"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{width: "60%"}}> height 15px
                                    </div>
                                </div>
                                <div className="progress h-20">
                                    <div className="progress-bar bg-danger h-20" role="progressbar" aria-valuenow="60"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{width: "70%"}}> height 20px
                                    </div>
                                </div>
                                <div className="progress h-25">
                                    <div className="progress-bar bg-warning h-25" role="progressbar" aria-valuenow="70"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{width: "80%"}}> height 25px
                                    </div>
                                </div>
                            </div>

                            <pre className="progres4 collapse mt-3" id="progressBar4">
                             <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Progress Sizes</h5>
  </div>
  <div class="card-body d-flex flex-column gap-3">
    <div class="progress h-5">
      <div class="progress-bar bg-primary h-5" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%;"></div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 30%;">This is normal size</div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;">This is normal size</div>
    </div>
    <div class="progress h-15">
      <div class="progress-bar bg-success h-15" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"> height 15px</div>
    </div>
    <div class="progress h-15">
      <div class="progress-bar bg-info h-15" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"> height 15px</div>
    </div>
    <div class="progress h-20">
      <div class="progress-bar bg-danger h-20" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"> height 20px</div>
    </div>
    <div class="progress h-25">
      <div class="progress-bar bg-warning h-25" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"> height 25px</div>
    </div>
  </div>
</div>`}

                            </code>
                          </pre>
                        </Card>
                    </Col>
                    <div className="col-12">
                        <Card>
                            <CardHeader className=" code-header">
                                <h5>The Real Time Example</h5>
                                <a data-bs-toggle="collapse" href="#progressBar5" aria-expanded="false"
                                   aria-controls="progressBar5">
                                    <i className="ti ti-code source" data-source="progress5"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="d-flex gap-3 flex-wrap">
                                            <div className="progress-box bg-light-primary w-100">
                                                <div className="progress-content">
                                                    <div>
                                                        <div className="left d-flex align-items-center">
                                  <span className="spinner-border spinner-border-sm me-2 ms-2" role="status"
                                        aria-hidden="true"></span>
                                                            Loading data...
                                                        </div>
                                                        <div className="right">
                                                            <i className="fa fa-close"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress w-100 h-5" role="progressbar" aria-valuenow="0"
                                                     aria-valuemin="0"
                                                     aria-valuemax="100">
                                                    <div className="progress-bar bg-primary h-5"
                                                         style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                            <div className="progress-box bg-light-secondary w-100">
                                                <div className="progress-content">
                                                    <div>
                                                        <div className="left d-flex align-items-center">
                                                            <b className="me-1 ms-1">75%</b> Processing
                                                        </div>
                                                        <div className="right">
                                                            <i className="fa fa-close"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress w-100 h-5" role="progressbar" aria-valuenow="0"
                                                     aria-valuemin="0"
                                                     aria-valuemax="100">
                                                    <div className="progress-bar bg-secondary h-5"
                                                         style={{width: "75%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Col md={6}>
                                        <div className="d-flex gap-3 flex-wrap">
                                            <div className="progress-box bg-light-success w-100">
                                                <div className="progress-content">
                                                    <div>
                                                        <div className="left d-flex align-items-center">
                                                            <b className="me-1 ms-1">52%</b> Updating..
                                                        </div>
                                                        <div className="right">
                                                            <span className="badge text-bg-success">1 Min</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress w-100 h-5" role="progressbar" aria-valuenow="0"
                                                     aria-valuemin="0"
                                                     aria-valuemax="100">
                                                    <div className="progress-bar bg-success h-5"
                                                         style={{width: "52%"}}></div>
                                                </div>
                                            </div>

                                            <div className="progress-box bg-light-danger w-100">
                                                <div className="progress-content">
                                                    <div>
                                                        <div className="left d-flex align-items-center">
                                                            <i className="ti ti-trash me-1 ms-1"></i> Deleting
                                                            data <small> (85% remain)</small>
                                                        </div>
                                                        <div className="right">
                                                            <span className="badge text-bg-danger">1 Min left</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress w-100 h-5" role="progressbar" aria-valuenow="0"
                                                     aria-valuemin="0"
                                                     aria-valuemax="100">
                                                    <div className="progress-bar bg-danger h-5"
                                                         style={{width: "15%"}}></div>
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                </div>
                            </CardBody>

                            <pre className="progres5 collapse mt-3" id="progressBar5">
                              <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>The real time example</h5>
  </div>
  <div class="card-body">
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="d-flex gap-3 flex-wrap">
          <div class="progress-box bg-light-primary w-100">
            <div class="progress-content">
              <div>
                <div class="left d-flex align-items-center">
                  <span class="spinner-border spinner-border-sm me-2 ms-2" role="status" aria-hidden="true"></span>
                  Loading data...
                </div>
                <div class="right">
                  <i class="fa fa-close"></i>
                </div>
              </div>
            </div>
            <div class="progress w-100 h-5" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-primary h-5" style="width: 100%"></div>
            </div>
          </div>
          <div class="progress-box bg-light-secondary w-100">
            <div class="progress-content">
              <div>
                <div class="left d-flex align-items-center">
                  <b class="me-1 ms-1">75%</b> Processing
                </div>
                <div class="right">
                  <i class="fa fa-close"></i>
                </div>
              </div>
            </div>
            <div class="progress w-100 h-5" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-secondary h-5" style="width: 75%"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex gap-3 flex-wrap">
          <div class="progress-box bg-light-success w-100">
            <div class="progress-content">
              <div>
                <div class="left d-flex align-items-center">
                  <b class="me-1 ms-1">52%</b> Updating..
                </div>
                <div class="right">
                  <span class="badge text-bg-success">1 Min</span>
                </div>
              </div>
            </div>
            <div class="progress w-100 h-5" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success h-5" style="width: 52%"></div>
            </div>
          </div>
          <div class="progress-box bg-light-danger w-100">
            <div class="progress-content">
              <div>
                <div class="left d-flex align-items-center">
                  <i class="ti ti-trash me-1 ms-1"></i> Deleting data <small> (85% remain)</small>
                </div>
                <div class="right">
                  <span class="badge text-bg-danger">1 Min left</span>
                </div>
              </div>
            </div>
            <div class="progress w-100 h-5" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-danger h-5" style="width: 15%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}

                            </code>
                          </pre>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Progress;