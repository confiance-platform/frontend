import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row, CardFooter} from "reactstrap";
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem} from "../../../../_helper";

const BoxplotChart = () => {
    return (
        <Container fluid>
            <Row className="m-1">
                <Col xs={12}>
                    <h4 className="main-title">Boxplot</h4>
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
                            <a href="#" className="f-s-14 f-w-500">Boxplot</a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Card>
                        <CardHeader>
                            <h5> Basic Box & Whisker Chart</h5>
                        </CardHeader>
                        <CardBody>
                            <ApexCharts
                                series={
                                    [
                                        {
                                            type: 'boxPlot',
                                            data: [
                                                {
                                                    x: 'Jan 2015',
                                                    y: [54, 66, 69, 75, 88]
                                                },
                                                {
                                                    x: 'Jan 2016',
                                                    y: [43, 65, 69, 76, 81]
                                                },
                                                {
                                                    x: 'Jan 2017',
                                                    y: [31, 39, 45, 51, 59]
                                                },
                                                {
                                                    x: 'Jan 2018',
                                                    y: [39, 46, 55, 65, 71]
                                                },
                                                {
                                                    x: 'Jan 2019',
                                                    y: [29, 31, 35, 39, 44]
                                                },
                                                {
                                                    x: 'Jan 2020',
                                                    y: [41, 49, 58, 61, 67]
                                                },
                                                {
                                                    x: 'Jan 2021',
                                                    y: [54, 59, 66, 71, 88]
                                                }
                                            ]
                                        }
                                    ]
                                }
                                height={350}
                                type="boxPlot"
                                options={{
                                    chart: {
                                        type: 'boxPlot',
                                        height: 350
                                    },
                                    title: {
                                        text: 'Basic BoxPlot Chart',
                                        align: 'left'
                                    },
                                    plotOptions: {
                                        boxPlot: {
                                            colors: {
                                                upper: getLocalStorageItem('color-primary', '#48BECE'),
                                                lower: getLocalStorageItem('color-secondary', '#8B8476')
                                            }
                                        }
                                    },
                                    stroke: {
                                        show: true,
                                        curve: 'straight',
                                        lineCap: 'butt',
                                        colors: ["#000000"],
                                        width: 1,
                                        dashArray: 0,
                                    }
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12}>
                    <Card>
                        <CardHeader>
                            <h5> BoxPlot with Scatter Chart</h5>
                        </CardHeader>
                        <CardBody>
                            <ApexCharts
                                series={[
                                    {
                                        name: 'box',
                                        type: 'boxPlot',
                                        data: [
                                            {
                                                x: new Date('2017-01-01').getTime(),
                                                y: [54, 66, 69, 75, 88]
                                            },
                                            {
                                                x: new Date('2018-01-01').getTime(),
                                                y: [43, 65, 69, 76, 81]
                                            },
                                            {
                                                x: new Date('2019-01-01').getTime(),
                                                y: [31, 39, 45, 51, 59]
                                            },
                                            {
                                                x: new Date('2020-01-01').getTime(),
                                                y: [39, 46, 55, 65, 71]
                                            },
                                            {
                                                x: new Date('2021-01-01').getTime(),
                                                y: [29, 31, 35, 39, 44]
                                            }
                                        ]
                                    },
                                    {
                                        name: 'outliers',
                                        type: 'scatter',
                                        data: [
                                            {
                                                x: new Date('2017-01-01').getTime(),
                                                y: 32
                                            },
                                            {
                                                x: new Date('2018-01-01').getTime(),
                                                y: 25
                                            },
                                            {
                                                x: new Date('2019-01-01').getTime(),
                                                y: 64
                                            },
                                            {
                                                x: new Date('2020-01-01').getTime(),
                                                y: 27
                                            },
                                            {
                                                x: new Date('2021-01-01').getTime(),
                                                y: 15
                                            }
                                        ]
                                    }
                                ]}
                                height={350}
                                type="boxPlot"
                                options={{
                                    chart: {
                                        type: 'boxPlot',
                                        height: 350
                                    },
                                    colors: ['#008FFB', '#FEB019'],
                                    title: {
                                        text: 'BoxPlot - Scatter Chart',
                                        align: 'left'
                                    },
                                    xaxis: {
                                        type: 'datetime',
                                        tooltip: {
                                            formatter: function(val) {
                                                return new Date(val).getFullYear()
                                            }
                                        }
                                    },
                                    plotOptions: {
                                        boxPlot: {
                                            colors: {
                                                upper: '#AECC34',
                                                lower: '#FF5E40'
                                            }
                                        }
                                    },
                                    stroke: {
                                        show: true,
                                        curve: 'straight',
                                        lineCap: 'butt',
                                        colors: ["#000000"],
                                        width: 1,
                                        dashArray: 0,
                                    }
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BoxplotChart;
