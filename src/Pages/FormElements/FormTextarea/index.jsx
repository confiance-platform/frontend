import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Row} from 'reactstrap';

const FormTextarea = () => {
    const [writeText, setWriteText] = useState("");
  const [formattedOutput, setFormattedOutput] = useState("");
  const [customTextarea, setCustomTextarea] = useState("");
  const [customOutput, setCustomOutput] = useState("");

  // Handler for textarea formatter
  const handleWriteTextChange = (e) => {
    setWriteText(e.target.value);
  };

  // Handler for custom textarea formatter
  const handleCustomTextareaSubmit = (e) => {
    e.preventDefault();
    setCustomOutput(customTextarea);
  };
    return (
        <div>
            <Container fluid>
            <div className="row m-1">
                        <div className="col-12 ">
                            <h4 className="main-title">Textarea</h4>
                            <ul className="app-line-breadcrumbs mb-3">
                                <li className="">
                                    <a href="#" className="f-s-14 f-w-500">
                                          <span>
                                            <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                                          </span>
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="#" className="f-s-14 f-w-500">Textarea</a>
                                </li>
                            </ul>
                        </div>
            </div>
            <Row>
            <Col md={12}>
          <Card>
            <CardHeader>
              <h5>Basic Textarea</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <label htmlFor="textareaexample" className="form-label">
                      Simple Textarea
                    </label>
                    <Input
                      type="textarea"
                      id="textareaexample"
                      placeholder="Some text..."
                      rows="2"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <label className="form-label">Floating Textarea</label>
                    <div className="form-floating">
                      <Input
                        type="textarea"
                        id="floatingTextarea2"
                        placeholder="Type Your Address"
                      />
                      <label htmlFor="floatingTextarea2">Address</label>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
            </Col>

            <Col md={12}>
          <Card>
            <CardHeader>
              <h5>Textarea Formatter</h5>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <div className="mb-3">
                  <Input
                    type="textarea"
                    id="write-textarea"
                    placeholder="Write some text.."
                    value={writeText}
                    onChange={handleWriteTextChange}
                  />
                </div>
                <div className="form-control h-40" id="code-output">
                  {writeText}
                </div>
              </FormGroup>
            </CardBody>
          </Card>
        </Col>

        <Col md={12}>
          <Card>
            <CardHeader>
              <h5>Custom Textarea Formatter</h5>
            </CardHeader>
            <CardBody>
              <FormGroup onSubmit={handleCustomTextareaSubmit}>
                <div className="mb-3">
                  <Input
                    type="textarea"
                    id="myTextarea"
                    placeholder="Write some text..."
                    value={customTextarea}
                    onChange={(e) => setCustomTextarea(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <Button id="submitBtn" color="primary">
                    Submit Code
                  </Button>
                </div>
                <div className="form-control h-40" id="output">
                  {customOutput}
                </div>
              </FormGroup>
            </CardBody>
          </Card>
        </Col>
       
            </Row>
            </Container>
        </div>
    );
};

export default FormTextarea;