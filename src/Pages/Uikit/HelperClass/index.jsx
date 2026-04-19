import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const HelperClass = () => {
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Helper Classes</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
									<span>
									  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
									</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Helper Classes</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Text Color</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">text-*</a> class for text
                                    color
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="text-primary p-2"> - .text-primary</span>
                                    <span className="text-secondary p-2"> - .text-secondary</span>
                                    <span className="text-success p-2"> - .text-success</span>
                                    <span className="text-danger p-2"> - .text-danger</span>
                                    <span className="text-warning p-2"> - .text-warning</span>
                                    <span className="text-info p-2"> - .text-info</span>
                                    <span className="text-light p-2"> - .text-light</span>
                                    <span className="text-dark  p-2"> - .text-dark</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Link Color</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">link-*</a> class for Link
                                    color
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex flex-wrap gap-2">
                      <span className="p-2">-<a href="#"
                                                className="text-decoration-underline link-primary">link-primary</a></span>
                                    <span className="p-2">-<a href="#"
                                                              className="text-decoration-underline link-secondary">link-secondary</a></span>
                                    <span className="p-2">-<a href="#"
                                                              className="text-decoration-underline link-success">
                        link-success</a></span>
                                    <span className="p-2">-<a href="#"
                                                              className="text-decoration-underline link-danger">link-danger</a></span>
                                    <span className="p-2">-<a href="#"
                                                              className="text-decoration-underline link-waring">link-warning</a></span>
                                    <span className="p-2">- <a href="#"
                                                               className="text-decoration-underline link-info">link-info</a></span>
                                    <span className="p-2">-<a href="#"
                                                              className="text-decoration-underline link-light">link-light</a></span>
                                    <span className="p-2">-<a href="#"
                                                              className="text-decoration-underline link-dark">link-dark</a></span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Text background Color</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">txt-bg-*</a> class for
                                    light background
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="txt-bg-primary p-2"> - .txt-bg-primary</span>
                                    <span className="txt-bg-secondary p-2"> - .txt-bg-secondary</span>
                                    <span className="txt-bg-success p-2"> - .txt-bg-success</span>
                                    <span className="txt-bg-danger p-2"> - .txt-bg-danger</span>
                                    <span className="txt-bg-warning p-2"> - .txt-bg-warning</span>
                                    <span className="txt-bg-info p-2"> - .txt-bg-info</span>
                                    <span className="txt-bg-light p-2"> - .txt-bg-light</span>
                                    <span className="txt-bg-dark  p-2"> - .txt-bg-dark</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Text Align</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">text-*</a>
                                    class for text align
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="text-lowercase p-2">Text-Lowercase</div>
                                <div className="text-uppercase p-2">Text-Uppercase</div>
                                <div className="text-capitalize p-2">Text-Capitalize</div>
                                <div className="text-center">- Text Align Center</div>
                                <div className="text-start">- Text Align Start</div>
                                <div className="text-end">- Text Align End</div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Text Decoration</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">text-d-*</a>
                                    class for text decoration
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="p-2">- Text Decoration<span
                                    className="text-d-underline ms-2"> underline </span></div>
                                <div className="p-2">- Text Decoration<span
                                    className="text-d-line-through ms-2"> line-through </span></div>
                                <div className="p-2">- Text Decoration<span
                                    className="text-d-overline ms-2"> overline</span></div>
                                <div className="p-2">- Text Decoration<span
                                    className="text-d-overline-underline ms-2">overline-underline</span></div>
                                <div className="p-2">- Text Decoration<span
                                    className="text-d-line-underline ms-2">underline-line-through</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Font Style</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">f-fs-*</a> class for font
                                    style
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="p-2">- Font style<span className="f-fs-normal ms-2">Normal</span></div>
                                <div className="p-2">- Font style<span className="f-fs-italic ms-2">Italic</span></div>
                                <div className="p-2">- Font style<span className="f-fs-oblique ms-2">Oblique</span>
                                </div>
                                <div className="p-2">- Font style<span className="f-fs-initial ms-2">Initial</span>
                                </div>
                                <div className="p-2">- Font style<span className="f-fs-inherit ms-2">Inherit</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Headings</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">h1 to h6</a> class for
                                    Headings
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="h1">h1 Fontsize</div>
                                <div className="h2">h2 Fontsize</div>
                                <div className="h3">h3 Fontsize</div>
                                <div className="h4">h4 Fontsize</div>
                                <div className="h5">h5 Fontsize</div>
                                <div className="h6">h6 Fontsize</div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <CardHeader>
                                <h5>Font Weight</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">f-fw-*</a>
                                    class for font weight
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="p-2">- Font weight<span className="f-fw-100 ms-2">f-fw-100* </span>
                                </div>
                                <div className="p-2">- Font weight<span className="f-fw-200 ms-2">f-fw-200* </span>
                                </div>
                                <div className="p-2">- Font weight<span className="f-fw-300 ms-2">f-fw-300* </span>
                                </div>
                                <div className="p-2">- Font weight<span className="f-fw-400 ms-2">f-fw-400* </span>
                                </div>
                                <div className="p-2">- Font weight<span className="f-fw-500 ms-2">f-fw-500* </span>
                                </div>
                                <div className="p-2">- Font weight<span className="f-fw-600 ms-2">f-fw-600* </span>
                                </div>
                                <div className="p-2">- Font weight<span className="f-fw-700 ms-2">f-fw-700* </span>
                                </div>
                                <div className="p-2">- Font weight<span className="f-fw-800 ms-2">f-fw-800* </span>
                                </div>
                                <div className="p-2">- Font weight<span className="f-fw-900 ms-2">f-fw-900* </span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card>
                            <CardHeader>
                                <h5>Font Size</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">f-s-*</a>
                                    class for font size
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="p-2">- Font<span className="f-s-10 ms-2">Size-10 </span></div>
                                <div className="p-2">- Font<span className="f-s-12 ms-2">Size-12 </span></div>
                                <div className="p-2">- Font<span className="f-s-14 ms-2">Size-14 </span></div>
                                <div className="p-2">- Font<span className="f-s-16 ms-2">Size-16 </span></div>
                                <div className="p-2">- Font<span className="f-s-18 ms-2">Size-18 </span></div>
                                <div className="p-2">- Font<span className="f-s-20 ms-2">Size-20 </span></div>
                                <div className="p-2">- Font<span className="f-s-24 ms-2">Size-24 </span></div>
                                <div>- Font<span className="f-s-32 ms-2">Size-32 </span></div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Padding</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">pa-*</a> class for Padding
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="text-center">
                                    <Row>
                                        <div className="col">
                                            <p className="border pa-16">Padding-16</p>
                                        </div>
                                        <div className="col">
                                            <p className="border pa-14">Padding-14</p>
                                        </div>
                                        <div className="col">
                                            <p className="border pa-10">Padding-10</p>
                                        </div>
                                        <div className="col">
                                            <p className="border pa-8">Padding-8</p>
                                        </div>
                                        <div className="col">
                                            <p className="border pa-4">Padding-4</p>
                                        </div>
                                        <div className="col">
                                            <p className="border pa-2">Padding-2</p>
                                        </div>
                                    </Row>
                                </div>
                                <div className="app-divider-v">
                                    <h6>Padding List</h6>
                                </div>
                                <Row>
                                    <div className="col-md-6 col-xl-3">
                                        <p>- pa-1</p>
                                        <p>- pa-2</p>
                                        <p>- pa-3</p>
                                        <p>- pa-4</p>
                                        <p>- pa-5</p>
                                        <p>- pa-6</p>
                                        <p>- pa-7</p>
                                        <p>- pa-8</p>
                                        <p>- pa-9</p>
                                        <p>- pa-10</p>
                                    </div>
                                    <div className="col-md-6 col-xl-3">
                                        <p>- pa-11</p>
                                        <p>- pa-12</p>
                                        <p>- pa-13</p>
                                        <p>- pa-14</p>
                                        <p>- pa-15</p>
                                        <p>- pa-16</p>
                                        <p>- pa-17</p>
                                        <p>- pa-18</p>
                                        <p>- pa-19</p>
                                        <p>- pa-20</p>
                                    </div>
                                    <div className="col-md-6 col-xl-3">
                                        <p>- pa-21</p>
                                        <p>- pa-22</p>
                                        <p>- pa-23</p>
                                        <p>- pa-24</p>
                                        <p>- pa-25</p>
                                        <p>- pa-26</p>
                                        <p>- pa-27</p>
                                        <p>- pa-28</p>
                                        <p>- pa-29</p>
                                        <p>- pa-30</p>
                                    </div>
                                    <div className="col-md-6 col-xl-3">
                                        <p>- pa-31</p>
                                        <p>- pa-32</p>
                                        <p>- pa-33</p>
                                        <p>- pa-34</p>
                                        <p>- pa-35</p>
                                        <p>- pa-36</p>
                                        <p>- pa-37</p>
                                        <p>- pa-38</p>
                                        <p>- pa-39</p>
                                        <p>- pa-40</p>
                                    </div>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Side Padding</h5>
                                <div className="text-muted">
                                    using <a href="#"
                                             className="text-decoration-underline">pd-t-*/pd-s-*/pd-e-*/pd-b-*</a> class
                                    for
                                    Padding
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <div className="col">
                                        <p className="border pa-t-40">Padding-Top-40</p>
                                    </div>
                                    <div className="col">
                                        <p className="border text-end pa-e-40">Padding-End-40</p>
                                    </div>
                                    <div className="col">
                                        <p className="border pa-b-40">Padding-Bottom-40</p>
                                    </div>
                                    <div className="col">
                                        <p className="border pa-s-40">Padding-Start-40</p>
                                    </div>
                                </Row>
                                <div className="app-divider-v">
                                    <h6>Side Padding List</h6>
                                </div>
                                <Row>
                                    <Col md={6} xl={3}>
                                        <p>- padding top</p>
                                        <p>- pa-t-4</p>
                                        <p>- pa-t-8</p>
                                        <p>- pa-t-10</p>
                                        <p>- pa-t-14</p>
                                        <p>- pa-t-18</p>
                                        <p>- pa-t-20</p>
                                        <p>- pa-t-24</p>
                                        <p>- pa-t-28</p>
                                        <p>- pa-t-30</p>
                                        <p>- pa-t-34</p>
                                        <p>- pa-t-38</p>
                                        <p>- pa-t-40</p>
                                    </Col>
                                    <Col md={6} xl={3}>
                                        <p>- padding start</p>
                                        <p>- pa-s-4</p>
                                        <p>- pa-s-8</p>
                                        <p>- pa-s-10</p>
                                        <p>- pa-s-14</p>
                                        <p>- pa-s-18</p>
                                        <p>- pa-s-20</p>
                                        <p>- pa-s-24</p>
                                        <p>- pa-s-28</p>
                                        <p>- pa-s-30</p>
                                        <p>- pa-s-34</p>
                                        <p>- pa-s-38</p>
                                        <p>- pa-s-40</p>
                                    </Col>
                                    <Col md={6} xl={3}>
                                        <p>- padding end</p>
                                        <p>- pa-e-4</p>
                                        <p>- pa-e-8</p>
                                        <p>- pa-e-10</p>
                                        <p>- pa-e-14</p>
                                        <p>- pa-e-18</p>
                                        <p>- pa-e-20</p>
                                        <p>- pa-e-24</p>
                                        <p>- pa-e-28</p>
                                        <p>- pa-e-30</p>
                                        <p>- pa-e-34</p>
                                        <p>- pa-e-38</p>
                                        <p>- pa-e-40</p>
                                    </Col>
                                    <Col md={6} xl={3}>
                                        <p>- padding bottom</p>
                                        <p>- pa-b-4</p>
                                        <p>- pa-b-8</p>
                                        <p>- pa-b-10</p>
                                        <p>- pa-b-14</p>
                                        <p>- pa-b-18</p>
                                        <p>- pa-b-20</p>
                                        <p>- pa-b-24</p>
                                        <p>- pa-b-28</p>
                                        <p>- pa-b-30</p>
                                        <p>- pa-b-34</p>
                                        <p>- pa-b-38</p>
                                        <p>- pa-b-40</p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Margin</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">mg-*</a> class for margin
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <div className="col-auto mb-2">
                                        <div className="border">
                                            <div className="mg-40 txt-bg-primary">Margin-40</div>
                                        </div>
                                    </div>
                                    <div className="col-auto mb-2">
                                        <div className="border">
                                            <div className="mg-34 txt-bg-dark">Margin-34</div>
                                        </div>
                                    </div>
                                    <div className="col-auto mb-2">
                                        <div className="border">
                                            <div className="mg-30 txt-bg-light">Margin-30</div>
                                        </div>
                                    </div>
                                    <div className="col-auto mb-2">
                                        <div className="border">
                                            <div className="mg-28 txt-bg-info">Margin-28</div>
                                        </div>
                                    </div>
                                    <div className="col-auto mb-2">
                                        <div className="border">
                                            <div className="mg-24 txt-bg-warning">Margin-24</div>
                                        </div>
                                    </div>
                                    <div className="col-auto mb-2">
                                        <div className="border">
                                            <div className="mg-20 txt-bg-danger">Margin-20</div>
                                        </div>
                                    </div>
                                    <div className="col-auto mb-2">
                                        <div className="border">
                                            <div className="mg-14 txt-bg-success">Margin-14</div>
                                        </div>
                                    </div>
                                    <div className="col-auto mb-2">
                                        <div className="border">
                                            <p className="mg-10 txt-bg-secondary">Margin-10</p>
                                        </div>
                                    </div>
                                    <div className="col-auto mb-2">
                                        <div className="border">
                                            <p className="mg-4 txt-bg-primary">Margin-4</p>
                                        </div>
                                    </div>
                                    <div className="app-divider-v">
                                        <h6>Margin List</h6>
                                    </div>
                                    <Row>
                                        <div className="col-md-6 col-xl-3">
                                            <p>- mg-1</p>
                                            <p>- mg-2</p>
                                            <p>- mg-3</p>
                                            <p>- mg-4</p>
                                            <p>- mg-5</p>
                                            <p>- mg-6</p>
                                            <p>- mg-7</p>
                                            <p>- mg-8</p>
                                            <p>- mg-9</p>
                                            <p>- mg-10</p>
                                        </div>
                                        <div className="col-md-6 col-xl-3">
                                            <p>- mg-11</p>
                                            <p>- mg-12</p>
                                            <p>- mg-13</p>
                                            <p>- mg-14</p>
                                            <p>- mg-15</p>
                                            <p>- mg-16</p>
                                            <p>- mg-17</p>
                                            <p>- mg-18</p>
                                            <p>- mg-19</p>
                                            <p>- mg-20</p>
                                        </div>
                                        <div className="col-md-6 col-xl-3">
                                            <p>- mg-21</p>
                                            <p>- mg-22</p>
                                            <p>- mg-23</p>
                                            <p>- mg-24</p>
                                            <p>- mg-25</p>
                                            <p>- mg-26</p>
                                            <p>- mg-27</p>
                                            <p>- mg-28</p>
                                            <p>- mg-29</p>
                                            <p>- mg-30</p>
                                        </div>
                                        <div className="col-md-6 col-xl-3">
                                            <p>- mg-31</p>
                                            <p>- mg-32</p>
                                            <p>- mg-33</p>
                                            <p>- mg-34</p>
                                            <p>- mg-35</p>
                                            <p>- mg-36</p>
                                            <p>- mg-37</p>
                                            <p>- mg-38</p>
                                            <p>- mg-39</p>
                                            <p>- mg-40</p>
                                        </div>
                                    </Row>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Side Margin</h5>
                                <div className="text-muted">
                                    using <a href="#"
                                             className="text-decoration-underline">mg-t-*/mg-s-*/mg-e-*/mg-b-*</a> class
                                    for
                                    Padding
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <div className="col mg-2 border">
                                        <div className="mg-s-40">
                                            <p>Margin-Start-40</p>
                                        </div>
                                    </div>
                                    <div className="col mg-2 border">
                                        <div className="mg-t-40">
                                            <p>Margin-Top-40</p>
                                        </div>
                                    </div>
                                    <div className="col mg-2 border">
                                        <div className="mg-e-40">
                                            <p>Margin-End-40</p>
                                        </div>
                                    </div>
                                    <div className="col mg-2 border">
                                        <div className="mg-b-40">
                                            <p>Margin-Bottom-40</p>
                                        </div>
                                    </div>
                                </Row>
                                <div className="app-divider-v">
                                    <h6>Side Margin List</h6>
                                </div>
                                <Row>
                                    <Col md={6} xl={3}>
                                        <p>- Margin top</p>
                                        <p>- mg-t-4</p>
                                        <p>- mg-t-8</p>
                                        <p>- mg-t-10</p>
                                        <p>- mg-t-14</p>
                                        <p>- mg-t-18</p>
                                        <p>- mg-t-20</p>
                                        <p>- mg-t-24</p>
                                        <p>- mg-t-28</p>
                                        <p>- mg-t-30</p>
                                        <p>- mg-t-34</p>
                                        <p>- mg-t-38</p>
                                        <p>- mg-t-40</p>
                                    </Col>
                                    <Col md={6} xl={3}>
                                        <p>- Margin start</p>
                                        <p>- mg-s-4</p>
                                        <p>- mg-s-8</p>
                                        <p>- mg-s-10</p>
                                        <p>- mg-s-14</p>
                                        <p>- mg-s-18</p>
                                        <p>- mg-s-20</p>
                                        <p>- mg-s-24</p>
                                        <p>- mg-s-28</p>
                                        <p>- mg-s-30</p>
                                        <p>- mg-s-34</p>
                                        <p>- mg-s-38</p>
                                        <p>- mg-s-40</p>
                                    </Col>
                                    <Col md={6} xl={3}>
                                        <p>- Margin end</p>
                                        <p>- mg-e-4</p>
                                        <p>- mg-e-8</p>
                                        <p>- mg-e-10</p>
                                        <p>- mg-e-14</p>
                                        <p>- mg-e-18</p>
                                        <p>- mg-e-20</p>
                                        <p>- mg-e-24</p>
                                        <p>- mg-e-28</p>
                                        <p>- mg-e-30</p>
                                        <p>- mg-e-34</p>
                                        <p>- mg-e-38</p>
                                        <p>- mg-e-40</p>
                                    </Col>
                                    <Col md={6} xl={3}>
                                        <p>- Margin bottom</p>
                                        <p>- mg-b-4</p>
                                        <p>- mg-b-8</p>
                                        <p>- mg-b-10</p>
                                        <p>- mg-b-14</p>
                                        <p>- mg-b-18</p>
                                        <p>- mg-b-20</p>
                                        <p>- mg-b-24</p>
                                        <p>- mg-b-28</p>
                                        <p>- mg-b-30</p>
                                        <p>- mg-b-34</p>
                                        <p>- mg-b-38</p>
                                        <p>- mg-b-40</p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Width and Height</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">w-*/h-*</a> class for
                                    Radius
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex justify-content-between flex-wrap">
                                    <div className="w-200 h-200 border mb-2">200*200</div>
                                    <div className="w-150 h-150 border mb-2">150*150</div>
                                    <div className="w-110 h-110 border mb-2">110*110</div>
                                    <div className="w-90 h-90 border mb-2">90*90</div>
                                    <div className="w-80 h-80 border mb-2">80*80</div>
                                    <div className="w-60 h-60 border mb-2">60*60</div>
                                    <div className="w-50 h-50 border mb-2">50*50</div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Radius</h5>
                                <div className="text-muted">
                                    using <a href="#"
                                             className="text-decoration-underline">rounded*/rounded-top*/rounded-end*/rounded-bottom*/
                                    rounded-start*/rounded-pill*/rounded-circle*</a> class for Radius
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="app-example">
                                    <img src="/assets/images/blog/27.jpg" className="rounded" alt=""/>
                                    <img src="/assets/images/blog/27.jpg" className="rounded-top" alt=""/>
                                    <img src="/assets/images/blog/27.jpg" className="rounded-end" alt=""/>
                                    <img src="/assets/images/blog/27.jpg" className="rounded-bottom" alt=""/>
                                    <img src="/assets/images/blog/27.jpg" className="rounded-start" alt=""/>
                                    <img src="/assets/images/blog/27.jpg" className="rounded-pill" alt=""/>
                                    <img src="/assets/images/blog/27.jpg" className="rounded-circle w-120 h-120" alt=""/>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Border</h5>
                                <div className="text-muted">
                                    using <a href="#" className="text-decoration-underline">b-*</a> class for border
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="app-example">
                                    <div className="border">border</div>
                                    <div className="border-t">border-t</div>
                                    <div className="border-s">border-s</div>
                                    <div className="border-e">border-e</div>
                                    <div className="border-b">border-b</div>
                                </div>

                                <div className="app-divider-v">
                                    <h6>Side Border</h6>
                                </div>
                                <div className="app-example">
                                    <div className="border-0 ">border-0</div>
                                    <div className="border-t-0 ">border-t-0</div>
                                    <div className="border-s-0 ">border-s-0</div>
                                    <div className="border-e-0 ">border-e-0</div>
                                    <div className="border-b-0 ">border-b-0</div>
                                </div>
                                <div className="app-divider-v">
                                    <h6>Border Color</h6>
                                </div>
                                <div className="app-example">
                                    <div className="b-1-primary p-2">b-1-primary</div>
                                    <div className="b-1-secondary p-2">b-1-secondary</div>
                                    <div className="b-1-success p-2">b-1-success</div>
                                    <div className="b-1-danger p-2">b-1-danger</div>
                                    <div className="b-1-warning p-2">b-1-warning</div>
                                    <div className="b-1-info p-2">b-1-info</div>
                                    <div className="b-1-light p-2">b-1-light</div>
                                    <div className="b-1-dark p-2">b-1-dark</div>
                                </div>

                                <div className="app-divider-v">
                                    <h6>Border Width</h6>
                                </div>
                                <div className="app-example">
                                    <div className="b-1-primary">b-1-primary</div>
                                    <div className="b-3-primary">b-3-primary</div>
                                    <div className="b-5-primary">b-5-primary</div>
                                    <div className="b-7-primary">b-7-primary</div>
                                    <div className="b-9-primary">b-9-primary</div>
                                    <div className="b-11-primary">b-11-primary</div>
                                    <div className="b-13-primary">b-13-primary</div>
                                    <div className="b-15-primary">b-15-primary</div>
                                    <div className="b-16-primary">b-16-primary</div>
                                </div>

                                <div className="app-divider-v">
                                    <h6>Border Radius</h6>
                                </div>
                                <div className="app-example">
                                    <div className="b-1-secondary b-r-5">b-r-5</div>
                                    <div className="b-1-secondary b-r-10">b-r-10</div>
                                    <div className="b-1-secondary b-r-15">b-r-15</div>
                                    <div className="b-1-secondary b-r-20">b-r-20</div>
                                    <div className="b-1-secondary b-r-25">b-r-25</div>
                                    <div className="b-1-secondary b-r-30">b-r-30</div>
                                </div>

                                <div className="app-divider-v">
                                    <h6>Border Dashed Style</h6>
                                </div>

                                <div className="app-example">
                                    <div className="dashed-1-primary">dashed-1-primary</div>
                                    <div className="dashed-2-secondary">dashed-2-secondary</div>
                                    <div className="dashed-3-success">dashed-3-success</div>
                                    <div className="dashed-4-warning">dashed-4-warning</div>
                                    <div className="dashed-5-danger">dashed-5-danger</div>
                                    <div className="dashed-6-dark">dashed-6-dark</div>
                                    <div className="dashed-8-info">dashed-8-info</div>
                                </div>

                                <div className="app-divider-v">
                                    <h6>Border Dashed Style</h6>
                                </div>

                                <div className="app-example">
                                    <div className="dotted-1-primary">dotted-1-primary</div>
                                    <div className="dotted-2-secondary">dotted-2-secondary</div>
                                    <div className="dotted-3-success">dotted-3-success</div>
                                    <div className="dotted-4-warning">dotted-4-warning</div>
                                    <div className="dotted-5-danger">dotted-5-danger</div>
                                    <div className="dotted-6-dark">dotted-6-dark</div>
                                    <div className="dotted-8-info">dotted-8-info</div>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <div className="col-xl-12">
                        <Card>
                            <CardHeader>
                                <h5>Rotate</h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                                        <div className="rotate b-r-5">
                              <span>90°
                              </span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                                        <div className="rotate rotate-180 b-r-5">
                              <span>180°
                              </span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                                        <div className="rotate rotate-270 b-r-5">
                              <span>270°
                              </span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2 ">
                                        <div className="rotate rotate-90-1 b-r-5">
                              <span>-90°
                              </span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                                        <div className="rotate rotate-180-1 b-r-5">
                              <span>-180°
                              </span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                                        <div className="rotate rotate-280-1 b-r-5">
                              <span>-280°
                              </span>
                                        </div>
                                    </div>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default HelperClass;