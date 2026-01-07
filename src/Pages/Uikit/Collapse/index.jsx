import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Collapse = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Collapse</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
									<span>
									  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
									</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Collapse</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Basic collapse</h5>
                                <a data-bs-toggle="collapse" href="#collapse1"
                                   aria-expanded="false" aria-controls="collapse1">
                                    <i className="ti ti-code source" data-source="coll1"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <p className="d-inline-flex flex-wrap gap-1">
                                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample"
                                       role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Link with href
                                    </a>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseExample" aria-expanded="false"
                                            aria-controls="collapseExample">
                                        Button with data-bs-target
                                    </button>
                                </p>
                                <div className="collapse" id="collapseExample">
                                    <div className="card card-body dashed-1-secondary">
                                        Some placeholder content for the collapse component. This panel is hidden by
                                        default but revealed when the user activates the relevant trigger.
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="coll1 collapse mt-3" id="collapse1">
  <code className="language-html">

{`
<div class="card">
  <div class="card-header">
    <h5>Basic collapse</h5>
  </div>
  <div class="card-body">
    <p class="d-inline-flex gap-1">
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Link with href
      </a>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Button with data-bs-target
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div>

`}

  </code>
</pre>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Horizontal </h5>
                                <a data-bs-toggle="collapse" href="#collapse2"
                                   aria-expanded="false" aria-controls="collapse2">
                                    <i className="ti ti-code source" data-source="coll2"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseWidthExample" aria-expanded="false"
                                            aria-controls="collapseWidthExample">
                                        Toggle width collapse
                                    </button>
                                </p>
                                <div>
                                    <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                        <div className="card card-body dashed-1-secondary w-280">
                                            This is some placeholder content for a horizontal collapse. It's hidden by
                                            default and shown when triggered.
                                        </div>
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="coll2 collapse mt-3" id="collapse2">
  <code className="language-html">
      {`
  <div class="card">
  <div class="card-header">
    <h5>Horizontal</h5>
  </div>
  <div class="card-body">
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
      Toggle width collapse
    </button>
    <div style="min-height: 120px;">
      <div class="collapse collapse-horizontal" id="collapseWidthExample">
        <div class="card card-body" style="width: 300px;">
          This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
        </div>
      </div>
    </div>
  </div>
</div>

 `}

  </code>
</pre>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5 className="txt-ellipsis">Multiple toggles and targets</h5>
                                <a data-bs-toggle="collapse" href="#collapse3"
                                   aria-expanded="false" aria-controls="collapse3">
                                    <i className="ti ti-code source" data-source="coll3"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <p className="d-inline-flex flex-wrap gap-1">
                                    <a className="btn btn-primary" data-bs-toggle="collapse"
                                       href="#multiCollapseExample1" role="button" aria-expanded="false"
                                       aria-controls="multiCollapseExample1">Toggle first element</a>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#multiCollapseExample2" aria-expanded="false"
                                            aria-controls="multiCollapseExample2">Toggle second element
                                    </button>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                            data-bs-target=".multi-collapse" aria-expanded="false"
                                            aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both
                                        elements
                                    </button>
                                </p>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                                            <div className="card card-body dashed-1-secondary">
                                                Some placeholder content for the first collapse component of this
                                                multi-collapse example. This panel is hidden by default but revealed
                                                when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <div className="collapse multi-collapse" id="multiCollapseExample2">
                                            <div className="card card-body dashed-1-secondary">
                                                Some placeholder content for the second collapse component of this
                                                multi-collapse example. This panel is hidden by default but revealed
                                                when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>

                            <pre className="coll3 collapse mt-3" id="collapse3">
  <code className="language-html">
      {`
  <div class="card">
  <div class="card-header">
    <h5>Multiple toggles and targets</h5>
  </div>
  <div class="card-body">
    <p class="d-inline-flex gap-1">
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
    </p>
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample1">
          <div class="card card-body">
            Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample2">
          <div class="card card-body">
            Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `}

  </code>
</pre>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Collapse;