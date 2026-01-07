import React from 'react';
import ApexCharts from "react-apexcharts";
import {generateData, getLocalStorageItem} from "@/_helper/index.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const BubbleChart = () => {
    return (
        <div>
            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Bubble</h4>
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
                                <a href="#" className="f-s-14 f-w-500">Bubble</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5> Simple Bubble Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'Bubble1',
                                            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                                min: 10,
                                                max: 60
                                            })
                                        },
                                            {
                                                name: 'Bubble2',
                                                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                                    min: 10,
                                                    max: 60
                                                })
                                            },
                                            {
                                                name: 'Bubble3',
                                                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                                    min: 10,
                                                    max: 60
                                                })
                                            },
                                            {
                                                name: 'Bubble4',
                                                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                                    min: 10,
                                                    max: 60
                                                })
                                            }]
                                    }
                                    type={'bubble'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'bubble',
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        fill: {
                                            opacity: 0.8
                                        },
                                        title: {
                                            text: ''
                                        },
                                        xaxis: {
                                            tickAmount: 12,
                                            type: 'datetime',
                                        },
                                        colors: [getLocalStorageItem('color-primary','#48BECE'),getLocalStorageItem('color-secondary','#8B8476'),'#AECC34','#FF5E40',],
                                        yaxis: {
                                            max: 70
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>3D Bubble Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: '3D Bubble 1',
                                            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                                min: 10,
                                                max: 60
                                            })
                                        },
                                            {
                                                name: '3D Bubble 2',
                                                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                                    min: 10,
                                                    max: 60
                                                })
                                            },
                                            {
                                                name: '3D Bubble 3',
                                                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                                    min: 10,
                                                    max: 60
                                                })
                                            },
                                            {
                                                name: '3D Bubble 4',
                                                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                                    min: 10,
                                                    max: 60
                                                })
                                            }]
                                    }
                                    type={'bubble'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'bubble',
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        fill: {
                                            type: 'gradient',
                                        },
                                        title: {
                                            text: ''
                                        },
                                        xaxis: {
                                            tickAmount: 12,
                                            type: 'datetime',
                                            labels: {
                                                rotate: 0,
                                            }
                                        },
                                        colors: ['#F9D249','#535AE7','#E5E3E0','#48443D'],
                                        yaxis: {
                                            max: 70
                                        },
                                        theme: {
                                            palette: 'palette2'
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

export default BubbleChart;