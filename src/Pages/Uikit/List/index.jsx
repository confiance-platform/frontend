import React, {useEffect} from 'react';
import {people} from "@/Data/List/people.js";
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const List = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">List</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
									<span>
									  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
									</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">List</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="list-item">
                    <Col md={6} xl={4}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Default Lists</h5>
                                <a data-bs-toggle="collapse" href="#list1" aria-expanded="false" aria-controls="list1">
                                    <i className="ti ti-code source" data-source="li1"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul className="list-group">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                    <li className="list-group-item">A fourth item</li>
                                    <li className="list-group-item">And a fifth one</li>
                                </ul>
                            </CardBody>

                            <pre className="li1 collapse mt-3" id="list1">
                              <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Default lists</h5>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li>
    </ul>
  </div>
</div>
`}

                              </code>
                            </pre>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Active Items</h5>
                                <a data-bs-toggle="collapse" href="#list2" aria-expanded="false" aria-controls="list2">
                                    <i className="ti ti-code source" data-source="li2"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul className="list-group list-items-active">
                                    <li className="list-group-item list-active active" aria-current="true"><i
                                        className="ti ti-arrow-badge-right"></i> An active item
                                    </li>
                                    <li className="list-group-item list-active"><i
                                        className="ti ti-arrow-badge-right"></i> A second item
                                    </li>
                                    <li className="list-group-item list-active"><i
                                        className="ti ti-arrow-badge-right"></i> A third item
                                    </li>
                                    <li className="list-group-item list-active"><i
                                        className="ti ti-arrow-badge-right"></i> A fourth item
                                    </li>
                                    <li className="list-group-item list-active"><i
                                        className="ti ti-arrow-badge-right"></i> And a fifth one
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>

                        <pre className="li2 collapse mt-3" id="list2">
                <code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Active items</h5>
  </div>
  <div class="card-body">
    <ul class="list-group list-items-active">
      <li class="list-group-item list-active active" aria-current="true">
        <i class="ti ti-arrow-badge-right"></i> An active item
      </li>
      <li class="list-group-item list-active">
        <i class="ti ti-arrow-badge-right"></i> A second item
      </li>
      <li class="list-group-item list-active">
        <i class="ti ti-arrow-badge-right"></i> A third item
      </li>
      <li class="list-group-item list-active">
        <i class="ti ti-arrow-badge-right"></i> A fourth item
      </li>
      <li class="list-group-item list-active">
        <i class="ti ti-arrow-badge-right"></i> And a fifth one
      </li>
    </ul>
  </div>
</div>
`}
                </code>
              </pre>
                    </Col>


                    <Col md={6} xl={4}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Links</h5>
                                <a data-bs-toggle="collapse" href="#list3" aria-expanded="false" aria-controls="list3">
                                    <i className="ti ti-code source" data-source="li3"></i>
                                </a>

                            </CardHeader>
                            <div className="card-body gap-2 d-flex flex-column">
                                <div className="list-group list-link ">
                                    <a href="#" className="list-group-item list-group-item-action active"
                                       aria-current="true">
                                        <i className="ti ti-unlink"></i> The current link item
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action"><i
                                        className="ti ti-unlink"></i> A second
                                        link item</a>
                                    <a href="#" className="list-group-item list-group-item-action"><i
                                        className="ti ti-unlink"></i> A third
                                        link item</a>
                                    <a href="#" className="list-group-item list-group-item-action"><i
                                        className="ti ti-unlink"></i> A fourth
                                        link item</a>
                                    <a className="list-group-item list-group-item-action disabled"><i
                                        className="ti ti-unlink"></i> A disabled
                                        link item</a>
                                </div>
                            </div>

                            <pre className="li3 collapse mt-3" id="list3">
                  <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Links</h5>
  </div>
  <div class="card-body gap-2 d-flex flex-column">
    <div class="list-group list-link">
      <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
        <i class="ti ti-unlink"></i> The current link item
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="ti ti-unlink"></i> A second link item
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="ti ti-unlink"></i> A third link item
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <i class="ti ti-unlink"></i> A fourth link item
      </a>
      <a class="list-group-item list-group-item-action disabled">
        <i class="ti ti-unlink"></i> A disabled link item
      </a>
    </div>
  </div>
</div>
`}

                  </code>
                </pre>
                        </Card>
                    </Col>


                    <Col md={6} xl={4}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Buttons</h5>
                                <a data-bs-toggle="collapse" href="#list4" aria-expanded="false" aria-controls="list4">
                                    <i className="ti ti-code source" data-source="li4"></i>
                                </a>
                            </CardHeader>
                            <div className="card-body gap-2 d-flex flex-column">
                                <div className="list-group list-button">
                                    <button type="button" className="list-group-item list-group-item-action active"
                                            aria-current="true">
                                        <i className="ti ti-arrow-autofit-right"></i> The current button
                                    </button>
                                    <button type="button" className="list-group-item list-group-item-action"><i
                                        className="ti ti-arrow-autofit-right"></i> A second button item
                                    </button>
                                    <button type="button" className="list-group-item list-group-item-action"><i
                                        className="ti ti-arrow-autofit-right"></i> A third button item
                                    </button>
                                    <button type="button" className="list-group-item list-group-item-action"><i
                                        className="ti ti-arrow-autofit-right"></i> A fourth button item
                                    </button>
                                    <button type="button" className="list-group-item list-group-item-action" disabled><i
                                        className="ti ti-arrow-autofit-right"></i> A disabled button
                                        item
                                    </button>
                                </div>
                            </div>

                            <pre className="li4 collapse mt-3" id="list4">
                  <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Buttons</h5>
  </div>
  <div class="card-body gap-2 d-flex flex-column">
    <div class="list-group list-button">
      <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
        <i class="ti ti-arrow-autofit-right"></i> The current button
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        <i class="ti ti-arrow-autofit-right"></i> A second button item
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        <i class="ti ti-arrow-autofit-right"></i> A third button item
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        <i class="ti ti-arrow-autofit-right"></i> A fourth button item
      </button>
      <button type="button" class="list-group-item list-group-item-action" disabled>
        <i class="ti ti-arrow-autofit-right"></i> A disabled button item
      </button>
    </div>
  </div>
</div>`}

                  </code>
                </pre>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Flush</h5>
                                <a data-bs-toggle="collapse" href="#list5" aria-expanded="false" aria-controls="list5">
                                    <i className="ti ti-code source" data-source="li5"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><i className="ti ti-transition-right"></i> An item
                                    </li>
                                    <li className="list-group-item"><i className="ti ti-transition-right"></i> A second
                                        item
                                    </li>
                                    <li className="list-group-item"><i className="ti ti-transition-right"></i> A third
                                        item
                                    </li>
                                    <li className="list-group-item"><i className="ti ti-transition-right"></i> A fourth
                                        item
                                    </li>
                                    <li className="list-group-item"><i className="ti ti-transition-right"></i> And a
                                        fifth one
                                    </li>
                                </ul>
                            </CardBody>

                            <pre className="li5 collapse mt-3" id="list5">
                  <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Flush</h5>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <i class="ti ti-transition-right"></i> An item
      </li>
      <li class="list-group-item">
        <i class="ti ti-transition-right"></i> A second item
      </li>
      <li class="list-group-item">
        <i class="ti ti-transition-right"></i> A third item
      </li>
      <li class="list-group-item">
        <i class="ti ti-transition-right"></i> A fourth item
      </li>
      <li class="list-group-item">
        <i class="ti ti-transition-right"></i> And a fifth one
      </li>
    </ul>
  </div>
</div>`}

                  </code>
                </pre>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Numbered</h5>
                                <a data-bs-toggle="collapse" href="#list6" aria-expanded="false" aria-controls="list6">
                                    <i className="ti ti-code source" data-source="li6"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ol className="list-group list-group-numbered p-1">
                                    <li className="list-group-item d-flex justify-content-between align-items-start text-primary">
                                        <div className="ms-2 w-100">
                                            <div className="w-100 d-flex justify-content-between align-items-center">
                                                <div className="fw-bold me-1">Subheading</div>
                                                <span className="badge text-light-primary rounded-pill">7</span>
                                            </div>
                                            Content for list item

                                        </div>

                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start text-secondary">
                                        <div className="ms-2 w-100">
                                            <div className="w-100 d-flex justify-content-between align-items-center">
                                                <div className="fw-bold me-1">Subheading</div>
                                                <span className="badge text-light-secondary rounded-pill">9</span>
                                            </div>
                                            Content for list item

                                        </div>

                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start text-success">
                                        <div className="ms-2  w-100">
                                            <div className="w-100 d-flex justify-content-between align-items-center">
                                                <div className="fw-bold me-1">Subheading</div>
                                                <span className="badge text-light-success rounded-pill ">11</span>
                                            </div>
                                            Content for list item

                                        </div>

                                    </li>
                                </ol>
                            </CardBody>

                            <pre className="li6 collapse mt-3" id="list6">
                  <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Numbered</h5>
  </div>
  <div class="card-body">
    <ol class="list-group list-group-numbered p-1">
      <li class="list-group-item d-flex justify-content-between align-items-start text-primary">
        <div class="ms-2 w-100">
          <div class="w-100 d-flex justify-content-between align-items-center">
            <div class="fw-bold me-1">Subheading</div>
            <span class="badge text-light-primary rounded-pill">7</span>
          </div>
          Content for list item
          <br/>
        </div>
        <br/>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start text-secondary">
        <div class="ms-2 w-100">
          <div class="w-100 d-flex justify-content-between align-items-center">
            <div class="fw-bold me-1">Subheading</div>
            <span class="badge text-light-secondary rounded-pill">9</span>
          </div>
          Content for list item
          <br/>
        </div>
        <br/>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-start text-success">
        <div class="ms-2 w-100">
          <div class="w-100 d-flex justify-content-between align-items-center">
            <div class="fw-bold me-1">Subheading</div>
            <span class="badge text-light-success rounded-pill">11</span>
          </div>
          Content for list item
          <br/>
        </div>
        <br/>
      </li>
    </ol>
  </div>
</div>`}

                  </code>
                </pre>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Radios</h5>
                                <a data-bs-toggle="collapse" href="#list7" aria-expanded="false" aria-controls="list7">
                                    <i className="ti ti-code source" data-source="li7"></i>
                                </a>
                            </CardHeader>
                            <div className="card-body ">
                                <ul className="list-group d-flex flex-column">
                                    <li className="radio-wrapper ">
                                        <label className="check-box">
                                            <input type="radio" name="radio-group1"/>
                                            <span className="radiomark outline-primary"></span>
                                            <span className="text-primary me-1">Primary</span>
                                        </label>
                                    </li>
                                    <li className="radio-wrapper ">
                                        <label className="check-box">
                                            <input type="radio" name="radio-group1"/>
                                            <span className="radiomark outline-secondary"></span>
                                            <span className="text-secondary me-1">Secondary</span>
                                        </label>
                                    </li>
                                    <li className="radio-wrapper ">
                                        <label className="check-box">
                                            <input type="radio" name="radio-group1"/>
                                            <span className="radiomark outline-success"></span>
                                            <span className="text-success me-1">Success</span>
                                        </label>
                                    </li>
                                    <li className="radio-wrapper ">
                                        <label className="check-box">
                                            <input type="radio" name="radio-group1"/>
                                            <span className="radiomark outline-danger"></span>
                                            <span className="text-danger me-1">Danger</span>
                                        </label>
                                    </li>
                                    <li className="radio-wrapper ">
                                        <label className="check-box">
                                            <input type="radio" name="radio-group1"/>
                                            <span className="radiomark outline-warning"></span>
                                            <span className="text-warning me-1">Warning</span>
                                        </label>
                                    </li>
                                    <li className="radio-wrapper ">
                                        <label className="check-box">
                                            <input type="radio" name="radio-group1"/>
                                            <span className="radiomark outline-info"></span>
                                            <span className="text-info me-1">Info</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <pre className="li7 collapse mt-3" id="list7">
                  <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Radios</h5>
  </div>
  <div class="card-body">
    <ul class="list-group d-flex flex-column">
      <li class="radio-wrapper">
        <label class="check-box">
          <input type="radio" name="radio-group1">
          <span class="radiomark outline-primary"></span>
          <span class="text-primary me-1">Primary</span>
        </label>
      </li>
      <li class="radio-wrapper">
        <label class="check-box">
          <input type="radio" name="radio-group1">
          <span class="radiomark outline-secondary"></span>
          <span class="text-secondary me-1">Secondary</span>
        </label>
      </li>
      <li class="radio-wrapper">
        <label class="check-box">
          <input type="radio" name="radio-group1">
          <span class="radiomark outline-success"></span>
          <span class="text-success me-1">Success</span>
        </label>
      </li>
      <li class="radio-wrapper">
        <label class="check-box">
          <input type="radio" name="radio-group1">
          <span class="radiomark outline-danger"></span>
          <span class="text-danger me-1">Danger</span>
        </label>
      </li>
      <li class="radio-wrapper">
        <label class="check-box">
          <input type="radio" name="radio-group1">
          <span class="radiomark outline-warning"></span>
          <span class="text-warning me-1">Warning</span>
        </label>
      </li>
      <li class="radio-wrapper">
        <label class="check-box">
          <input type="radio" name="radio-group1">
          <span class="radiomark outline-info"></span>
          <span class="text-info me-1">Info</span>
        </label>
      </li>
    </ul>
  </div>
</div>`}

                  </code>
                </pre>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Checkboxes</h5>
                                <a data-bs-toggle="collapse" href="#list8" aria-expanded="false" aria-controls="list8">
                                    <i className="ti ti-code source" data-source="li8"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul className="list-group d-flex flex-column ">
                                    <li className="checkbox-wrapper">
                                        <label className="check-box">
                                            <input type="checkbox"/>
                                            <span className="checkmark outline-primary"></span>
                                            <span className="text-primary me-1">Primary</span>
                                        </label>
                                    </li>
                                    <li className="checkbox-wrapper ">
                                        <label className="check-box">
                                            <input type="checkbox"/>
                                            <span className="checkmark outline-secondary"></span>
                                            <span className="text-secondary me-1">Secondary</span>
                                        </label>
                                    </li>
                                    <li className="checkbox-wrapper ">
                                        <label className="check-box">
                                            <input type="checkbox"/>
                                            <span className="checkmark outline-success"></span>
                                            <span className="text-success me-1">Success</span>
                                        </label>
                                    </li>
                                    <li className="checkbox-wrapper ">
                                        <label className="check-box">
                                            <input type="checkbox"/>
                                            <span className="checkmark outline-danger"></span>
                                            <span className="text-danger me-1">Danger</span>
                                        </label>
                                    </li>
                                    <li className="checkbox-wrapper ">
                                        <label className="check-box">
                                            <input type="checkbox"/>
                                            <span className="checkmark outline-warning"></span>
                                            <span className="text-warning me-1">Warning</span>
                                        </label>
                                    </li>
                                    <li className="checkbox-wrapper ">
                                        <label className="check-box">
                                            <input type="checkbox"/>
                                            <span className="checkmark outline-info"></span>
                                            <span className="text-info me-1">Info</span>
                                        </label>
                                    </li>

                                </ul>
                            </CardBody>

                            <pre className="li8 collapse mt-3" id="list8">
                  <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Checkboxes</h5>
  </div>
  <div class="card-body">
    <ul class="list-group d-flex flex-column">
      <li class="checkbox-wrapper">
        <label class="check-box">
          <input type="checkbox">
          <span class="checkmark outline-primary"></span>
          <span class="text-primary me-1">Primary</span>
        </label>
      </li>
      <li class="checkbox-wrapper">
        <label class="check-box">
          <input type="checkbox">
          <span class="checkmark outline-secondary"></span>
          <span class="text-secondary me-1">Secondary</span>
        </label>
      </li>
      <li class="checkbox-wrapper">
        <label class="check-box">
          <input type="checkbox">
          <span class="checkmark outline-success"></span>
          <span class="text-success me-1">Success</span>
        </label>
      </li>
      <li class="checkbox-wrapper">
        <label class="check-box">
          <input type="checkbox">
          <span class="checkmark outline-danger"></span>
          <span class="text-danger me-1">Danger</span>
        </label>
      </li>
      <li class="checkbox-wrapper">
        <label class="check-box">
          <input type="checkbox">
          <span class="checkmark outline-warning"></span>
          <span class="text-warning me-1">Warning</span>
        </label>
      </li>
      <li class="checkbox-wrapper">
        <label class="check-box">
          <input type="checkbox">
          <span class="checkmark outline-info"></span>
          <span class="text-info me-1">Info</span>
        </label>
      </li>
      <br/>
    </ul>
  </div>
</div>`}

                  </code>
                </pre>
                        </Card>
                    </Col>

                    <div className="col-xl-4">
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Horizontal</h5>
                                <a data-bs-toggle="collapse" href="#list9" aria-expanded="false" aria-controls="list9">
                                    <i className="ti ti-code source" data-source="li9"></i>
                                </a>
                            </CardHeader>
                            <CardBody className="list-horizontal gap-2 d-flex flex-column align-items-center">
                                <ul className="list-group list-group-horizontal">
                                    <li className="list-group-item b-1-primary bg-light-primary">An item</li>
                                    <li className="list-group-item b-1-primary bg-light-primary">A second item</li>
                                    <li className="list-group-item b-1-primary bg-light-primary">A third item</li>
                                </ul>
                                <ul className="list-group list-group-horizontal ">
                                    <li className="list-group-item b-r-1 b-1-secondary">An item</li>
                                    <li className="list-group-item b-r-1 b-1-secondary">A second item</li>
                                    <li className="list-group-item b-r-1 b-1-secondary">A third item</li>
                                </ul>
                                <ul className="list-group list-group-horizontal ">
                                    <li className="list-group-item list-radius-left-horizontal b-1-success">An item
                                    </li>
                                    <li className="list-group-item b-1-success">A second item</li>
                                    <li className="list-group-item list-radius-right-horizontal b-1-success">A third
                                        item
                                    </li>
                                </ul>
                                <ul className="list-group list-group-horizontal">
                                    <li className="list-group-item  b-1-danger">An item</li>
                                    <li className="list-group-item b-1-danger">A second item</li>
                                    <li className="list-group-item  b-1-danger">A third item</li>
                                </ul>

                            </CardBody>

                            <pre className="li9 collapse mt-3" id="list9">
                  <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Horizontal</h5>
  </div>
  <div class="card-body list-horizontal gap-2 d-flex flex-column align-items-center">
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item b-1-primary bg-light-primary">An item</li>
      <li class="list-group-item b-1-primary bg-light-primary">A second item</li>
      <li class="list-group-item b-1-primary bg-light-primary">A third item</li>
    </ul>
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item b-r-1 b-1-secondary">An item</li>
      <li class="list-group-item b-r-1 b-1-secondary">A second item</li>
      <li class="list-group-item b-r-1 b-1-secondary">A third item</li>
    </ul>
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item list-radius-left-horizontal b-1-success">An item</li>
      <li class="list-group-item b-1-success">A second item</li>
      <li class="list-group-item list-radius-right-horizontal b-1-success">A third item</li>
    </ul>
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item b-1-danger">An item</li>
      <li class="list-group-item b-1-danger">A second item</li>
      <li class="list-group-item b-1-danger">A third item</li>
    </ul>
    <br/>
  </div>
</div>`}

                  </code>
                </pre>
                        </Card>
                    </div>

                    <Col lg={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Variants</h5>
                                <a data-bs-toggle="collapse" href="#list10" aria-expanded="false"
                                   aria-controls="list10">
                                    <i className="ti ti-code source" data-source="li10"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul className="list-group">
                                    <li className="list-group-item">A simple default list group item</li>
                                    <li className="list-group-item text-light-primary">A simple primary list group
                                        item
                                    </li>
                                    <li className="list-group-item text-light-secondary">A simple secondary list
                                        group item
                                    </li>
                                    <li className="list-group-item text-light-success">A simple success list group
                                        item
                                    </li>
                                    <li className="list-group-item text-light-danger">A simple danger list group
                                        item
                                    </li>
                                    <li className="list-group-item text-light-warning">A simple warning list group
                                        item
                                    </li>
                                    <li className="list-group-item text-light-info">A simple info list group item
                                    </li>
                                    <li className="list-group-item text-light-light">A simple light list group item
                                    </li>
                                    <li className="list-group-item text-light-dark">A simple dark list group item
                                    </li>
                                </ul>
                            </CardBody>

                            <pre className="li10 collapse mt-3" id="list10">
                  <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Variants</h5>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">A simple default list group item</li>
      <li class="list-group-item text-light-primary">A simple primary list group item</li>
      <li class="list-group-item text-light-secondary">A simple secondary list group item</li>
      <li class="list-group-item text-light-success">A simple success list group item</li>
      <li class="list-group-item text-light-danger">A simple danger list group item</li>
      <li class="list-group-item text-light-warning">A simple warning list group item</li>
      <li class="list-group-item text-light-info">A simple info list group item</li>
      <li class="list-group-item text-light-light">A simple light list group item</li>
      <li class="list-group-item text-light-dark">A simple dark list group item</li>
    </ul>
  </div>
</div>`}

                  </code>
                </pre>
                        </Card>
                    </Col>


                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Custom Content</h5>
                            </CardHeader>
                            <CardBody>
                                <ul className="list-group list-content">
                                    <li className="list-group-item list-group-item-action active"
                                        aria-current="true">
                                        <div className="position-absolute">
                        <span className="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                          <img src="/assets/images/avtar/1.png" alt="" className="img-fluid b-r-50"/>
                          <span
                              className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                        </span>
                                        </div>
                                        <div className="mg-s-60">
                                            <h6 className="mb-0">Allen Rollins</h6>
                                            <p className="mb-0 text-secondary">Allen@509</p>
                                            <div className="mt-2">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nam
                                                    accusantium ipsum?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <small>3 days ago</small>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                        <div className="position-absolute">
                        <span className="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                          <img src="/assets/images/avtar/4.png" alt="" className="img-fluid b-r-50"/>
                          <span
                              className="position-absolute top-0 end-0 d-flex-center bg-warning border-light rounded-circle text-center h-20 w-20 f-s-10 start-30">3</span>
                        </span>
                                        </div>
                                        <div className="mg-s-60">
                                            <h6 className="mb-0">Holly Mckenzie</h6>
                                            <p className="mb-0 text-secondary">Holly@567</p>
                                            <div className="mt-2">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nam
                                                    accusantium ipsum?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <small>3 days ago</small>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                        <div className="position-absolute">
                        <span className="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                          <img src="/assets/images/avtar/6.png" alt="" className="img-fluid b-r-50"/>
                          <span
                              className="position-absolute top-0 d-flex-center bg-danger border border-light rounded-circle text-center h-20 w-20 f-s-10 start-30"><i
                              className="ti ti-mail"></i></span>
                        </span>
                                        </div>
                                        <div className="mg-s-60">
                                            <h6 className="mb-0">Justin Park</h6>
                                            <p className="mb-0 text-secondary">Park@001</p>
                                            <div className="mt-2">
                                                <p className="mb-0">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nam
                                                    accusantium ipsum?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <small>3 days ago</small>
                                        </div>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} xxl={4}>
                        <Card>
                            <CardHeader>
                                <h5>Contacts</h5>
                            </CardHeader>
                            <CardBody>
                                <ul className="list-group b-r-0 list-contact-box">
                                    <li className="list-group-item">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <div className="d-flex align-items-center">
                                                    <input className="form-check-input me-3" type="checkbox"
                                                           id="listcheck"/>
                                                    <div
                                                        className="w-40 d-flex-center b-r-50 position-relative bg-primary">
                                                        <img src="/assets/images/avtar/09.png" alt=""
                                                             className="w-40 h-40 object-fit-cover img-fluid b-r-50"/>
                                                        <span
                                                            className="position-absolute top-0 end-0 p-1 bg-secondary border border-light rounded-circle"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-truncate me-1">
                                                <h6 className="mb-0">Leland Franecki</h6>
                                                <div className="text-secondary">He wanted her job, and it would be easy
                                                    enough..
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <div className="d-flex align-items-center">
                                                    <input className="form-check-input me-3" type="checkbox"
                                                           id="listcheck1"/>
                                                    <div
                                                        className="w-40 d-flex-center b-r-50 position-relative bg-dark">
                                                        <img src="/assets/images/avtar/2.png " alt=""
                                                             className="w-40 h-40 object-fit-cover img-fluid b-r-50"/>
                                                        <span
                                                            className="position-absolute top-0 end-0 p-1 bg-secondary border border-light rounded-circle"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-truncate me-1">
                                                <h6 className="mb-0">Rafael Veum</h6>
                                                <div className="text-secondary">He didn't want to go out on such a night
                                                    but...
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="list-group-item list-group-content">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <div className="d-flex align-items-center">
                                                    <input className="form-check-input me-3" type="checkbox"
                                                           id="listcheck2" defaultChecked/>
                                                    <div
                                                        className="w-40 d-flex-center b-r-50 position-relative bg-danger">
                                                        <img src="/assets/images/avtar/11.png" alt=""
                                                             className="w-40 h-40 object-fit-cover img-fluid b-r-50"/>
                                                        <span
                                                            className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-truncate me-1">
                                                <h6 className="mb-0">Ray Schamberger</h6>
                                                <div className="text-secondary">The girl shouldn't have been sacked but
                                                    if he said..
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <div className="d-flex align-items-center">
                                                    <input className="form-check-input me-3" type="checkbox"
                                                           id="listcheck3"/>
                                                    <div
                                                        className="w-40 d-flex-center b-r-50 position-relative bg-secondary">
                                                        <img src="/assets/images/avtar/12.png" alt=""
                                                             className="w-40 h-40 object-fit-cover img-fluid b-r-50"/>
                                                        <span
                                                            className="position-absolute top-0 end-0 p-1 bg-secondary border border-light rounded-circle"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-truncate me-1">
                                                <h6 className="mb-0">Mack Gutkowski</h6>
                                                <div className="text-secondary">Everything about her was a lie</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <div className="d-flex align-items-center">
                                                    <input className="form-check-input me-3" type="checkbox"
                                                           id="listcheck4"/>
                                                    <div
                                                        className="w-40 d-flex-center b-r-50 position-relative bg-success">
                                                        <img src="/assets/images/avtar/16.png" alt=""
                                                             className="w-40 h-40 object-fit-cover img-fluid b-r-50"/>
                                                        <span
                                                            className="position-absolute top-0 end-0 p-1 bg-secondary border border-light rounded-circle"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-truncate me-1">
                                                <h6 className="mb-0">Mack Gutkowski</h6>
                                                <div className="text-secondary">She had followed the woman for days and
                                                    at last her..
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-content">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <div className="d-flex align-items-center">
                                                    <input className="form-check-input me-3" type="checkbox"
                                                           id="listcheck5" defaultChecked/>
                                                    <div
                                                        className="w-40 d-flex-center b-r-50 position-relative bg-info">
                                                        <img src="/assets/images/avtar/3.png" alt=""
                                                             className="w-40 h-40 object-fit-cover img-fluid b-r-50"/>
                                                        <span
                                                            className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-truncate me-1">
                                                <h6 className="mb-0">Lee Rosenbaum</h6>
                                                <div className="text-secondary">He had kept their mother alive in their
                                                    thoughts..
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} xxl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>People</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="list-group list-group-flush app-scroll overflow-auto list-people">
                                    {Object.entries(people).map(([key, peoples]) => (
                                        <div key={key}> {/* key for the group */}
                                            <div className="list-group-header sticky-top bg-white p-l-10 f-w-500 f-s-16">
                                                {key}
                                            </div>
                                            {peoples.map((data) => (
                                                <div className="list-group-item" key={data.id}> {/* Use data.id as the key */}
                                                    <div className="row">
                                                        <div className="col-auto">
                                                            <a href="#">
                                                                <div className="h-40 w-40 d-flex-center b-r-10 overflow-hidden text-bg-primary">
                                                                    <img src={data.image} alt="" className="img-fluid"/>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="col text-truncate">
                                                            <a href="#" className="text-body d-block">{data.name}</a>
                                                            <div className="text-muted text-truncate">{data.description}</div>
                                                        </div>
                                                        <div className="col-1 icon">
                                                            <i className="ti ti-mail"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} xxl={4}>
                        <Card>
                            <CardHeader>
                                <h5>Contacts List</h5>
                            </CardHeader>
                            <CardBody className="bg-light-light">
                                <Row className="contact-list">
                                    <Col md={6}>
                                        <div className="contact-listbox mb-3">
                                            <div className="text-center">
                                                <img src="/assets/images/avtar/4.png" alt=""
                                                     className="w-40 h-40 object-fit-cover img-fluid bg-primary b-r-50"/>
                                            </div>
                                            <div className="contact-stared">
                                                <i className="ti ti-star-filled"></i>
                                            </div>
                                            <h6 className="mb-0 mt-2">Omar Krajcik</h6>
                                            <p>+3584227649850</p>
                                            <p>(UAS)</p>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className="contact-listbox mb-3">
                                            <div className="text-center">
                                                <img src="/assets/images/avtar/2.png" alt=""
                                                     className="w-40 h-40 object-fit-cover img-fluid bg-warning b-r-50"/>
                                            </div>
                                            <div className="contact-stared">
                                                <i className="ti ti-star-filled"></i>
                                            </div>
                                            <h6>Rudy Bode</h6>
                                            <p>+3587394408149</p>
                                            <p>(UAS)</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="contact-listbox mb-3">
                                            <div className="text-center">
                                                <img src="/assets/images/avtar/10.png" alt=""
                                                     className="w-40 h-40 object-fit-cover img-fluid bg-danger b-r-50"/>
                                            </div>
                                            <div className="contact-stared">
                                                <i className="ti ti-star-filled"></i>
                                            </div>
                                            <h6 className="mb-0 mt-1">Charlie Christiansen</h6>
                                            <p>+18402727121</p>
                                            <p>(UAS)</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="contact-listbox mb-3">
                                            <div className="text-center">
                                                <img src="/assets/images/avtar/09.png" alt=""
                                                     className="w-40 h-40 object-fit-cover img-fluid bg-dark b-r-50"/>
                                            </div>
                                            <div className="contact-stared">
                                                <i className="ti ti-star-filled"></i>
                                            </div>
                                            <h6>Lance Schiller</h6>
                                            <p>+16286413791</p>
                                            <p>(Drivers,New zealand)</p>

                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="contact-listbox">
                                            <div className="text-center">
                                                <img src="/assets/images/avtar/08.png" alt=""
                                                     className="w-40 h-40 object-fit-cover img-fluid bg-secondary b-r-50"/>
                                            </div>
                                            <div className="contact-stared">
                                                <i className="ti ti-star-filled"></i>
                                            </div>
                                            <h6>Troy Cartwright</h6>
                                            <p>+18607148019</p>
                                            <p>(UAS)</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="contact-listbox mt-3 mt-md-0">
                                            <div className="text-center">
                                                <img src="/assets/images/avtar/07.png" alt=""
                                                     className="w-40 h-40 object-fit-cover img-fluid bg-success b-r-50"/>
                                            </div>
                                            <div className="contact-stared">
                                                <i className="ti ti-star-filled"></i>
                                            </div>
                                            <h6>Israel Kshlerin</h6>
                                            <p>+16805796236</p>
                                            <p>(Drivers,New zealand)</p>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default List;