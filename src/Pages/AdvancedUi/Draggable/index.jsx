import React, {useEffect} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Draggable = () => {
    useEffect(() => {

        // card draggable
        new Sortable(draggableCard, { animation: 150, ghostClass: 'blue-background-class'});

        // share menu list
        new Sortable(shareMenuLeft, { group: 'shared', animation: 150 });
        new Sortable(shareMenuRight, {group: 'shared', animation: 150});

        // clonic menu list
        new Sortable(clonicMenuLeft, {group: {name: 'shared1',pull: 'clone',put: false}, animation: 150, sort: false});
        new Sortable(clonicMenuRight, {group: {name: 'shared1',pull: 'clone'}, animation: 150});

        // handle list
        new Sortable(handleList, {handle: '.list-handle', animation: 150});

        // grid box
        new Sortable(gridList, {swap: true, swapClass: 'highlight', animation: 150,});

        // estable list
        $(document).ready(function() {
            $(".nested-sortable").each(function() {
                new Sortable(this, {
                    group: 'nested',
                    animation: 150,
                    fallbackOnBody: true,
                    swapThreshold: 0.65,
                    onSort: e => {
                        const result = Array.from(e.to.children).map(item => $(item).data('id'));
                        $('#standard_order').val(result);
                    }
                });
            });
        });


    }, []);
    return (
        <div>
            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Draggable</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                                            <span>
                                                <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                                            </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Draggable</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row className="share-list-responsive">
                    <Col xxl={6}>
                        <div className="card equal-card">
                            <div className="card-header">
                                <h5>Draggable Share List</h5>
                            </div>

                            <CardBody>
                                <div className="row">
                                    <Col xs={6} sm={6} md={6} lg={6} className=" box-layout-draggable">
                                        <ul className="draggable-share-list share-menu-list" id="shareMenuLeft">
                                            <li>
                                                <Card>
                                                    <CardBody>
                                                        <div className="share-menu-item " draggable="false">
                                                            <div
                                                                className="h-40 w-40 d-flex-center b-r-50 overflow-hidden text-bg-primary share-menu-img">
                                                                <img src="../assets/images/avtar/1.png"
                                                                     alt="" className="img-fluid"/>
                                                            </div>
                                                            <div className="share-menu-content">
                                                                <h6 className="mb-0">Wilson Terry</h6>
                                                                <p className="mb-0 text-secondary">web designer</p>
                                                            </div>
                                                            <div className="share-menu-icons">

                                                                <Button type="button"
                                                                        className="btn btn-facebook icon-btn b-r-22"><i
                                                                    className="ti ti-brand-facebook text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-twitter icon-btn b-r-22"><i
                                                                    className="ti ti-brand-twitter text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-whatsapp icon-btn b-r-22"><i
                                                                    className="ti ti-brand-whatsapp text-white f-s-14"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </li>
                                            <li>
                                                <Card>
                                                    <CardBody>
                                                        <div className="share-menu-item " draggable="false">
                                                            <div
                                                                className="h-40 w-40 d-flex-center b-r-50 overflow-hidden text-bg-secondary share-menu-img">
                                                                <img src="../assets/images/avtar/2.png"
                                                                     alt="" className="img-fluid"/>
                                                            </div>
                                                            <div className="share-menu-content">
                                                                <h6 className="mb-0">Jalyn Donnelly</h6>
                                                                <p className="mb-0 text-secondary">web developer</p>
                                                            </div>
                                                            <div className="share-menu-icons">

                                                                <Button type="button"
                                                                        className="btn btn-facebook icon-btn b-r-22"><i
                                                                    className="ti ti-brand-facebook text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-twitter icon-btn b-r-22"><i
                                                                    className="ti ti-brand-twitter text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-whatsapp icon-btn b-r-22"><i
                                                                    className="ti ti-brand-whatsapp text-white f-s-14"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </li>
                                            <li>
                                                <Card>
                                                    <CardBody>
                                                        <div className="share-menu-item " draggable="false">
                                                            <div
                                                                className="h-40 w-40 d-flex-center b-r-50 overflow-hidden text-bg-success share-menu-img">
                                                                <img src="../assets/images/avtar/3.png"
                                                                     alt="" className="img-fluid"/>
                                                            </div>
                                                            <div className="share-menu-content">
                                                                <h6 className="mb-0">Betty Mante</h6>
                                                                <p className="mb-0 text-secondary">Ui/ux designer
                                                                </p>
                                                            </div>
                                                            <div className="share-menu-icons">

                                                                <Button type="button"
                                                                        className="btn btn-facebook icon-btn b-r-22"><i
                                                                    className="ti ti-brand-facebook text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-twitter icon-btn b-r-22"><i
                                                                    className="ti ti-brand-twitter text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-whatsapp icon-btn b-r-22"><i
                                                                    className="ti ti-brand-whatsapp text-white f-s-14"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </li>
                                            <li>
                                                <Card>
                                                    <CardBody>
                                                        <div className="share-menu-item " draggable="false">
                                                            <div
                                                                className="h-40 w-40 d-flex-center b-r-50 overflow-hidden text-bg-danger share-menu-img">
                                                                <img src="../assets/images/avtar/4.png"
                                                                     alt="" className="img-fluid"/>
                                                            </div>
                                                            <div className="share-menu-content">
                                                                <h6 className="mb-0">Pinkie Corkery</h6>
                                                                <p className="mb-0 text-secondary">React developer
                                                                </p>
                                                            </div>
                                                            <div className="share-menu-icons">

                                                                <Button type="button"
                                                                        className="btn btn-facebook icon-btn b-r-22"><i
                                                                    className="ti ti-brand-facebook text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-twitter icon-btn b-r-22"><i
                                                                    className="ti ti-brand-twitter text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-whatsapp icon-btn b-r-22"><i
                                                                    className="ti ti-brand-whatsapp text-white f-s-14"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className="box-layout-draggable">
                                        <ul className=" draggable-share-list share-menu-list" id="shareMenuRight">
                                            <li>
                                                <Card>
                                                    <CardBody>
                                                        <div className="share-menu-item" draggable="false">
                                                            <div
                                                                className="h-40 w-40 d-flex-center b-r-50 overflow-hidden text-bg-info share-menu-img">
                                                                <img src="../assets/images/avtar/5.png"
                                                                     alt="" className="img-fluid"/>
                                                            </div>
                                                            <div className="share-menu-content">
                                                                <h6 className="mb-0">Clara Schmidt</h6>
                                                                <p className="mb-0 text-secondary">Php developer</p>
                                                            </div>
                                                            <div className="share-menu-icons">

                                                                <Button type="button"
                                                                        className="btn btn-facebook icon-btn b-r-22"><i
                                                                    className="ti ti-brand-facebook text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-twitter icon-btn b-r-22"><i
                                                                    className="ti ti-brand-twitter text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-whatsapp icon-btn b-r-22"><i
                                                                    className="ti ti-brand-whatsapp text-white f-s-14"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </li>
                                            <li>
                                                <Card>
                                                    <CardBody>
                                                        <div className="share-menu-item" draggable="false">
                                                            <div
                                                                className="h-40 w-40 d-flex-center b-r-50 overflow-hidden text-bg-warning share-menu-img">
                                                                <img src="../assets/images/avtar/5.png"
                                                                     alt="" className="img-fluid"/>
                                                            </div>
                                                            <div className="share-menu-content">
                                                                <h6 className="mb-0">Dane Wiza</h6>
                                                                <p className="mb-0 text-secondary">Node js developer
                                                                </p>
                                                            </div>
                                                            <div className="share-menu-icons">

                                                                <Button type="button"
                                                                        className="btn btn-facebook icon-btn b-r-22"><i
                                                                    className="ti ti-brand-facebook text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-twitter icon-btn b-r-22"><i
                                                                    className="ti ti-brand-twitter text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-whatsapp icon-btn b-r-22"><i
                                                                    className="ti ti-brand-whatsapp text-white f-s-14"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </li>

                                            <li>
                                                <Card>
                                                    <CardBody>
                                                        <div className="share-menu-item" draggable="false">
                                                            <div
                                                                className="h-40 w-40 d-flex-center b-r-50 overflow-hidden text-bg-light share-menu-img">
                                                                <img src="../assets/images/avtar/6.png"
                                                                     alt="" className="img-fluid"/>
                                                            </div>
                                                            <div className="share-menu-content">
                                                                <h6 className="mb-0">Palma Rohan</h6>
                                                                <p className="mb-0 text-secondary">Ios developer</p>
                                                            </div>
                                                            <div className="share-menu-icons">

                                                                <Button type="button"
                                                                        className="btn btn-facebook icon-btn b-r-22"><i
                                                                    className="ti ti-brand-facebook text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-twitter icon-btn b-r-22"><i
                                                                    className="ti ti-brand-twitter text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-whatsapp icon-btn b-r-22"><i
                                                                    className="ti ti-brand-whatsapp text-white f-s-14"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </li>
                                            <li>
                                                <Card>
                                                    <CardBody>
                                                        <div className="share-menu-item" draggable="false">
                                                            <div
                                                                className="h-40 w-40 d-flex-center b-r-50 overflow-hidden text-bg-dark share-menu-img">
                                                                <img src="../assets/images/avtar/07.png"
                                                                     alt="" className="img-fluid"/>
                                                            </div>
                                                            <div className="share-menu-content">
                                                                <h6 className="mb-0">Ora Kreiger</h6>
                                                                <p className="mb-0 text-secondary">Flutter developer
                                                                </p>
                                                            </div>
                                                            <div className="share-menu-icons">

                                                                <Button type="button"
                                                                        className="btn btn-facebook icon-btn b-r-22"><i
                                                                    className="ti ti-brand-facebook text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-twitter icon-btn b-r-22"><i
                                                                    className="ti ti-brand-twitter text-white f-s-14"></i>
                                                                </Button>{" "}
                                                                <Button type="button"
                                                                        className="btn btn-whatsapp icon-btn b-r-22"><i
                                                                    className="ti ti-brand-whatsapp text-white f-s-14"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </li>
                                        </ul>
                                    </Col>
                                </div>
                            </CardBody>
                        </div>
                    </Col>
                    <Col xxl={6}>
                        <Card className=" equal-card">
                            <CardHeader >
                                <h5>Draggable Clonic List </h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} className=" box-layout-draggable">
                                        <ul className="clonic-menu-list" id="clonicMenuLeft">
                                            <li>
                                                <div className="clonic-menu-item">

                                                            <span
                                                                className="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                                                                A
                                                            </span>


                                                    <div className="clonic-menu-content">
                                                        <h6 className="mb-0">Clonic Menu List 1</h6>
                                                    </div>
                                                    <span>
                                                                <i className="ph-fill  ph-dots-three-outline-vertical"></i>
                                                            </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="clonic-menu-item">

                                                            <span
                                                                className="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                                                                B
                                                            </span>


                                                    <div className="clonic-menu-content">
                                                        <h6 className="mb-0">Clonic Menu List 2</h6>
                                                    </div>
                                                    <span>
                                                                <i className="ph-fill  ph-dots-three-outline-vertical"></i>
                                                            </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="clonic-menu-item">

                                                            <span
                                                                className="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                                                                C
                                                            </span>


                                                    <div className="clonic-menu-content">
                                                        <h6 className="mb-0">Clonic Menu List 3</h6>
                                                    </div>
                                                    <span>
                                                                <i className="ph-fill  ph-dots-three-outline-vertical"></i>
                                                            </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="clonic-menu-item">

                                                            <span
                                                                className="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                                                                D
                                                            </span>


                                                    <div className="clonic-menu-content">
                                                        <h6 className="mb-0">Clonic Menu List 4</h6>
                                                    </div>
                                                    <span>
                                                                <i className="ph-fill  ph-dots-three-outline-vertical"></i>
                                                            </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="clonic-menu-item">

                                                            <span
                                                                className="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                                                                E
                                                            </span>


                                                    <div className="clonic-menu-content">
                                                        <h6 className="mb-0">Clonic Menu List 5</h6>
                                                    </div>
                                                    <span>
                                                                <i className="ph-fill  ph-dots-three-outline-vertical"></i>
                                                            </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className=" box-layout-draggable">
                                        <ul className="clonic-menu-list" id="clonicMenuRight">
                                            <li>
                                                <div className="clonic-menu-item">

                                                            <span
                                                                className="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                                                                A
                                                            </span>


                                                    <div className="clonic-menu-content">
                                                        <h6 className="mb-0">Clonic Menu List 6</h6>
                                                    </div>
                                                    <span>
                                                                <i className="ph-fill  ph-dots-three-outline-vertical"></i>
                                                            </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="clonic-menu-item">

                                                            <span
                                                                className="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                                                                B
                                                            </span>


                                                    <div className="clonic-menu-content">
                                                        <h6 className="mb-0">Clonic Menu List 7</h6>
                                                    </div>
                                                    <span>
                                                                <i className="ph-fill  ph-dots-three-outline-vertical"></i>
                                                            </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="clonic-menu-item">

                                                            <span
                                                                className="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                                                                C
                                                            </span>


                                                    <div className="clonic-menu-content">
                                                        <h6 className="mb-0">Clonic Menu List 8</h6>
                                                    </div>
                                                    <span>
                                                                <i className="ph-fill  ph-dots-three-outline-vertical"></i>
                                                            </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="clonic-menu-item">

                                                            <span
                                                                className="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                                                                D
                                                            </span>


                                                    <div className="clonic-menu-content">
                                                        <h6 className="mb-0">Clonic Menu List 9</h6>
                                                    </div>
                                                    <span>
                                                                <i className="ph-fill  ph-dots-three-outline-vertical"></i>
                                                            </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="clonic-menu-item">

                                                            <span
                                                                className="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                                                                E
                                                            </span>


                                                    <div className="clonic-menu-content">
                                                        <h6 className="mb-0">Clonic Menu List 10</h6>
                                                    </div>
                                                    <span>
                                                                <i className="ph-fill  ph-dots-three-outline-vertical"></i>
                                                            </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xxl={6}>
                        <div className="card equal-card">
                            <div className="card-header">
                                <h5>Draggable Handle List </h5>
                            </div>

                            <CardBody>

                                <ul className="list-group handle-list-group" id="handleList">


                                    <li className="list-group-item text-light-primary"><i
                                        className="ph-bold  ph-anchor-simple list-handle"></i>A simple primary
                                        list group
                                        item
                                    </li>
                                    <li className="list-group-item text-light-secondary"><i
                                        className="ph-bold  ph-anchor-simple list-handle"></i>A simple secondary
                                        list
                                        group item
                                    </li>
                                    <li className="list-group-item text-light-success"><i
                                        className="ph-bold  ph-anchor-simple list-handle"></i>A simple success
                                        list group
                                        item
                                    </li>
                                    <li className="list-group-item text-light-danger"><i
                                        className="ph-bold  ph-anchor-simple list-handle"></i>A simple danger
                                        list group
                                        item
                                    </li>
                                    <li className="list-group-item text-light-warning"><i
                                        className="ph-bold  ph-anchor-simple list-handle"></i>A simple warning
                                        list group
                                        item
                                    </li>
                                    <li className="list-group-item text-light-info"><i
                                        className="ph-bold  ph-anchor-simple list-handle"></i>A simple info list
                                        group item
                                    </li>

                                    <li className="list-group-item text-light-dark"><i
                                        className="ph-bold  ph-anchor-simple list-handle"></i>A simple dark list
                                        group item
                                    </li>
                                </ul>
                            </CardBody>


                        </div>
                    </Col>
                    <Col xxl={6}>
                        <div className="card equal-card">
                            <div className="card-header">
                                <h5>Draggable Grid</h5>
                            </div>

                            <CardBody>
                                <ul className=" grid-box-list" id="gridList">
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-1</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-2</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-3</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-4</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-5</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-6</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-8</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-9</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-10</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-11</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-12</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-13</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-14</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-15</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-16</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-17</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid-box">
                                            <h6>Grid-18</h6>
                                        </div>
                                    </li>
                                </ul>
                            </CardBody>
                        </div>
                    </Col>
                    <Col xxl={6}>
                        <Card>
                            <div className="card-header">
                                <h5>Nestable List</h5>
                            </div>
                            <CardBody>

                                <div id="nestedDemo" className="list-group nested-sortable">
                                    <div className="list-group-item">title 1</div>
                                    <div className="list-group-item">title 2</div>
                                    <div className="list-group-item">title3
                                        <div className="list-group nested-sortable">
                                            <div className="list-group-item">title 4</div>
                                            <div className="list-group-item" data-id="5">title 5</div>
                                            <div className="list-group-item" data-id="6">title 6</div>
                                        </div>
                                    </div>
                                    <div className="list-group-item" data-id="7">title 7</div>
                                    <div className="list-group-item" data-id="8">title 8</div>
                                    <div className="list-group-item" data-id="9">title 9</div>
                                    <div className="list-group-item" data-id="10">title10
                                        <div className="list-group nested-sortable">
                                            <div className="list-group-item" data-id="11">title 11</div>
                                            <div className="list-group-item" data-id="12">title 12</div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xxl={6}>
                        <Card>
                            <div className="card-header">
                                <h5>Colour Variant Nestable List</h5>
                            </div>
                            <CardBody>

                                <div className="list-group nested-sortable">
                                    <div className="list-group-item bg-light-primary">
                                        <i className="ph-bold  ph-plus me-3 "></i>Title 1

                                    </div>
                                    <div className="list-group-item bg-light-success"><i
                                        className="ph-bold  ph-plus me-3 "></i>Title 2
                                    </div>
                                    <div className="list-group-item bg-light-secondary"><i
                                        className="ph-bold  ph-plus me-3 "></i>Title3
                                        <div className="list-group nested-sortable">
                                            <div className="list-group-item bg-light-dark"><i
                                                className="ph-bold  ph-minus me-3"></i>Title 4
                                            </div>
                                            <div className="list-group-item bg-light-dark" data-id="5"><i
                                                className="ph-bold  ph-minus me-3"></i>Title 5
                                            </div>
                                            <div className="list-group-item bg-light-dark" data-id="6"><i
                                                className="ph-bold  ph-minus me-3"></i>Title 6
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item bg-light-danger" data-id="7"><i
                                        className="ph-bold  ph-plus me-3 "></i>Title 7
                                    </div>
                                    <div className="list-group-item bg-light-info" data-id="8"><i
                                        className="ph-bold  ph-plus me-3 "></i>Title 8
                                    </div>
                                    <div className="list-group-item bg-light-warning" data-id="9"><i
                                        className="ph-bold  ph-plus me-3 "></i>Title 9
                                    </div>
                                    <div className="list-group-item bg-light-secondary" data-id="10"><i
                                        className="ph-bold  ph-plus me-3 "></i>Title10
                                        <div className="list-group nested-sortable">
                                            <div className="list-group-item bg-light-dark" data-id="11"><i
                                                className="ph-bold  ph-minus me-3"></i>Title 11
                                            </div>
                                            <div className="list-group-item bg-light-dark" data-id="12"><i
                                                className="ph-bold  ph-minus me-3"></i>Title 12
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div className="row draggable-card-responsive" id="draggableCard">
                    <Col xs={6} sm={6} lg={3}>
                        <div className="card draggable-card ">
                            <CardBody>
                                <div className="draggable-card-img">
                                    <img src="../assets/images/draggable/01.jpg " alt="" className="img-fluid"/>
                                        <div className="draggable-card-icon">
                                                <span className="bg-white h-45 w-45 d-flex-center b-r-50">
                                                    <i className="ph-fill  ph-heart text-danger f-s-18"></i>
                                                </span>
                                        </div>
                                </div>
                                <div className="draggable-card-content pt-3">
                                    <h6 className="mb-2 f-w-500">Entire apartment</h6>
                                    <p className="f-s-16  text-secondary ">Nice 24sqm flat, 2min to city
                                        center. Excellent center light</p>
                                </div>
                            </CardBody>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} lg={3}>
                        <Card className="draggable-card">
                            <CardBody>
                                <div className="draggable-card-img">
                                    <img src="../assets/images/draggable/02.jpg " alt="" className="img-fluid"/>
                                        <div className="draggable-card-icon">
                                                <span className="bg-white h-45 w-45 d-flex-center b-r-50">
                                                    <i className="ph-fill  ph-heart text-danger f-s-18"></i>
                                                </span>
                                        </div>

                                </div>
                                <div className="draggable-card-content pt-3">
                                    <h6 className="mb-2 f-w-500">The Art of Minimalism</h6>
                                    <p className="f-s-16  text-secondary">The guide offers practical tips on
                                        decluttering spaces</p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={6} sm={6} lg={3}>
                        <Card className="draggable-card">
                            <CardBody>
                                <div className="draggable-card-img">
                                    <img src="../assets/images/draggable/03.jpg " alt="" className="img-fluid"/>
                                        <div className="draggable-card-icon">
                                                <span className="bg-white h-45 w-45 d-flex-center b-r-50">
                                                    <i className="ph-fill  ph-heart text-danger f-s-18"></i>
                                                </span>
                                        </div>

                                </div>
                                <div className="draggable-card-content pt-3">
                                    <h6 className="mb-2 f-w-500">Color and Texture</h6>
                                    <p className="f-s-16  text-secondary"> It emphasizes the psychological effects
                                        of planning </p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={6} sm={6} lg={3}>
                        <Card className="draggable-card">
                            <CardBody>
                                <div className="draggable-card-img">
                                    <img src="../assets/images/draggable/04.jpg " alt="" className="img-fluid"/>
                                        <div className="draggable-card-icon">
                                                <span className="bg-white h-45 w-45 d-flex-center b-r-50">
                                                    <i className="ph-fill  ph-heart text-danger f-s-18"></i>
                                                </span>
                                        </div>

                                </div>
                                <div className="draggable-card-content pt-3">
                                    <h6 className="mb-2 f-w-500">Luxurious Living</h6>
                                    <p className="f-s-16  text-secondary">It emphasizes the importance of strategic
                                        planning.</p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Draggable;