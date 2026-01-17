import React from 'react';
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem} from "@/_helper/index.js";
import {ApexChartsData} from "@/Data/ApexCharts/index.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const LineChart = () => {

// zoomable chart
    var ts2 = 1484418600000;
    var dates = [];
    var spikes = [5, -5, 3, -3, 8, -8]
    for (var i = 0; i < 120; i++) {
        ts2 = ts2 + 86400000;
        var innerArr = [ts2, ApexChartsData.dataSeries[1][i].value];
        dates.push(innerArr)
    }

    function generateDayWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

    var data = generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
        min: 30,
        max: 90
    })

    // real time chart
    var lastDate = 0;
    var realTimeData = []
    var TICKINTERVAL = 86400000
    let XAXISRANGE = 777600000

    function getDayWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        while (i < count) {
            var x = baseval;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            realTimeData.push({
                x, y
            });
            lastDate = baseval
            baseval += TICKINTERVAL;
            i++;
        }
    }

    getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
        min: 10,
        max: 90
    })

    getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
        min: 10,
        max: 90
    })

    function getNewSeries(baseval, yrange) {
        var newDate = baseval + TICKINTERVAL;
        lastDate = newDate

        for (var i = 0; i < realTimeData.length - 10; i++) {
            realTimeData[i].x = newDate - XAXISRANGE - TICKINTERVAL
            realTimeData[i].y = 0
        }

        realTimeData.push({
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        })
    }
    return (
        <div>
            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Line</h4>
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
                                <a href="#" className="f-s-14 f-w-500">Line</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row >
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Basic Line Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[
                                        {
                                            name: 'Desktops',
                                            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                                        }
                                    ]}
                                    type={'line'}
                                    options={{
                                        chart: {
                                            height: 300,
                                            type: 'line',
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        stroke: {
                                            curve: 'straight'
                                        },
                                        title: {
                                            text: '',
                                            align: 'left'
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE')],
                                        xaxis: {
                                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                                        },
                                        yaxis: {
                                            min: 0,
                                            max: 150,
                                            tickAmount: 5
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Zoomable Timeseries</h5>
                            </CardHeader>
                            <CardBody>
                              <ApexCharts
                                  series={[{
                                      name: 'XYZ MOTORS',
                                      data: dates,
                                  }]}
                                  type={'area'}
                                  options={{
                                      chart: {
                                          type: 'area',
                                          stacked: false,
                                          height: 300,
                                          zoom: {
                                              type: 'x',
                                              enabled: true,
                                              autoScaleYaxis: true
                                          },
                                          toolbar: {
                                              autoSelected: 'zoom'
                                          },
                                      },
                                      colors: [getLocalStorageItem('color-secondary', '#8B8476')],

                                      dataLabels: {
                                          enabled: false
                                      },
                                      markers: {
                                          size: 0,
                                      },
                                      title: {
                                          text: ' ',
                                          align: 'left'
                                      },

                                      fill: {
                                          colors: [getLocalStorageItem('color-secondary', '#8B8476'), '#E91E63', '#9C27B0']
                                      },
                                      yaxis: {
                                          labels: {
                                              formatter: function (val) {
                                                  return (val / 1000000).toFixed(0);
                                              },
                                          },
                                          title: {
                                              text: ''
                                          },
                                      },
                                      xaxis: {
                                          type: 'datetime',
                                      },
                                      tooltip: {
                                          shared: false,
                                          y: {
                                              formatter: function (val) {
                                                  return (val / 1000000).toFixed(0)
                                              }
                                          }
                                      }
                                  }}
                              />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Line with Annotations</h5>
                            </CardHeader>
                            <CardBody>
                               <ApexCharts
                                   series={
                                       [{
                                           data: ApexChartsData.seriesAreaChart.monthDataSeries1.prices
                                       }]
                                   }
                                   type={'line'}
                                   options={{
                                       chart: {
                                           height: 350,
                                           id: 'areachart-2'
                                       },
                                       annotations: {
                                           yaxis: [{
                                               y: 8200,
                                               borderColor: '#00E396',
                                               label: {
                                                   borderColor: '#00E396',
                                                   style: {
                                                       color: '#fff',
                                                       background: '#00E396',
                                                   },
                                                   text: 'Support',
                                               }
                                           }, {
                                               y: 8600,
                                               y2: 9000,
                                               borderColor: '#000',
                                               fillColor: '#e1f9f2',
                                               opacity: 0.2,
                                               label: {
                                                   style: {
                                                       fontSize: '10px',
                                                       color: '#fff',
                                                       background: '#ffbf52',
                                                   },
                                                   text: 'Y-axis range',
                                               }
                                           }],
                                           xaxis: [{
                                               x: new Date('23 Nov 2017').getTime(),
                                               strokeDashArray: 0,
                                               borderColor: getLocalStorageItem('color-primary','#7752FE'),
                                               label: {
                                                   borderColor:getLocalStorageItem('color-primary','#7752FE'),
                                                   style: {
                                                       color: '#fff',
                                                       background:getLocalStorageItem('color-primary','#7752FE'),
                                                   },
                                                   text: 'Anno Test',
                                               },

                                           }, {
                                               x: new Date('26 Nov 2017').getTime(),
                                               x2: new Date('28 Nov 2017').getTime(),
                                               fillColor: '#26C450',
                                               opacity: 0.4,
                                               label: {
                                                   borderColor: '#26C450',
                                                   style: {
                                                       fontSize: '10px',
                                                       color: '#fff',
                                                       background: '#26C450',
                                                   },
                                                   offsetY: -10,
                                                   text: 'X-axis range',
                                               }
                                           }],
                                           points: [{
                                               x: new Date('01 Dec 2017').getTime(),
                                               y: 8607.55,
                                               marker: {
                                                   size: 8,
                                                   fillColor: '#fff',
                                                   strokeColor: 'red',
                                                   radius: 2,
                                                   cssClass: 'apexcharts-custom-class'
                                               },
                                               label: {
                                                   borderColor: '#FF4560',
                                                   offsetY: 0,
                                                   style: {
                                                       color: '#fff',
                                                       background: '#FF4560',
                                                   },

                                                   text: 'Point Annotation',
                                               }
                                           }, {
                                               x: new Date('08 Dec 2017').getTime(),
                                               y: 9340.85,
                                               marker: {
                                                   size: 0
                                               },

                                           }]
                                       },
                                       dataLabels: {
                                           enabled: false
                                       },
                                       stroke: {
                                           curve: 'straight'
                                       },
                                       grid: {
                                           padding: {
                                               right: 30,
                                               left: 20
                                           }
                                       },
                                       title: {
                                           text: '',
                                           align: 'left'
                                       },
                                       labels: ApexChartsData.seriesAreaChart.monthDataSeries1.dates,
                                       xaxis: {
                                           type: 'datetime',
                                       },

                                       colors: ['#05b48a'],
                                   }}

                               />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Stepline Chart</h5>
                            </CardHeader>
                            <CardBody>
                               <ApexCharts
                                   series={[{
                                       name: 'Sales',
                                       data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                                   }]}
                                   type={'line'}
                                   options={{
                                   stroke: {
                                       curve: 'stepline',
                                   },
                                   dataLabels: {
                                       enabled: false
                                   },

                                   colors: ['#E65051'],
                                   title: {
                                       text: '',
                                       align: 'left'
                                   },
                                   markers: {
                                       hover: {
                                           sizeOffset: 4
                                       }
                                   },
                                   chart: {
                                       height: 350,
                                       type: 'line',
                                       dropShadow: {
                                           enabled: true,
                                           color: '#fceeed',
                                           top: 18,
                                           left: 7,
                                           blur: 10,
                                           opacity: 0.2
                                       },
                                       toolbar: {
                                           show: false
                                       }
                                   },
                               }}


                               />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Gradient line chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[{
                                        name: 'Sales',
                                        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                                    }]}
                                    type={'line'}
                                    options={{
                                        chart: {
                                            height: 350,

                                        },
                                        forecastDataPoints: {
                                            count: 7
                                        },
                                        stroke: {
                                            width: 5,
                                            curve: 'smooth'
                                        },
                                        xaxis: {
                                            type: 'datetime',
                                            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
                                            tickAmount: 10,
                                            labels: {
                                                formatter: function (value, timestamp, opts) {
                                                    return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                                                }
                                            }
                                        },
                                        title: {
                                            text: '',
                                            align: 'left',
                                            style: {
                                                fontSize: "16px",
                                                color: '#f6c355'
                                            }
                                        },
                                        fill: {
                                            colors: ['#f6c355', '#E91E63', '#9C27B0']
                                        },
                                        yaxis: {
                                            min: -10,
                                            max: 40
                                        },

                                        colors: ['#f6c355', '#f1f1f3', '#e5f7f3', '#fceeed', '#fdf9f0'],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Link Chart With Datalabels</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[
                                        {
                                            name: "High - 2013",
                                            data: [28, 29, 33, 36, 32, 32, 33]
                                        },
                                        {
                                            name: "Low - 2013",
                                            data: [12, 11, 14, 18, 17, 13, 13]
                                        }
                                    ]}
                                    type={"line"}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'line',
                                            dropShadow: {
                                                enabled: true,
                                                color: '#000',
                                                top: 18,
                                                left: 7,
                                                blur: 10,
                                                opacity: 0.2
                                            },
                                            toolbar: {
                                                show: false
                                            }
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476')],
                                        dataLabels: {
                                            enabled: true,
                                        },
                                        stroke: {
                                            curve: 'smooth'
                                        },
                                        title: {
                                            text: '',
                                            align: 'left'
                                        },
                                        markers: {
                                            size: 1
                                        },
                                        xaxis: {
                                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                                            title: {
                                                text: ''
                                            }
                                        },
                                        yaxis: {
                                            title: {
                                                text: ''
                                            },
                                            min: 5,
                                            max: 40
                                        },
                                        legend: {
                                            position: 'top',
                                            horizontalAlign: 'right',
                                            floating: true,
                                            offsetY: -25,
                                            offsetX: -5
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Brush Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <div id="wrapper">
                                    <ApexCharts
                                        series={[{
                                            data: data
                                        }]}
                                        type="line"
                                        height={450}
                                        options={{
                                            chart: {
                                                id: 'chart2',
                                                type: 'line',
                                                height: 300,
                                                toolbar: {
                                                    autoSelected: 'pan',
                                                    show: false
                                                }
                                            },
                                            stroke: {
                                                width: 3
                                            },
                                            dataLabels: {
                                                enabled: false
                                            },
                                            fill: {
                                                opacity: 1,
                                            },
                                            markers: {
                                                size: 0
                                            },
                                            xaxis: {
                                                type: 'datetime'
                                            },

                                            colors: ['#04b38c'],
                                        }}
                                    />
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5> Realtime chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[{
                                        data: realTimeData.slice()
                                    }]}
                                    type={'line'}
                                    options={{
                                        chart: {
                                            id: 'realtime',
                                            height: 350,

                                            animations: {
                                                enabled: true,
                                                easing: 'linear',
                                                dynamicAnimation: {
                                                    speed: 1000
                                                }
                                            },
                                            toolbar: {
                                                show: false
                                            },
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            curve: 'smooth'
                                        },
                                        title: {
                                            text: '',
                                            align: 'left'
                                        },

                                        markers: {
                                            size: 0
                                        },
                                        xaxis: {
                                            type: 'datetime',
                                            range: XAXISRANGE,
                                        },
                                        yaxis: {
                                            max: 100
                                        },
                                        legend: {
                                            show: false
                                        },

                                        colors: ['#fac254'],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Missing Null Values</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[{
                                        name: 'Peter',
                                        data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
                                    }, {
                                        name: 'Johnny',
                                        data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
                                    }, {
                                        name: 'David',
                                        data: [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
                                    }]}
                                    type={'line'}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'line',
                                            zoom: {
                                                enabled: false
                                            },
                                            animations: {
                                                enabled: false
                                            }
                                        },
                                        stroke: {
                                            width: [5, 5, 4],
                                            curve: 'straight'
                                        },
                                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                                        title: {
                                            text: ''
                                        },
                                        xaxis: {},
                                        colors: ['#29b0f2', '#283055', '#457ffc', '#fdf9f0'],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5> Dashed Line Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[
                                        {
                                            name: "Session Duration",
                                            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                                        },
                                        {
                                            name: "Page Views",
                                            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                                        },
                                        {
                                            name: 'Total Visits',
                                            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
                                        }
                                    ]}
                                    type={'line'}
                                    options={{
                                        chart: {
                                            height: 350,

                                            zoom: {
                                                enabled: false
                                            },
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            width: [5, 7, 5],
                                            curve: 'straight',
                                            dashArray: [0, 8, 5]
                                        },
                                        title: {
                                            text: '',
                                            align: 'left'
                                        },
                                        legend: {
                                            tooltipHoverFormatter: function (val, opts) {
                                                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                                            }
                                        },
                                        markers: {
                                            size: 0,
                                            hover: {
                                                sizeOffset: 6
                                            }
                                        },

                                        colors: ['#48BECE', '#8B8476', '#AECC34',],
                                        xaxis: {
                                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                                                '10 Jan', '11 Jan', '12 Jan'
                                            ],
                                        },
                                        tooltip: {
                                            y: [
                                                {
                                                    title: {
                                                        formatter: function (val) {
                                                            return val + " (mins)"
                                                        }
                                                    }
                                                },
                                                {
                                                    title: {
                                                        formatter: function (val) {
                                                            return val + " per session"
                                                        }
                                                    }
                                                },
                                                {
                                                    title: {
                                                        formatter: function (val) {
                                                            return val;
                                                        }
                                                    }
                                                }
                                            ]
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

export default LineChart;