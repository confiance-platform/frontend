import React, {useEffect, useState} from 'react';
import Counter from "@/Components/Counter/index.jsx";
import UpdateCounter from "@/Components/Counter/UpdateCounter.jsx";
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const CountUp = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const [startCounting, setStartCounting] = useState(true);

    const handleStartCounter = () => {
        setStartCounting(false);
        setTimeout(() => {
            setStartCounting(true);
        }, 100);
    };

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Count up</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                            <span>
                              <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                            </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Count up</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Simple</h5>
                                <a data-bs-toggle="collapse" href="#simple1" aria-expanded="false">
                                    <i className="ti ti-code source" data-source="av1"></i>
                                </a>
                                <div className="text-secondary mt-2">Explore CountUp.js for
                                    additional examples.
                                    For more examples, visit the official <a
                                        href="https://inorganik.github.io/countUp.js/"
                                        className="text-danger text-d-underline">CountUp.js</a> website.
                                </div>
                            </CardHeader>

                            <CardBody>
                                <div className="simple-counter mt-4">
                                    <div className="simple">
                                        <div>
                                            <span>$</span>
                                            <Counter className="counter" tag="p" value={150}/>
                                        </div>
                                        <p><i className="ti ti-arrow-narrow-up text-success"></i>Income</p>
                                    </div>
                                    <div className="simple">
                                        <Counter className="counter" tag="div" value={85}/>
                                        <p><i className="ti ti-arrow-narrow-down text-danger"></i>Projects</p>
                                    </div>
                                    <div className="simple">
                                        <div>
                                            <Counter className="counter" tag="p" value={60}/>
                                            <span>%</span>
                                        </div>
                                        <p><i className="ti ti-arrow-narrow-up text-success"></i>Achievement</p>
                                    </div>
                                </div>
                                <pre className="av1 collapse mt-3" id="simple1">
                                    <code className="language-html">
{`
<div class="simple-counter">
    <div class="simple">
        <div>
            <span>$</span>
            <p class="counter" data-count="150">0</p>
        </div>
        <p><i class="ti ti-arrow-narrow-up text-success"></i>Income</p>
    </div>
    <div class="simple">
        <div class="counter" data-count="85">0</div>
        <p><i class="ti ti-arrow-narrow-down text-danger"></i>Projects</p>
    </div>
    <div class="simple">
        <div>
            <p class="counter" data-count="60">0</p>
            <span>%</span>
        </div>
        <p><i class="ti ti-arrow-narrow-up text-success"></i>Achievement</p>
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
                                <h5>Customized</h5>
                                <a data-bs-toggle="collapse" href="#customized1" aria-expanded="false">
                                    <i className="ti ti-code source" data-source="av1"></i>
                                </a>
                                <div className="text-secondary mt-2">You can enhance CountUp's appearance and behavior
                                    by integrating our extended Bootstrap classes.
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="customized-counter mt-4">
                                    <div className="customized">
                                        <i className="ti ti-apps"></i>
                                        <div className="d-flex align-items-center">
                                            <span>$</span>
                                            <Counter className="counter f-w-500 f-s-30 text-dark" tag="p" value={500}/>
                                        </div>
                                        <p>Respected Companies</p>
                                    </div>
                                    <div className="customized">
                                        <i className="ti ti-report-analytics"></i>
                                        <Counter className="counter" tag="div" value={75}/>
                                        <p>Analytical Reports</p>
                                    </div>
                                    <div className="customized">
                                        <i className="ti ti-brand-paypal"></i>
                                        <div className="d-flex align-items-center">
                                            <Counter className="counter f-w-500 f-s-30 text-dark" tag="p" value={40}/>
                                            <span>%</span>
                                        </div>
                                        <p>Protected Payments</p>
                                    </div>
                                </div>
                                <pre className="av1 collapse mt-3" id="customized1">
                                    <code className="language-html">
 {`
 <div class="customized-counter mt-4">
    <div class="customized">
        <i class="ti ti-apps"></i>
        <div class="d-flex align-items-center">
            <span>$</span>
            <p class="counter f-w-500 f-s-30 text-dark" data-count="500">0</p>
        </div>
        <p>Respected Companies</p>
    </div>
    <div class="customized">
        <i class="ti ti-report-analytics"></i>
        <div class="counter" data-count="75">0</div>
        <p>Analytical Reports</p>
    </div>
    <div class="customized">
        <i class="ti ti-brand-paypal"></i>
        <div class="d-flex align-items-center">
            <p class="counter f-w-500 f-s-30 text-dark" data-count="40">0</p>
            <span>%</span>
        </div>
        <p>Protected Payments</p>
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
                                <h5>Update Data</h5>
                                <a data-bs-toggle="collapse" href="#updatedata1" aria-expanded="false">
                                    <i className="ti ti-code source" data-source="av1"></i>
                                </a>
                                <div className="text-secondary mt-2">For guidance on resetting a CountUp instance with a
                                    new value and configuration to dynamically update the displayed value, consult the
                                    official documentation of CountUp.js for detailed API usage and examples.
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="simple-counter mt-4">
                                    <div className="d-flex gap-3">
                                        <div className="simple">
                                            <div>
                                                <span>$</span>
                                                <UpdateCounter countValue={200} isCountingStart={startCounting} tag="p"
                                                               className="counter update-counter"/>
                                            </div>
                                            <p><i className="ti ti-arrow-narrow-up text-success"></i>Income</p>
                                        </div>

                                        <div className="simple">
                                            <div>
                                                <UpdateCounter countValue={81} isCountingStart={startCounting} tag="p"
                                                               className="counter update-counter"/>
                                            </div>
                                            <p><i className="ti ti-arrow-narrow-down text-danger"></i>Projects</p>
                                        </div>

                                        <div className="simple">
                                            <div>
                                                <UpdateCounter countValue={60} isCountingStart={startCounting} tag="p"
                                                               className="counter update-counter"/>
                                                <span>%</span>
                                            </div>
                                            <p><i className="ti ti-arrow-narrow-up text-success"></i>Achievement</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-light-primary" id="startCounter"
                                                onClick={handleStartCounter}>
                                            Update Data
                                        </button>
                                    </div>
                                </div>
                                <pre className="av1 collapse mt-3" id="updatedata1">
                                    <code className="language-html">
{`
<div class="simple-counter">
    <div class="simple">
        <div>
            <span>$</span>
            <p class="counter" data-count="150">0</p>
        </div>
        <p><i class="ti ti-arrow-narrow-up text-success"></i>Income</p>
    </div>
    <div class="simple">
        <div class="counter" data-count="85">0</div>
        <p><i class="ti ti-arrow-narrow-down text-danger"></i>Projects</p>
    </div>
    <div class="simple">
        <div>
            <p class="counter" data-count="60">0</p>
            <span>%</span>
        </div>
        <p><i class="ti ti-arrow-narrow-up text-success"></i>Achievement</p>
    </div>
    <div>
        <button class="btn btn-light-primary" id="startCounter">Update Data</button>
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
                                <h5>Under Tab Sections</h5>
                                <a data-bs-toggle="collapse" href="#undertab1" aria-expanded="false">
                                    <i className="ti ti-code source" data-source="av1"></i>
                                </a>
                                <div className="text-secondary mt-2">Experience a demo featuring CountUp, triggered only
                                    when it enters
                                    the
                                    viewport within a tab container.
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="mt-3 under-tab-section">
                                    <ul className="nav nav-tabs app-tabs-primary under-tab justify-content-center"
                                        id="Basic" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="one-tab" data-bs-toggle="tab"
                                                    data-bs-target="#tab-one"
                                                    type="button" role="tab" aria-controls="tab-one"
                                                    aria-selected="true">Tab-1
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="two-tab" data-bs-toggle="tab"
                                                    data-bs-target="#tab-two"
                                                    type="button" role="tab" aria-controls="tab-two"
                                                    aria-selected="false">Tab-2
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="three-tab" data-bs-toggle="tab"
                                                    data-bs-target="#tab-three"
                                                    type="button" role="tab" aria-controls="tab-three"
                                                    aria-selected="false">Tab-3
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="BasicContent">
                                        <div className="tab-pane fade show active" id="tab-one" role="tabpanel"
                                             aria-labelledby="one-tab"
                                             tabIndex="0">
                                            <div className="simple-counter mt-4">
                                                <div className="d-flex gap-3">
                                                    <div className="simple">
                                                        <div>
                                                            <span>$</span>
                                                            <p className="counter" data-count="150">0</p>
                                                        </div>
                                                        <p><i className="ti ti-arrow-narrow-up text-success"></i>Income
                                                        </p>
                                                    </div>
                                                    <div className="simple">
                                                        <div className="counter" data-count="85">0%</div>
                                                        <p><i className="ti ti-arrow-narrow-down text-danger"></i>Projects
                                                        </p>
                                                    </div>
                                                    <div className="simple">
                                                        <div>
                                                            <p className="counter" data-count="150">0</p>
                                                            <span>%</span>
                                                        </div>
                                                        <p><i className="ti ti-arrow-narrow-up text-success"></i>Achievement
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab-two" role="tabpanel"
                                             aria-labelledby="two-tab" tabIndex="0">
                                            <div className="simple-counter mt-4">
                                                <div className="d-flex gap-3">
                                                    <div className="simple">
                                                        <div className="counter" data-count="110">0</div>
                                                        <p><i className="ti ti-arrow-narrow-up text-success"></i>Income
                                                        </p>
                                                    </div>
                                                    <div className="simple">
                                                        <div className="counter" data-count="65">0</div>
                                                        <p><i className="ti ti-arrow-narrow-down text-danger"></i>Projects
                                                        </p>
                                                    </div>
                                                    <div className="simple">
                                                        <div className="counter" data-count="3200">0</div>
                                                        <p><i className="ti ti-arrow-narrow-up text-success"></i>Achievement
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab-three" role="tabpanel"
                                             aria-labelledby="three-tab"
                                             tabIndex="0">
                                            <div className="simple-counter mt-4">
                                                <div className="d-flex gap-3">
                                                    <div className="simple">
                                                        <div className="counter" data-count="100">0</div>
                                                        <p><i className="ti ti-arrow-narrow-up text-success"></i>Income
                                                        </p>
                                                    </div>
                                                    <div className="simple">
                                                        <div className="counter" data-count="70">0</div>
                                                        <p><i className="ti ti-arrow-narrow-down text-danger"></i>Projects
                                                        </p>
                                                    </div>
                                                    <div className="simple">
                                                        <div className="counter" data-count="1200">0</div>
                                                        <p><i className="ti ti-arrow-narrow-up text-success"></i>Achievement
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <pre className="av1 collapse mt-3" id="undertab1">
        <code className="language-html">
            {`
            <div class="simple-counter">
    <ul class="nav nav-tabs app-tabs-primary" id="Basic" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="one-tab" data-bs-toggle="tab"
              data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one"
              aria-selected="true">Tab-1</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="two-tab" data-bs-toggle="tab" data-bs-target="#tab-two"
              type="button" role="tab" aria-controls="tab-two" aria-selected="false">Tab-2</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="three-tab" data-bs-toggle="tab" data-bs-target="#tab-three"
              type="button" role="tab" aria-controls="tab-three" aria-selected="false">Tab-3</button>
        </li>
    </ul>
    <div class="tab-content" id="BasicContent">
        <div class="tab-pane fade show active" id="tab-one" role="tabpanel"
        aria-labelledby="one-tab" tabindex="0">
        ...
        </div>
        <div class="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="two-tab"
        tabindex="0">
        ...
        </div>
        <div class="tab-pane fade" id="tab-three" role="tabpanel" aria-labelledby="three-tab"
        tabindex="0">
        ...
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
                            <CardBody>
                                <div className="mb-3">
                                    <h5 className="mb-1">Introduction</h5>
                                    <ul className="list-disc ms-3">
                                        <li className="text-secondary"><a href="#">CountUp.js is a self-reliant,
                                            lightweight JavaScript
                                            class, perfect for swiftly creating animations that present numerical data
                                            in an engaging
                                            manner. Refer to the Official Website and GitHub repository for additional
                                            insights.</a></li>
                                    </ul>
                                </div>
                                <div className="mb-3">
                                    <h5 className="mb-1">Use</h5>
                                    <ul className="list-disc ms-3">
                                        <li className="text-secondary"><a href="#">The styling and script bundles for
                                            CountUp.js are
                                            distinct from our overarching bundle and need manual inclusion and
                                            initiation on associated
                                            pages.</a></li>
                                    </ul>
                                    <pre
                                        className=""><code className="language-html">&lt;script src="assets/js/countup.js"&gt;&lt;/script&gt;       </code></pre>
                                </div>
                                <div className="mb-3">
                                    <h5 className="mb-1">Initiation</h5>
                                    <ul className="list-disc ms-3">
                                        <li className="text-secondary"><a href="#">Including CountUp in your project
                                            involves adding the
                                            HTML attribute <code></code> to the CountUp element, accompanied by
                                            the target counting value set using. For a comprehensive
                                            range of options, including loop parameters and more, please review the
                                            detailed choices
                                            below.</a></li>
                                        <li className=" text-secondary"><a href="#">You have the ability to
                                            programmatically control
                                            CountUp instances. To explore additional options for Smooth Scroll, refer to
                                            the official
                                            plugin site for comprehensive information.</a></li>
                                    </ul>
                                </div>
                                <div className="">
                                    <h5 className="mb-1">Document Markup Guide</h5>
                                    <ul className="list-disc ms-3">
                                        <li className=" text-secondary"><a href="#">Configuring specific settings in
                                            CountUp is achieved
                                            through HTML attributes. Below are references for each. For a full range of
                                            options, please
                                            review the official documentation.</a></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CountUp;