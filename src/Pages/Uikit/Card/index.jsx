import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Col, Container, Row, Card, CardBody, CardHeader, CardFooter} from "reactstrap";

const Cards = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Cards</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
									<span>
									  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
									</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Cards</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xl={3}>
                        <Card className="card">
                            <CardHeader className="code-header">
                                <h5>Card Header</h5>
                                <a data-bs-toggle="collapse" href="#cardheader1" aria-expanded="false"
                                   aria-controls="cardheader1">
                                    <i className="ti ti-code source" data-source="card1"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h6>Card body</h6>
                                <p>With supporting text below as a natural lead-in to additional content.</p>
                            </CardBody>
                        </Card>
                        <pre className="card1 collapse mt-3" id="cardheader1">
                            <code className="language-html">
{`<div class="card-body">
    <h6>Card body</h6>
    <p>...</p>
</div>`}
                            </code>
                        </pre>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="card">
                            <CardBody>
                                <h6>Card Body</h6>
                                <p>With supporting text below as a natural lead-in to additional content.</p>
                            </CardBody>
                            <div className="card-footer code-footer">
                                <h5>Card Footer</h5>
                                <a data-bs-toggle="collapse" href="#cardheader2" aria-expanded="false"
                                   aria-controls="cardheader2">
                                    <i className="ti ti-code source" data-source="card2"></i>
                                </a>
                            </div>
                        </Card>
                        <pre className="card2 collapse mt-3" id="cardheader2">
                            <code className="language-html">
{`<div class="card-body">
    <h6>Card body</h6>
    <p>...</p>
</div>`}
                            </code>
                        </pre>
                    </Col>
                    <Col md={6} xl={3}>
                        <div className="card border-0">
                            <CardHeader className="code-header">
                                <h5>Card Header</h5>
                                <a data-bs-toggle="collapse" href="#cardheader3" aria-expanded="false"
                                   aria-controls="cardheader3">
                                    <i className="ti ti-code source" data-source="card3"></i>
                                </a>
                            </CardHeader>
                            <CardBody className=" pb-1">
                                <p>With supporting text below as a natural lead-in to additional content below as a
                                    natural.</p>
                            </CardBody>
                            <CardFooter>
                                <h5>Card Footer</h5>
                            </CardFooter>
                        </div>
                        <pre className="card3 collapse mt-3" id="cardheader3">
                            <code className="language-html">
{`<div class="card-body">
    <h6>Card body</h6>
    <p>...</p>
</div>`}
                            </code>
                        </pre>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect">
                            <CardHeader className="code-header">
                                <h5>Hover Effect</h5>
                                <a data-bs-toggle="collapse" href="#cardheader4" aria-expanded="false"
                                   aria-controls="cardheader4">
                                    <i className="ti ti-code source" data-source="card4"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h6>Card body</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                        <pre className="card4 collapse my-3" id="cardheader4">
                            <code className="language-html">
{`<div class="card-body">
    <h6>Card body</h6>
    <p>...</p>
</div>`}
                            </code>
                        </pre>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect card-primary">
                            <CardHeader className="code-header">
                                <h5>Primary card</h5>
                                <a data-bs-toggle="collapse" href="#cardheader5" aria-expanded="false"
                                   aria-controls="cardheader5">
                                    <i className="ti ti-code source" data-source="card5"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h6>Card body</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                        <pre className="card5 collapse mt-3" id="cardheader5">
                            <code className="language-html">

{`<div class="col-md-6 col-xl-3">
  <div class="card hover-effect card-primary">
    <div class="card-header">
      <h5>Secondary card</h5>
    </div>
    <div class="card-body">
      <h6>Card body</h6>
      <p>...</p>
    </div>
  </div>
</div>
`}

                            </code>
                        </pre>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect card-secondary">
                            <CardHeader className="code-header">
                                <h5>Secondary card</h5>
                                <a data-bs-toggle="collapse" href="#cardheader6" aria-expanded="false"
                                   aria-controls="cardheader6">
                                    <i className="ti ti-code source" data-source="card6"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h6>Card body</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                        <pre className="card6 collapse mt-3" id="cardheader6">
    <code className="language-html">

{`<div class="col-md-6 col-xl-3">
  <div class="card hover-effect card-secondary">
    <div class="card-header">
      <h5>Secondary card</h5>
    </div>
    <div class="card-body">
      <h6>Card body</h6>
      <p>...</p>
    </div>
  </div>
</div>
`}

    </code>
</pre>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect card-success">
                            <CardHeader className="code-header">
                                <h5>Success card</h5>
                                <a data-bs-toggle="collapse" href="#cardheader7" aria-expanded="false"
                                   aria-controls="cardheader7">
                                    <i className="ti ti-code source" data-source="card7"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h6>Card body</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                        <pre className="card7 collapse mt-3" id="cardheader7">
                            <code className="language-html">

{`<div class="col-md-6 col-xl-3">
  <div class="card hover-effect card-success">
    <div class="card-header">
      <h5>Secondary card</h5>
    </div>
    <div class="card-body">
      <h6>Card body</h6>
      <p>...</p>
    </div>
  </div>
</div>
`}

                            </code>
                        </pre>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect card-danger">
                            <CardHeader className="code-header">
                                <h5>Danger card</h5>
                                <a data-bs-toggle="collapse" href="#cardheader8" aria-expanded="false"
                                   aria-controls="cardheader8">
                                    <i className="ti ti-code source" data-source="card8"></i>
                                </a>

                            </CardHeader>
                            <CardBody>
                                <h6>Card body</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                        <pre className="card8 collapse mt-3" id="cardheader8">
                            <code className="language-html">

{`<div class="col-md-6 col-xl-3">
  <div class="card hover-effect card-danger">
    <div class="card-header">
      <h5>Secondary card</h5>
    </div>
    <div class="card-body">
      <h6>Card body</h6>
      <p>...</p>
    </div>
  </div>
</div>
`}

                            </code>
                        </pre>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect card-outline-primary">
                            <CardHeader className="code-header">
                                <h5>Outline card</h5>
                                <a data-bs-toggle="collapse" href="#cardheader9" aria-expanded="false"
                                   aria-controls="cardheader9">
                                    <i className="ti ti-code source" data-source="card9"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h6>Card body</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                        <pre className="card9 collapse mt-3" id="cardheader9">
                            <code className="language-html">

{`<div class="col-md-6 col-xl-3">
  <div class="card hover-effect card-outline-secondary">
    <div class="card-header">
      <h5>Outline secondary card</h5>
    </div>
    <div class="card-body">
      <h6>Card body</h6>
      <p>...</p>
    </div>
  </div>
</div>`}

                            </code>
                        </pre>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect card-outline-secondary">
                            <CardHeader className="code-header">
                                <h5>Secondary</h5>
                                <a data-bs-toggle="collapse" href="#cardheader10" aria-expanded="false"
                                   aria-controls="cardheader10">
                                    <i className="ti ti-code source" data-source="card10"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h6>Card body</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                        <pre className="card10 collapse mt-3" id="cardheader10">
                            <code className="language-html">

{`<div class="col-md-6 col-xl-3">
  <div class="card hover-effect card-outline-secondary">
    <div class="card-header">
      <h5>Outline secondary card</h5>
    </div>
    <div class="card-body">
      <h6>Card body</h6>
      <p>...</p>
    </div>
  </div>
</div>`}

                            </code>
                        </pre>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect card-light-primary">
                            <CardHeader className="code-header">
                                <h5>Light card</h5>
                                <a data-bs-toggle="collapse" href="#cardheader12" aria-expanded="false"
                                   aria-controls="cardheader12">
                                    <i className="ti ti-code source" data-source="card10"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h6>Card body</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                        <pre className="card12 collapse mt-3" id="cardheader12">
                            <code className="language-html">

{`<div class="col-md-6 col-xl-3">
  <div class="card hover-effect card-light-primary">
    <div class="card-header">
      <h5>Light primary card</h5>
    </div>
    <div class="card-body">
      <h6>Card body</h6>
      <p>...</p>
    </div>
  </div>
</div>`}

                            </code>
                        </pre>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect card-light-secondary">
                            <CardHeader className="code-header">
                                <h5>Secondary</h5>
                                <a data-bs-toggle="collapse" href="#cardheader11" aria-expanded="false"
                                   aria-controls="cardheader11">
                                    <i className="ti ti-code source" data-source="card11"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <h6>Card Body</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                        <pre className="card11 collapse mt-3" id="cardheader11">
                            <code className="language-html">

{`<div class="col-md-6 col-xl-3">
  <div class="card hover-effect card-light-secondary">
    <div class="card-header">
      <h5>Light primary card</h5>
    </div>
    <div class="card-body">
      <h6>Card body</h6>
      <p>...</p>
    </div>
  </div>
</div>`}
                            </code>
                        </pre>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect card-primary">
                            <CardBody>
                                <i className="ti ti-alarm icon-bg"></i>
                                <h6>Card With icon</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect card-secondary">
                            <CardBody>
                                <i className="ti ti-bug icon-bg"></i>
                                <h6>Card With icon</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect card-light-primary">
                            <CardBody>
                                <i className="ti ti-briefcase icon-bg"></i>
                                <h6>Card With icon</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect card-light-secondary">
                            <CardBody>
                                <i className="ti ti-award icon-bg"></i>
                                <h6>Card With icon</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect border-primary border-top border-4">
                            <CardBody>
                                <h6>Card With Top border</h6>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect border-secondary border-bottom border-4">
                            <CardBody>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                                <h6 className="mb-0 mt-2">Card With Bottom border</h6>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect border-success border-start border-4">
                            <CardBody>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                                <h6 className="mb-0 mt-2">Card With left border</h6>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="hover-effect border-danger border-end border-4">

                            <CardBody>
                                <p>With supporting text below lead-in to additional content below as a natural.</p>
                                <h6 className="mb-0 mt-2">Card With right border</h6>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} xxl={4}>
                        <Card className="hover-effect">
                            <img src="/assets/images/blog-app/06.jpg" className="card-img-top" alt="..."/>
                            <CardBody>
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 min's
                                    ago</small></p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} xxl={4}>
                        <Card className=" hover-effect">
                            <CardBody>
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to
                                    additional This content.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 min's
                                    ago</small></p>
                            </CardBody>
                            <img src="/assets/images/blog-app/02.jpg" className="card-img-bottom" alt="..."/>
                        </Card>
                    </Col>
                    <Col xxl={4}>
                        <Row>
                            <Col xxl={12} md={6}>
                                <Card className="hover-effect">
                                    <CardHeader>
                                        <h6 className="mb-0 mt-2 f-w-600">My Profile</h6>
                                    </CardHeader>
                                    <CardBody>
                                        <p>I am a keen, hard working, reliable and excellent time keeper. I am a bright
                                            and receptive
                                            person
                                        </p>
                                    </CardBody>
                                    <CardFooter>
                                        <Row>
                                            <div className="col-6">
                                                <i className="ti ti-heart-filled text-danger f-s-16 m-r-5"> </i>
                                                <span> 60 likes </span>
                                            </div>
                                            <div className="col-6">
                                                <ul className="avatar-group float-end">
                                                    <li className="h-25 w-25 d-flex-center b-r-50 text-bg-danger b-2-light position-relative"
                                                        data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                                                        <img src="/assets/images/avtar/4.png" alt=""
                                                             className="img-fluid b-r-50 overflow-hidden"/>
                                                    </li>
                                                    <li className="h-25 w-25 d-flex-center b-r-50 text-bg-success b-2-light position-relative"
                                                        data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                                                        <img src="/assets/images/avtar/1.png" alt=""
                                                             className="img-fluid b-r-50 overflow-hidden"/>
                                                    </li>
                                                    <li className="h-25 w-25 d-flex-center b-r-50 text-bg-warning b-2-light position-relative"
                                                        data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                                                        <img src="/assets/images/avtar/2.png" alt=""
                                                             className="img-fluid b-r-50 overflow-hidden"/>
                                                    </li>
                                                    <li className="h-25 w-25 d-flex-center b-r-50 text-bg-info b-2-light position-relative"
                                                        data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                                                        <img src="/assets/images/avtar/3.png" alt=""
                                                             className="img-fluid b-r-50 overflow-hidden"/>
                                                    </li>
                                                    <li className="text-bg-primary h-25 w-25 d-flex-center b-r-50"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-title="5 More">
                                                        5+
                                                    </li>
                                                </ul>
                                            </div>
                                        </Row>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col xxl={12} md={6}>
                                <Card className="hover-effect">
                                    <CardHeader>
                                        Featured
                                    </CardHeader>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">An item</li>
                                        <li className="list-group-item">A second item</li>
                                        <li className="list-group-item">A third item</li>
                                        <li className="list-group-item">A Fourth item</li>
                                    </ul>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <div className="col-xl-6">
                        <div className="card mb-3 hover-effect">
                            <div className="row g-0">
                                <div className="col-md-6 col-xl-4">
                                    <img src="/assets/images/blog-app/08.jpg" className="img-fluid" alt="..."/>
                                </div>
                                <div className="col-md-6 col-xl-8">
                                    <CardBody>
                                        <h5 className="card-title">Card Title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to
                                            additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3
                                            min's ago</small></p>
                                    </CardBody>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <Card className="hover-effect equal-card tab-card">
                            <CardBody>
                                <ul className="nav nav-tabs tab-light-primary" id="Light" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="description-tab" data-bs-toggle="tab"
                                                data-bs-target="#description-tab-pane" type="button" role="tab"
                                                aria-controls="description-tab-pane" aria-selected="true"><i
                                            className="ti ti-lifebuoy pe-1"></i>
                                            Description
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="howowrk-tab" data-bs-toggle="tab"
                                                data-bs-target="#howowrk-tab-pane" type="button" role="tab"
                                                aria-controls="howowrk-tab-pane"
                                                aria-selected="false" tabIndex="-1"><i
                                            className="ti ti-keyboard-show pe-1"></i> How It
                                            Works
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="drawbacks-tab" data-bs-toggle="tab"
                                                data-bs-target="#drawbacks-tab-pane" type="button" role="tab"
                                                aria-controls="drawbacks-tab-pane" aria-selected="false" tabIndex="-1">
                                            <i
                                                className="ti ti-file-dislike pe-1"></i>Drawbacks
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="LightContent">
                                    <div className="tab-pane fade active show" id="description-tab-pane" role="tabpanel"
                                         aria-labelledby="description-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudo class to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudo class to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>
                                    <div className="tab-pane fade" id="howowrk-tab-pane" role="tabpanel"
                                         aria-labelledby="howowrk-tab"
                                         tabIndex="0">
                                        <ol>
                                            <li>Show only the last tab.</li>
                                            <li>If <code>:target</code> matches a tab, show it and hide all following
                                                siblings.
                                            </li>
                                            <li>Matches a tab, show it and hide all following siblings.</li>
                                        </ol>
                                    </div>
                                    <div className="tab-pane fade" id="drawbacks-tab-pane" role="tabpanel"
                                         aria-labelledby="drawbacks-tab"
                                         tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudo class to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudo class to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-xl-6">
                        <div className="card mb-3  hover-effect">
                            <div className="row g-0">
                                <div className="col-md-6 col-xl-8">
                                    <CardBody>
                                        <h5 className="card-title">Card Title</h5>
                                        <p className="card-text">This is a wider card with supporting text with
                                            supporting little bit longer
                                            below as a natural below as a natural lead-in to additional content. This
                                            content is a little
                                            bit longer.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3
                                            min's ago</small></p>
                                    </CardBody>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <img src="/assets/images/blog-app/09.jpg" className="img-fluid" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <Card className="hover-effect equal-card tab-card">
                            <CardBody>
                                <ul className="nav nav-tabs tab-primary bg-primary p-1" id="bg" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="features-tab" data-bs-toggle="tab"
                                                data-bs-target="#features-tab-pane" type="button" role="tab"
                                                aria-controls="features-tab-pane"
                                                aria-selected="false" tabIndex="-1"><i
                                            className="ti ti-disc pe-1"></i> features
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="history-tab" data-bs-toggle="tab"
                                                data-bs-target="#history-tab-pane" type="button" role="tab"
                                                aria-controls="history-tab-pane"
                                                aria-selected="false" tabIndex="-1"><i
                                            className="ti ti-history pe-1"></i>History
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="reviews-tab" data-bs-toggle="tab"
                                                data-bs-target="#reviews-tab-pane" type="button" role="tab"
                                                aria-controls="reviews-tab-pane"
                                                aria-selected="true"><i className="ti ti-star pe-1"></i>reviews
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="bgContent">
                                    <div className="tab-pane fade" id="features-tab-pane" role="tabpanel"
                                         aria-labelledby="features-tab"
                                         tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudo class to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudo class to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>
                                    <div className="tab-pane fade" id="history-tab-pane" role="tabpanel"
                                         aria-labelledby="history-tab"
                                         tabIndex="0">
                                        <ol>
                                            <li>Show only the last tab.</li>
                                            <li>If <code>:target</code> matches a tab, show it and hide all following
                                                siblings.
                                            </li>
                                            <li>Matches a tab, show it and hide all following siblings.</li>
                                        </ol>
                                    </div>
                                    <div className="tab-pane fade active show" id="reviews-tab-pane" role="tabpanel"
                                         aria-labelledby="reviews-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudo class to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudo class to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Cards;