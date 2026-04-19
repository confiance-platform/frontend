import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Input, Form } from "reactstrap";

const Typeahead = () => {
    return (
        <div>
            <Container fluid>
            <Row className="m-1">
              <Col xs={12}>
                <h4 className="main-title">Typeahead</h4>
                <ul className="app-line-breadcrumbs mb-3">
                  <li className="">
                    <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                      </span>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#" className="f-s-14 f-w-500">Typeahead</a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="app-typeahead typeahead-demo">
        {/* The Basics */}
        <Col md={6}>
          <Card>
            <CardHeader>
              <h5>The Basics</h5>
            </CardHeader>
            <CardBody>
              <Form className="app-form">
                <div id="basictype">
                  <Input type="text" className="typeahead" placeholder="States" />
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>

        {/* Bloodhound */}
        <Col md={6}>
          <Card>
            <CardHeader>
              <h5>Bloodhound</h5>
            </CardHeader>
            <CardBody>
              <Form className="app-form">
                <div id="bloodhoundtype">
                  <Input type="text" className="typeahead" placeholder="States of USA" />
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>

        {/* Prefetch */}
        <Col md={6}>
          <Card>
            <CardHeader>
              <h5>Prefetch</h5>
            </CardHeader>
            <CardBody>
              <Form className="app-form">
                <div id="prefetchtype">
                  <Input type="text" className="typeahead" placeholder="Countries" />
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>

        {/* Remote Typeahead */}
        <Col md={6}>
          <Card>
            <CardHeader>
              <h5>Remote Typeahead</h5>
            </CardHeader>
            <CardBody>
              <Form className="app-form">
                <div id="remotetype">
                  <Input type="text" className="typeahead" placeholder="Oscar winners for Best Picture" />
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>

        {/* Custom Templates */}
        <Col md={6}>
          <Card>
            <CardHeader>
              <h5>Custom Templates</h5>
            </CardHeader>
            <CardBody>
              <Form className="app-form">
                <div id="customtype-templates">
                  <Input type="text" className="typeahead" placeholder="Oscar winners for Best Picture" />
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>

        {/* Multiple Datasets */}
        <Col md={6}>
          <Card>
            <CardHeader>
              <h5>Multiple Datasets</h5>
            </CardHeader>
            <CardBody>
              <Form className="app-form">
                <div id="multiple-datasetstype">
                  <Input type="text" className="typeahead" placeholder="NBA and NHL teams" />
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>

        {/* Scrollable Dropdown Menu */}
        <Col md={6}>
          <Card>
            <CardHeader>
              <h5>Scrollable Dropdown Menu</h5>
            </CardHeader>
            <CardBody>
              <Form className="app-form">
                <div id="scrollable-dropdown-menu" className="scrollable-dropdown">
                  <Input type="text" className="typeahead" placeholder="Countries" />
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>

        {/* RTL Support */}
        <Col md={6}>
          <Card>
            <CardHeader>
              <h5>RTL Support</h5>
            </CardHeader>
            <CardBody>
              <Form className="app-form">
                <div id="rtltype">
                  <Input type="text" className="typeahead text-end" placeholder="Countries" />
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
            </Container>
        </div>
    );
};

export default Typeahead;