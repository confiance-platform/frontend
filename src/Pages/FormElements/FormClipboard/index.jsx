
import React from 'react';
import {Button, Card, CardBody, CardHeader, Col, Row, Input, Container} from 'reactstrap';



const FormClipboard = () => {

    const clipboard = (id, action) => {
        const inputElement = document.getElementById(id);
        if (action === 'copy') {
            inputElement.select();
            document.execCommand('copy');
        } else if (action === 'cut') {
            inputElement.select();
            document.execCommand('cut');
        }
    };

    const copy = (id) => {
        const textElement = document.getElementById(id);
        const range = document.createRange();
        range.selectNode(textElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
    };


    return (
        <div>
            <Container fluid>

            <Row className="m-1">
              <Col xs={12}>
                <h4 className="main-title">Clipboard</h4>
                <ul className="app-line-breadcrumbs mb-3">
                  <li className="">
                    <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                      </span>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#" className="f-s-14 f-w-500">Clipboard</a>
                  </li>
                </ul>
              </Col>
            </Row>
                <Row>
                    <Col lg="6">
                        <Card>
                            <CardHeader>
                                <h5>Copy to Text Input</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="bg-light-secondary pa-25 copy-clipboard b-r-10">
                                    <Input type="text" className="form-control copytext" id="text2" placeholder="Some text to be copied" />
                                    <div className="col-sm-12 mt-4">
                                        <Button color="primary" onClick={() => clipboard('text2', 'copy')}>
                                            <i className="ti ti-copy"></i> <span>Copy Input</span>
                                        </Button>{" "}
                                        <Button color="danger" onClick={() => clipboard('text2', 'cut')}>
                                            <i className="ti ti-cut"></i> <span>Cut Input</span>
                                        </Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>


                    <Col lg="6">
                        <Card>
                            <CardHeader>
                                <h5>Copy to Textarea</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="bg-light-secondary pa-25 copy-clipboard b-r-10">
                                    <Input type="textarea" className="form-control copytext" id="text-2" rows="3" placeholder="Enter Your Text" />
                                    <div className="col-sm-12 mt-4">
                                        <Button color="info" onClick={() => clipboard('text-2', 'copy')}>
                                            <i className="ti ti-copy"></i> <span>Copy Input</span>
                                        </Button>{" "}
                                        <Button color="warning" onClick={() => clipboard('text-2', 'cut')}>
                                            <i className="ti ti-cut"></i> <span>Cut Input</span>
                                        </Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="6">
                        <Card>
                            <CardHeader>
                                <h5>Copy to Highlighted Text</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="bg-light-secondary pa-25 copy-clipboard b-r-10">
                                    <p className="form-control copytext mb-3">
                                        For text that you can <span className="text-bg-primary px-2 b-r-5" id="text-4"> i am going to copy </span>
                                    </p>
                                    <div>
                                        <Button color="success" onClick={() => copy('text-4')}>
                                            <i className="ti ti-copy"></i> Copy Text
                                        </Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="6">
                        <Card>
                            <CardHeader>
                                <h5>Copy to Paragraph</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="bg-light-secondary pa-25 copy-clipboard b-r-10">
                                    <p className="form-control copytext" id="text-3">
                                        I'd be happy to help you copy a paragraph, but I need a bit more context or the text...
                                    </p>
                                    <div>
                                        <Button color="dark" className="mt-3" onClick={() => copy('text-3')}>
                                            <i className="ti ti-copy"></i> Copy Paragraph
                                        </Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="12">
                        <Card className="app-form">
                            <CardHeader>
                                <h5>Paste</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="b-r-5">
                                    <Input type="textarea" className="form-control" placeholder="Paste your copied content here" rows="5" />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FormClipboard;
