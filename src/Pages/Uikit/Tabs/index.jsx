import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Tabs = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12} >
                        <h4 className="main-title">Tabs</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Tabs</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="app-tabs-section">
                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader className=" code-header">
                                <h5>Basic Tabs</h5>
                                <a data-bs-toggle="collapse" href="#tab1" aria-expanded="false" aria-controls="tab1">
                                    <i className="ti ti-code source" data-source="t1"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul className="nav nav-tabs app-tabs-primary" id="Basic" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="html-tab" data-bs-toggle="tab"
                                                data-bs-target="#html-tab-pane" type="button" role="tab"
                                                aria-controls="html-tab-pane"
                                                aria-selected="true">HTML
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="css-tab" data-bs-toggle="tab"
                                                data-bs-target="#css-tab-pane"
                                                type="button" role="tab" aria-controls="css-tab-pane"
                                                aria-selected="false">CSS
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="php-tab" data-bs-toggle="tab"
                                                data-bs-target="#php-tab-pane"
                                                type="button" role="tab" aria-controls="php-tab-pane"
                                                aria-selected="false">PHP
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="BasicContent">
                                    <div className="tab-pane fade show active" id="html-tab-pane" role="tabpanel"
                                         aria-labelledby="html-tab" tabIndex="0">
                                        <p>Hypertext Markup Language is the standard markup language for documents
                                            designed to be
                                            displayed in a web browser.</p>
                                        <p>It can be assisted by technologies such as Cascading Style Sheets (CSS) and
                                            scripting
                                            languages such as JavaScript.</p>
                                    </div>
                                    <div className="tab-pane fade" id="css-tab-pane" role="tabpanel"
                                         aria-labelledby="css-tab"
                                         tabIndex="0">
                                        <p>Cascading Style Sheets (CSS) is a style sheet language used for describing
                                            the presentation
                                            of a document written in a markup language like HTML.</p>
                                        <p>CSS is a cornerstone technology of the World Wide Web, alongside HTML and
                                            JavaScript.</p>
                                    </div>
                                    <div className="tab-pane fade" id="php-tab-pane" role="tabpanel"
                                         aria-labelledby="php-tab"
                                         tabIndex="0">
                                        <p>PHP is a popular general-purpose scripting language that is especially suited
                                            to web
                                            development.</p>
                                        <p>It was originally created by Rasmus Lerdorf in 1994; the PHP reference
                                            implementation is now
                                            produced by The PHP Group.</p>
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="t1 collapse mt-3" id="tab1">
  <code className="language-html">
{`<div class="card equal-card">
  <div class="card-header">
    <h5>Basic Tabs</h5>
  </div>
  <div class="card-body">
    <ul class="nav nav-tabs app-tabs-primary" id="Basic" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="html-tab" data-bs-toggle="tab" data-bs-target="#html-tab-pane" type="button" role="tab" aria-controls="html-tab-pane" aria-selected="true">HTML</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="css-tab" data-bs-toggle="tab" data-bs-target="#css-tab-pane" type="button" role="tab" aria-controls="css-tab-pane" aria-selected="false">CSS</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="php-tab" data-bs-toggle="tab" data-bs-target="#php-tab-pane" type="button" role="tab" aria-controls="php-tab-pane" aria-selected="false">PHP</button>
      </li>
    </ul>
    <div class="tab-content" id="BasicContent">
      <div class="tab-pane fade show active" id="html-tab-pane" role="tabpanel" aria-labelledby="html-tab" tabindex="0">
        <p>Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.</p>
        <p>It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
      </div>
      <div class="tab-pane fade" id="css-tab-pane" role="tabpanel" aria-labelledby="css-tab" tabindex="0">
        <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
        <p>CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
      </div>
      <div class="tab-pane fade" id="php-tab-pane" role="tabpanel" aria-labelledby="php-tab" tabindex="0">
        <p>PHP is a popular general-purpose scripting language that is especially suited to web development.</p>
        <p>It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group.</p>
      </div>
    </div>
  </div>
</div>`}

  </code>
</pre>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5>Outline Tabs</h5>
                                <a data-bs-toggle="collapse" href="#tab2" aria-expanded="false" aria-controls="tab2">
                                    <i className="ti ti-code source" data-source="t2"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul className="nav nav-tabs tab-outline-primary" id="Outline" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="connect-tab" data-bs-toggle="tab"
                                                data-bs-target="#connect-tab-pane" type="button" role="tab"
                                                aria-controls="connect-tab-pane"
                                                aria-selected="true">Connect
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="discover-tab" data-bs-toggle="tab"
                                                data-bs-target="#discover-tab-pane" type="button" role="tab"
                                                aria-controls="discover-tab-pane"
                                                aria-selected="false">Discover
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="order-tab" data-bs-toggle="tab"
                                                data-bs-target="#order-tab-pane"
                                                type="button" role="tab" aria-controls="order-tab-pane"
                                                aria-selected="false">Orders
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="OutlineContent">
                                    <div className="tab-pane fade show active" id="connect-tab-pane" role="tabpanel"
                                         aria-labelledby="connect-tab" tabIndex="0">
                                        <h6 className="mb-1">This is the content of tab one.</h6>
                                        <p>This field is a rich HTML field with a content editor like others used in
                                            Sitefinity. It
                                            accepts images, video, tables, text, etc. Street art polaroid microdosing la
                                            croix taxidermy.
                                            Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.</p>
                                    </div>
                                    <div className="tab-pane fade" id="discover-tab-pane" role="tabpanel"
                                         aria-labelledby="discover-tab"
                                         tabIndex="0">
                                        <h6 className="mb-1">This is the content of tab two.</h6>
                                        <p>This field is a rich HTML field with a content editor like others used in
                                            Sitefinity. It
                                            accepts images, video, tables, text, etc. Street art polaroid microdosing la
                                            croix taxidermy.
                                            Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.</p>
                                    </div>
                                    <div className="tab-pane fade" id="order-tab-pane" role="tabpanel"
                                         aria-labelledby="order-tab"
                                         tabIndex="0">
                                        <h6 className="mb-1">This is the content of tab three.</h6>
                                        <p>This field is a rich HTML field with a content editor like others used in
                                            Sitefinity. It
                                            accepts images, video, tables, text, etc. Street art polaroid microdosing la
                                            croix taxidermy.
                                            Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.</p>
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="t2 collapse mt-3" id="tab2">
  <code className="language-html">
{`<div class="card">
  <div class="card-header code-header">
    <h5>Outline Tabs</h5>
    <a data-bs-toggle="collapse" href="#tab2" aria-expanded="false" aria-controls="tab2">
      <i class="ti ti-code source" data-source="t2"></i>
    </a>
  </div>
  <div class="card-body">
    <ul class="nav nav-tabs tab-outline-primary" id="Outline" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="connect-tab" data-bs-toggle="tab" data-bs-target="#connect-tab-pane" type="button" role="tab" aria-controls="connect-tab-pane" aria-selected="true">Connect</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="discover-tab" data-bs-toggle="tab" data-bs-target="#discover-tab-pane" type="button" role="tab" aria-controls="discover-tab-pane" aria-selected="false">Discover</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="false">Orders</button>
      </li>
    </ul>
    <div class="tab-content" id="OutlineContent">
      <div class="tab-pane fade show active" id="connect-tab-pane" role="tabpanel" aria-labelledby="connect-tab" tabindex="0">
        <h6 class="mb-1">This is the content of tab one.</h6>
        <p>This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.</p>
      </div>
      <div class="tab-pane fade" id="discover-tab-pane" role="tabpanel" aria-labelledby="discover-tab" tabindex="0">
        <h6 class="mb-1">This is the content of tab two.</h6>
        <p>This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.</p>
      </div>
      <div class="tab-pane fade" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
        <h6 class="mb-1">This is the content of tab three.</h6>
        <p>This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.</p>
      </div>
    </div>
  </div>
</div>`}

  </code>
</pre>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5>Light Tabs</h5>
                                <a data-bs-toggle="collapse" href="#tab3" aria-expanded="false" aria-controls="tab3">
                                    <i className="ti ti-code source" data-source="t3"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul className="nav nav-tabs tab-light-primary" id="Light" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="description-tab" data-bs-toggle="tab"
                                                data-bs-target="#description-tab-pane" type="button" role="tab"
                                                aria-controls="description-tab-pane" aria-selected="true"><i
                                            className="ti ti-lifebuoy pe-1 ps-1"></i>
                                            Description
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="howowrk-tab" data-bs-toggle="tab"
                                                data-bs-target="#howowrk-tab-pane" type="button" role="tab"
                                                aria-controls="howowrk-tab-pane"
                                                aria-selected="false"><i
                                            className="ti ti-keyboard-show pe-1 ps-1"></i> How It Works
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="drawbacks-tab" data-bs-toggle="tab"
                                                data-bs-target="#drawbacks-tab-pane" type="button" role="tab"
                                                aria-controls="drawbacks-tab-pane" aria-selected="false"><i
                                            className="ti ti-file-dislike pe-1 ps-1"></i>Drawbacks
                                        </button>
                                    </li>

                                </ul>
                                <div className="tab-content" id="LightContent">
                                    <div className="tab-pane fade show active" id="description-tab-pane" role="tabpanel"
                                         aria-labelledby="description-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
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
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                </div>
                            </CardBody>

                            <pre className="t3 collapse mt-3" id="tab3">
  <code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Outline Tabs</h5>
  </div>
  <div class="card-body">
    <ul class="nav nav-tabs tab-outline-primary" id="Outline" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="connect-tab" data-bs-toggle="tab" data-bs-target="#connect-tab-pane" type="button" role="tab" aria-controls="connect-tab-pane" aria-selected="true">Connect</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="discover-tab" data-bs-toggle="tab" data-bs-target="#discover-tab-pane" type="button" role="tab" aria-controls="discover-tab-pane" aria-selected="false">Discover</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="false">Orders</button>
      </li>
    </ul>
    <div class="tab-content" id="OutlineContent">
      <div class="tab-pane fade show active" id="connect-tab-pane" role="tabpanel" aria-labelledby="connect-tab" tabindex="0">
        <h6 class="mb-1">This is the content of tab one.</h6>
        <p>This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.</p>
      </div>
      <div class="tab-pane fade" id="discover-tab-pane" role="tabpanel" aria-labelledby="discover-tab" tabindex="0">
        <h6 class="mb-1">This is the content of tab two.</h6>
        <p>This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.</p>
      </div>
      <div class="tab-pane fade" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
        <h6 class="mb-1">This is the content of tab three.</h6>
        <p>This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.</p>
      </div>
    </div>
  </div>
</div>`}

  </code>
</pre>
                        </Card>
                    </Col>


                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader className=" code-header">
                                <h5>Background Tabs</h5>
                                <a data-bs-toggle="collapse" href="#tab4" aria-expanded="false" aria-controls="tab4">
                                    <i className="ti ti-code source" data-source="t4"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul className="nav nav-tabs tab-primary bg-primary p-1" id="bg" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="features-tab" data-bs-toggle="tab"
                                                data-bs-target="#features-tab-pane" type="button" role="tab"
                                                aria-controls="features-tab-pane"
                                                aria-selected="true"><i className="ti ti-disc pe-1 ps-1"></i> features
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="history-tab" data-bs-toggle="tab"
                                                data-bs-target="#history-tab-pane" type="button" role="tab"
                                                aria-controls="history-tab-pane"
                                                aria-selected="false"><i className="ti ti-history pe-1 ps-1"></i>History
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="reviews-tab" data-bs-toggle="tab"
                                                data-bs-target="#reviews-tab-pane" type="button" role="tab"
                                                aria-controls="reviews-tab-pane"
                                                aria-selected="false"><i className="ti ti-star pe-1 ps-1"></i>reviews
                                        </button>
                                    </li>

                                </ul>
                                <div className="tab-content" id="bgContent">
                                    <div className="tab-pane fade show active" id="features-tab-pane" role="tabpanel"
                                         aria-labelledby="features-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
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

                                    <div className="tab-pane fade" id="reviews-tab-pane" role="tabpanel"
                                         aria-labelledby="reviews-tab"
                                         tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                </div>
                            </CardBody>

                            <pre className="t4 collapse mt-3" id="tab4">
  <code className="language-html">
{`<div class="card equal-card">
  <div class="card-header">
    <h5>Background Tabs</h5>
  </div>
  <div class="card-body">
    <ul class="nav nav-tabs tab-primary bg-primary p-1" id="bg" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="features-tab" data-bs-toggle="tab" data-bs-target="#features-tab-pane" type="button" role="tab" aria-controls="features-tab-pane" aria-selected="true">
          <i class="ti ti-disc pe-1 ps-1"></i> features
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="history-tab" data-bs-toggle="tab" data-bs-target="#history-tab-pane" type="button" role="tab" aria-controls="history-tab-pane" aria-selected="false">
          <i class="ti ti-history pe-1 ps-1"></i> History
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane" aria-selected="false">
          <i class="ti ti-star pe-1 ps-1"></i> reviews
        </button>
      </li>
    </ul>
    <div class="tab-content" id="bgContent">
      <div class="tab-pane fade show active" id="features-tab-pane" role="tabpanel" aria-labelledby="features-tab" tabindex="0">
        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.</p>
      </div>
      <div class="tab-pane fade" id="history-tab-pane" role="tabpanel" aria-labelledby="history-tab" tabindex="0">
        <ol>
          <li>Show only the last tab.</li>
          <li>If <code>:target</code> matches a tab, show it and hide all following siblings.</li>
          <li>Matches a tab, show it and hide all following siblings.</li>
        </ol>
      </div>
      <div class="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabindex="0">
        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.</p>
      </div>
    </div>
  </div>
</div>`}

  </code>
</pre>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5>Vertical Tabs Left Side</h5>
                                <a data-bs-toggle="collapse" href="#tab5" aria-expanded="false" aria-controls="tab5">
                                    <i className="ti ti-code source" data-source="t5"></i>
                                </a>
                            </CardHeader>
                            <div className="card-body vertical-tab">
                                <ul className="nav nav-tabs app-tabs-secondary " id="v-bg" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="v-features-tab" data-bs-toggle="tab"
                                                data-bs-target="#v-features-tab-pane" type="button" role="tab"
                                                aria-controls="v-features-tab-pane" aria-selected="true"><i
                                            className="ti ti-disc pe-1 ps-1"></i>
                                            features
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="v-history-tab" data-bs-toggle="tab"
                                                data-bs-target="#v-history-tab-pane" type="button" role="tab"
                                                aria-controls="v-history-tab-pane" aria-selected="false"><i
                                            className="ti ti-history pe-1 ps-1"></i>History
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="v-reviews-tab" data-bs-toggle="tab"
                                                data-bs-target="#v-reviews-tab-pane" type="button" role="tab"
                                                aria-controls="v-reviews-tab-pane" aria-selected="false"><i
                                            className="ti ti-star pe-1 ps-1"></i>reviews
                                        </button>
                                    </li>

                                </ul>
                                <div className="tab-content" id="v-bgContent">
                                    <div className="tab-pane fade show active" id="v-features-tab-pane" role="tabpanel"
                                         aria-labelledby="v-features-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                    <div className="tab-pane fade" id="v-history-tab-pane" role="tabpanel"
                                         aria-labelledby="v-history-tab"
                                         tabIndex="0">
                                        <ol>
                                            <li>Show only the last tab.</li>
                                            <li>If <code>:target</code> matches a tab, show it and hide all following
                                                siblings.
                                            </li>
                                            <li>Matches a tab, show it and hide all following siblings.</li>
                                        </ol>
                                    </div>

                                    <div className="tab-pane fade" id="v-reviews-tab-pane" role="tabpanel"
                                         aria-labelledby="v-reviews-tab"
                                         tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                </div>
                            </div>

                            <pre className="t5 collapse mt-3" id="tab5">
  <code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Outline Tabs</h5>
  </div>
  <div class="card-body">
    <ul class="nav nav-tabs tab-outline-primary" id="Outline" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="connect-tab" data-bs-toggle="tab" data-bs-target="#connect-tab-pane" type="button" role="tab" aria-controls="connect-tab-pane" aria-selected="true">Connect</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="discover-tab" data-bs-toggle="tab" data-bs-target="#discover-tab-pane" type="button" role="tab" aria-controls="discover-tab-pane" aria-selected="false">Discover</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="false">Orders</button>
      </li>
    </ul>
    <div class="tab-content" id="OutlineContent">
      <div class="tab-pane fade show active" id="connect-tab-pane" role="tabpanel" aria-labelledby="connect-tab" tabindex="0">
        <h6 class="mb-1">This is the content of tab one.</h6>
        <p>This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.</p>
      </div>
      <div class="tab-pane fade" id="discover-tab-pane" role="tabpanel" aria-labelledby="discover-tab" tabindex="0">
        <h6 class="mb-1">This is the content of tab two.</h6>
        <p>This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.</p>
      </div>
      <div class="tab-pane fade" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
        <h6 class="mb-1">This is the content of tab three.</h6>
        <p>This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.</p>
      </div>
    </div>
  </div>
</div>`}

  </code>
</pre>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader className=" code-header">
                                <h5>Vertical Tabs Right Side</h5>
                                <a data-bs-toggle="collapse" href="#tab6" aria-expanded="false" aria-controls="tab6">
                                    <i className="ti ti-code source" data-source="t6"></i>
                                </a>
                            </CardHeader>
                            <div className="card-body vertical-right-tab">
                                <ul className="nav nav-tabs app-tabs-secondary me-0 ms-3" id="vl-bg" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="vl-features-tab" data-bs-toggle="tab"
                                                data-bs-target="#vl-features-tab-pane" type="button" role="tab"
                                                aria-controls="vl-features-tab-pane" aria-selected="true"><i
                                            className="ti ti-disc pe-1 ps-1"></i>
                                            features
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="vl-history-tab" data-bs-toggle="tab"
                                                data-bs-target="#vl-history-tab-pane" type="button" role="tab"
                                                aria-controls="vl-history-tab-pane" aria-selected="false"><i
                                            className="ti ti-history pe-1 ps-1"></i>History
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="vl-reviews-tab" data-bs-toggle="tab"
                                                data-bs-target="#vl-reviews-tab-pane" type="button" role="tab"
                                                aria-controls="vl-reviews-tab-pane" aria-selected="false"><i
                                            className="ti ti-star pe-1 ps-1"></i>reviews
                                        </button>
                                    </li>

                                </ul>
                                <div className="tab-content text-sm-end" id="vl-bgContent">
                                    <div className="tab-pane fade show active" id="vl-features-tab-pane" role="tabpanel"
                                         aria-labelledby="vl-features-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                    <div className="tab-pane fade" id="vl-history-tab-pane" role="tabpanel"
                                         aria-labelledby="vl-history-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                    <div className="tab-pane fade" id="vl-reviews-tab-pane" role="tabpanel"
                                         aria-labelledby="vl-reviews-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>
                                </div>

                            </div>

                            <pre className="t6 collapse mt-3" id="tab6">
                    <code className="language-html">

{`<div class="card equal-card">
  <div class="card-header">
    <h5>Vertical Tabs right side</h5>
  </div>
  <div class="card-body vertical-right-tab">
    <ul class="nav nav-tabs app-tabs-secondary me-0 ms-3" id="vl-bg" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="vl-features-tab" data-bs-toggle="tab" data-bs-target="#vl-features-tab-pane" type="button" role="tab" aria-controls="vl-features-tab-pane" aria-selected="true">
          <i class="ti ti-disc pe-1 ps-1"></i>
          Features
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="vl-history-tab" data-bs-toggle="tab" data-bs-target="#vl-history-tab-pane" type="button" role="tab" aria-controls="vl-history-tab-pane" aria-selected="false">
          <i class="ti ti-history pe-1 ps-1"></i>
          History
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="vl-reviews-tab" data-bs-toggle="tab" data-bs-target="#vl-reviews-tab-pane" type="button" role="tab" aria-controls="vl-reviews-tab-pane" aria-selected="false">
          <i class="ti ti-star pe-1 ps-1"></i>
          Reviews
        </button>
      </li>
    </ul>
    <div class="tab-content text-sm-end" id="vl-bgContent">
      <div class="tab-pane fade show active" id="vl-features-tab-pane" role="tabpanel" aria-labelledby="vl-features-tab" tabindex="0">
        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.</p>
      </div>
      <div class="tab-pane fade" id="vl-history-tab-pane" role="tabpanel" aria-labelledby="vl-history-tab" tabindex="0">
        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.</p>
      </div>
      <div class="tab-pane fade" id="vl-reviews-tab-pane" role="tabpanel" aria-labelledby="vl-reviews-tab" tabindex="0">
        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.</p>
      </div>
    </div>
  </div>
</div>`}

                    </code>
                  </pre>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader className="">
                                <h5>Tabs Bottom Side</h5>
                            </CardHeader>
                            <div className="card-body bottom-tab">
                                <ul className="nav nav-tabs app-tabs-secondary" id="b-bg" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="b-features-tab" data-bs-toggle="tab"
                                                data-bs-target="#b-features-tab-pane" type="button" role="tab"
                                                aria-controls="b-features-tab-pane" aria-selected="true"><i
                                            className="ti ti-disc pe-1 ps-1"></i>
                                            features
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="b-history-tab" data-bs-toggle="tab"
                                                data-bs-target="#b-history-tab-pane" type="button" role="tab"
                                                aria-controls="b-history-tab-pane" aria-selected="false"><i
                                            className="ti ti-history pe-1 ps-1"></i>History
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="b-reviews-tab" data-bs-toggle="tab"
                                                data-bs-target="#b-reviews-tab-pane" type="button" role="tab"
                                                aria-controls="b-reviews-tab-pane" aria-selected="false"><i
                                            className="ti ti-star pe-1 ps-1"></i>reviews
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content" id="b-bgContent">
                                    <div className="tab-pane fade show active" id="b-features-tab-pane" role="tabpanel"
                                         aria-labelledby="b-features-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                    <div className="tab-pane fade" id="b-history-tab-pane" role="tabpanel"
                                         aria-labelledby="b-history-tab"
                                         tabIndex="0">
                                        <ol>
                                            <li>Show only the last tab.</li>
                                            <li>If <code>:target</code> matches a tab, show it and hide all following
                                                siblings.
                                            </li>
                                            <li>Matches a tab, show it and hide all following siblings.</li>
                                        </ol>
                                    </div>

                                    <div className="tab-pane fade" id="b-reviews-tab-pane" role="tabpanel"
                                         aria-labelledby="b-reviews-tab"
                                         tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Justify Light Tabs</h5>
                            </CardHeader>
                            <CardBody>
                                <ul className="nav nav-tabs tab-light-secondary justify-content-around"
                                    id="justify-Light"
                                    role="tablist">
                                    <li className="nav-item flex-fill" role="presentation">
                                        <button className="nav-link active w-100" id="justify-home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#justify-home-tab-pane" type="button" role="tab"
                                                aria-controls="justify-home-tab-pane" aria-selected="true"><i
                                            className="ti ti-lifebuoy pe-1 ps-1"></i> Home
                                        </button>
                                    </li>
                                    <li className="nav-item flex-fill" role="presentation">
                                        <button className="nav-link w-100" id="justify-profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#justify-profile-tab-pane" type="button" role="tab"
                                                aria-controls="justify-profile-tab-pane" aria-selected="false"><i
                                            className="ti ti-keyboard-show pe-1 ps-1"></i> Profile
                                        </button>
                                    </li>
                                    <li className="nav-item flex-fill" role="presentation">
                                        <button className="nav-link w-100" id="justify-contact-tab" data-bs-toggle="tab"
                                                data-bs-target="#justify-contact-tab-pane" type="button" role="tab"
                                                aria-controls="justify-contact-tab-pane" aria-selected="false"><i
                                            className="ti ti-file-dislike pe-1 ps-1"></i>Contact
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="justify-LightContent">
                                    <div className="tab-pane fade show active" id="justify-home-tab-pane"
                                         role="tabpanel"
                                         aria-labelledby="justify-home-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                    <div className="tab-pane fade" id="justify-profile-tab-pane" role="tabpanel"
                                         aria-labelledby="justify-profile-tab" tabIndex="0">
                                        <ol>
                                            <li>Show only the last tab.</li>
                                            <li>If <code>:target</code> matches a tab, show it and hide all following
                                                siblings.
                                            </li>
                                            <li>Matches a tab, show it and hide all following siblings.</li>
                                        </ol>
                                    </div>

                                    <div className="tab-pane fade" id="justify-contact-tab-pane" role="tabpanel"
                                         aria-labelledby="justify-contact-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader className="">
                                <h5>Image as Nav link</h5>
                            </CardHeader>
                            <CardBody>
                                <ul className="nav nav-tabs tab-light-secondary" id="lang-Light" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link gap-2 active" id="lang-home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#lang-home-tab-pane" type="button" role="tab"
                                                aria-controls="lang-home-tab-pane" aria-selected="true">
                                            <i className="flag-icon flag-icon-usa"></i>
                                            USA
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link gap-2" id="lang-profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#lang-profile-tab-pane" type="button" role="tab"
                                                aria-controls="lang-profile-tab-pane" aria-selected="false">
                                            <i className="flag-icon flag-icon-gbr"></i>
                                            GBR
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link gap-2" id="lang-contact-tab" data-bs-toggle="tab"
                                                data-bs-target="#lang-contact-tab-pane" type="button" role="tab"
                                                aria-controls="lang-contact-tab-pane" aria-selected="false">
                                            <i className="flag-icon flag-icon-deu"></i>
                                            DEU
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link gap-2" id="lang-about-tab" data-bs-toggle="tab"
                                                data-bs-target="#lang-about-tab-pane" type="button" role="tab"
                                                aria-controls="lang-about-tab-pane" aria-selected="false">
                                            <i className="flag-icon flag-icon-lbr"></i>
                                            LBR
                                        </button>
                                    </li>

                                </ul>
                                <div className="tab-content" id="lang-LightContent">
                                    <div className="tab-pane fade show active" id="lang-home-tab-pane" role="tabpanel"
                                         aria-labelledby="lang-home-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                    <div className="tab-pane fade" id="lang-profile-tab-pane" role="tabpanel"
                                         aria-labelledby="lang-profile-tab" tabIndex="0">
                                        <ol>
                                            <li>Show only the last tab.</li>
                                            <li>If <code>:target</code> matches a tab, show it and hide all following
                                                siblings.
                                            </li>
                                            <li>Matches a tab, show it and hide all following siblings.</li>
                                        </ol>
                                    </div>

                                    <div className="tab-pane fade" id="lang-contact-tab-pane" role="tabpanel"
                                         aria-labelledby="lang-contact-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                    <div className="tab-pane fade" id="lang-about-tab-pane" role="tabpanel"
                                         aria-labelledby="lang-about-tab" tabIndex="0">
                                        <ol>
                                            <li>Show only the last tab.</li>
                                            <li>If <code>:target</code> matches a tab, show it and hide all following
                                                siblings.
                                            </li>
                                            <li>Matches a tab, show it and hide all following siblings.</li>
                                        </ol>
                                    </div>

                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <CardHeader className="">
                                <h5>Some Implements</h5>
                            </CardHeader>
                            <div className="card-body Implements-tabs">
                                <ul className="nav nav-tabs tab-light-secondary" id="testi-Light" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link gap-2 d-flex active" id="testi-home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#testi-home-tab-pane" type="button" role="tab"
                                                aria-controls="testi-home-tab-pane" aria-selected="true">
                          <span className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-primary">
                            <img src="../assets/images/avtar/5.png" alt="" className="img-fluid"/>
                          </span>
                                            <span>
                            <span className="text-body d-block text-start f-s-16 f-w-600 text-dark mb-0">Guthry </span>
                            <span className="text-start f-s-14 m-0">Sales Manager</span>
                          </span>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link d-flex gap-2" id="testi-profile-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#testi-profile-tab-pane" type="button" role="tab"
                                                aria-controls="testi-profile-tab-pane" aria-selected="false">
                          <span className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-primary">
                            <img src="../assets/images/avtar/1.png" alt="" className="img-fluid"/>
                          </span>
                                            <span>
                            <span
                                className="text-body d-block text-start mb-0 f-s-16 f-w-600 text-dark">Olive Yew </span>
                            <span className="text-start f-s-14 m-0">account Manager</span>
                          </span>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link d-flex gap-2" id="testi-contact-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#testi-contact-tab-pane" type="button" role="tab"
                                                aria-controls="testi-contact-tab-pane" aria-selected="false">
                          <span className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-primary">
                            <img src="../assets/images/avtar/14.png" alt="" className="img-fluid"/>
                          </span>
                                            <span>
                            <span className="text-body d-block text-start f-s-16 f-w-600 text-dark mb-0">Lily </span>
                            <span className="text-start f-s-14 m-0">Manager</span>
                          </span>
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="testi-LightContent">
                                    <div className="tab-pane fade show active" id="testi-home-tab-pane" role="tabpanel"
                                         aria-labelledby="testi-home-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                    <div className="tab-pane fade" id="testi-profile-tab-pane" role="tabpanel"
                                         aria-labelledby="testi-profile-tab" tabIndex="0">
                                        <ol>
                                            <li>Show only the last tab.</li>
                                            <li>If <code>:target</code> matches a tab, show it and hide all following
                                                siblings.
                                            </li>
                                            <li>Matches a tab, show it and hide all following siblings.</li>
                                        </ol>
                                    </div>

                                    <div className="tab-pane fade" id="testi-contact-tab-pane" role="tabpanel"
                                         aria-labelledby="testi-contact-tab" tabIndex="0">
                                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors
                                            with fragment
                                            identifiers to switch between them. The idea is to use pseudoclass to show
                                            tabs, use anchors
                                            with fragment identifiers to switch between them.</p>
                                    </div>

                                </div>
                            </div>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Tabs;