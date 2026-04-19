import React from 'react';
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem} from "@/_helper/index.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const RadarChart = () => {
    return (
        <div>
            <Container fluid>
                <Row className="row m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Radar</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-chart-pie-slice f-s-16"></i> Chart
                      </span>
                                </a>
                            </li>
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        Apexcharts
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Radar</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} xl={6}>
                        <Card>
                            <CardHeader>
                                <h5> Basic Radar Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[{
                                        name: 'Series 1',
                                        data: [80, 50, 30, 40, 100, 20],
                                    }]}
                                    type={'radar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'radar',
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE')],
                                        xaxis: {
                                            categories: ['January', 'February', 'March', 'April', 'May', 'June']
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={6}>
                        <Card>
                            <CardHeader>
                                <h5> Radar Chart – Multiple Series</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[{
                                        name: 'Series 1',
                                        data: [80, 50, 30, 40, 100, 20],
                                    }, {
                                        name: 'Series 2',
                                        data: [20, 30, 40, 80, 20, 80],
                                    }, {
                                        name: 'Series 3',
                                        data: [44, 76, 78, 13, 43, 10],
                                    }]}
                                    type={'radar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'radar',
                                            dropShadow: {
                                                enabled: true,
                                                blur: 1,
                                                left: 1,
                                                top: 1
                                            }
                                        },

                                        stroke: {
                                            width: 2
                                        },
                                        fill: {
                                            opacity: 0.1
                                        },
                                        markers: {
                                            size: 0
                                        },
                                        xaxis: {
                                            categories: ['2011', '2012', '2013', '2014', '2015', '2016']
                                        },
                                        colors: [getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40']
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={6}>
                        <Card>
                            <CardHeader>
                                <h5> Radar Chart – Polygon Fill</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[{
                                        name: 'Series 1',
                                        data: [20, 100, 40, 30, 50, 80, 33],
                                    }]}
                                    type={'radar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'radar',
                                        },
                                        dataLabels: {
                                            enabled: true
                                        },
                                        plotOptions: {
                                            radar: {
                                                size: 140,
                                                polygons: {
                                                    strokeColors: '#ACB8C8',

                                                }
                                            }
                                        },

                                        colors: ['#F9D249'],
                                        markers: {
                                            size: 4,
                                            colors: ['#fff'],
                                            strokeColor: '#FF4560',
                                            strokeWidth: 2,
                                        },
                                        tooltip: {
                                            y: {
                                                formatter: function(val) {
                                                    return val
                                                }
                                            }
                                        },
                                        xaxis: {
                                            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                                        },
                                        yaxis: {
                                            tickAmount: 7,
                                            labels: {
                                                formatter: function(val, i) {
                                                    if (i % 2 === 0) {
                                                        return val
                                                    } else {
                                                        return ''
                                                    }
                                                }
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RadarChart;