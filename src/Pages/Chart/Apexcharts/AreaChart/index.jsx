import React from 'react';
import ApexCharts from "react-apexcharts";
import {ApexChartsData} from "@/Data/ApexCharts/index.js";
import {generateDayWiseTimeSeries, getLocalStorageItem} from "@/_helper/index.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const AreaChart = () => {

    let i;
    let ts1 = 1388534400000;
    let ts2 = 1388620800000;
    let ts3 = 1389052800000;

    const dataSet = [[], [], []];

    for (i = 0; i < 12; i++) {
        ts1 = ts1 + 86400000;
        const innerArr1 = [ts1, ApexChartsData.dataSeries[2][i].value];
        dataSet[0].push(innerArr1)
    }
    for (i = 0; i < 18; i++) {
        ts2 = ts2 + 86400000;
        const innerArr2 = [ts2, ApexChartsData.dataSeries[1][i].value];
        dataSet[1].push(innerArr2)
    }
    for (i = 0; i < 12; i++) {
        ts3 = ts3 + 86400000;
        const innerArr3 = [ts3, ApexChartsData.dataSeries[0][i].value];
        dataSet[2].push(innerArr3)
    }

    return (
        <div>
            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Area</h4>
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
                                <a href="#" className="f-s-14 f-w-500">Area</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Basic Area chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[{
                                        name: "STOCK ABC",
                                        data: ApexChartsData.seriesAreaChart.monthDataSeries1.prices
                                    }]}
                                    type={'area'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'area',
                                            height: 350,
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            curve: 'straight'
                                        },

                                        title: {
                                            text: '',
                                            align: 'left'
                                        },

                                        colors: [getLocalStorageItem('color-primary', '#48BECE')],
                                        subtitle: {
                                            text: '',
                                            align: 'left'
                                        },
                                        labels: ApexChartsData.seriesAreaChart.monthDataSeries1.dates,
                                        xaxis: {
                                            type: 'datetime',
                                        },
                                        yaxis: {
                                            opposite: true
                                        },
                                        legend: {
                                            horizontalAlign: 'left'
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Area with Negative Values</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.seriesAreaChart.AreaWithNegativeValuesData}
                                    type={'area'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'area',
                                            height: 350
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            curve: 'straight'
                                        },

                                        title: {
                                            text: '',
                                            align: 'left',
                                            style: {
                                                fontSize: '14px'
                                            }
                                        },
                                        xaxis: {
                                            type: 'datetime',
                                            axisBorder: {
                                                show: false
                                            },
                                            axisTicks: {
                                                show: false
                                            }
                                        },

                                        colors: ['#48BECE', '#48443D',],
                                        yaxis: {
                                            tickAmount: 4,
                                            floating: false,

                                            labels: {
                                                style: {
                                                    colors: '#8e8da4',
                                                },
                                                offsetY: -7,
                                                offsetX: 0,
                                            },
                                            axisBorder: {
                                                show: false,
                                            },
                                            axisTicks: {
                                                show: false
                                            }
                                        },
                                        fill: {
                                            opacity: 0.5
                                        },
                                        tooltip: {
                                            x: {
                                                format: "yyyy",
                                            },
                                            fixed: {
                                                enabled: false,
                                                position: 'topRight'
                                            }
                                        },
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Area Chart – Datetime X-axis</h5>
                            </CardHeader>
                            <CardBody>
                                <div id="charts">
                                    <div className="toolbar d-flex gap-1">
                                        <button id="one_month" className="btn btn-primary">1M</button>
                                        <button id="six_months" className="btn btn-secondary">6M</button>
                                        <button id="one_year" className="active btn btn-success">1Y</button>
                                        <button id="ytd" className="btn btn-danger">
                                            YTD
                                        </button>
                                        <button id="all" className="btn btn-warning">
                                            ALL
                                        </button>
                                    </div>
                                    <ApexCharts
                                        series={ApexChartsData.seriesAreaChart.AreaDateTimeXAxis}
                                        height={350}
                                        type={'area'}
                                        options={{
                                            chart: {
                                                id: 'area-datetime',
                                                type: 'area',
                                                height: 350,
                                                zoom: {
                                                    autoScaleYaxis: true
                                                }
                                            },
                                            annotations: {
                                                yaxis: [{
                                                    y: 30,
                                                    borderColor: '#999',
                                                    label: {
                                                        show: true,
                                                        text: 'Support',
                                                        style: {
                                                            color: "#fff",
                                                            background: '#00E396'
                                                        }
                                                    }
                                                }],
                                                xaxis: [{
                                                    x: new Date('14 Nov 2012').getTime(),
                                                    borderColor: '#999',
                                                    yAxisIndex: 0,
                                                    label: {
                                                        show: true,
                                                        text: 'Rally',
                                                        style: {
                                                            color: "#fff",
                                                            background: '#535AE7'
                                                        }
                                                    }
                                                }]
                                            },
                                            colors: ['#535AE7', '#f1f1f3', '#e5f7f3', '#fceeed', '#fdf9f0'],
                                            dataLabels: {
                                                enabled: false
                                            },
                                            markers: {
                                                size: 0,
                                                style: 'hollow',
                                            },
                                            xaxis: {
                                                type: 'datetime',
                                                min: new Date('01 Mar 2012').getTime(),
                                                tickAmount: 6,
                                            },
                                            tooltip: {
                                                x: {
                                                    format: 'dd MMM yyyy'
                                                }
                                            },
                                            fill: {
                                                type: 'gradient',
                                                gradient: {
                                                    shadeIntensity: 1,
                                                    opacityFrom: 0.7,
                                                    opacityTo: 0.9,
                                                    stops: [0, 100]
                                                }
                                            },
                                        }}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Area Chart with Null values</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.AreaChartNullValue}
                                    type={'area'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'area',
                                            height: 350,
                                            animations: {
                                                enabled: false
                                            },
                                            zoom: {
                                                enabled: false
                                            },
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            curve: 'straight'
                                        },
                                        fill: {
                                            opacity: 0.8,
                                            type: 'pattern',
                                            pattern: {
                                                style: ['verticalLines', 'horizontalLines'],
                                                width: 5,
                                                height: 6
                                            },
                                        },

                                        colors: ['#AECC34'],

                                        markers: {
                                            size: 5,
                                            hover: {
                                                size: 9
                                            }
                                        },
                                        title: {
                                            text: '',
                                        },
                                        tooltip: {
                                            intersect: true,
                                            shared: false
                                        },
                                        theme: {
                                            palette: 'palette1'
                                        },
                                        xaxis: {
                                            type: 'datetime',
                                        },
                                        yaxis: {
                                            title: {
                                                text: ''
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
                                <h5> Spline Area</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'series1',
                                            data: [31, 40, 28, 51, 42, 109, 100]
                                        }, {
                                            name: 'series2',
                                            data: [11, 32, 45, 32, 34, 52, 41]
                                        }]
                                    }
                                    type={'area'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'area'
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            curve: 'smooth'
                                        },

                                        colors: ['#AECC34', '#FF5E40',],
                                        xaxis: {
                                            type: 'datetime',
                                            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                                        },
                                        tooltip: {
                                            x: {
                                                format: 'dd/MM/yy HH:mm'
                                            },
                                        },
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Irregular TimeSeries</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'PRODUCT A',
                                            data: dataSet[0]
                                        }, {
                                            name: 'PRODUCT B',
                                            data: dataSet[1]
                                        }, {
                                            name: 'PRODUCT C',
                                            data: dataSet[2]
                                        }]
                                    }
                                    type={'area'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'area',
                                            stacked: false,
                                            height: 350,
                                            zoom: {
                                                enabled: false
                                            },
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        markers: {
                                            size: 0,
                                        },
                                        fill: {
                                            type: 'gradient',
                                            gradient: {
                                                shadeIntensity: 1,
                                                inverseColors: false,
                                                opacityFrom: 0.45,
                                                opacityTo: 0.05,
                                                stops: [20, 100, 100, 100]
                                            },
                                        },
                                        yaxis: {
                                            labels: {
                                                style: {
                                                    colors: '#8e8da4',
                                                },
                                                offsetX: 0,
                                                formatter: function (val) {
                                                    return (val / 1000000).toFixed(2);
                                                },
                                            },
                                            axisBorder: {
                                                show: false,
                                            },
                                            axisTicks: {
                                                show: false
                                            }
                                        },
                                        xaxis: {
                                            type: 'datetime',
                                            tickAmount: 8,
                                            min: new Date("01/01/2014").getTime(),
                                            max: new Date("01/20/2014").getTime(),
                                            labels: {
                                                rotate: -15,
                                                rotateAlways: true,
                                                formatter: function (val, timestamp) {

                                                }
                                            }
                                        },

                                        colors: ['#48443D', '#535AE7', '#F9D249',],
                                        title: {
                                            text: '',
                                            align: 'left',
                                            offsetX: 14
                                        },
                                        tooltip: {
                                            shared: true
                                        },
                                        legend: {
                                            position: 'top',
                                            horizontalAlign: 'right',
                                            offsetX: -10
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Stacked Area</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [
                                            {
                                                name: 'South',
                                                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                                    min: 10,
                                                    max: 60
                                                })
                                            },
                                            {
                                                name: 'North',
                                                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                                    min: 10,
                                                    max: 20
                                                })
                                            },
                                            {
                                                name: 'Central',
                                                data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                                    min: 10,
                                                    max: 15
                                                })
                                            }
                                        ]
                                    }
                                    type={'area'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'area',
                                            height: 350,
                                            stacked: true,
                                            events: {
                                                selection: function (chart, e) {
                                                    console.log(new Date(e.xaxis.min))
                                                }
                                            },
                                        },
                                        // colors: ['#ACB8C8', '#0FB450', getLocalStorageItem('color-primary', '#48BECE')],
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            curve: 'smooth'
                                        },
                                        fill: {
                                            type: 'gradient',
                                            gradient: {
                                                opacityFrom: 0.6,
                                                opacityTo: 0.8,
                                            }
                                        },
                                        legend: {
                                            position: 'top',
                                            horizontalAlign: 'left'
                                        },
                                        xaxis: {
                                            type: 'datetime'
                                        },

                                        colors: ['#8B8476', '#AECC34', getLocalStorageItem('color-primary', '#48BECE')],
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

export default AreaChart;