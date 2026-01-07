    import React, {useEffect} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Prism from "prismjs";


const alert = () => {
    useEffect(()=>{
        Prism.highlightAll();

        const alertPlaceholder = document.getElementById('liveAlert')
        const appendAlert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        }

        const alertTrigger = document.getElementById('liveAlertBtn')
        if (alertTrigger) {
            alertTrigger.addEventListener('click', () => {
                appendAlert('Hi!, Welcome To Ra-admin','light-border-primary')
            })
        }

    },[])
    return (
        <div>

            <Container fluid>
                <Row className=" m-1">
                    <Col sm={12}>
                        <h4 className="main-title">Alert</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Alert</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Basic Alert</h5>
                                <a data-bs-toggle="collapse" href="#simpalalertExample" aria-expanded="false"
                                   aria-controls="simpalalertExample">
                                    <i className="ti ti-code source" data-source="simpalalert"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="alert alert-primary" role="alert">
                                    Simple primary alert -check it out!
                                </div>
                                <div className="alert alert-secondary" role="alert">
                                    Simple secondary alert -check it out!
                                </div>
                                <div className="alert alert-success" role="alert">
                                    Simple success alert -check it out!
                                </div>
                                <div className="alert alert-danger" role="alert">
                                    Simple danger alert -check it out!
                                </div>
                                <div className="alert alert-warning" role="alert">
                                    Simple warning alert -check it out!
                                </div>
                                <div className="alert alert-info" role="alert">
                                    Simple info alert -check it out!
                                </div>
                                <div className="alert alert-light" role="alert">
                                    Simple light alert -check it out!
                                </div>
                                <div className="alert alert-dark" role="alert">
                                    Simple dark alert -check it out!
                                </div>

                                <pre className="simpalalert collapse mt-3" id="simpalalertExample">
                                    <code className="language-html">
{`
<div class="alert alert-primary" role="alert">Primary alert message</div>
<div class="alert alert-secondary" role="alert">Secondary alert message</div>
<div class="alert alert-success" role="alert">Success alert message</div>
<div class="alert alert-danger" role="alert">Danger alert message</div>
<div class="alert alert-warning" role="alert">Warning alert message</div>
<div class="alert alert-info" role="alert">Info alert message</div>
<div class="alert alert-light" role="alert">Light alert message</div>
<div class="alert alert-dark" role="alert">Dark alert message</div>
`}
                                    </code>
                                </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Outline Alert </h5>
                                <a data-bs-toggle="collapse" href="#outlinealertExample" aria-expanded="false"
                                   aria-controls="outlinealertExample">
                                    <i className="ti ti-code source" data-source="outlinealert"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="alert alert-outline-primary" role="alert">
                                    Outline-alert primary -check it out!
                                </div>
                                <div className="alert alert-outline-secondary" role="alert">
                                    Outline-alert secondary -check it out!
                                </div>
                                <div className="alert alert-outline-success" role="alert">
                                    Outline-alert success -check it out!
                                </div>
                                <div className="alert alert-outline-danger" role="alert">
                                    Outline-alert danger -check it out!
                                </div>
                                <div className="alert alert-outline-warning" role="alert">
                                    Outline-alert warning -check it out!
                                </div>
                                <div className="alert alert-outline-info" role="alert">
                                    Outline-alert info -check it out!
                                </div>
                                <div className="alert alert-outline-light" role="alert">
                                    Outline-alert light -check it out!
                                </div>
                                <div className="alert alert-outline-dark" role="alert">
                                    Outline-alert dark -check it out!
                                </div>

                                <pre className="outlinealert collapse mt-3" id="outlinealertExample">
                                    <code className="language-html">
{`
<div class="alert alert-outline-primary" role="alert">Primary outline alert message</div>
<div class="alert alert-outline-secondary" role="alert">Secondary outline alert message</div>
<div class="alert alert-outline-success" role="alert">Success outline alert message</div>
<div class="alert alert-outline-danger" role="alert">Danger outline alert message</div>
<div class="alert alert-outline-warning" role="alert">Warning outline alert message</div>
<div class="alert alert-outline-info" role="alert">Info outline alert message</div>
<div class="alert alert-outline-light" role="alert">Light outline alert message</div>
<div class="alert alert-outline-dark" role="alert">Dark outline alert message</div>
`}
                                    </code>
                                </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader className="code-header">
                                <h5 className="txt-ellipsis">Light Alert With Link color</h5>
                                <a data-bs-toggle="collapse" href="#lightalertExample" aria-expanded="false"
                                   aria-controls="lightalertExample">
                                    <i className="ti ti-code source" data-source="lightalert"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="alert alert-light-primary" role="alert">
                                    Light primary color alert with <a href="#" className="alert-link">an example
                                    link</a> -Check it!
                                </div>
                                <div className="alert alert-light-secondary" role="alert">
                                    Light secondary color alert with <a href="#" className="alert-link">an example
                                    link</a> -Check it!
                                </div>
                                <div className="alert alert-light-success" role="alert">
                                    Light success color alert with <a href="#" className="alert-link">an example
                                    link</a> -Check it!
                                </div>
                                <div className="alert alert-light-danger" role="alert">
                                    Light danger color alert with <a href="#" className="alert-link">an example
                                    link</a> -Check it!
                                </div>
                                <div className="alert alert-light-warning" role="alert">
                                    Light warning color alert with <a href="#" className="alert-link">an example
                                    link</a> -Check it!
                                </div>
                                <div className="alert alert-light-info" role="alert">
                                    Light info color alert with <a href="#" className="alert-link">an example
                                    link</a> -Check it!
                                </div>
                                <div className="alert alert-light-light" role="alert">
                                    Light light color alert with <a href="#" className="alert-link">an example
                                    link</a> -Check it!
                                </div>
                                <div className="alert alert-light-dark" role="alert">
                                    Light dark color alert with <a href="#" className="alert-link">an example
                                    link</a> -Check it!
                                </div>

                                <pre className="lightalert collapse mt-3" id="lightalertExample">
                                   <code className="language-html">
{`
<div class="alert alert-light-primary" role="alert">Primary light alert message</div>
<div class="alert alert-light-secondary" role="alert">Secondary light alert message</div>
<div class="alert alert-light-success" role="alert">Success light alert message</div>
<div class="alert alert-light-danger" role="alert">Danger light alert message</div>
<div class="alert alert-light-warning" role="alert">Warning light alert message</div>
<div class="alert alert-light-info" role="alert">Info light alert message</div>
<div class="alert alert-light-light" role="alert">Light light alert message</div>
<div class="alert alert-light-dark" role="alert">Dark light alert message</div>
`}
                                   </code>
                                  </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Alert With Icons</h5>
                                <a data-bs-toggle="collapse" href="#lightborderalertExample" aria-expanded="false"
                                   aria-controls="lightborderalertExample">
                                    <i className="ti ti-code source" data-source="lightborder"></i>
                                </a>

                            </CardHeader>
                            <CardBody>
                                <div
                                    className="alert alert-light-border-primary d-flex align-items-center justify-content-between"
                                    role="alert"
                                >
                                    <p className="mb-0">
                                        <i className="ti ti-download f-s-18 me-2"></i>
                                        Light-border-primary alert With icons -check it out!
                                    </p>
                                    <i className="ti ti-x" data-bs-dismiss="alert"></i>
                                </div>
                                <div
                                    className="alert alert-light-border-secondary d-flex align-items-center justify-content-between"
                                    role="alert"
                                >
                                    <p className="mb-0">
                                        <i className="ti ti-accessible-off-filled f-s-18 me-2"></i>
                                        Light-border-secondary alert With icons -check it out!
                                    </p>
                                    <i className="ti ti-x" data-bs-dismiss="alert"></i>
                                </div>
                                <div
                                    className="alert alert-light-border-success d-flex align-items-center justify-content-between"
                                    role="alert">
                                    <p className="mb-0">
                                        <i className="ti ti-circle-check f-s-18 me-2"></i>Light-border-success alert
                                        With icons -check it
                                        out!
                                    </p>
                                    <i className="ti ti-x" data-bs-dismiss="alert"></i>
                                </div>
                                <div
                                    className="alert alert-light-border-danger d-flex align-items-center justify-content-between"
                                    role="alert">
                                    <p className="mb-0">
                                        <i className="ti ti-power f-s-18 me-2"></i>Light-border-danger alert With icons
                                        -check it out!
                                    </p>
                                    <i className="ti ti-x" data-bs-dismiss="alert"></i>
                                </div>
                                <div
                                    className="alert alert-light-border-warning d-flex align-items-center justify-content-between"
                                    role="alert">
                                    <p className="mb-0">
                                        <i className="ti ti-alert-triangle f-s-18 me-2"></i>Light-border-warning alert
                                        With icons -check it
                                        out!
                                    </p>
                                    <i className="ti ti-x" data-bs-dismiss="alert"></i>
                                </div>
                                <div
                                    className="alert alert-light-border-info d-flex align-items-center justify-content-between"
                                    role="alert">
                                    <p className="mb-0">
                                        <i className="ti ti-info-circle f-s-18 me-2"></i>Light-border-info alert With
                                        icons -check it out!
                                    </p>
                                    <i className="ti ti-x" data-bs-dismiss="alert"></i>
                                </div>
                                <div
                                    className="alert alert-light-border-light d-flex align-items-center justify-content-between"
                                    role="alert">
                                    <p className="mb-0">
                                        <i className="ti ti-align-box-bottom-center f-s-18 me-2"></i>Light-border-light
                                        alert With icons
                                        -check it out!
                                    </p>
                                    <i className="ti ti-x" data-bs-dismiss="alert"></i>
                                </div>
                                <div
                                    className="alert alert-light-border-dark d-flex align-items-center justify-content-between"
                                    role="alert">
                                    <p className="mb-0">
                                        <i className="ti ti-world-download f-s-18 me-2"></i>Light-border-dark alert With
                                        icons -check it
                                        out!
                                    </p>
                                    <i className="ti ti-x" data-bs-dismiss="alert"></i>
                                </div>

                                <pre className="lightborder collapse mt-3" id="lightborderalertExample">
                                  <code className="language-html">
{`
<div class="alert alert-light-border-primary" role="alert">Primary light-border alert message</div>
<div class="alert alert-light-border-secondary" role="alert">Secondary light-border alert message</div>
<div class="alert alert-light-border-success" role="alert">Success light-border alert message</div>
<div class="alert alert-light-border-danger" role="alert">Danger light-border alert message</div>
<div class="alert alert-light-border-warning" role="alert">Warning light-border alert message</div>
<div class="alert alert-light-border-info" role="alert">Info light-border alert message</div>
<div class="alert alert-light-border-light" role="alert">Light light-border alert message</div>
<div class="alert alert-light-border-dark" role="alert">Dark light-border alert message</div>
`}
                                  </code>
                              </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Alert With Left Border</h5>
                                <a data-bs-toggle="collapse" href="#leftborderalertExample" aria-expanded="false"
                                   aria-controls="leftborderalertExample">
                                    <i className="ti ti-code source" data-source="leftbor"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="alert alert-border-primary" role="alert">
                                    Alert with left slide border - check out!
                                </div>
                                <div className="alert alert-border-secondary" role="alert">
                                    Alert with left slide border - check out!
                                </div>
                                <div className="alert alert-border-success" role="alert">
                                    Alert with left slide border - check out!
                                </div>
                                <pre className="leftbor collapse mt-3" id="leftborderalertExample">
                                  <code className="language-html">
{`
<div class="alert alert-border-primary" role="alert">Primary border alert message</div>
<div class="alert alert-border-secondary" role="alert">Secondary border alert message</div>
<div class="alert alert-border-success" role="alert">Success border alert message</div>
`}
                                  </code>
                              </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Alert With Label Icons</h5>
                                <a data-bs-toggle="collapse" href="#labeliconExample" aria-expanded="false"
                                   aria-controls="labeliconExample">
                                    <i className="ti ti-code source" data-source="labelicon"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="alert alert-label alert-label-primary" role="alert">
                                    <p className="mb-0">
                                        <i className="ti ti-download label-icon label-icon-primary"></i>
                                        Alert with lable icons - check out!
                                    </p>
                                </div>
                                <div className="alert alert-label alert-label-secondary" role="alert">
                                    <p className="mb-0">
                                        <i className="ti ti-download label-icon label-icon-secondary"></i>
                                        Alert with lable icons - check out!
                                    </p>
                                </div>
                                <div className="alert alert-label alert-label-success" role="alert">
                                    <p className="mb-0">
                                        <i className="ti ti-download label-icon label-icon-success"></i>
                                        Alert with lable icons - check out!
                                    </p>
                                </div>
                                <pre className="labelicon collapse mt-3" id="labeliconExample">
                                  <code className="language-html">
{`
<div class="alert alert-label alert-label-primary" role="alert">
    <p class="mb-0">
        <i class="ti ti-download label-icon label-icon-primary"></i>
        Primary label alert message
    </p>
</div>
<div class="alert alert-label alert-label-secondary" role="alert">
    <p class="mb-0">
        <i class="ti ti-download label-icon label-icon-secondary"></i>
        Secondary label alert message
    </p>
</div>
<div class="alert alert-label alert-label-success" role="alert">
    <p class="mb-0">
        <i class="ti ti-download label-icon label-icon-success"></i>
        Success label alert message
    </p>
</div>
`}
                                  </code>
                              </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader className="code-header">
                                <h5 className="txt-ellipsis">Custom Alerts With Dismissing</h5>
                                <a data-bs-toggle="collapse" href="#customeralertExample" aria-expanded="false"
                                   aria-controls="customeralertExample">
                                    <i className="ti ti-code source" data-source="custome"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="alert alert-primary alert-dismissible" role="alert">
                                    <div className="d-flex justify-content-between">
                                        <img src="/assets/images/icons/cookie-.png" className="w-35 h-35 me-2"
                                             alt="image"/>
                                        <p className="mb-0">
                                            We have Cookies! We use it to ensure you get the best experience on our
                                            website and service
                                        </p>
                                        <button type="button" className="btn-close" data-bs-dismiss="alert"
                                                aria-label="Close"></button>
                                    </div>
                                </div>
                                <div className="alert alert-label alert-label-success justify-content-between"
                                     role="alert">
                                    <p className="mb-0">
                                        <i className="ti ti-garden-cart label-icon label-icon-success"></i>
                                        your order is delayed
                                    </p>
                                    <button type="button" className="btn btn-sm btn-success"
                                            data-bs-dismiss="alert"> Accept
                                    </button>
                                </div>
                                <div className="alert alert-border-info" role="alert">
                                    <h6>
                                        <i className="ti ti-info-circle f-s-18 me-2 text-info"></i>
                                        New Version is now availble
                                    </h6>
                                    <p>
                                        With this new Version you have accesss to more customization features and file
                                        export options.
                                    </p>
                                    <div className="text-end">
                                        <a href="" className="link-primary text-d-underline" data-bs-dismiss="alert">Don't
                                            allow</a>
                                        <a href="" className="link-primary text-d-underline ms-2">Allow</a>
                                    </div>
                                </div>
                                <div className="alert custom-alert p-0" role="alert">
                                    <div className="alert-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="alert"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="alert-body">
                                        <h4 className="mb-0 text-center mb-3">
                                            <img src="/assets/images/icons/warning.png" className="w-40 h-40"
                                                 alt="image"/>
                                            Under maintenance
                                        </h4>
                                        <p className="mb-3">
                                            Our team is currently checking some errors in this area.
                                            We dont't recommend changing any of your settings until the next update.
                                        </p>
                                        <div className="text-end">
                                            <button type="button" className="btn btn-warning">Get more info</button>
                                        </div>
                                    </div>
                                </div>
                                <pre className="custome collapse mt-3" id="customeralertExample">
                                  <code className="language-html">
{`
<div class="alert alert-primary alert-dismissible" role="alert">
    <div class="d-flex justify-content-between">
        <img src="../assets/images/alert/cookie-.png" class="w-35 h-35 me-2" alt="image">
        <p class="mb-0">
            We have Cookies! We use it to ensure you get the best experience on our website and service
        </p>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</div>

<div class="alert alert-label alert-label-success justify-content-between" role="alert">
    <p class="mb-0">
        <i class="ti ti-garden-cart label-icon label-icon-success"></i> your order is delayed
    </p>
    <button type="button" class="btn btn-sm btn-success" data-bs-dismiss="alert">Accept</button>
</div>

<div class="alert alert-border-info" role="alert">
    <h6>
        <i class="ti ti-info-circle f-s-18 me-2 text-info"></i> New Version is now available
    </h6>
    <p>
        With this new Version you have access to more customization features and file export options.
    </p>
    <div class="text-end">
        <a href="" class="link-primary text-d-underline" data-bs-dismiss="alert">Don't allow</a>
        <a href="" class="link-primary text-d-underline ms-2">Allow</a>
    </div>
</div>

<div class="alert custom-alert p-0" role="alert">
    <div class="alert-header">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert-body">
        <h4 class="mb-0 text-center mb-3">
            <img src="../assets/images/alert/warning.png" class="w-40 h-40" alt="image">
            Under maintenance
        </h4>
        <p class="mb-3">
            Our team is currently checking some errors in this area.
            We don't recommend changing any of your settings until the next update.
        </p>
        <div class="text-end">
            <button type="button" class="btn btn-warning">Get more info</button>
        </div>
    </div>
</div>
`}
                                  </code>
                                </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="card">
                            <CardHeader className="code-header">
                                <h5 className="txt-ellipsis">Alert Additional content</h5>
                                <a data-bs-toggle="collapse" href="#addithionalalertExample" aria-expanded="false"
                                   aria-controls="addithionalalertExample">
                                    <i className="ti ti-code source" data-source="addithional"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="alert alert-primary" role="alert">
                                    <h4 className="alert-heading">Well done! <i
                                        className="ti ti-x float-end breadcrumb-start"
                                        data-bs-dismiss="alert"></i></h4>
                                    <p>Aww yeah, you successfully read this important alert message. This example text
                                        is going to run
                                        a bit longer so that you can see how spacing within an alert works with this
                                        kind of content.
                                    </p>
                                    <hr/>
                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep
                                        things nice and
                                        tidy.</p>
                                </div>
                                <div className="alert alert-secondary" role="alert">
                                    <h4 className="alert-heading">Well done! <i
                                        className="ti ti-x float-end breadcrumb-start"
                                        data-bs-dismiss="alert"></i></h4>
                                    <p>Aww yeah, you successfully read this important alert message. This example text
                                        is going to run
                                        a bit longer so that you can see how spacing within an alert works with this
                                        kind of content.
                                    </p>
                                    <hr/>
                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep
                                        things nice and
                                        tidy.</p>
                                </div>
                                <div className="alert alert-success" role="alert">
                                    <h4 className="alert-heading">Well done! <i
                                        className="ti ti-x float-end breadcrumb-start"
                                        data-bs-dismiss="alert"></i></h4>
                                    <p>Aww yeah, you successfully read this important alert message. This example text
                                        is going to run
                                        a bit longer so that you can see how spacing within an alert works with this
                                        kind of content.
                                    </p>
                                    <hr/>
                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep
                                        things nice and
                                        tidy.</p>
                                </div>
                            </CardBody>
                            <pre className="addithional collapse mt-3" id="addithionalalertExample">
                              <code className="language-html">

{`
<div class="alert alert-primary" role="alert">
    <h4 class="alert-heading">Well done! <i class="ti ti-x float-end breadcrumb-start" data-bs-dismiss="alert"></i></h4>
    <p>...</p>
    <hr>
    <p class="mb-0">...</p>
</div>

<div class="alert alert-secondary" role="alert">
    <h4 class="alert-heading">Well done! <i class="ti ti-x float-end breadcrumb-start" data-bs-dismiss="alert"></i></h4>
    <p>...</p>
    <hr>
    <p class="mb-0">...</p>
</div>

<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Well done! <i class="ti ti-x float-end breadcrumb-start" data-bs-dismiss="alert"></i></h4>
    <p>...</p>
    <hr>
    <p class="mb-0">...</p>
</div>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <CardHeader className="code-header">
                                <h5>Live Alert</h5>
                                <a data-bs-toggle="collapse" href="#livealertExample" aria-expanded="false"
                                   aria-controls="livealertExample">
                                    <i className="ti ti-code source" data-source="livealeart"></i>
                                </a>
                            </CardHeader>
                            <div className="card-body">
                                <div id="liveAlert"></div>
                                <button type="button" className="btn btn-primary" id="liveAlertBtn">Show live alert</button>
                            </div>
                            <pre className="livealeart collapse mt-3" id="livealertExample">
                                <code className="language-html">
{`
<div id="liveAlert"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
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

export default alert;