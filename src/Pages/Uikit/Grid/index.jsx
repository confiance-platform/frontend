import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row, Table} from "reactstrap";

const Grid = () => {
    return (
        <div>
            <Container fluid className="container-fluid">
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Grid</h4>

                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
<span>
  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Grid</a>
                            </li>
                        </ul>

                    </Col>

                </Row>


                <Row className="grid-page">
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Grid Options</h5>
                                <p className="mt-1 f-m-light"></p>
                                Bootstrap grid system allow all six breakpoints, and any breakpoints you can customize.
                            </CardHeader>
                            <CardBody>
                                <div className="table-responsive">
                                    <Table className="table table-secondary">
                                        <thead className="grids">
                                        <tr>
                                            <th></th>
                                            <th className="app-grid">Extra small<br/>
                                                <small>
                                                    <i className="fa-solid fa-less-than"></i> 576px
                                                </small>
                                            </th>
                                            <th className="app-grid">Small<br/>
                                                <small>
                                                    <i className="fa-solid fa-greater-than-equal"></i>576px
                                                </small>
                                            </th>
                                            <th className="app-grid">Medium<br/>
                                                <small>
                                                    <i className="fa-solid fa-greater-than-equal"></i>768px
                                                </small>
                                            </th>
                                            <th className="app-grid">Large<br/>
                                                <small>
                                                    <i className="fa-solid fa-greater-than-equal"></i>992px
                                                </small>
                                            </th>
                                            <th className="app-grid">Extra large<br/>
                                                <small>
                                                    <i className="fa-solid fa-greater-than-equal"></i>1200px
                                                </small>
                                            </th>
                                            <th className="app-grid">Extra extra large<br/>
                                                <small>
                                                    <i className="fa-solid fa-greater-than-equal"></i>1400px
                                                </small>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="grids">
                                        <tr className="app-grid-box">
                                            <th className="text-nowrap fw-600" scope="row">Grid behavior</th>
                                            <td>Horizontal at all times</td>
                                            <td colSpan="5">Collapsed to start, horizontal above breakpoints</td>
                                        </tr>
                                        <tr>
                                            <th className="text-nowrap" scope="row">Max container width</th>
                                            <td>None (auto)</td>
                                            <td>540px</td>
                                            <td>720px</td>
                                            <td>960px</td>
                                            <td>1140px</td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr className="app-grid-box">
                                            <th className="text-nowrap" scope="row">Class prefix</th>
                                            <td>
                                                <div className="text-danger">.col-</div>
                                            </td>
                                            <td>
                                                <div className="text-danger">.col-sm-</div>
                                            </td>
                                            <td>
                                                <div className="text-danger">.col-md-</div>
                                            </td>
                                            <td>
                                                <div className="text-danger">.col-lg-</div>
                                            </td>
                                            <td>
                                                <div className="text-danger">.col-xl-</div>
                                            </td>
                                            <td>
                                                <div className="text-danger">.col-xxl-</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="text-nowrap" scope="row"># of columns</th>
                                            <td colSpan="6">12</td>
                                        </tr>
                                        <tr className="app-grid-box">
                                            <th className="text-nowrap" scope="row">Gutter width</th>
                                            <td colSpan="6">1.5rem (.75rem on left and right)</td>
                                        </tr>
                                        <tr>
                                            <th className="text-nowrap" scope="row">Nestable</th>
                                            <td colSpan="6">Yes</td>
                                        </tr>
                                        <tr className="app-grid-box">
                                            <th className="text-nowrap" scope="row">Offsets</th>
                                            <td colSpan="6">Yes</td>
                                        </tr>
                                        <tr>
                                            <th className="text-nowrap" scope="row">Column ordering</th>
                                            <td colSpan="6">Yes</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5 className="m-1">Grid For Column</h5>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <div className="row flex-wrap">
                                        <div className="col-md-6">
                                            <div className="text-center p-2 mb-2 bg-light-secondary b-r-4">col-md-6
                                            </div>
                                        </div>
                                        <div className="col-md-6 ">
                                            <div className="text-center p-2 mb-2 bg-light-secondary b-r-4">col-md-6
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="text-center p-2 mb-2 bg-light-secondary b-r-4">col-md-7
                                            </div>
                                        </div>
                                        <div className="col-md-5 ">
                                            <div className="text-center p-2 mb-2 bg-light-secondary b-r-4">col-md-5
                                            </div>
                                        </div>
                                        <div className="col-md-8 ">
                                            <div className="text-center p-2 mb-2 bg-light-secondary b-r-4">col-md-8
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-center p-2 mb-2 bg-light-secondary b-r-4">col-md-4
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="text-center p-2 mb-2 bg-light-secondary b-r-4">col-md-9
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-center p-2 mb-2 bg-light-secondary b-r-4">col-md-3
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="text-center p-2 mb-2 bg-light-secondary b-r-4">col-md-10
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="text-center p-2 mb-2 bg-light-secondary b-r-4">col-md-2
                                            </div>
                                        </div>
                                        <div className="col-md-11">
                                            <div className="text-center p-2 mb-2 bg-light-secondary b-r-4">col-md-11
                                            </div>
                                        </div>
                                        <div className="col-md-1">
                                            <div className="text-center p-2 mb-2 bg-light-secondary b-r-4">col-md-1
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="text-center p-2 bg-light-secondary b-r-4">col-md-12</div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5 className="card-title m-1">Equal-width</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-md-6</div>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-md-6</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col-md-4</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col-md-4</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col-md-4</div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5 className="card-title">Setting one column width </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-md-3</div>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-md-6
                                            (wider)
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-md-3</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col</div>
                                    </div>
                                    <div className="col -5">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col-md-5 (wider)</div>
                                    </div>
                                    <div className="col">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col</div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5 className="card-title">Variable width content </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="row justify-content-md-center">
                                    <div className="col col-lg-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-lg-4</div>
                                    </div>
                                    <div className="col-md-auto">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-md-auto</div>
                                    </div>

                                    <div className="col col-lg-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-lg-4</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col</div>
                                    </div>
                                    <div className="col-md-auto">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-md-auto</div>
                                    </div>
                                    <div className="col col-lg-2">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col-lg-2</div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5 className="card-title">All Breakpoints </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col</div>
                                    </div>
                                    <div className="col">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col</div>
                                    </div>
                                    <div className="col">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col</div>
                                    </div>
                                    <div className="col">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col</div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-8">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col-4</div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5 className="card-title">Stacked To Horizontal </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col-sm-8</div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col-sm-4</div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col-sm</div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col-sm</div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">col-sm</div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5 className="card-title">Mix And Match
                                </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="text-center">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-sm-8
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-4">
                                            <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-6
                                                col-md-4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6 col-md-4">
                                            <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-6
                                                col-md-4
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-4">
                                            <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-6
                                                col-md-4
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-4">
                                            <div className="text-center p-2 bg-light-secondary b-r-4 mb-2">col-6
                                                col-md-4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <div className="text-center p-2 bg-light-secondary b-r-4">col-6</div>
                                        </div>
                                        <div className="col-6">
                                            <div className="text-center p-2 bg-light-secondary b-r-4">col-6</div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5 className="card-title">Nesting </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="row text-center">
                                    <div className="col-sm-3 ">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3"> Level 1:
                                            .col-sm-3
                                        </div>
                                    </div>
                                    <div className="col-sm-9 ">
                                        <div className="row">
                                            <div className="col-8 col-sm-6 ">
                                                <div className="text-center p-2 bg-light-secondary b-r-4 mb-3">Level 2:
                                                    .col-8 .col-sm-6
                                                </div>
                                            </div>
                                            <div className="col-4 col-sm-6 ">
                                                <div className="text-center p-2 bg-light-secondary b-r-4 mb-3">Level 2:
                                                    .col-4 .col-sm-6
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5 className="card-title"> Horizontal alignment </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="row justify-content-start p-2">
                                    <div className="col-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4"> One of two columns
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4"> One of two columns
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center p-2">
                                    <div className="col-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4"> One of two columns
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4"> One of two columns
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-end p-2">
                                    <div className="col-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4"> One of two columns
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4"> One of two columns
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Vertical alignment</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="row align-items-start">
                                    <div className="col align-self-start">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3"> One of three
                                            columns
                                        </div>
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3"> One of three
                                            columns
                                        </div>
                                    </div>
                                    <div className="col align-self-center">
                                        <div className="text-center p-2 bg-light-secondary b-r-4  mb-3"> One of three
                                            columns
                                        </div>
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3"> One of three
                                            columns
                                        </div>
                                    </div>
                                    <div className="col align-self-end">
                                        <div className="text-center p-2 bg-light-secondary b-r-4  mb-3"> One of three
                                            columns
                                        </div>
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3"> One of three
                                            columns
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Offset classes</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="row p-2">
                                    <div className="col-md-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3">.col-md-4</div>
                                    </div>
                                    <div className="col-md-4 offset-md-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3">.col-md-4
                                            .offset-md-4
                                        </div>
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-md-3 offset-md-3">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3">.col-md-3
                                            .offset-md-3
                                        </div>
                                    </div>
                                    <div className="col-md-3 offset-md-3">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3">.col-md-3
                                            .offset-md-3
                                        </div>
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-md-6 offset-md-3">
                                        <div className="text-center p-2 bg-light-secondary b-r-4">
                                            .col-md-6 .offset-md-3
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5 className="card-title"> Margin Utilities </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="row p-2">
                                    <div className="col-md-4">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3">.col-md-4</div>
                                    </div>
                                    <div className="col-md-4 ms-auto">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3">.col-md-4
                                            .ms-auto
                                        </div>
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-md-3 ms-md-auto">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3">.col-md-3
                                            .ms-md-auto
                                        </div>
                                    </div>
                                    <div className="col-md-3 ms-md-auto">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3">.col-md-3
                                            .ms-md-auto
                                        </div>
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-auto me-auto">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3">.col-auto
                                            .me-auto
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-center p-2 bg-light-secondary b-r-4 mb-3">.col-auto</div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Grid;