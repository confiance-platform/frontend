import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Bullet = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Bullet</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
									<span>
									  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
									</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Bullet</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="list-item bullet-item">
                    <Col sm={6} lg={4} xxl={3}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Diamond Bullet</h5>
                                <a data-bs-toggle="collapse" href="#dimondbulletExample" aria-expanded="false"
                                   aria-controls="dimondbulletExample">
                                    <i className="ti ti-code source" data-source="dimondbullet"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li className="diamond diamond-bullet-primary">Primary Bullet</li>
                                    <li className="diamond diamond-bullet-secondary">secondary Bullet</li>
                                    <li className="diamond diamond-bullet-success">Success Bullet</li>
                                    <li className="diamond diamond-bullet-danger">Danger Bullet</li>
                                    <li className="diamond diamond-bullet-warning">Warning Bullet</li>
                                    <li className="diamond diamond-bullet-info">Info Bullet</li>
                                    <li className="diamond diamond-bullet-light">Light Bullet</li>
                                    <li className="diamond diamond-bullet-dark">Dark Bullet</li>
                                </ul>
                                <pre className="dimondbullet collapse mt-3" id="dimondbulletExample">
                                            <code className="language-html">
{`
<ul>
    <li class="diamond diamond-bullet-primary">Primary Bullet</li>
    <li class="diamond diamond-bullet-secondary">secondary Bullet</li>
    <li class="diamond diamond-bullet-success">Success Bullet</li>
    <li class="diamond diamond-bullet-danger">Danger Bullet</li>
    <li class="diamond diamond-bullet-warning">Warning Bullet</li>
    <li class="diamond diamond-bullet-info">Info Bullet</li>
    <li class="diamond diamond-bullet-light">Light Bullet</li>
    <li class="diamond diamond-bullet-dark">Dark Bullet</li>
</ul>
`}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6} lg={4} xxl={3}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Heart Bullet</h5>
                                <a data-bs-toggle="collapse" href="#heartbulletExample" aria-expanded="false"
                                   aria-controls="heartbulletExample">
                                    <i className="ti ti-code source" data-source="heartbullet"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li className="heart heart-bullet-primary">Primary Bullet</li>
                                    <li className="heart heart-bullet-secondary">secondary Bullet</li>
                                    <li className="heart heart-bullet-success">Success Bullet</li>
                                    <li className="heart heart-bullet-danger">Danger Bullet</li>
                                    <li className="heart heart-bullet-warning">Warning Bullet</li>
                                    <li className="heart heart-bullet-info">Info Bullet</li>
                                    <li className="heart heart-bullet-light">Light Bullet</li>
                                    <li className="heart heart-bullet-dark">Dark Bullet</li>
                                </ul>
                                <pre className="heartbullet collapse mt-3" id="heartbulletExample">
                                            <code className="language-html">
{`
<ul>
    <li class="heart heart-bullet-primary">Primary Bullet</li>
    <li class="heart heart-bullet-secondary">secondary Bullet</li>
    <li class="heart heart-bullet-success">Success Bullet</li>
    <li class="heart heart-bullet-danger">Danger Bullet</li>
    <li class="heart heart-bullet-warning">Warning Bullet</li>
    <li class="heart heart-bullet-info">Info Bullet</li>
    <li class="heart heart-bullet-light">Light Bullet</li>
    <li class="heart heart-bullet-dark">Dark Bullet</li>
</ul>
`}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6} lg={4} xxl={3}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Burst Bullet</h5>
                                <a data-bs-toggle="collapse" href="#burstbulletExample" aria-expanded="false"
                                   aria-controls="burstbulletExample">
                                    <i className="ti ti-code source" data-source="burstbullet"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li className="burst burst-bullet-primary ">Primary Bullet</li>
                                    <li className="burst burst-bullet-secondary">secondary Bullet</li>
                                    <li className="burst burst-bullet-success">Success Bullet</li>
                                    <li className="burst burst-bullet-danger">Danger Bullet</li>
                                    <li className="burst burst-bullet-warning">Warning Bullet</li>
                                    <li className="burst burst-bullet-info">Info Bullet</li>
                                    <li className="burst burst-bullet-light">Light Bullet</li>
                                    <li className="burst burst-bullet-dark">Dark Bullet</li>
                                </ul>
                                <pre className="burstbullet collapse mt-3" id="burstbulletExample">
                                            <code className="language-html">
{`
<ul>
    <li class="burst burst-bullet-primary ">Primary Bullet</li>
    <li class="burst burst-bullet-secondary">secondary Bullet</li>
    <li class="burst burst-bullet-success">Success Bullet</li>
    <li class="burst burst-bullet-danger">Danger Bullet</li>
    <li class="burst burst-bullet-warning">Warning Bullet</li>
    <li class="burst burst-bullet-info">Info Bullet</li>
    <li class="burst burst-bullet-light">Light Bullet</li>
    <li class="burst burst-bullet-dark">Dark Bullet</li>
</ul>
`}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6} lg={4} xxl={3}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Star-Bullet</h5>
                                <a data-bs-toggle="collapse" href="#starbulletExample" aria-expanded="false"
                                   aria-controls="starbulletExample">
                                    <i className="ti ti-code source" data-source="starbullet"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li className="star mb-3"><i
                                        className="ti ti-north-star text-primary me-2"></i>Primary Bullet
                                    </li>
                                    <li className="star mb-3 "><i
                                        className="ti ti-north-star text-secondary me-2"></i>secondary Bullet
                                    </li>
                                    <li className="star mb-3 "><i
                                        className="ti ti-north-star text-success me-2"></i>Success Bullet
                                    </li>
                                    <li className="star mb-3 "><i
                                        className="ti ti-north-star text-danger me-2"></i>Danger Bullet
                                    </li>
                                    <li className="star mb-3 "><i
                                        className="ti ti-north-star text-warning me-2"></i>Warning Bullet
                                    </li>
                                    <li className="star mb-3"><i className="ti ti-north-star text-info me-2"></i>Info
                                        Bullet
                                    </li>
                                    <li className="star mb-3 "><i
                                        className="ti ti-north-star text-light  me-2"></i>Light Bullet
                                    </li>
                                    <li className="star"><i className="ti ti-north-star text-dark me-2"></i>Dark Bullet
                                    </li>
                                </ul>
                                <pre className="starbullet collapse mt-3" id="starbulletExample">
                                            <code className="language-html">
{`
<ul>
    <li class="star mb-3"><i class="ti ti-north-star text-primary me-2"></i>Primary Bullet</li>
    <li class="star mb-3 "><i class="ti ti-north-star text-secondary me-2"></i>secondary Bullet</li>
    <li class="star mb-3 "><i class="ti ti-north-star text-success me-2"></i>Success Bullet</li>
    <li class="star mb-3 "><i class="ti ti-north-star text-danger me-2"></i>Danger Bullet</li>
    <li class="star mb-3 "><i class="ti ti-north-star text-warning me-2"></i>Warning Bullet</li>
    <li class="star mb-3"><i class="ti ti-north-star text-info me-2"></i>Info Bullet</li>
    <li class="star mb-3 "><i class="ti ti-north-star text-light me-2"></i>Light Bullet</li>
    <li class="star"><i class="ti ti-north-star text-dark me-2"></i>Dark Bullet</li>
</ul>
`}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6} lg={4} xxl={3}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Right Arrow Bullet</h5>
                                <a data-bs-toggle="collapse" href="#rightarrowbulletExample"
                                   aria-expanded="false" aria-controls="rightarrowbulletExample">
                                    <i className="ti ti-code source" data-source="rightarrowbullet"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li className="right-arrow mb-3"><i
                                        className="ti ti-arrow-big-right-line-filled text-primary me-2"></i>Primary
                                        Bullet
                                    </li>
                                    <li className="right-arrow mb-3 "><i
                                        className="ti ti-arrow-big-right-line-filled text-secondary me-2 "></i>secondary
                                        Bullet
                                    </li>
                                    <li className="right-arrow mb-3 "><i
                                        className="ti ti-arrow-big-right-line-filled text-success me-2"></i>Success
                                        Bullet
                                    </li>
                                    <li className="right-arrow mb-3 "><i
                                        className="ti ti-arrow-big-right-line-filled text-danger me-2"></i>Danger
                                        Bullet
                                    </li>
                                    <li className="right-arrow mb-3 "><i
                                        className="ti ti-arrow-big-right-line-filled text-warning me-2"></i>Warning
                                        Bullet
                                    </li>
                                    <li className="right-arrow mb-3"><i
                                        className="ti ti-arrow-big-right-line-filled text-info me-2"></i>Info
                                        Bullet
                                    </li>
                                    <li className="right-arrow mb-3 "><i
                                        className="ti ti-arrow-big-right-line-filled text-light me-2"></i>Light
                                        Bullet
                                    </li>
                                    <li className="right-arrow"><i
                                        className="ti ti-arrow-big-right-line-filled me-2 text-dark"></i>Dark
                                        Bullet
                                    </li>
                                </ul>
                                <pre className="rightarrowbullet collapse mt-3" id="rightarrowbulletExample">
                                            <code className="language-html">
{`<ul>
    <li class="right-arrow mb-3"><i class="ti ti-arrow-big-right-line-filled text-primary me-2"></i>Primary Bullet</li>
    <li class="right-arrow mb-3 "><i class="ti ti-arrow-big-right-line-filled text-secondary me-2 "></i>secondary Bullet</li>
    <li class="right-arrow mb-3 "><i class="ti ti-arrow-big-right-line-filled text-success me-2"></i>Success Bullet</li>
    <li class="right-arrow mb-3 "><i class="ti ti-arrow-big-right-line-filled text-danger me-2"></i>Danger Bullet</li>
    <li class="right-arrow mb-3 "><i class="ti ti-arrow-big-right-line-filled text-warning me-2"></i>Warning Bullet</li>
    <li class="right-arrow mb-3"><i class="ti ti-arrow-big-right-line-filled text-info me-2"></i>Info Bullet</li>
    <li class="right-arrow mb-3 "><i class="ti ti-arrow-big-right-line-filled text-light me-2"></i>Light Bullet</li>
    <li class="right-arrow"><i class="ti ti-arrow-big-right-line-filled me-2 text-dark"></i>Dark Bullet</li>
</ul>`}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6} lg={4} xxl={3}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Line Bullet</h5>
                                <a data-bs-toggle="collapse" href="#linebulletExample" aria-expanded="false"
                                   aria-controls="linebulletExample">
                                    <i className="ti ti-code source" data-source="linebullet"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li className="line line-bullet-primary">Primary Bullet</li>
                                    <li className="line line-bullet-secondary">secondary Bullet</li>
                                    <li className="line line-bullet-success">Success Bullet</li>
                                    <li className="line line-bullet-danger">Danger Bullet</li>
                                    <li className="line line-bullet-warning">Warning Bullet</li>
                                    <li className="line line-bullet-info">Info Bullet</li>
                                    <li className="line line-bullet-light">Light Bullet</li>
                                    <li className="line line-bullet-dark">Dark Bullet</li>
                                </ul>
                                <pre className="linebulletbullet collapse mt-3" id="linebulletExample">
                                            <code className="language-html">
{`<ul>
    <li class="line line-bullet-primary">Primary Bullet</li>
    <li class="line line-bullet-secondary">secondary Bullet</li>
    <li class="line line-bullet-success">Success Bullet</li>
    <li class="line line-bullet-danger">Danger Bullet</li>
    <li class="line line-bullet-warning">Warning Bullet</li>
    <li class="line line-bullet-info">Info Bullet</li>
    <li class="line line-bullet-light">Light Bullet</li>
    <li class="line line-bullet-dark">Dark Bullet</li>
</ul>`}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6} lg={4} xxl={3}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Arrow Bullet</h5>
                                <a data-bs-toggle="collapse" href="#arrowbulletExample" aria-expanded="false"
                                   aria-controls="arrowbulletExample">
                                    <i className="ti ti-code source" data-source="arrowbullet"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li className="arrow arrow-bullet-primary">Primary Bullet</li>
                                    <li className="arrow arrow-bullet-secondary">secondary Bullet</li>
                                    <li className="arrow arrow-bullet-success">Success Bullet</li>
                                    <li className="arrow arrow-bullet-danger">Danger Bullet</li>
                                    <li className="arrow arrow-bullet-warning">Warning Bullet</li>
                                    <li className="arrow arrow-bullet-info">Info Bullet</li>
                                    <li className="arrow arrow-bullet-light">Light Bullet</li>
                                    <li className="arrow arrow-bullet-dark">Dark Bullet</li>
                                </ul>
                                <pre className="arrowbullet collapse mt-3" id="arrowbulletExample">
                                            <code className="language-html">
{`<ul>
    <li class="arrow arrow-bullet-primary">Primary Bullet</li>
    <li class="arrow arrow-bullet-secondary">secondary Bullet</li>
    <li class="arrow arrow-bullet-success">Success Bullet</li>
    <li class="arrow arrow-bullet-danger">Danger Bullet</li>
    <li class="arrow arrow-bullet-warning">Warning Bullet</li>
    <li class="arrow arrow-bullet-info">Info Bullet</li>
    <li class="arrow arrow-bullet-light">Light Bullet</li>
    <li class="arrow arrow-bullet-dark">Dark Bullet</li>
</ul>`}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6} lg={4} xxl={3}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Corner Arrow Bullet</h5>
                                <a data-bs-toggle="collapse" href="#cornerarrowExample" aria-expanded="false"
                                   aria-controls="cornerarrowExample">
                                    <i className="ti ti-code source" data-source="cornerarrow"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li className="corner-arrow mb-3"><i
                                        className="ti ti-corner-down-right-double text-primary me-2"></i>Primary
                                        Bullet
                                    </li>
                                    <li className="corner-arrow mb-3 "><i
                                        className="ti ti-corner-down-right-double text-secondary me-2"></i>secondary
                                        Bullet
                                    </li>
                                    <li className="corner-arrow mb-3 "><i
                                        className="ti ti-corner-down-right-double text-success me-2"></i>Success
                                        Bullet
                                    </li>
                                    <li className="corner-arrow mb-3 "><i
                                        className="ti ti-corner-down-right-double text-danger me-2"></i>Danger
                                        Bullet
                                    </li>
                                    <li className="corner-arrow mb-3 "><i
                                        className="ti ti-corner-down-right-double text-warning me-2"></i>Warning
                                        Bullet
                                    </li>
                                    <li className="corner-arrow mb-3"><i
                                        className="ti ti-corner-down-right-double text-info me-2"></i>Info
                                        Bullet
                                    </li>
                                    <li className="corner-arrow mb-3 "><i
                                        className="ti ti-corner-down-right-double text-light  me-2"></i>Light
                                        Bullet
                                    </li>
                                    <li className="corner-arrow"><i
                                        className="ti ti-corner-down-right-double text-dark me-2"></i>Dark
                                        Bullet
                                    </li>

                                </ul>
                                <pre className="cornerarrow collapse mt-3" id="cornerarrowExample">
                                            <code className="language-html">
{`<ul>
    <li class="corner-arrow mb-3"><i class="ti ti-corner-down-right-double text-primary me-2"></i>Primary Bullet</li>
    <li class="corner-arrow mb-3 "><i class="ti ti-corner-down-right-double text-secondary me-2"></i>secondary Bullet</li>
    <li class="corner-arrow mb-3 "><i class="ti ti-corner-down-right-double text-success me-2"></i>Success Bullet</li>
    <li class="corner-arrow mb-3 "><i class="ti ti-corner-down-right-double text-danger me-2"></i>Danger Bullet</li>
    <li class="corner-arrow mb-3 "><i class="ti ti-corner-down-right-double text-warning me-2"></i>Warning Bullet</li>
    <li class="corner-arrow mb-3"><i class="ti ti-corner-down-right-double text-info me-2"></i>Info Bullet</li>
    <li class="corner-arrow mb-3 "><i class="ti ti-corner-down-right-double text-light me-2"></i>Light Bullet</li>
    <li class="corner-arrow"><i class="ti ti-corner-down-right-double text-dark me-2"></i>Dark Bullet</li>
</ul>`}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6} lg={4} xxl={3}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>circle Bullet</h5>
                                <a data-bs-toggle="collapse" href="#circlearrowExample" aria-expanded="false"
                                   aria-controls="circlearrowExample">
                                    <i className="ti ti-code source" data-source="circlearrow"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li className="circle circle-bullet-primary">Primary Bullet</li>
                                    <li className="circle circle-bullet-secondary">secondary Bullet</li>
                                    <li className="circle circle-bullet-success">Success Bullet</li>
                                    <li className="circle circle-bullet-danger">Danger Bullet</li>
                                    <li className="circle circle-bullet-warning">Warning Bullet</li>
                                    <li className="circle circle-bullet-info">Info Bullet</li>
                                    <li className="circle circle-bullet-light">Light Bullet</li>
                                    <li className="circle circle-bullet-dark">Dark Bullet</li>
                                </ul>
                                <pre className="circlearrow collapse mt-3" id="circlearrowExample">
                                            <code className="language-html">
{`<ul>
    <li class="circle circle-bullet-primary">Primary Bullet</li>
    <li class="circle circle-bullet-secondary">secondary Bullet</li>
    <li class="circle circle-bullet-success">Success Bullet</li>
    <li class="circle circle-bullet-danger">Danger Bullet</li>
    <li class="circle circle-bullet-warning">Warning Bullet</li>
    <li class="circle circle-bullet-info">Info Bullet</li>
    <li class="circle circle-bullet-light">Light Bullet</li>
    <li class="circle circle-bullet-dark">Dark Bullet</li>
</ul>`}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6} lg={4} xxl={3}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Triangle Bullet</h5>
                                <a data-bs-toggle="collapse" href="#trianglearrowExample" aria-expanded="false"
                                   aria-controls="trianglearrowExample">
                                    <i className="ti ti-code source" data-source="trianglearrow"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li className="triangle triangle-bullet-primary">Primary Bullet</li>
                                    <li className="triangle triangle-bullet-secondary">secondary Bullet</li>
                                    <li className="triangle triangle-bullet-success">Success Bullet</li>
                                    <li className="triangle triangle-bullet-danger">Danger Bullet</li>
                                    <li className="triangle triangle-bullet-warning">Warning Bullet</li>
                                    <li className="triangle triangle-bullet-info">Info Bullet</li>
                                    <li className="triangle triangle-bullet-light">Light Bullet</li>
                                    <li className="triangle triangle-bullet-dark">Dark Bullet</li>
                                </ul>
                                <pre className="trianglearrow collapse mt-3" id="trianglearrowExample">
                                            <code className="language-html">
{`<ul>
    <li class="triangle triangle-bullet-primary">Primary Bullet</li>
    <li class="triangle triangle-bullet-secondary">secondary Bullet</li>
    <li class="triangle triangle-bullet-success">Success Bullet</li>
    <li class="triangle triangle-bullet-danger">Danger Bullet</li>
    <li class="triangle triangle-bullet-warning">Warning Bullet</li>
    <li class="triangle triangle-bullet-info">Info Bullet</li>
    <li class="triangle triangle-bullet-light">Light Bullet</li>
    <li class="triangle triangle-bullet-dark">Dark Bullet</li>
</ul>`}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6} lg={4} xxl={3}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Square Bullet</h5>
                                <a data-bs-toggle="collapse" href="#squarearrowExample" aria-expanded="false"
                                   aria-controls="squarearrowExample">
                                    <i className="ti ti-code source" data-source="squarearrow"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li className="square square-bullet-primary">Primary Bullet</li>
                                    <li className="square square-bullet-secondary">secondary Bullet</li>
                                    <li className="square square-bullet-success">Success Bullet</li>
                                    <li className="square square-bullet-danger">Danger Bullet</li>
                                    <li className="square square-bullet-warning">Warning Bullet</li>
                                    <li className="square square-bullet-info">Info Bullet</li>
                                    <li className="square square-bullet-light">Light Bullet</li>
                                    <li className="square square-bullet-dark">Dark Bullet</li>
                                </ul>
                                <pre className="squarearrow collapse mt-3" id="squarearrowExample">
                                            <code className="language-html">
{`<ul>
    <li class="square square-bullet-primary">Primary Bullet</li>
    <li class="square square-bullet-secondary">secondary Bullet</li>
    <li class="square square-bullet-success">Success Bullet</li>
    <li class="square square-bullet-danger">Danger Bullet</li>
    <li class="square square-bullet-warning">Warning Bullet</li>
    <li class="square square-bullet-info">Info Bullet</li>
    <li class="square square-bullet-light">Light Bullet</li>
    <li class="square square-bullet-dark">Dark Bullet</li>
</ul>`}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6} lg={4} xxl={3}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Plus Bullet</h5>
                                <a data-bs-toggle="collapse" href="#plusarrowExample" aria-expanded="false"
                                   aria-controls="plusarrowExample">
                                    <i className="ti ti-code source" data-source="plusarrow"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li className="plus plus-bullet-primary">Primary Bullet</li>
                                    <li className="plus plus-bullet-secondary">secondary Bullet</li>
                                    <li className="plus plus-bullet-success">Success Bullet</li>
                                    <li className="plus plus-bullet-danger">Danger Bullet</li>
                                    <li className="plus plus-bullet-warning">Warning Bullet</li>
                                    <li className="plus plus-bullet-info">Info Bullet</li>
                                    <li className="plus plus-bullet-light">Light Bullet</li>
                                    <li className="plus plus-bullet-dark">Dark Bullet</li>
                                </ul>
                                <pre className="plusarrow collapse mt-3" id="plusarrowExample">
                                            <code className="language-html">
{`<ul>
    <li class="plus plus-bullet-primary">Primary Bullet</li>
    <li class="plus plus-bullet-secondary">secondary Bullet</li>
    <li class="plus plus-bullet-success">Success Bullet</li>
    <li class="plus plus-bullet-danger">Danger Bullet</li>
    <li class="plus plus-bullet-warning">Warning Bullet</li>
    <li class="plus plus-bullet-info">Info Bullet</li>
    <li class="plus plus-bullet-light">Light Bullet</li>
    <li class="plus plus-bullet-dark">Dark Bullet</li>
</ul>`}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Bullet;