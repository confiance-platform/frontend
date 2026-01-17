import React from 'react';
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem} from "@/_helper/index.js";
import {ApexChartsData} from "@/Data/ApexCharts/index.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const BarChart = () => {
    return (
        <div>
            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Bar</h4>
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
                                <a href="#" className="f-s-14 f-w-500">Bar</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Basic Bar Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                                        }]
                                    }
                                    type={'bar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'bar',
                                            height: 350
                                        },
                                        plotOptions: {
                                            bar: {
                                                borderRadius: 4,
                                                horizontal: true,
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        xaxis: {
                                            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                                                'United States', 'China', 'Germany'
                                            ],
                                        },

                                        colors: [getLocalStorageItem('color-primary', '#48BECE')],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Stacked Bar Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'Marine Sprite',
                                            data: [44, 55, 41, 37, 22, 43, 21]
                                        }, {
                                            name: 'Striking Calf',
                                            data: [53, 32, 33, 52, 13, 43, 32]
                                        }, {
                                            name: 'Tank Picture',
                                            data: [12, 17, 11, 9, 15, 11, 20]
                                        }, {
                                            name: 'Bucket Slope',
                                            data: [9, 7, 5, 8, 6, 9, 4]
                                        }, {
                                            name: 'Reborn Kid',
                                            data: [25, 12, 19, 32, 25, 24, 10]
                                        }]
                                    }
                                    type={'bar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'bar',
                                            height: 350,
                                            stacked: true,
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                                dataLabels: {
                                                    total: {
                                                        enabled: false,
                                                        offsetX: 0,
                                                        style: {
                                                            fontSize: '13px',
                                                            fontWeight: 900
                                                        }
                                                    }
                                                }
                                            },
                                        },
                                        stroke: {
                                            width: 1,
                                            colors: ['#fff']
                                        },
                                        title: {
                                            text: ''
                                        },
                                        xaxis: {
                                            categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                                            labels: {
                                                formatter: function (val) {
                                                    return val + "K"
                                                }
                                            }
                                        },
                                        yaxis: {
                                            title: {
                                                text: undefined
                                            },
                                        },
                                        tooltip: {
                                            y: {
                                                formatter: function (val) {
                                                    return val + "K"
                                                }
                                            }
                                        },
                                        fill: {
                                            opacity: 1
                                        },
                                        legend: {
                                            position: 'top',
                                            horizontalAlign: 'left',
                                            offsetX: 40
                                        },
                                        colors: ['#48BECE', '#8B8476', '#AECC34', '#FF5E40', '#F9D249'],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <div className="card equal-card">
                            <CardHeader>
                                <h5> 100% Stacked Bar Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'Marine Sprite',
                                            data: [44, 55, 41, 37, 22, 43, 21]
                                        }, {
                                            name: 'Striking Calf',
                                            data: [53, 32, 33, 52, 13, 43, 32]
                                        }, {
                                            name: 'Tank Picture',
                                            data: [12, 17, 11, 9, 15, 11, 20]
                                        }, {
                                            name: 'Bucket Slope',
                                            data: [9, 7, 5, 8, 6, 9, 4]
                                        }, {
                                            name: 'Reborn Kid',
                                            data: [25, 12, 19, 32, 25, 24, 10]
                                        }]
                                    }
                                    type={'bar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'bar',
                                            height: 350,
                                            stacked: true,
                                            stackType: '100%'
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                            },
                                        },
                                        stroke: {
                                            width: 1,
                                            colors: ['#fff']
                                        },
                                        title: {
                                            text: ''
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249', '#535AE7', '#E5E3E0', '#48443D'],
                                        xaxis: {
                                            categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                                        },
                                        tooltip: {
                                            y: {
                                                formatter: function (val) {
                                                    return val + "K"
                                                }
                                            }
                                        },
                                        fill: {
                                            opacity: 1

                                        },
                                        legend: {
                                            position: 'top',
                                            horizontalAlign: 'left',
                                            offsetX: 40
                                        }
                                    }}
                                />
                            </CardBody>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Bar With Negative Values</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [
                                            {
                                                name: 'Males',
                                                data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
                                                    3.9, 3.5, 3
                                                ]
                                            },
                                            {
                                                name: 'Females',
                                                data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
                                                    -4.1, -4, -4.1, -3.4, -3.1, -2.8
                                                ]
                                            }
                                        ]
                                    }
                                    type={'bar'}
                                    height={440}
                                    options={{
                                        chart: {
                                            type: 'bar',
                                            height: 440,
                                            stacked: true
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                                barHeight: '80%',
                                            },
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            width: 1,
                                            colors: ["#fff"]
                                        },

                                        grid: {
                                            xaxis: {
                                                lines: {
                                                    show: false
                                                }
                                            }
                                        },

                                        colors: ['#535AE7', '#E5E3E0'],
                                        yaxis: {
                                            min: -5,
                                            max: 5,
                                            title: {},
                                        },
                                        tooltip: {
                                            shared: false,
                                            x: {
                                                formatter: function (val) {
                                                    return val
                                                }
                                            },
                                            y: {
                                                formatter: function (val) {
                                                    return Math.abs(val) + "%"
                                                }
                                            }
                                        },
                                        title: {
                                            text: ''
                                        },
                                        xaxis: {
                                            categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
                                                '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
                                                '0-4'
                                            ],
                                            title: {
                                                text: ''
                                            },
                                            labels: {
                                                formatter: function (val) {
                                                    return Math.abs(Math.round(val)) + "%"
                                                }
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Bar Chart With Markers</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.BarChartWithMarkers}
                                    type={'bar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'bar'
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                            }
                                        },
                                        dataLabels: {
                                            formatter: function (val, opt) {
                                                const goals =
                                                    opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                                                        .goals

                                                if (goals && goals.length) {
                                                    return `${val} / ${goals[0].value}`
                                                }
                                                return val
                                            }
                                        },

                                        colors: [getLocalStorageItem('color-primary', '#48BECE')],
                                        legend: {
                                            show: true,
                                            showForSingleSeries: true,
                                            customLegendItems: ['Actual', 'Expected'],
                                            markers: {
                                                fillColors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476')]
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Reversed Bar Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            data: [400, 430, 448, 470, 540, 580, 690]
                                        }]
                                    }
                                    type={'bar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'bar',
                                            height: 350
                                        },
                                        annotations: {
                                            xaxis: [{
                                                x: 500,
                                                borderColor: '#00E396',
                                                label: {
                                                    borderColor: '#00E396',
                                                    style: {
                                                        color: '#fff',
                                                        background: '#00E396',
                                                    },
                                                    text: 'X annotation',
                                                }
                                            }],
                                            yaxis: [{
                                                y: 'July',
                                                y2: 'September',
                                                label: {
                                                    text: 'Y annotation'
                                                }
                                            }]
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                            }
                                        },
                                        dataLabels: {
                                            enabled: true
                                        },
                                        xaxis: {
                                            categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
                                        },
                                        grid: {
                                            xaxis: {
                                                lines: {
                                                    show: true
                                                }
                                            }
                                        },

                                        colors: ['#04b38b'],
                                        yaxis: {
                                            reversed: true,
                                            axisTicks: {
                                                show: true
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Bar with Categories as DataLabels</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                                        }]
                                    }
                                    type={'bar'}
                                    height={380}
                                    options={{
                                        plotOptions: {
                                            bar: {
                                                barHeight: '110%',
                                                distributed: true,
                                                horizontal: true,
                                                dataLabels: {
                                                    position: 'bottom'
                                                },
                                            }
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249', '#535AE7',
                                            '#E5E3E0', '#48443D'],

                                        dataLabels: {
                                            enabled: true,
                                            textAnchor: 'start',
                                            style: {
                                                colors: ['#fff']
                                            },
                                            formatter: function (val, opt) {
                                                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                                            },
                                            dropShadow: {
                                                enabled: true
                                            }
                                        },
                                        stroke: {
                                            width: 1,
                                            colors: ['#fff']
                                        },
                                        xaxis: {
                                            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                                                'United States', 'China', 'India'
                                            ],
                                        },
                                        yaxis: {
                                            labels: {
                                                show: false
                                            }
                                        },
                                        title: {
                                            text: '',
                                            align: 'center',
                                            floating: true
                                        },
                                        subtitle: {
                                            text: 'Category Names as DataLabels inside bars',
                                            align: 'center',
                                        },
                                        tooltip: {
                                            theme: 'dark',
                                            x: {
                                                show: false
                                            },
                                            y: {
                                                title: {
                                                    formatter: function () {
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
                    <Col lg={6}>
                        <div className="card equal-card">
                            <CardHeader>
                                <h5> Patterned Bar Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'Marine Sprite',
                                            data: [44, 55, 41, 37, 22, 43, 21]
                                        }, {
                                            name: 'Striking Calf',
                                            data: [53, 32, 33, 52, 13, 43, 32]
                                        }, {
                                            name: 'Tank Picture',
                                            data: [12, 17, 11, 9, 15, 11, 20]
                                        }, {
                                            name: 'Bucket Slope',
                                            data: [9, 7, 5, 8, 6, 9, 4]
                                        }]
                                    }
                                    type={'bar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'bar',
                                            height: 350,
                                            stacked: true,
                                            dropShadow: {
                                                enabled: true,
                                                blur: 1,
                                                opacity: 0.25
                                            }
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                                barHeight: '60%',
                                            },
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            width: 2,
                                        },
                                        title: {
                                            text: ''
                                        },
                                        xaxis: {
                                            categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                                        },
                                        yaxis: {
                                            title: {
                                                text: undefined
                                            },
                                        },
                                        tooltip: {
                                            shared: false,

                                        },
                                        fill: {
                                            type: 'pattern',
                                            opacity: 1,
                                            pattern: {
                                                style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'],
                                            }
                                        },
                                        colors: ['#FF5E40', '#F9D249', '#535AE7', '#E5E3E0', '#48443D'],
                                        states: {
                                            hover: {
                                                filter: 'none'
                                            }
                                        },
                                        legend: {
                                            position: 'right',
                                            offsetY: 40
                                        }
                                    }}
                                />
                            </CardBody>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="card equal-card">
                            <CardHeader>
                                <h5> Bar With Image Fill</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'coins',
                                            data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12, 11, 12, 13, 14, 16, 14, 15, 17, 19, 21, 22, 14, 9, 22, 13, 29, 0.5]
                                        }]
                                    }
                                    type={'bar'}
                                    height={410}
                                    options={{
                                        chart: {
                                            type: 'bar',
                                            height: 410,
                                            animations: {
                                                enabled: false
                                            }
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                                barHeight: '100%',
                                            },
                                        },
                                        dataLabels: {
                                            enabled: false,
                                        },
                                        stroke: {
                                            colors: ["#fff"],
                                            width: 0.2
                                        },
                                        labels: Array.apply(null, {length: 39}).map(function (el, index) {
                                            return index + 1;
                                        }),
                                        yaxis: {
                                            axisBorder: {
                                                show: false
                                            },
                                            axisTicks: {
                                                show: false
                                            },
                                            labels: {
                                                show: false
                                            },
                                            title: {
                                                text: '',
                                            },
                                        },
                                        grid: {
                                            position: 'back'
                                        },
                                        title: {
                                            text: '',
                                            align: 'right',
                                            offsetY: 30
                                        },
                                        fill: {
                                            type: 'image',
                                            opacity: 0.87,
                                            image: {
                                                src: ['../assets/images/slick/24.jpg'],
                                                width: 466,
                                                height: 410
                                            }
                                        },
                                    }}
                                />
                            </CardBody>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Grouped Bar Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            data: [44, 55, 41, 64, 22, 43, 21]
                                        }, {
                                            data: [53, 32, 33, 52, 13, 44, 32]
                                        }]
                                    }
                                    type={'bar'}
                                    height={430}
                                    options={{
                                        chart: {
                                            type: 'bar',
                                            height: 430
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                                dataLabels: {
                                                    position: 'top',
                                                },
                                            }
                                        },
                                        colors: [getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34'],
                                        dataLabels: {
                                            enabled: true,
                                            offsetX: -13,
                                            style: {
                                                fontSize: '12px',
                                                colors: ['#fff']
                                            }
                                        },
                                        stroke: {
                                            show: true,
                                            width: 1,
                                            colors: ['#fff']
                                        },
                                        tooltip: {
                                            shared: true,
                                            intersect: false
                                        },
                                        xaxis: {
                                            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
                                        },
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

export default BarChart;