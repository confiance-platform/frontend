import React, {useEffect} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Prism from "prismjs";

const Avatar = () => {

    useEffect(() => {
        Prism.highlightAll();

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
                <Row className=" m-1">
                    <Col xs={12} >
                        <h4 className="main-title">Avtar</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Avtar</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Colors</h5>
                                <a data-bs-toggle="collapse" href="#avtar1" aria-expanded="false"
                                   aria-controls="avtar1">
                                    <i className="ti ti-code source" data-source="av1"></i>
                                </a>
                                <p className="text-muted">Use color <code>bg-*</code> to change the background theme
                                    color of avatar.
                                </p>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-3 flex-wrap">
                                  <span className="bg-primary h-45 w-45 d-flex-center b-r-50">
                                    <i className="fa-solid fa-user"></i>
                                  </span>
                                    <span className="bg-secondary h-45 w-45 d-flex-center b-r-50">
                                      <i className="fa-solid fa-user"></i>
                                    </span>
                                    <span className="bg-success h-45 w-45 d-flex-center b-r-50">
                                      <i className="fa-solid fa-user"></i>
                                    </span>
                                    <span className="bg-info h-45 w-45 d-flex-center b-r-50">
                                      <i className="fa-solid fa-user"></i>
                                    </span>
                                    <span className="bg-warning h-45 w-45 d-flex-center b-r-50">
                                      P
                                    </span>
                                    <span className="bg-danger h-45 w-45 d-flex-center b-r-50">
                                      AD
                                  </span>
                                </div>
                            </CardBody>
                        </Card>
                        <pre className="av1 collapse mt-3" id="avtar1">
                            <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Colors</h5>
    <p class="text-muted">Use color <code>bg-*</code> to change the background theme color of avatar.</p>
  </div>
  <div class="card-body">
    <div class="d-flex gap-3 flex-wrap">
      <span class="bg-primary h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="bg-secondary h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="bg-success h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="bg-info h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="bg-warning h-45 w-45 d-flex-center b-r-50">
        P
      </span>
      <span class="bg-danger h-45 w-45 d-flex-center b-r-50">
        AD
      </span>
    </div>
  </div>
</div>`}

                          </code>
                      </pre>
                    </Col>
                    <Col md={6}>
                        <Card className="equal-card">
                            <CardHeader className="code-header">
                                <h5>Outline</h5>
                                <a data-bs-toggle="collapse" href="#avtar2" aria-expanded="false"
                                   aria-controls="avtar2">
                                    <i className="ti ti-code source" data-source="av2"></i>
                                </a>
                                <p className="text-muted">For outline style use <code>text-outline-*</code> class.</p>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-3 flex-wrap">
                      <span className="text-outline-primary h-45 w-45 d-flex-center b-r-50">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-outline-secondary h-45 w-45 d-flex-center b-r-50">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-outline-success h-45 w-45 d-flex-center b-r-50">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-outline-info h-45 w-45 d-flex-center b-r-50">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-outline-warning h-45 w-45 d-flex-center b-r-50">
                        AR
                      </span>
                                    <span className="text-outline-danger h-45 w-45 d-flex-center b-r-50">
                        TE
                      </span>
                                </div>
                            </CardBody>

                            <pre className="av2 collapse mt-3" id="avtar2">
                                <code className="language-html">

{`<div class="card equal-card">
  <div class="card-header">
    <h5>Outline</h5>
    <p class="text-muted">For outline style use <code>text-outline-*</code> class.</p>
  </div>
  <div class="card-body">
    <div class="d-flex gap-3 flex-wrap">
      <span class="text-outline-primary h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-outline-secondary h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-outline-success h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-outline-info h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-outline-warning h-45 w-45 d-flex-center b-r-50">
        AR
      </span>
      <span class="text-outline-danger h-45 w-45 d-flex-center b-r-50">
        TE
      </span>
    </div>
  </div>
</div>`}

                              </code>
                          </pre>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Images</h5>
                                <a data-bs-toggle="collapse" href="#avtar3" aria-expanded="false"
                                   aria-controls="avtar3">
                                    <i className="ti ti-code source" data-source="av3"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-3 flex-wrap">
                                    <div className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-primary">
                                        <img src="/assets/images/avtar/1.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-secondary">
                                        <img src="/assets/images/avtar/2.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-success">
                                        <img src="/assets/images/avtar/3.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-info">
                                        <img src="/assets/images/avtar/4.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-success">
                                        <img src="/assets/images/avtar/5.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-danger">
                                        <img src="/assets/images/avtar/6.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <pre className="av3 collapse mt-3" id="avtar3">
                            <code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Images</h5>
  </div>
  <div class="card-body">
    <div class="d-flex gap-3 flex-wrap">
      <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-primary">
        <img src="/assets/images/avtar/1.png" alt="" class="img-fluid">
      </div>
      <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-secondary">
        <img src="/assets/images/avtar/2.png" alt="" class="img-fluid">
      </div>
      <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-success">
        <img src="/assets/images/avtar/3.png" alt="" class="img-fluid">
      </div>
      <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-info">
        <img src="/assets/images/avtar/4.png" alt="" class="img-fluid">
      </div>
      <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-success">
        <img src="/assets/images/avtar/5.png" alt="" class="img-fluid">
      </div>
      <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-danger">
        <img src="/assets/images/avtar/6.png" alt="" class="img-fluid">
      </div>
    </div>
  </div>
</div>`}

                          </code>
                        </pre>
                    </Col>
                    <Col md={6}>
                        <Card className="equal-card">
                            <CardHeader className="code-header">
                                <h5>Size</h5>
                                <a data-bs-toggle="collapse" href="#avtar4" aria-expanded="false"
                                   aria-controls="avtar4">
                                    <i className="ti ti-code source" data-source="av4"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex gap-3 flex-wrap">
                        <span className="bg-secondary h-30 w-30 d-flex-center b-r-50">
                          <i className="fa-solid fa-user"></i>
                        </span>
                                        <span className="bg-success h-35 w-35 d-flex-center b-r-50">
                          <i className="fa-solid fa-user"></i>
                        </span>
                                        <span className="bg-info h-40 w-40 d-flex-center b-r-50">
                          <i className="fa-solid fa-user"></i>
                        </span>
                                        <span className="bg-warning h-45 w-45 d-flex-center b-r-50">
                          <i className="fa-solid fa-user"></i>
                        </span>
                                        <span className="bg-danger h-50 w-50 d-flex-center b-r-50">
                          <i className="fa-solid fa-user"></i>
                        </span>
                                    </div>
                                </div>
                            </CardBody>
                            <pre className="av4 collapse mt-3" id="avtar4">
                                <code className="language-html">
{`<div class="card equal-card">
  <div class="card-header">
    <h5>Size</h5>
  </div>
  <div class="card-body">
    <div class="d-flex align-items-center">
      <div class="d-flex gap-3 flex-wrap">
        <span class="bg-secondary h-30 w-30 d-flex-center b-r-50">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="bg-success h-35 w-35 d-flex-center b-r-50">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="bg-info h-40 w-40 d-flex-center b-r-50">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="bg-warning h-45 w-45 d-flex-center b-r-50">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="bg-danger h-50 w-50 d-flex-center b-r-50">
          <i class="fa-solid fa-user"></i>
        </span>
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
                            <CardHeader className="code-header">
                                <h5>Light Background</h5>
                                <a data-bs-toggle="collapse" href="#avtar5" aria-expanded="false"
                                   aria-controls="avtar5">
                                    <i className="ti ti-code source" data-source="av5"></i>
                                </a>
                                <p className="text-muted">For light style use <code>text-light-*</code> class.</p>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-3 flex-wrap">
                      <span className="text-light-primary h-45 w-45 d-flex-center b-r-50">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-light-secondary h-45 w-45 d-flex-center b-r-50">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-light-success h-45 w-45 d-flex-center b-r-50">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-light-info h-45 w-45 d-flex-center b-r-50">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-light-warning h-45 w-45 d-flex-center b-r-50">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-light-danger h-45 w-45 d-flex-center b-r-50">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                </div>
                            </CardBody>
                        </Card>

                        <pre className="av5 collapse mt-3" id="avtar5">
                            <code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Light background</h5>
    <p class="text-muted">For light style use <code>text-light-*</code> class.</p>
  </div>
  <div class="card-body">
    <div class="d-flex gap-3 flex-wrap">
      <span class="text-light-primary h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-light-secondary h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-light-success h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-light-info h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-light-warning h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-light-danger h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    </div>
  </div>
</div>`}
                          </code>
                      </pre>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Radious</h5>
                                <a data-bs-toggle="collapse" href="#avtar8" aria-expanded="false"
                                   aria-controls="avtar8">
                                    <i className="ti ti-code source" data-source="av8"></i>
                                </a>
                                <p className="text-muted">Radious avatar text in soft color example</p>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-3 flex-wrap">
                      <span className="text-light-primary h-45 w-45 d-flex-center b-r-0">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-light-secondary h-45 w-45 d-flex-center b-r-6">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-light-success h-45 w-45 d-flex-center b-r-10">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-light-info h-45 w-45 d-flex-center b-r-14">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-light-warning h-45 w-45 d-flex-center b-r-20">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                    <span className="text-light-danger h-45 w-45 d-flex-center b-r-30">
                        <i className="fa-solid fa-user"></i>
                      </span>
                                </div>
                            </CardBody>
                        </Card>

                        <pre className="av8 collapse mt-3" id="avtar8">
                            <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Light background</h5>
    <p class="text-muted">For light style use <code>text-light-*</code> class.</p>
  </div>
  <div class="card-body">
    <div class="d-flex gap-3 flex-wrap">
      <span class="text-light-primary h-45 w-45 d-flex-center b-r-0">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-light-secondary h-45 w-45 d-flex-center b-r-6">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-light-success h-45 w-45 d-flex-center b-r-10">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-light-info h-45 w-45 d-flex-center b-r-14">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-light-warning h-45 w-45 d-flex-center b-r-20">
        <i class="fa-solid fa-user"></i>
      </span>
      <span class="text-light-danger h-45 w-45 d-flex-center b-r-30">
        <i class="fa-solid fa-user"></i>
      </span>
    </div>
  </div>
</div>`}
                            </code>
                        </pre>
                    </Col>
                    <Col md={5}>
                        <Card className="equal-card">
                            <CardHeader className="code-header">
                                <h5 className="txt-ellipsis">Indicator Position And Icon</h5>
                                <a data-bs-toggle="collapse" href="#avtar6" aria-expanded="false"
                                   aria-controls="avtar6">
                                    <i className="ti ti-code source" data-source="av6"></i>
                                </a>
                                <p className="text-muted">Radious avatar text in soft color example</p>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-3 flex-wrap">
                      <span className="bg-danger h-45 w-45 d-flex-center b-r-50 position-relative">
                        <i className="fa-solid fa-user"></i>
                        <span
                            className="position-absolute top-5 start-1 top-0 p-1 bg-danger border border-light rounded-circle"></span>
                      </span>

                                    <span className="bg-success h-45 w-45 d-flex-center b-r-50 position-relative">
                        <i className="fa-solid fa-user"></i>
                        <span
                            className="position-absolute bottom-0 start-1 p-1 bg-success border border-light rounded-circle"></span>
                      </span>

                                    <span className="bg-warning h-45 w-45 d-flex-center b-r-50 position-relative">
                        <i className="fa-solid fa-user"></i>
                        <span
                            className="position-absolute bottom-0 end-0 p-1 bg-warning border border-light rounded-circle"></span>
                      </span>

                                    <span className="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                        <img src="/assets/images/avtar/1.png" alt="" className="img-fluid b-r-50"/>
                        <span
                            className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                      </span>

                                    <span className="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                        <img src="/assets/images/avtar/4.png" alt="" className="img-fluid b-r-50"/>
                        <span
                            className="position-absolute top-0 end-0 d-flex-center bg-warning border-light rounded-circle text-center h-20 w-20 f-s-10 start-30">3</span>
                      </span>
                                    <span className="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                        <img src="/assets/images/avtar/6.png" alt="" className="img-fluid b-r-50"/>
                        <span
                            className="position-absolute top-0 d-flex-center bg-danger border border-light rounded-circle text-center h-20 w-20 f-s-10 start-30"><i
                            className="ti ti-mail"></i></span>
                      </span>
                                </div>
                            </CardBody>

                            <pre className="av6 collapse mt-3" id="avtar6">
                                <code className="language-html">
  {`<div class="card equal-card">
  <div class="card-header">
    <h5>Indicator position and icon</h5>
    <p class="text-muted">Radious avatar text in soft color example</p>
  </div>
  <div class="card-body">
    <div class="d-flex gap-3 flex-wrap">
      <span class="bg-danger h-45 w-45 d-flex-center b-r-50 position-relative">
        <i class="fa-solid fa-user"></i>
        <span class="position-absolute top-5 start-1 top-0 p-1 bg-danger border border-light rounded-circle"></span>
      </span>
      <span class="bg-success h-45 w-45 d-flex-center b-r-50 position-relative">
        <i class="fa-solid fa-user"></i>
        <span class="position-absolute bottom-0 start-1 p-1 bg-success border border-light rounded-circle"></span>
      </span>
      <span class="bg-warning h-45 w-45 d-flex-center b-r-50 position-relative">
        <i class="fa-solid fa-user"></i>
        <span class="position-absolute bottom-0 end-0 p-1 bg-warning border border-light rounded-circle"></span>
      </span>
      <span class="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
        <img src="/assets/images/avtar/1.png" alt="" class="img-fluid b-r-50">
        <span class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
      </span>
      <span class="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
        <img src="/assets/images/avtar/4.png" alt="" class="img-fluid b-r-50">
        <span class="position-absolute top-0 end-0 d-flex-center bg-warning border-light rounded-circle text-center h-20 w-20 f-s-10 start-30">3</span>
      </span>
      <span class="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
        <img src="/assets/images/avtar/6.png" alt="" class="img-fluid b-r-50">
        <span class="position-absolute top-0 d-flex-center bg-danger border border-light rounded-circle text-center h-20 w-20 f-s-10 start-30">
          <i class="ti ti-mail"></i>
        </span>
      </span>
    </div>
  </div>
</div>`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col md={7}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Group with Tooltip</h5>
                                <a data-bs-toggle="collapse" href="#avtar7" aria-expanded="false"
                                   aria-controls="avtar7">
                                    <i className="ti ti-code source" data-source="av7"></i>
                                </a>
                                <p className="text-muted">User group with tooltip</p>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-3 flex-wrap">
                                    <ul className="avatar-group">
                                        <li className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-primary">
                                            <img src="/assets/images/avtar/4.png" alt="" className="img-fluid"/>
                                        </li>
                                        <li className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-success"
                                            data-bs-toggle="tooltip" data-bs-title="Lennon Briggs">
                                            <img src="/assets/images/avtar/5.png" alt="" className="img-fluid"/>
                                        </li>
                                        <li className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-danger"
                                            data-bs-toggle="tooltip" data-bs-title="Maya Horton">
                                            <img src="/assets/images/avtar/6.png" alt="" className="img-fluid"/>
                                        </li>
                                    </ul>

                                    <ul className="avatar-group">
                                        <li className="text-bg-primary h-45 w-45 d-flex-center b-r-50"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="Athena Stewart">
                                            <i className="fa-solid fa-user"></i>
                                        </li>
                                        <li className="text-bg-secondary h-45 w-45 d-flex-center b-r-50"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="Connor Collins">
                                            <i className="fa-solid fa-user"></i>
                                        </li>
                                        <li className="text-bg-success h-45 w-45 d-flex-center b-r-50"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="Raiden Simpson">
                                            <i className="fa-solid fa-user"></i>
                                        </li>
                                    </ul>

                                    <ul className="avatar-group">
                                        <li className="text-bg-danger h-45 w-45 d-flex-center b-r-50"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="Everlee Lambert">
                                            A
                                        </li>
                                        <li className="text-bg-dark h-45 w-45 d-flex-center b-r-50"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="Hunter Scott">
                                            CD
                                        </li>
                                        <li className="text-bg-warning h-45 w-45 d-flex-center b-r-50"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="Hunter Scott">
                                            XYZ
                                        </li>
                                        <li className="text-bg-secondary h-30 w-30 d-flex-center b-r-50"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="2 More">
                                            2+
                                        </li>
                                    </ul>

                                    <ul className="avatar-group">
                                        <li className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-primary b-2-light"
                                            data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                                            <img src="/assets/images/avtar/4.png" alt="" className="img-fluid"/>
                                        </li>
                                        <li className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-success b-2-light"
                                            data-bs-toggle="tooltip" data-bs-title="Eva Bailey">
                                            <img src="/assets/images/avtar/5.png" alt="" className="img-fluid"/>
                                        </li>
                                        <li className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-danger b-2-light"
                                            data-bs-toggle="tooltip" data-bs-title="Michael Hughes">
                                            <img src="/assets/images/avtar/6.png" alt="" className="img-fluid"/>
                                        </li>
                                        <li className="text-bg-secondary h-35 w-35 d-flex-center b-r-50"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="10 More">
                                            10+
                                        </li>
                                    </ul>


                                    <ul className="avatar-group">
                                        <li className="h-45 w-45 d-flex-center b-r-50 text-bg-danger b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                                            <span className="position-absolute top-0 start-2 p-1 bg-danger border border-light rounded-circle"></span>
                                            <img src="/assets/images/avtar/4.png" alt="" className="img-fluid b-r-50 overflow-hidden"/>
                                        </li>
                                        <li className="h-45 w-45 d-flex-center b-r-50 text-bg-success b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                                            <span className="position-absolute top-0 start-2 p-1 bg-success border border-light rounded-circle"></span>
                                            <img src="/assets/images/avtar/1.png" alt="" className="img-fluid b-r-50 overflow-hidden"/>
                                        </li>
                                        <li className="h-45 w-45 d-flex-center b-r-50 text-bg-warning b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                                            <span className="position-absolute top-0 start-2 p-1 bg-warning border border-light rounded-circle"></span>
                                            <img src="/assets/images/avtar/2.png" alt="" className="img-fluid b-r-50 overflow-hidden"/>
                                        </li>
                                        <li className="h-45 w-45 d-flex-center b-r-50 text-bg-info b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                                            <span className="position-absolute top-0 start-2 p-1 bg-info border border-light rounded-circle"></span>
                                            <img src="/assets/images/avtar/3.png" alt="" className="img-fluid b-r-50 overflow-hidden"/>
                                        </li>
                                        <li className="text-bg-primary h-35 w-35 d-flex-center b-r-50"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="5 More">
                                            5+
                                        </li>
                                    </ul>


                                </div>
                            </CardBody>
                            <pre className="av7 collapse mt-3" id="avtar7">
                                <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Group with tooltip</h5>
    <p class="text-muted">User group with tooltip</p>
  </div>
  <div class="card-body">
    <div class="d-flex gap-3 flex-wrap">
      <ul class="avatar-group">
        <li class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-primary">
          <img src="/assets/images/avtar/4.png" alt="" class="img-fluid">
        </li>
        <li class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-success" data-bs-toggle="tooltip" data-bs-title="Lennon Briggs">
          <img src="/assets/images/avtar/5.png" alt="" class="img-fluid">
        </li>
        <li class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-danger" data-bs-toggle="tooltip" data-bs-title="Maya Horton">
          <img src="/assets/images/avtar/6.png" alt="" class="img-fluid">
        </li>
      </ul>

      <ul class="avatar-group">
        <li class="text-bg-primary h-45 w-45 d-flex-center b-r-50" data-bs-toggle="tooltip" data-bs-title="Athena Stewart">
          <i class="fa-solid fa-user"></i>
        </li>
        <li class="text-bg-secondary h-45 w-45 d-flex-center b-r-50" data-bs-toggle="tooltip" data-bs-title="Connor Collins">
          <i class="fa-solid fa-user"></i>
        </li>
        <li class="text-bg-success h-45 w-45 d-flex-center b-r-50" data-bs-toggle="tooltip" data-bs-title="Raiden Simpson">
          <i class="fa-solid fa-user"></i>
        </li>
      </ul>

      <ul class="avatar-group">
        <li class="text-bg-danger h-45 w-45 d-flex-center b-r-50" data-bs-toggle="tooltip" data-bs-title="Everlee Lambert">
          A
        </li>
        <li class="text-bg-dark h-45 w-45 d-flex-center b-r-50" data-bs-toggle="tooltip" data-bs-title="Hunter Scott">
          CD
        </li>
        <li class="text-bg-warning h-45 w-45 d-flex-center b-r-50" data-bs-toggle="tooltip" data-bs-title="Hunter Scott">
          XYZ
        </li>
        <li class="text-bg-secondary h-30 w-30 d-flex-center b-r-50" data-bs-toggle="tooltip" data-bs-title="2 More">
          2+
        </li>
      </ul>

      <ul class="avatar-group">
        <li class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-primary b-2-light" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
          <img src="/assets/images/avtar/4.png" alt="" class="img-fluid">
        </li>
        <li class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-success b-2-light" data-bs-toggle="tooltip" data-bs-title="Eva Bailey">
          <img src="/assets/images/avtar/5.png" alt="" class="img-fluid">
        </li>
        <li class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-danger b-2-light" data-bs-toggle="tooltip" data-bs-title="Michael Hughes">
          <img src="/assets/images/avtar/6.png" alt="" class="img-fluid">
        </li>
        <li class="text-bg-secondary h-35 w-35 d-flex-center b-r-50" data-bs-toggle="tooltip" data-bs-title="10 More">
          10+
        </li>
      </ul>

      <ul class="avatar-group">
        <li class="h-45 w-45 d-flex-center b-r-50 text-bg-danger b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
          <span class="position-absolute top-0 start-2 p-1 bg-danger border border-light rounded-circle"></span>
          <img src="/assets/images/avtar/4.png" alt="" class="img-fluid b-r-50 overflow-hidden">
        </li>
        <li class="h-45 w-45 d-flex-center b-r-50 text-bg-success b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
          <span class="position-absolute top-0 start-2 p-1 bg-success border border-light rounded-circle"></span>
          <img src="/assets/images/avtar/1.png" alt="" class="img-fluid b-r-50 overflow-hidden">
        </li>
        <li class="h-45 w-45 d-flex-center b-r-50 text-bg-warning b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
          <span class="position-absolute top-0 start-2 p-1 bg-warning border border-light rounded-circle"></span>
          <img src="/assets/images/avtar/2.png" alt="" class="img-fluid b-r-50 overflow-hidden">
        </li>
        <li class="h-45 w-45 d-flex-center b-r-50 text-bg-info b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
          <span class="position-absolute top-0 start-2 p-1 bg-info border border-light rounded-circle"></span>
          <img src="/assets/images/avtar/3.png" alt="" class="img-fluid b-r-50 overflow-hidden">
        </li>
        <li class="text-bg-primary h-35 w-35 d-flex-center b-r-50" data-bs-toggle="tooltip" data-bs-title="5 More">
          5+
        </li>
      </ul>
    </div>
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

export default Avatar;