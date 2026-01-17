import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Button = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid className="button-section">
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Buttons</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
									<span>
									  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
									</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Button</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Basic Buttons</h5>
                                <a data-bs-toggle="collapse" href="#basicbtnexample" aria-expanded="false"
                                   aria-controls="basicbtnexample">
                                    <i className="ti ti-code source" data-source="basicbutton"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="app-btn-list">
                                    <button type="button" className="btn btn-primary">Primary</button>
                                    <button type="button" className="btn btn-secondary">Secondary</button>
                                    <button type="button" className="btn btn-success">Success</button>
                                    <button type="button" className="btn btn-danger">Danger</button>
                                    <button type="button" className="btn btn-warning">Warning</button>
                                    <button type="button" className="btn btn-info">Info</button>
                                    <button type="button" className="btn btn-light">Light</button>
                                    <button type="button" className="btn btn-dark">Dark</button>
                                    <button type="button" className="btn btn-link">Link</button>
                                </div>
                            </CardBody>
                            <pre className="basicbutton collapse mt-3" id="basicbtnexample">
                                <code className="language-html">
{`
<button type="button" class="btn btn-primary">...</button>
<button type="button" class="btn btn-secondary">...</button>
<button type="button" class="btn btn-success">...</button>
<button type="button" class="btn btn-danger">...</button>
<button type="button" class="btn btn-warning">...</button>
<button type="button" class="btn btn-info">...</button>
<button type="button" class="btn btn-light">...</button>
<button type="button" class="btn btn-dark">...</button>
<button type="button" class="btn btn-link">...</button>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col xs="12">
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Outline Buttons</h5>
                                <a data-bs-toggle="collapse" href="#outlinebtnexample" aria-expanded="false"
                                   aria-controls="outlinebtnexample">
                                    <i className="ti ti-code source" data-source="outlinebtn"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="app-btn-list">
                                    <button type="button" className="btn btn-outline-primary">Primary</button>
                                    <button type="button" className="btn btn-outline-secondary">Secondary</button>
                                    <button type="button" className="btn btn-outline-success">Success</button>
                                    <button type="button" className="btn btn-outline-danger">Danger</button>
                                    <button type="button" className="btn btn-outline-warning">Warning</button>
                                    <button type="button" className="btn btn-outline-info">Info</button>
                                    <button type="button" className="btn btn-outline-light">Light</button>
                                    <button type="button" className="btn btn-outline-dark">Dark</button>
                                    <button type="button" className="btn btn-outline-link">Link</button>
                                </div>
                            </CardBody>

                            <pre className="outlinebtn collapse mt-3" id="outlinebtnexample">
                                <code className="language-html">
{`
<button type="button" class="btn btn-outline-primary">...</button>
<button type="button" class="btn btn-outline-secondary">...</button>
<button type="button" class="btn btn-outline-success">...</button>
<button type="button" class="btn btn-outline-danger">...</button>
<button type="button" class="btn btn-outline-warning">...</button>
<button type="button" class="btn btn-outline-info">...</button>
<button type="button" class="btn btn-outline-light">...</button>
<button type="button" class="btn btn-outline-dark">...</button>
<button type="button" class="btn btn-outline-link">...</button>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col xs="12">
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Light Buttons</h5>
                                <a data-bs-toggle="collapse" href="#lightbtnexample" aria-expanded="false"
                                   aria-controls="lightbtnexample">
                                    <i className="ti ti-code source" data-source="lightbtn"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="app-btn-list">
                                    <button type="button" className="btn btn-light-primary">Primary</button>
                                    <button type="button" className="btn btn-light-secondary">Secondary</button>
                                    <button type="button" className="btn btn-light-success">Success</button>
                                    <button type="button" className="btn btn-light-danger">Danger</button>
                                    <button type="button" className="btn btn-light-warning">Warning</button>
                                    <button type="button" className="btn btn-light-info">Info</button>
                                    <button type="button" className="btn btn-light-light">Light</button>
                                    <button type="button" className="btn btn-light-dark">Dark</button>
                                    <button type="button" className="btn btn-light-link">Link</button>
                                </div>
                            </CardBody>
                            <pre className="lightbtn collapse mt-3" id="lightbtnexample">
                                <code className="language-html">
{`
<button type="button" class="btn btn-light-primary">...</button>
<button type="button" class="btn btn-light-secondary">...</button>
<button type="button" class="btn btn-light-success">...</button>
<button type="button" class="btn btn-light-danger">...</button>
<button type="button" class="btn btn-light-warning">...</button>
<button type="button" class="btn btn-light-info">...</button>
<button type="button" class="btn btn-light-light">...</button>
<button type="button" class="btn btn-light-dark">...</button>
<button type="button" class="btn btn-light-link">...</button>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col xs="12">
                        <Card className="button-view">
                            <CardHeader className="code-header">
                                <h5>Icon Button</h5>
                                <a data-bs-toggle="collapse" href="#iconbtnExample" aria-expanded="false"
                                   aria-controls="iconbtnExample">
                                    <i className="ti ti-code source" data-source="iconbtn"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={6} lg={4} className="app-btn-list">
                                        <button type="button" className="btn btn-primary">
                                            <i className="ti ti-download"></i> Primary
                                        </button>
                                        <button type="button" className="btn btn-secondary d-lg-inline-flex align-items-center">
                                            Secondary <i className="ti ti-alert-triangle m-s-3"></i>
                                        </button>
                                    </Col>
                                    <Col md={6} lg={4} className="app-btn-list">
                                        <button type="button" className="btn btn-outline-primary">
                                            <i className="ti ti-download"></i> Primary
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary d-lg-inline-flex align-items-center">
                                            Secondary <i className="ti ti-alert-triangle m-s-3"></i>
                                        </button>
                                    </Col>
                                    <Col md={6} lg={4} className="app-btn-list">
                                        <button type="button" className="btn btn-light-primary">
                                            <i className="ti ti-download"></i> Primary
                                        </button>
                                        <button type="button" className="btn btn-light-secondary d-lg-inline-flex align-items-center">
                                            Secondary <i className="ti ti-alert-triangle m-s-3"></i>
                                        </button>
                                    </Col>
                                </Row>
                            </CardBody>
                            <pre className="iconbtn collapse mt-3" id="iconbtnExample">
                                <code className="language-html">
{`
<div class="row app-btn-list">
    <div class="col-md-6 col-lg-4">
        <button type="button" class="btn btn-primary">
            <i class="ti ti-download"></i> Primary
        </button>
        <button type="button" class="btn btn-secondary d-lg-inline-flex align-items-center">
            Secondary <i class="ti ti-alert-triangle m-s-3"></i>
        </button>
    </div>
    <div class="col-md-6 col-lg-4">
        <button type="button" class="btn btn-outline-primary">
            <i class="ti ti-download"></i> Primary
        </button>
        <button type="button" class="btn btn-outline-secondary d-lg-inline-flex align-items-center">
            Secondary <i class="ti ti-alert-triangle m-s-3"></i>
        </button>
    </div>
    <div class="col-md-6 col-lg-4">
        <button type="button" class="btn btn-light-primary">
            <i class="ti ti-download"></i> Primary
        </button>
        <button type="button" class="btn btn-light-secondary d-lg-inline-flex align-items-center">
            Secondary <i class="ti ti-alert-triangle m-s-3"></i>
        </button>
    </div>
</div>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card className="button-view">
                            <CardHeader className="code-header">
                                <h5>Radius</h5>
                                <a data-bs-toggle="collapse" href="#radiousexample1" aria-expanded="false"
                                   aria-controls="radiousexample1">
                                    <i className="ti ti-code source" data-source="radious"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button type="button" className="btn btn-primary b-r-22"><i
                                            className="ti ti-download"></i> Primary
                                        </button>
                                        <button type="button"
                                                className="btn btn-secondary d-lg-inline-flex align-items-center b-r-22">
                                            Secondary <i className="ti ti-alert-triangle m-s-3"></i></button>
                                    </Col>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button type="button" className="btn btn-outline-primary b-r-22"><i
                                            className="ti ti-download"></i> Primary
                                        </button>
                                        <button type="button"
                                                className="btn btn-outline-secondary d-lg-inline-flex align-items-center b-r-22">
                                            Secondary <i className="ti ti-alert-triangle m-s-3"></i></button>
                                    </Col>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button type="button" className="btn btn-light-primary b-r-22"><i
                                            className="ti ti-download"></i> Primary
                                        </button>
                                        <button type="button"
                                                className="btn btn-light-secondary d-lg-inline-flex align-items-center b-r-22">
                                            Secondary <i className="ti ti-alert-triangle m-s-3"></i></button>
                                    </Col>
                                </Row>
                            </CardBody>

                            <pre className="radious collapse mt-3" id="radiousexample1">
                                <code className="language-html">
{`
<div class="row app-btn-list">
    <div class="col-md-6 col-lg-4 col-12">
        <button type="button" class="btn btn-primary b-r-22">
            <i class="ti ti-download"></i> Primary
        </button>
        <button type="button" class="btn btn-secondary d-lg-inline-flex align-items-center b-r-22">
            Secondary <i class="ti ti-alert-triangle m-s-3"></i>
        </button>
    </div>
    <div class="col-md-6 col-lg-4 col-12">
        <button type="button" class="btn btn-outline-primary b-r-22">
            <i class="ti ti-download"></i> Primary
        </button>
        <button type="button" class="btn btn-outline-secondary d-lg-inline-flex align-items-center b-r-22">
            Secondary <i class="ti ti-alert-triangle m-s-3"></i>
        </button>
    </div>
    <div class="col-md-6 col-lg-4 col-12">
        <button type="button" class="btn btn-light-primary b-r-22">
            <i class="ti ti-download"></i> Primary
        </button>
        <button type="button" class="btn btn-light-secondary d-lg-inline-flex align-items-center b-r-22">
            Secondary <i class="ti ti-alert-triangle m-s-3"></i>
        </button>
    </div>
</div>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card className="button-view">
                            <CardHeader className="code-header">
                                <h5>Social Buttons</h5>
                                <a data-bs-toggle="collapse" href="#socialbtnexample" aria-expanded="false"
                                   aria-controls="socialbtnexample">
                                    <i className="ti ti-code source" data-source="socialbtn"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <Row className="row">
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button type="button"
                                                className="btn btn-facebook b-r-22 text-white d-inline-flex-center"><i
                                            className="ti ti-brand-facebook f-s-18 me-1"></i> Facebook
                                        </button>
                                        <button type="button"
                                                className="btn btn-twitter b-r-22 text-white d-inline-flex-center"><i
                                            className="ti ti-brand-twitter f-s-18 me-1"></i> twitter
                                        </button>
                                    </Col>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button type="button"
                                                className="btn btn-outline-pinterest b-r-22 d-inline-flex-center"><i
                                            className="ti ti-brand-pinterest f-s-18 me-1"></i> Pinterest
                                        </button>
                                        <button type="button"
                                                className="btn btn-outline-linkedin b-r-22 d-inline-flex-center"><i
                                            className="ti ti-brand-linkedin f-s-18 me-1"></i> Linkedin
                                        </button>
                                    </Col>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button type="button"
                                                className="btn btn-light-reddit b-r-22 d-inline-flex-center"><i
                                            className="ti ti-brand-reddit f-s-18 me-1"></i> Reddit
                                        </button>
                                        <button type="button"
                                                className="btn btn-light-twitter b-r-22 d-inline-flex-center"><i
                                            className="ti ti-brand-twitter f-s-18 me-1"></i> twitter
                                        </button>
                                    </Col>
                                </Row>
                            </CardBody>
                            <pre className="socialbtn collapse mt-3" id="socialbtnexample">
                                <code className="language-html">
{`
<div class="row">
    <div class="col-md-6 col-lg-4 col-12">
        <button type="button" class="btn btn-facebook b-r-22 text-white d-inline-flex-center">
            <i class="ti ti-brand-facebook f-s-18 me-1"></i> Facebook
        </button>
        <button type="button" class="btn btn-twitter b-r-22 text-white d-inline-flex-center">
            <i class="ti ti-brand-twitter f-s-18 me-1"></i> Twitter
        </button>
    </div>

    <div class="col-md-6 col-lg-4 col-12">
        <button type="button" class="btn btn-outline-pinterest b-r-22 d-inline-flex-center">
            <i class="ti ti-brand-pinterest f-s-18 me-1"></i> Pinterest
        </button>
        <button type="button" class="btn btn-outline-linkedin b-r-22 d-inline-flex-center">
            <i class="ti ti-brand-linkedin f-s-18 me-1"></i> Linkedin
        </button>
    </div>

    <div class="col-md-6 col-lg-4 col-12">
        <button type="button" class="btn btn-light-reddit b-r-22 d-inline-flex-center">
            <i class="ti ti-brand-reddit f-s-18 me-1"></i> Reddit
        </button>
        <button type="button" class="btn btn-light-twitter b-r-22 d-inline-flex-center">
            <i class="ti ti-brand-twitter f-s-18 me-1"></i> Twitter
        </button>
    </div>
</div>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Icon Button</h5>
                                <a data-bs-toggle="collapse" href="#iconbtnexample" aria-expanded="false"
                                   aria-controls="iconbtnexample">
                                    <i className="ti ti-code source" data-source="iconbtn"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="app-btn-list">
                                    <button type="button" className="btn btn-primary icon-btn b-r-4">
                                        <i className="ti ti-capture"></i>
                                    </button>
                                    <button type="button" className="btn btn-secondary icon-btn b-r-4">
                                        <i className="ti ti-bell-ringing"></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-primary icon-btn b-r-4">
                                        <i className="ti ti-capture"></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary icon-btn b-r-4">
                                        <i className="ti ti-bell-ringing"></i>
                                    </button>
                                    <button type="button" className="btn btn-light-primary icon-btn b-r-4">
                                        <i className="ti ti-capture"></i>
                                    </button>
                                    <button type="button" className="btn btn-light-secondary icon-btn b-r-4">
                                        <i className="ti ti-bell-ringing"></i>
                                    </button>
                                </div>
                            </CardBody>
                            <pre className="iconbtn collapse mt-3" id="iconbtnexample">
	                            <code className="language-html">
	{`
<div class="app-btn-list">
    <button type="button" class="btn btn-primary icon-btn b-r-4">
        <i class="ti ti-capture"></i>
    </button>
    <button type="button" class="btn btn-secondary icon-btn b-r-4">
        <i class="ti ti-bell-ringing"></i>
    </button>
    <button type="button" class="btn btn-outline-primary icon-btn b-r-4">
        <i class="ti ti-capture"></i>
    </button>
    <button type="button" class="btn btn-outline-secondary icon-btn b-r-4">
        <i class="ti ti-bell-ringing"></i>
    </button>
    <button type="button" class="btn btn-light-primary icon-btn b-r-4">
        <i class="ti ti-capture"></i>
    </button>
    <button type="button" class="btn btn-light-secondary icon-btn b-r-4">
        <i class="ti ti-bell-ringing"></i>
    </button>
</div>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col xl={8}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Social Buttons</h5>
                                <a data-bs-toggle="collapse" href="#socialbuttonexample" aria-expanded="false"
                                   aria-controls="socialbuttonexample">
                                    <i className="ti ti-code source" data-source="socialbutton"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="app-btn-list">
                                    <button type="button" className="btn btn-facebook icon-btn b-r-22">
                                        <i className="ti ti-brand-facebook text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-twitter icon-btn b-r-22">
                                        <i className="ti ti-brand-twitter text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-pinterest icon-btn b-r-22">
                                        <i className="ti ti-brand-pinterest text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-linkedin icon-btn b-r-22">
                                        <i className="ti ti-brand-linkedin text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-reddit icon-btn b-r-22">
                                        <i className="ti ti-brand-reddit text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-whatsapp icon-btn b-r-22">
                                        <i className="ti ti-brand-whatsapp text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-gmail icon-btn b-r-22">
                                        <i className="ti ti-brand-gmail text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-telegram icon-btn b-r-22">
                                        <i className="ti ti-brand-telegram text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-youtube icon-btn b-r-22">
                                        <i className="ti ti-brand-youtube text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-vimeo icon-btn b-r-22">
                                        <i className="ti ti-brand-vimeo text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-behance icon-btn b-r-22">
                                        <i className="ti ti-brand-behance text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-github icon-btn b-r-22">
                                        <i className="ti ti-brand-github text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-skype icon-btn b-r-22">
                                        <i className="ti ti-brand-skype text-white"></i>
                                    </button>
                                    <button type="button" className="btn btn-snapchat icon-btn b-r-22">
                                        <i className="ti ti-brand-snapchat"></i>
                                    </button>
                                </div>
                            </CardBody>
                            <pre className="socialbutton collapse mt-3" id="socialbuttonexample">
	                            <code className="language-html">
{`
<button type="button" class="btn btn-facebook icon-btn b-r-22">
    <i class="ti ti-brand-facebook text-white"></i>
</button>
<button type="button" class="btn btn-twitter icon-btn b-r-22">
    <i class="ti ti-brand-twitter text-white"></i>
</button>
<button type="button" class="btn btn-pinterest icon-btn b-r-22">
    <i class="ti ti-brand-pinterest text-white"></i>
</button>
<button type="button" class="btn btn-linkedin icon-btn b-r-22">
    <i class="ti ti-brand-linkedin text-white"></i>
</button>
<button type="button" class="btn btn-reddit icon-btn b-r-22">
    <i class="ti ti-brand-reddit text-white"></i>
</button>
<button type="button" class="btn btn-whatsapp icon-btn b-r-22">
    <i class="ti ti-brand-whatsapp text-white"></i>
</button>
<button type="button" class="btn btn-gmail icon-btn b-r-22">
    <i class="ti ti-brand-gmail text-white"></i>
</button>
<button type="button" class="btn btn-telegram icon-btn b-r-22">
    <i class="ti ti-brand-telegram text-white"></i>
</button>
<button type="button" class="btn btn-youtube icon-btn b-r-22">
    <i class="ti ti-brand-youtube text-white"></i>
</button>
<button type="button" class="btn btn-vimeo icon-btn b-r-22">
    <i class="ti ti-brand-vimeo text-white"></i>
</button>
<button type="button" class="btn btn-behance icon-btn b-r-22">
    <i class="ti ti-brand-behance text-white"></i>
</button>
<button type="button" class="btn btn-github icon-btn b-r-22">
    <i class="ti ti-brand-github text-white"></i>
</button>
<button type="button" class="btn btn-skype icon-btn b-r-22">
    <i class="ti ti-brand-skype text-white"></i>
</button>
<button type="button" class="btn btn-snapchat icon-btn b-r-22">
    <i class="ti ti-brand-snapchat"></i>
</button>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Disable Buttons</h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button type="button" className="btn btn-primary disabled">
                                            <i className="ti ti-download"></i> Primary
                                        </button>
                                        <button type="button" className="btn btn-secondary d-lg-inline-flex align-items-center disabled">
                                            Secondary <i className="ti ti-alert-triangle m-s-3"></i>
                                        </button>
                                    </Col>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button type="button" className="btn btn-outline-primary disabled">
                                            <i className="ti ti-download"></i> Primary
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary d-lg-inline-flex align-items-center disabled">
                                            Secondary <i className="ti ti-alert-triangle m-s-3"></i>
                                        </button>
                                    </Col>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button type="button" className="btn btn-light-primary disabled">
                                            <i className="ti ti-download"></i> Primary
                                        </button>
                                        <button type="button" className="btn btn-light-secondary d-lg-inline-flex align-items-center disabled">
                                            Secondary <i className="ti ti-alert-triangle m-s-3"></i>
                                        </button>
                                    </Col>
                                </Row>
                            </CardBody>
                            <pre className="radious collapse mt-3" id="radiousexample">
                                <code className="language-html">

                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Active Buttons</h5>
                                <a data-bs-toggle="collapse" href="#activebuttonexample" aria-expanded="false"
                                   aria-controls="activebuttonexample">
                                    <i className="ti ti-code source" data-source="activebtn"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button type="button" className="btn btn-primary active">
                                            <i className="ti ti-download"></i> Primary
                                        </button>
                                        <button type="button" className="btn btn-secondary d-lg-inline-flex align-items-center active">
                                            Secondary <i className="ti ti-alert-triangle m-s-3"></i>
                                        </button>
                                    </Col>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button type="button" className="btn btn-outline-primary active">
                                            <i className="ti ti-download"></i> Primary
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary d-lg-inline-flex align-items-center active">
                                            Secondary <i className="ti ti-alert-triangle m-s-3"></i>
                                        </button>
                                    </Col>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button type="button" className="btn btn-light-primary active">
                                            <i className="ti ti-download"></i> Primary
                                        </button>
                                        <button type="button" className="btn btn-light-secondary d-lg-inline-flex align-items-center active">
                                            Secondary <i className="ti ti-alert-triangle m-s-3"></i>
                                        </button>
                                    </Col>
                                </Row>
                            </CardBody>
                            <pre className="activebtn collapse mt-3" id="activebuttonexample">
                                <code className="language-html">
{`
<div class="row">
    <div class="col-md-6 col-lg-4 col-12 mb-3 app-btn-list">
        <button type="button" class="btn btn-primary active">
            <i class="ti ti-download"></i> Primary
        </button>
        <button type="button" class="btn btn-secondary d-lg-inline-flex align-items-center active">
            Secondary <i class="ti ti-alert-triangle m-s-3"></i>
        </button>
    </div>
    <div class="col-md-6 col-lg-4 col-12 mb-3 app-btn-list">
        <button type="button" class="btn btn-outline-primary active">
            <i class="ti ti-download"></i> Primary
        </button>
        <button type="button" class="btn btn-outline-secondary d-lg-inline-flex align-items-center active">
            Secondary <i class="ti ti-alert-triangle m-s-3"></i>
        </button>
    </div>
    <div class="col-md-6 col-lg-4 col-12 mb-3 app-btn-list">
        <button type="button" class="btn btn-light-primary active">
            <i class="ti ti-download"></i> Primary
        </button>
        <button type="button" class="btn btn-light-secondary d-lg-inline-flex align-items-center active">
            Secondary <i class="ti ti-alert-triangle m-s-3"></i>
        </button>
    </div>
</div>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card className="button-view">
                            <CardHeader className="code-header">
                                <h5>Loading Buttons</h5>
                                <a data-bs-toggle="collapse" href="#loadingbtnexample" aria-expanded="false"
                                   aria-controls="loadingbtnexample">
                                    <i className="ti ti-code source" data-source="loadingbtn"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col lg={6} xs={12} className="app-btn-list mb-0">
                                        <button className="btn btn-primary d-inline-flex-center" type="button">
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"/>
                                            Loading...
                                        </button>
                                        <button className="btn btn-secondary d-inline-flex-center" type="button">
                                            Wait... <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"/>
                                        </button>
                                        <button className="btn btn-success icon-btn" type="button">
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                                            <span className="visually-hidden">Loading...</span>
                                        </button>
                                        <button className="btn btn-danger icon-btn" type="button">
                                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/>
                                            <span className="visually-hidden">Loading...</span>
                                        </button>
                                    </Col>
                                    <Col lg={6} xs={12} className="app-btn-list">
                                        <button className="btn btn-outline-primary d-inline-flex-center" type="button">
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"/>
                                            Loading...
                                        </button>
                                        <button className="btn btn-outline-secondary d-inline-flex-center" type="button">
                                            Wait... <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"/>
                                        </button>
                                        <button className="btn btn-outline-success icon-btn" type="button">
													<span className="spinner-border spinner-border-sm" role="status"
                                                          aria-hidden="true"></span>
                                            <span className="visually-hidden">Loading...</span>
                                        </button>
                                        <button className="btn btn-outline-danger icon-btn" type="button">
                                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/>
                                            <span className="visually-hidden">Loading...</span>
                                        </button>
                                    </Col>
                                    <div className="col-lg-6 col-12 app-btn-list">
                                        <button className="btn btn-light-primary d-inline-flex-center" type="button">
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"/>
                                            Loading...
                                        </button>
                                        <button className="btn btn-light-secondary d-inline-flex-center" type="button">
                                            Wait... <span className="spinner-border spinner-border-sm ms-2"
                                                          role="status" aria-hidden="true"></span>
                                        </button>
                                        <button className="btn btn-light-success icon-btn" type="button">
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                                            <span className="visually-hidden">Loading...</span>
                                        </button>
                                        <button className="btn btn-light-danger icon-btn" type="button">
                                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/>
                                            <span className="visually-hidden">Loading...</span>
                                        </button>
                                    </div>
                                </Row>
                            </CardBody>

                            <pre className="loadingbtn collapse mt-3" id="loadingbtnexample">
                                <code className="language-html">
 {`
<div class="row">
    <div class="col-lg-6 col-12">
        <button class="btn btn-primary d-inline-flex-center" type="button">
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        <button class="btn btn-secondary d-inline-flex-center" type="button">
            Wait... <span class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
        </button>
        <button class="btn btn-success icon-btn" type="button">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
        </button>
        <button class="btn btn-danger icon-btn" type="button">
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
        </button>
    </div>
    <div class="col-lg-6 col-12 mb-3">
        <button class="btn btn-outline-primary d-inline-flex-center" type="button">
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        <button class="btn btn-outline-secondary d-inline-flex-center" type="button">
            Wait... <span class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
        </button>
        <button class="btn btn-outline-success icon-btn" type="button">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
        </button>
        <button class="btn btn-outline-danger icon-btn" type="button">
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
        </button>
    </div>
    <div class="col-lg-6 col-12 mb-3">
        <button class="btn btn-light-primary d-inline-flex-center" type="button">
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        <button class="btn btn-light-secondary d-inline-flex-center" type="button">
            Wait... <span class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
        </button>
        <button class="btn btn-light-success icon-btn" type="button">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
        </button>
        <button class="btn btn-light-danger icon-btn" type="button">
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
        </button>
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
                                <h5>Block Buttons</h5>
                                <a data-bs-toggle="collapse" href="#blockbtnexample" aria-expanded="false"
                                   aria-controls="blockbtnexample">
                                    <i className="ti ti-code source" data-source="blockbtn"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button className="btn btn-primary w-100" type="button">Button</button>
                                        <button className="btn btn-secondary w-100" type="button">Button</button>
                                    </Col>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button className="btn btn-outline-primary w-100" type="button">
                                            Button
                                        </button>
                                        <button className="btn btn-outline-secondary w-100" type="button">
                                            Button
                                        </button>
                                    </Col>
                                    <Col md={6} lg={4} xs={12} className="app-btn-list">
                                        <button className="btn btn-light-primary w-100" type="button">
                                            Button
                                        </button>
                                        <button className="btn btn-light-secondary w-100" type="button">
                                            Button
                                        </button>
                                    </Col>
                                </Row>
                            </CardBody>

                            <pre className="blockbtn collapse mt-3" id="blockbtnexample">
                                <code className="language-html">
{`
<div class="row">
    <div class="col-md-6 col-lg-4 col-12">
        <div class="d-grid gap-2">
            <button class="btn btn-primary w-100" type="button">Button</button>
            <button class="btn btn-secondary w-100" type="button">Button</button>
        </div>
    </div>

    <div class="col-md-6 col-lg-4 col-12">
        <div class="d-grid gap-2">
            <button class="btn btn-outline-primary w-100" type="button">Button</button>
            <button class="btn btn-outline-secondary w-100" type="button">Button</button>
        </div>
    </div>

    <div class="col-md-6 col-lg-4 col-12">
        <div class="d-grid gap-2">
            <button class="btn btn-light-primary w-100" type="button">Button</button>
            <button class="btn btn-light-secondary w-100" type="button">Button</button>
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
                                <h5> Button with sizes</h5>
                                <a data-bs-toggle="collapse" href="#buttonsizesexample" aria-expanded="false"
                                   aria-controls="buttonsizesexample">
                                    <i className="ti ti-code source" data-source="btnsize"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="app-btn-list">
                                    <button type="button" className="btn btn-primary btn-xxl">
                                        <i className="ti ti-download"></i> Primary
                                    </button>
                                    <button type="button" className="btn btn-primary btn-xl">
                                        <i className="ti ti-download"></i> Primary
                                    </button>
                                    <button type="button" className="btn btn-secondary btn-lg">
                                        Secondary <i className="ti ti-butterfly"></i>
                                    </button>
                                    <button type="button" className="btn btn-success">
                                        <i className="ti ti-award"></i>
                                        Success
                                    </button>
                                    <button type="button" className="btn btn-danger btn-sm">
                                        <i className="ti ti-power"></i> Danger
                                    </button>
                                    <button type="button" className="btn btn-warning btn-xs">
                                        <i className="ti ti-alert-triangle"></i> Warning
                                    </button>
                                </div>
                            </CardBody>
                            <pre className="btnsize collapse mt-3" id="buttonsizesexample">
                                <code className="language-html">
{`
<h1 class="mb-3">Example heading <span class="badge bg-secondary">New</span></h1>
<h2 class="mb-3">Example heading <span class="badge bg-secondary">New</span></h2>
<h3 class="mb-3">Example heading <span class="badge bg-secondary">New</span></h3>
<h4 class="mb-3">Example heading <span class="badge bg-secondary">New</span></h4>
<h5 class="mb-3">Example heading <span class="badge bg-secondary">New</span></h5>
<h6 class="mb-3">Example heading <span class="badge bg-secondary">New</span></h6>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Radius Button </h5>
                                <a data-bs-toggle="collapse" href="#radiosbtnexample" aria-expanded="false"
                                   aria-controls="radiosbtnexample">
                                    <i className="ti ti-code source" data-source="radiosbtn"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="app-btn-list">
                                    <button type="button" className="btn btn-primary b-r-0">Primary</button>
                                    <button type="button" className="btn btn-secondary b-r-6">Secondary</button>
                                    <button type="button" className="btn btn-success b-r-10">Danger</button>
                                    <button type="button" className="btn btn-danger b-r-22">Danger</button>
                                </div>
                            </CardBody>
                            <pre className="radiosbtn collapse mt-3" id="radiosbtnexample">
                                <code className="language-html">
{`
<button type="button" class="btn btn-primary b-r-0">Primary</button>
<button type="button" class="btn btn-secondary b-r-6">Secondary</button>
<button type="button" class="btn btn-success b-r-10">Success</button>
<button type="button" class="btn btn-danger b-r-22">Danger</button>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Button Group</h5>
                                <a data-bs-toggle="collapse" href="#buttongroupexample" aria-expanded="false"
                                   aria-controls="buttongroupexample">
                                    <i className="ti ti-code source" data-source="buttongroup"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs={12}>
                                        <div className="btn-group">
                                            <a href="#" className="btn btn-secondary active" aria-current="page">
                                                Active link
                                            </a>
                                            <a href="#" className="btn btn-secondary">Link</a>
                                            <a href="#" className="btn btn-secondary">Link</a>
                                        </div>
                                    </Col>
                                    <Col xs={12} className="mt-3">
                                        <div className="btn-group">
                                            <a href="#" className="btn btn-outline-secondary active" aria-current="page">
                                                Active link
                                            </a>
                                            <a href="#" className="btn btn-outline-secondary">Link</a>
                                            <a href="#" className="btn btn-outline-secondary">Link</a>
                                        </div>
                                    </Col>
                                    <Col xs={12} className="mt-3">
                                        <div className="btn-group">
                                            <a href="#" className="btn btn-light-secondary active"
                                               aria-current="page">Active link</a>
                                            <a href="#" className="btn btn-light-secondary">Link</a>
                                            <a href="#" className="btn btn-light-secondary">Link</a>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <pre className="buttongroup collapse" id="buttongroupexample">
                                <code className="language-html">
{`
<div class="row">
    <div class="col-md-6 col-lg-4 col-12">
        <div class="btn-group">
            <a href="#" class="btn btn-secondary active" aria-current="page">Active link</a>
            <a href="#" class="btn btn-secondary">Link</a>
            <a href="#" class="btn btn-secondary">Link</a>
        </div>
    </div>

    <div class="col-md-6 col-lg-4 col-12">
        <div class="btn-group">
            <a href="#" class="btn btn-outline-secondary active" aria-current="page">Active link</a>
            <a href="#" class="btn btn-outline-secondary">Link</a>
            <a href="#" class="btn btn-outline-secondary">Link</a>
        </div>
    </div>

    <div class="col-md-6 col-lg-4 col-12">
        <div class="btn-group">
            <a href="#" class="btn btn-light-secondary active" aria-current="page">Active link</a>
            <a href="#" class="btn btn-light-secondary">Link</a>
            <a href="#" class="btn btn-light-secondary">Link</a>
        </div>
    </div>
</div>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Sizes</h5>
                                <a data-bs-toggle="collapse" href="#sizesexample" aria-expanded="false"
                                   aria-controls="sizesexample">
                                    <i className="ti ti-code source" data-source="sizegroup"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs={12}>
                                        <div className="btn-group btn-group-lg" role="group"
                                             aria-label="Large button group">
                                            <button type="button" className="btn btn-outline-secondary">
                                                Left
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary">
                                                Middle
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary">
                                                Right
                                            </button>
                                        </div>
                                    </Col>
                                    <Col xs={12} className="mt-3">
                                        <div className="btn-group" role="group" aria-label="Default button group">
                                            <button type="button" className="btn btn-outline-secondary">
                                                Left
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary">
                                                Middle
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary">
                                                Right
                                            </button>
                                        </div>
                                    </Col>
                                    <Col xs={12} className="mt-3">
                                        <div className="btn-group btn-group-sm" role="group"
                                             aria-label="Small button group">
                                            <button type="button" className="btn btn-outline-secondary">
                                                Left
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary">
                                                Middle
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary">
                                                Right
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <pre className="sizegroup collapse" id="sizesexample">
                                <code className="language-html">
{`
<div class="row">
    <div class="col-lg-4 col-12 mb-3">
        <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
            <button type="button" class="btn btn-outline-secondary">Left</button>
            <button type="button" class="btn btn-outline-secondary">Middle</button>
            <button type="button" class="btn btn-outline-secondary">Right</button>
        </div>
    </div>

    <div class="col-lg-4 col-12 mb-3">
        <div class="btn-group" role="group" aria-label="Default button group">
            <button type="button" class="btn btn-outline-secondary">Left</button>
            <button type="button" class="btn btn-outline-secondary">Middle</button>
            <button type="button" class="btn btn-outline-secondary">Right</button>
        </div>
    </div>

    <div class="col-lg-4 col-12 mb-3">
        <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
            <button type="button" class="btn btn-outline-secondary">Left</button>
            <button type="button" class="btn btn-outline-secondary">Middle</button>
            <button type="button" class="btn btn-outline-secondary">Right</button>
        </div>
    </div>
</div>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Nesting</h5>
                                <a data-bs-toggle="collapse" href="#nestingexample" aria-expanded="false"
                                   aria-controls="nestingexample">
                                    <i className="ti ti-code source" data-source="nesting"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <Row className="btn-responsive">
                                    <Col xs={12}>
                                        <div className="btn-group" role="group"
                                             aria-label="Button group with nested dropdown">
                                            <button type="button" className="btn btn-secondary">1</button>
                                            <button type="button" className="btn btn-secondary">2</button>
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-secondary dropdown-toggle"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Dropdown link</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#">Dropdown link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} className="mt-3">
                                        <div className="btn-group" role="group"
                                             aria-label="Button group with nested dropdown">
                                            <button type="button" className="btn btn-outline-secondary">1</button>
                                            <button type="button" className="btn btn-outline-secondary">2</button>

                                            <div className="btn-group" role="group">
                                                <button type="button"
                                                        className="btn btn-outline-secondary dropdown-toggle"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Dropdown link</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#">Dropdown link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} className="mt-3">
                                        <div className="btn-group" role="group"
                                             aria-label="Button group with nested dropdown">
                                            <button type="button" className="btn btn-light-secondary">1</button>
                                            <button type="button" className="btn btn-light-secondary">2</button>

                                            <div className="btn-group" role="group">
                                                <button type="button"
                                                        className="btn btn-light-secondary dropdown-toggle"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Dropdown link</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#">Dropdown link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <pre className="nesting collapse mt-3" id="nestingexample">
                                <code className="language-html">
{`
<div class="row">
    <div class="col-md-6 col-lg-4 col-12">
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>

            <div class="btn-group" role="group">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="col-md-6 col-lg-4 col-12">
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button type="button" class="btn btn-outline-secondary">1</button>
            <button type="button" class="btn btn-outline-secondary">2</button>

            <div class="btn-group" role="group">
                <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="col-md-6 col-lg-4 col-12">
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button type="button" class="btn btn-light-secondary">1</button>
            <button type="button" class="btn btn-light-secondary">2</button>

            <div class="btn-group" role="group">
                <button type="button" class="btn btn-light-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
`}
                                </code>
                            </pre>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Checkbox Radio</h5>
                                <a data-bs-toggle="collapse" href="#cheakradioexample" aria-expanded="false" aria-controls="cheakradioexample">
                                    <i className="ti ti-code source" data-source="radiusbadge"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <Row className="btn-responsive">
                                    <Col xs={12}>
                                        <div className="btn-group" role="group"
                                             aria-label="Basic checkbox toggle button group">
                                            <input type="checkbox" className="btn-check" id="btncheck1"/>
                                            <label className="btn btn-outline-secondary" htmlFor="btncheck1">Checkbox
                                                1</label>
                                            <input type="checkbox" className="btn-check" id="btncheck2"/>
                                            <label className="btn btn-outline-secondary" htmlFor="btncheck2">Checkbox
                                                2</label>
                                            <input type="checkbox" className="btn-check" id="btncheck3"/>
                                            <label className="btn btn-outline-secondary" htmlFor="btncheck3">Checkbox
                                                3</label>
                                        </div>
                                    </Col>
                                    <Col xs={12} className="mt-3">
                                        <div className="btn-group" role="group"
                                             aria-label="Basic radio toggle button group">
                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1"
                                                   defaultChecked={true}/>
                                            <label className="btn btn-outline-secondary" htmlFor="btnradio1">Radio
                                                1</label>
                                            <input type="radio" className="btn-check" name="btnradio"
                                                   id="btnradio2"/>
                                            <label className="btn btn-outline-secondary" htmlFor="btnradio2">Radio
                                                2</label>
                                            <input type="radio" className="btn-check" name="btnradio"
                                                   id="btnradio3"/>
                                            <label className="btn btn-outline-secondary" htmlFor="btnradio3">Radio
                                                3</label>
                                        </div>
                                    </Col>
                                    <Col xs={12} className="mt-3">
                                        <div className="btn-toolbar" role="toolbar"
                                             aria-label="Toolbar with button groups">
                                            <div className="btn-group me-2" role="group" aria-label="First group">
                                                <button type="button" className="btn btn-secondary">1</button>
                                                <button type="button" className="btn btn-secondary">2</button>
                                                <button type="button" className="btn btn-secondary">3</button>
                                                <button type="button" className="btn btn-secondary">4</button>
                                            </div>
                                            <div className="btn-group" role="group" aria-label="Third group">
                                                <button type="button" className="btn btn-secondary">8</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <pre className="radiusbadge collapse" id="cheakradioexample">
                                    <code className="language-html">
{`
<div class="row">
    <div class="col-lg-4 col-12 mb-3">
        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="btncheck1">
            <label class="btn btn-outline-secondary" for="btncheck1">Checkbox 1</label>
            <input type="checkbox" class="btn-check" id="btncheck2">
            <label class="btn btn-outline-secondary" for="btncheck2">Checkbox 2</label>
            <input type="checkbox" class="btn-check" id="btncheck3">
            <label class="btn btn-outline-secondary" for="btncheck3">Checkbox 3</label>
        </div>
    </div>

    <div class="col-lg-4 col-12 mb-3">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked>
            <label class="btn btn-outline-secondary" for="btnradio1">Radio 1</label>
            <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
            <label class="btn btn-outline-secondary" for="btnradio2">Radio 2</label>
            <input type="radio" class="btn-check" name="btnradio" id="btnradio3">
            <label class="btn btn-outline-secondary" for="btnradio3">Radio 3</label>
        </div>
    </div>

    <div class="col-lg-4 col-12 mb-3">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group me-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" class="btn btn-secondary">8</button>
            </div>
        </div>
    </div>
</div>
`}
                                    </code>
                                </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Button Vertical</h5>
                                <a data-bs-toggle="collapse" href="#buttonverticalexample" aria-expanded="false"
                                   aria-controls="buttonverticalexample">
                                    <i className="ti ti-code source" data-source="btnvertical"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <Row className="btn-responsive">
                                    <Col className="m-2" xs="auto">
                                        <div className="btn-group-vertical" role="group"
                                             aria-label="Vertical radio toggle button group">
                                            <input type="radio" className="btn-check" name="vbtn-radio"
                                                   id="vbtn-radio1" defaultChecked={true}/>
                                            <label className="btn btn-outline-secondary" htmlFor="vbtn-radio1">Radio
                                                1</label>
                                            <input type="radio" className="btn-check" name="vbtn-radio"
                                                   id="vbtn-radio2"/>
                                            <label className="btn btn-outline-secondary" htmlFor="vbtn-radio2">Radio
                                                2</label>
                                            <input type="radio" className="btn-check" name="vbtn-radio"
                                                   id="vbtn-radio3"/>
                                            <label className="btn btn-outline-secondary" htmlFor="vbtn-radio3">Radio
                                                3</label>
                                        </div>
                                    </Col>
                                    <Col className="m-2" xs="auto">
                                        <div className="btn-group-vertical" role="group"
                                             aria-label="Vertical button group">
                                            <button type="button" className="btn btn-secondary">Button</button>
                                            <button type="button" className="btn btn-secondary">Button</button>
                                            <button type="button" className="btn btn-secondary">Button</button>
                                        </div>
                                        <div className="btn-group-vertical ms-2" role="group"
                                             aria-label="Vertical button group">
                                            <button type="button" className="btn btn-secondary">Button</button>
                                            <button type="button" className="btn btn-secondary">Button</button>
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-secondary dropdown-toggle"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Dropdown
                                                        link</a></li>
                                                    <li><a className="dropdown-item" href="#">Dropdown
                                                        link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="m-2" xs="auto">
                                        <div className="btn-group-vertical" role="group"
                                             aria-label="Vertical button group">
                                            <button type="button"
                                                    className="btn btn-outline-secondary">Button
                                            </button>
                                            <button type="button"
                                                    className="btn btn-outline-secondary">Button
                                            </button>
                                            <button type="button"
                                                    className="btn btn-outline-secondary">Button
                                            </button>
                                        </div>
                                        <div className="btn-group-vertical ms-2" role="group"
                                             aria-label="Vertical button group">
                                            <button type="button"
                                                    className="btn btn-outline-secondary">Button
                                            </button>
                                            <button type="button"
                                                    className="btn btn-outline-secondary">Button
                                            </button>
                                            <div className="btn-group" role="group">
                                                <button type="button"
                                                        className="btn btn-outline-secondary dropdown-toggle"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Dropdown
                                                        link</a></li>
                                                    <li><a className="dropdown-item" href="#">Dropdown
                                                        link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="m-2" xs="auto">
                                        <div className="btn-group-vertical" role="group"
                                             aria-label="Vertical button group">
                                            <button type="button"
                                                    className="btn btn-light-secondary">Button
                                            </button>
                                            <button type="button"
                                                    className="btn btn-light-secondary">Button
                                            </button>
                                            <button type="button"
                                                    className="btn btn-light-secondary">Button
                                            </button>
                                        </div>
                                        <div className="btn-group-vertical ms-2" role="group"
                                             aria-label="Vertical button group">
                                            <button type="button"
                                                    className="btn btn-light-secondary">Button
                                            </button>
                                            <button type="button"
                                                    className="btn btn-light-secondary">Button
                                            </button>
                                            <div className="btn-group" role="group">
                                                <button type="button"
                                                        className="btn btn-light-secondary dropdown-toggle"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Dropdown
                                                        link</a></li>
                                                    <li><a className="dropdown-item" href="#">Dropdown
                                                        link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <pre className="btnvertical collapse mt-3" id="buttonverticalexample">
                                <code className="language-html">
{`
<div class="row">
    <div class="col-lg-4 col-12">
        <div class="btn-group-vertical mb-3" role="group" aria-label="Vertical button group">
            <button type="button" class="btn btn-secondary">Button</button>
            <button type="button" class="btn btn-secondary">Button</button>
            <button type="button" class="btn btn-secondary">Button</button>
        </div>

        <div class="btn-group-vertical ms-2 mb-3" role="group" aria-label="Vertical button group">
            <button type="button" class="btn btn-secondary">Button</button>
            <button type="button" class="btn btn-secondary">Button</button>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                </ul>
            </div>
        </div>

        <div class="btn-group-vertical ms-sm-2 mb-3" role="group" aria-label="Vertical radio toggle button group">
            <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" checked>
            <label class="btn btn-outline-secondary" for="vbtn-radio1">Radio 1</label>
            <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2">
            <label class="btn btn-outline-secondary" for="vbtn-radio2">Radio 2</label>
            <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3">
            <label class="btn btn-outline-secondary" for="vbtn-radio3">Radio 3</label>
        </div>
    </div>

    <div class="col-lg-4 col-12 mb-3">
        <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
            <button type="button" class="btn btn-outline-secondary">Button</button>
            <button type="button" class="btn btn-outline-secondary">Button</button>
            <button type="button" class="btn btn-outline-secondary">Button</button>
        </div>

        <div class="btn-group-vertical ms-2" role="group" aria-label="Vertical button group">
            <button type="button" class="btn btn-outline-secondary">Button</button>
            <button type="button" class="btn btn-outline-secondary">Button</button>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="col-lg-4 col-12 mb-3">
        <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
            <button type="button" class="btn btn-light-secondary">Button</button>
            <button type="button" class="btn btn-light-secondary">Button</button>
            <button type="button" class="btn btn-light-secondary">Button</button>
        </div>

        <div class="btn-group-vertical ms-2" role="group" aria-label="Vertical button group">
            <button type="button" class="btn btn-light-secondary">Button</button>
            <button type="button" class="btn btn-light-secondary">Button</button>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-light-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                </ul>
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

export default Button;