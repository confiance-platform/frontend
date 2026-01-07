import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Accordions = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Accordions</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Accordions</a>
                            </li>
                        </ul>
                    </Col>

                </Row>
                <Row className=" accordions-rtl">
                    <Col lg={6}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5> Simple According </h5>
                                <a data-bs-toggle="collapse" href="#accordionsItem1" aria-expanded="false"
                                   aria-controls="accordionsItem1">
                                    <i className="ti ti-code source" data-source="accordions1"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="accordion app-accordion accordion-secondary">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default, until the
                                                collapse plugin adds the appropriate classes that we use to style each
                                                element. These
                                                classes control the overall appearance, as well as the showing and
                                                hiding via CSS
                                                transitions. You can modify any of this with custom CSS or overriding
                                                our default variables.
                                                It's also worth noting that just about any HTML can go within the
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false"
                                                    aria-controls="collapseTwo">
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong> It is hidden
                                                by default, until
                                                the collapse plugin adds the appropriate classes that we use to style
                                                each element. These
                                                classes control the overall appearance, as well as the showing and
                                                hiding via CSS
                                                transitions. You can modify any of this with custom CSS or overriding
                                                our default variables.
                                                It's also worth noting that just about any HTML can go within the
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree" aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden
                                                by default, until the
                                                collapse plugin adds the appropriate classes that we use to style each
                                                element. These
                                                classes control the overall appearance, as well as the showing and
                                                hiding via CSS
                                                transitions. You can modify any of this with custom CSS or overriding
                                                our default variables.
                                                It's also worth noting that just about any HTML can go within the
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="accordions1 collapse mt-3" id="accordionsItem1">
                                <code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Simple Accordion</h5>
  </div>
  <div class="card-body">
    <div class="accordion app-accordion accordion-secondary">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
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
                                <h5> Outline According </h5>
                                <a data-bs-toggle="collapse" href="#accordionsItem2" aria-expanded="false"
                                   aria-controls="accordionsItem2">
                                    <i className="ti ti-code source" data-source="accordions2"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="accordion app-accordion accordion-outline-secondary">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOneOutline" aria-expanded="true"
                                                    aria-controls="collapseOneOutline">
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div id="collapseOneOutline" className="accordion-collapse collapse show"
                                             data-bs-parent="#accordionExampleoutlineoutline">
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default, until the
                                                collapse plugin adds the appropriate classes that we use to style each
                                                element. These
                                                classes control the overall appearance, as well as the showing and
                                                hiding via CSS
                                                transitions. You can modify any of this with custom CSS or overriding
                                                our default variables.
                                                It's also worth noting that just about any HTML can go within the
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwooutline" aria-expanded="false"
                                                    aria-controls="collapseTwooutline">
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div id="collapseTwooutline" className="accordion-collapse collapse"
                                             data-bs-parent="#accordionExampleoutlineoutline">
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong> It is hidden
                                                by default, until
                                                the collapse plugin adds the appropriate classes that we use to style
                                                each element. These
                                                classes control the overall appearance, as well as the showing and
                                                hiding via CSS
                                                transitions. You can modify any of this with custom CSS or overriding
                                                our default variables.
                                                It's also worth noting that just about any HTML can go within the
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThreeoutline" aria-expanded="false"
                                                    aria-controls="collapseThreeoutline">
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div id="collapseThreeoutline" className="accordion-collapse collapse"
                                             data-bs-parent="#accordionExampleoutlineoutline">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden
                                                by default, until the
                                                collapse plugin adds the appropriate classes that we use to style each
                                                element. These
                                                classes control the overall appearance, as well as the showing and
                                                hiding via CSS
                                                transitions. You can modify any of this with custom CSS or overriding
                                                our default variables.
                                                It's also worth noting that just about any HTML can go within the
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="accordions2 collapse mt-3" id="accordionsItem2">
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
                                <h5> Light </h5>
                                <a data-bs-toggle="collapse" href="#accordionsItem3" aria-expanded="false"
                                   aria-controls="accordionsItem3">
                                    <i className="ti ti-code source" data-source="accordions3"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="accordion app-accordion accordion-light-secondary"
                                     id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOne" aria-expanded="true"
                                                    aria-controls="flush-collapseOne">
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse show"
                                             data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Placeholder content for this accordion,
                                                which is intended to
                                                demonstrate the <code>.accordion-flush</code> class. This is the first
                                                item's accordion
                                                body.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                                    aria-controls="flush-collapseTwo">
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                             data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Placeholder content for this accordion,
                                                which is intended to
                                                demonstrate the <code>.accordion-flush</code> class. This is the second
                                                item's accordion
                                                body. Let's imagine this being filled with some actual content.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                                    aria-controls="flush-collapseThree">
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse"
                                             data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Placeholder content for this accordion,
                                                which is intended to
                                                demonstrate the <code>.accordion-flush</code> class. This is the third
                                                item's accordion
                                                body. Nothing more exciting happening here in terms of content, but just
                                                filling up the
                                                space to make it look, at least at first glance, a bit more
                                                representative of how this would
                                                look in a real-world application.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                            <pre className="accordions3 collapse mt-3" id="accordionsItem3">
                                <code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Light</h5>
  </div>
  <div class="card-body">
    <div class="accordion app-accordion accordion-light-secondary" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse show" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
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
                                <h5> Flush(No border)</h5>
                                <a data-bs-toggle="collapse" href="#accordionsItem4" aria-expanded="false"
                                   aria-controls="accordionsItem4">
                                    <i className="ti ti-code source" data-source="accordions4"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="accordion app-accordion accordion-flush accordion-secondary"
                                     id="accordionappflushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#appflush-collapseOne" aria-expanded="true"
                                                    aria-controls="appflush-collapseOne">
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div id="appflush-collapseOne" className="accordion-collapse show"
                                             data-bs-parent="#accordionappflushExample">
                                            <div className="accordion-body">Placeholder content for this accordion,
                                                which is intended to
                                                demonstrate the <code>.accordion-appflush</code> class. This is the
                                                first item's accordion
                                                body.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#appflush-collapseTwo" aria-expanded="false"
                                                    aria-controls="appflush-collapseTwo">
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div id="appflush-collapseTwo" className="accordion-collapse collapse"
                                             data-bs-parent="#accordionappflushExample">
                                            <div className="accordion-body">Placeholder content for this accordion,
                                                which is intended to
                                                demonstrate the <code>.accordion-appflush</code> class. This is the
                                                second item's accordion
                                                body. Let's imagine this being filled with some actual content.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#appflush-collapseThree" aria-expanded="false"
                                                    aria-controls="appflush-collapseThree">
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div id="appflush-collapseThree" className="accordion-collapse collapse"
                                             data-bs-parent="#accordionrealExample">
                                            <div className="accordion-body">Placeholder content for this accordion,
                                                which is intended to
                                                demonstrate the <code>.accordion-appflush</code> class. This is the
                                                third item's accordion
                                                body. Nothing more exciting happening here in terms of content, but just
                                                filling up the
                                                space to make it look, at least at first glance, a bit more
                                                representative of how this would
                                                look in a real-world application.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                            <pre className="accordions4 collapse mt-3" id="accordionsItem4">
                                <code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Flush(No border)</h5>
  </div>
  <div class="card-body">
    <div class="accordion app-accordion accordion-flush accordion-secondary" id="accordionappflushExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#appflush-collapseOne" aria-expanded="true" aria-controls="appflush-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="appflush-collapseOne" class="accordion-collapse show" data-bs-parent="#accordionappflushExample">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-appflush</code> class. This is the first item's accordion body.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#appflush-collapseTwo" aria-expanded="false" aria-controls="appflush-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="appflush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionappflushExample">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-appflush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#appflush-collapseThree" aria-expanded="false" aria-controls="appflush-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="appflush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionrealExample">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-appflush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
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
                                <h5 className="txt-ellipsis"> Frequently Asked Questions(Real Example) </h5>
                                <a data-bs-toggle="collapse" href="#accordionsItem5" aria-expanded="false"
                                   aria-controls="accordionsItem5">
                                    <i className="ti ti-code source" data-source="accordions5"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="accordion app-accordion accordion-light-secondary"
                                     id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                    aria-controls="panelsStayOpen-collapseOne">
                                                <i className="ti ti-message-report me-1 f-s-20"></i> What happens if I
                                                just pay my ticket?
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne"
                                             className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                Paying your ticket without contesting it can result in a conviction on
                                                your driving record.
                                                This can have long-lasting consequences such as increased insurance
                                                rates, driver's license
                                                suspension, employment restrictions, and additional fines imposed by
                                                your state's DMV.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseTwo">
                                                <i className="ti ti-ticket me-1 f-s-20"></i> Can this ticket affect my
                                                job?
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                Absolutely, tickets recorded on your driving history can result in
                                                disqualification from
                                                driving commercially or obtaining a commercial driver's license (CDL).
                                                They can also
                                                disqualify you from driving for ride-sharing services such as Uber or
                                                Lyft, which require a
                                                clean driving record.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseThree">
                                                <i className="ti ti-transition-bottom me-1 f-s-20"></i> How long does it
                                                take to resolve my
                                                case?
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                It really depends on the court your ticket landed in. Some courts move
                                                faster than others,
                                                but on average, it could take about 1-3 months. This is perfectly normal
                                                in the legal
                                                process.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="accordions5 collapse mt-3" id="accordionsItem5">
                                <code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Frequently Asked Questions(Real Example)</h5>
  </div>
  <div class="card-body">
    <div class="accordion app-accordion accordion-light-secondary" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <i class="ti ti-message-report me-1 f-s-20"></i> What happens if I just pay my ticket?
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
          <div class="accordion-body">
            Paying your ticket without contesting it can result in a conviction on your driving record.
            This can have long-lasting consequences such as increased insurance rates, driver's license
            suspension, employment restrictions, and additional fines imposed by your state's DMV.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            <i class="ti ti-ticket me-1 f-s-20"></i> Can this ticket affect my job?
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
          <div class="accordion-body">
            Absolutely, tickets recorded on your driving history can result in disqualification from
            driving commercially or obtaining a commercial driver's license (CDL). They can also
            disqualify you from driving for ride-sharing services such as Uber or Lyft, which require a
            clean driving record.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            <i class="ti ti-transition-bottom me-1 f-s-20"></i> How long does it take to resolve my case?
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
          <div class="accordion-body">
            It really depends on the court your ticket landed in. Some courts move faster than others,
            but on average, it could take about 1-3 months. This is perfectly normal in the legal
            process.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <div className="card equal-card">
                            <CardHeader className=" code-header">
                                <h5 className="txt-ellipsis"> Left Side Plus Minus Icon </h5>
                                <a data-bs-toggle="collapse" href="#accordionsItem6" aria-expanded="false"
                                   aria-controls="accordionsItem6">
                                    <i className="ti ti-code source" data-source="accordions6"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div
                                    className="accordion app-accordion accordion-light-primary app-accordion-icon-left app-accordion-plus"
                                    id="accordionlefticonExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#lefticon-collapseOne" aria-expanded="true"
                                                    aria-controls="lefticon-collapseOne">
                                                What happens if I just pay my ticket?
                                            </button>
                                        </h2>
                                        <div id="lefticon-collapseOne" className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                Paying your ticket without contesting it can result in a conviction on
                                                your driving record.
                                                This can have long-lasting consequences such as increased insurance
                                                rates, driver's license
                                                suspension, employment restrictions, and additional fines imposed by
                                                your state's DMV.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#lefticon-collapseTwo" aria-expanded="false"
                                                    aria-controls="lefticon-collapseTwo">
                                                Can this ticket affect my job?
                                            </button>
                                        </h2>
                                        <div id="lefticon-collapseTwo" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                Absolutely, tickets recorded on your driving history can result in
                                                disqualification from
                                                driving commercially or obtaining a commercial driver's license (CDL).
                                                They can also
                                                disqualify you from driving for ride-sharing services such as Uber or
                                                Lyft, which require a
                                                clean driving record.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#lefticon-collapseThree" aria-expanded="false"
                                                    aria-controls="lefticon-collapseThree">
                                                How long does it take to resolve my case?
                                            </button>
                                        </h2>
                                        <div id="lefticon-collapseThree" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                It really depends on the court your ticket landed in. Some courts move
                                                faster than others,
                                                but on average, it could take about 1-3 months. This is perfectly normal
                                                in the legal
                                                process.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="accordions6 collapse mt-3" id="accordionsItem6">
                    <code className="language-html">

{`<div class="card equal-card">
  <div class="card-header">
    <h5>Left side plus minus icon</h5>
  </div>
  <div class="card-body">
    <div class="accordion app-accordion accordion-light-primary app-accordion-icon-left app-accordion-plus" id="accordionlefticonExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#lefticon-collapseOne" aria-expanded="true" aria-controls="lefticon-collapseOne">
            What happens if I just pay my ticket?
          </button>
        </h2>
        <div id="lefticon-collapseOne" class="accordion-collapse collapse show">
          <div class="accordion-body">
            Paying your ticket without contesting it can result in a conviction on your driving record.
            This can have long-lasting consequences such as increased insurance rates, driver's license
            suspension, employment restrictions, and additional fines imposed by your state's DMV.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#lefticon-collapseTwo" aria-expanded="false" aria-controls="lefticon-collapseTwo">
            Can this ticket affect my job?
          </button>
        </h2>
        <div id="lefticon-collapseTwo" class="accordion-collapse collapse">
          <div class="accordion-body">
            Absolutely, tickets recorded on your driving history can result in disqualification from
            driving commercially or obtaining a commercial driver's license (CDL). They can also
            disqualify you from driving for ride-sharing services such as Uber or Lyft, which require a
            clean driving record.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#lefticon-collapseThree" aria-expanded="false" aria-controls="lefticon-collapseThree">
            How long does it take to resolve my case?
          </button>
        </h2>
        <div id="lefticon-collapseThree" class="accordion-collapse collapse">
          <div class="accordion-body">
            It really depends on the court your ticket landed in. Some courts move faster than others,
            but on average, it could take about 1-3 months. This is perfectly normal in the legal
            process.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}

                    </code>
                  </pre>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5> No Icon Indicators </h5>
                                <a data-bs-toggle="collapse" href="#accordionsItem7" aria-expanded="false"
                                   aria-controls="accordionsItem7">
                                    <i className="ti ti-code source" data-source="accordions7"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="accordion app-accordion accordion-light-danger app-accordion-no-icon"
                                     id="accordionnoiconExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#noicon-collapseOne" aria-expanded="true"
                                                    aria-controls="noicon-collapseOne">
                                                <i className="ti ti-message-report me-1 f-s-20"></i> What happens if I
                                                just pay my ticket?
                                            </button>
                                        </h2>
                                        <div id="noicon-collapseOne" className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                Paying your ticket without contesting it can result in a conviction on
                                                your driving record.
                                                This can have long-lasting consequences such as increased insurance
                                                rates, driver's license
                                                suspension, employment restrictions, and additional fines imposed by
                                                your state's DMV.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#noicon-collapseTwo" aria-expanded="false"
                                                    aria-controls="noicon-collapseTwo">
                                                <i className="ti ti-ticket me-1 f-s-20"></i> Can this ticket affect my
                                                job?
                                            </button>
                                        </h2>
                                        <div id="noicon-collapseTwo" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                Absolutely, tickets recorded on your driving history can result in
                                                disqualification from
                                                driving commercially or obtaining a commercial driver's license (CDL).
                                                They can also
                                                disqualify you from driving for ride-sharing services such as Uber or
                                                Lyft, which require a
                                                clean driving record.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#noicon-collapseThree" aria-expanded="false"
                                                    aria-controls="noicon-collapseThree">
                                                <i className="ti ti-transition-bottom me-1 f-s-20"></i> How long does it
                                                take to resolve my
                                                case?
                                            </button>
                                        </h2>
                                        <div id="noicon-collapseThree" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                It really depends on the court your ticket landed in. Some courts move
                                                faster than others,
                                                but on average, it could take about 1-3 months. This is perfectly normal
                                                in the legal
                                                process.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="accordions7 collapse mt-3" id="accordionsItem7">
                                <code className="language-html">&lt;div class="card"&gt;
                                    {`<div class="card-header">
  <h5>No icon indicators</h5>
</div>
<div class="card-body">
  <div class="accordion app-accordion accordion-light-danger app-accordion-no-icon" id="accordionnoiconExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#noicon-collapseOne" aria-expanded="true" aria-controls="noicon-collapseOne">
          <i class="ti ti-message-report me-1 f-s-20"></i> What happens if I just pay my ticket?
        </button>
      </h2>
      <div id="noicon-collapseOne" class="accordion-collapse collapse show">
        <div class="accordion-body">
          Paying your ticket without contesting it can result in a conviction on your driving record.
          This can have long-lasting consequences such as increased insurance rates, driver's license
          suspension, employment restrictions, and additional fines imposed by your state's DMV.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#noicon-collapseTwo" aria-expanded="false" aria-controls="noicon-collapseTwo">
          <i class="ti ti-ticket me-1 f-s-20"></i> Can this ticket affect my job?
        </button>
      </h2>
      <div id="noicon-collapseTwo" class="accordion-collapse collapse">
        <div class="accordion-body">
          Absolutely, tickets recorded on your driving history can result in disqualification from
          driving commercially or obtaining a commercial driver's license (CDL). They can also
          disqualify you from driving for ride-sharing services such as Uber or Lyft, which require a
          clean driving record.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#noicon-collapseThree" aria-expanded="false" aria-controls="noicon-collapseThree">
          <i class="ti ti-transition-bottom me-1 f-s-20"></i> How long does it take to resolve my case?
        </button>
      </h2>
      <div id="noicon-collapseThree" class="accordion-collapse collapse">
        <div class="accordion-body">
          It really depends on the court your ticket landed in. Some courts move faster than others,
          but on average, it could take about 1-3 months. This is perfectly normal in the legal
          process.
        </div>
      </div>
    </div>
  </div>
</div>`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <div className="card equal-card">
                            <CardHeader className=" code-header">
                                <h5>Multi Level Indicators </h5>
                                <a data-bs-toggle="collapse" href="#accordionsItem8" aria-expanded="false"
                                   aria-controls="accordionsItem8">
                                    <i className="ti ti-code source" data-source="accordions8"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="accordion app-accordion accordion-light-success app-accordion-plus"
                                     id="nestingExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#nestingcollapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                This is level one accordion #1
                                            </button>
                                        </h2>
                                        <div id="nestingcollapseOne" className="accordion-collapse collapse show"
                                             data-bs-parent="#nestingExample">
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default.

                                                <div
                                                    className="accordion mt-2 app-accordion app-accordion-icon-left app-accordion-plus"
                                                    id="nestingtwoExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button className="accordion-button collapsed" type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#nestingtwocollapseOne"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseOne">
                                                                This is level two accordion #1
                                                            </button>
                                                        </h2>
                                                        <div id="nestingtwocollapseOne"
                                                             className="accordion-collapse collapse"
                                                             data-bs-parent="#nestingtwoExample">
                                                            <div className="accordion-body">
                                                                This is the first item's accordion body It is shown by
                                                                default.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button className="accordion-button collapsed" type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#nestingtwocollapseTwo"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseTwo">
                                                                This is level two accordion #2
                                                            </button>
                                                        </h2>
                                                        <div id="nestingtwocollapseTwo"
                                                             className="accordion-collapse collapse"
                                                             data-bs-parent="#nestingtwoExample">
                                                            <div className="accordion-body">
                                                                <strong>This is the second item's accordion
                                                                    body.</strong> It is hidden by default,
                                                                until the collapse plugin adds the appropriate classes
                                                                that we use to style each
                                                                element. These classes control the overall appearance,
                                                                as well as the showing and
                                                                hiding via CSS transitions. You can modify any of this
                                                                with custom CSS or overriding
                                                                our default variables. It's also worth noting that just
                                                                about any HTML can go within
                                                                the <code>.accordion-body</code>, though the transition
                                                                does limit overflow.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#nestingcollapseTwo" aria-expanded="false"
                                                    aria-controls="collapseTwo">
                                                This is level one accordion #2
                                            </button>
                                        </h2>
                                        <div id="nestingcollapseTwo" className="accordion-collapse collapse"
                                             data-bs-parent="#nestingExample">
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong> It is hidden
                                                by default, until
                                                the collapse plugin adds the appropriate classes that we use to style
                                                each element. These
                                                classes control the overall appearance, as well as the showing and
                                                hiding via CSS
                                                transitions. You can modify any of this with custom CSS or overriding
                                                our default variables.
                                                It's also worth noting that just about any HTML can go within the
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </CardBody>
                            <pre className="accordions8 collapse mt-3" id="accordionsItem8">
                                <code className="language-html">
{`
<div class="card equal-card">
<div class="card-header">
  <h5>Multi level indicators</h5>
</div>
<div class="card-body">
  <div class="accordion app-accordion accordion-light-success app-accordion-plus" id="nestingExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#nestingcollapseOne" aria-expanded="true" aria-controls="collapseOne">
          This is level one accordion #1
        </button>
      </h2>
      <div id="nestingcollapseOne" class="accordion-collapse collapse show" data-bs-parent="#nestingExample">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default.
          <br/>
          <div class="accordion mt-2 app-accordion app-accordion-icon-left app-accordion-plus" id="nestingtwoExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nestingtwocollapseOne" aria-expanded="false" aria-controls="collapseOne">
                  This is level two accordion #1
                </button>
              </h2>
              <div id="nestingtwocollapseOne" class="accordion-collapse collapse" data-bs-parent="#nestingtwoExample">
                <div class="accordion-body">
                  This is the first item's accordion body It is shown by default.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nestingtwocollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  This is level two accordion #2
                </button>
              </h2>
              <div id="nestingtwocollapseTwo" class="accordion-collapse collapse" data-bs-parent="#nestingtwoExample">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
          <br/>
        </div>
      </div>
    </div>
    <br/>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nestingcollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          This is level one accordion #2
        </button>
      </h2>
      <div id="nestingcollapseTwo" class="accordion-collapse collapse" data-bs-parent="#nestingExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</div>`}
                                </code>
                            </pre>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Accordions;