import React, {useEffect} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const slider = () => {
    useEffect(() => {
        // 1. Multiple Items Slider
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });

        // 2. Center Mode Slider
        $('.center-mode').slick({
            centerMode: true,
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 567,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // 3. Responsive Slider
        $('.responsive').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // 4. Variable Width Slider
        $('.variable-width').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
        });

          // fade slider
        $('.fade-s').slick({
            dots: true,
            infinite: true,
            arrows:false,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            rtl:true
        });

        // lazy slider
        $('.lazy').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:false,
            dots: true,
            rtl:true
        });

        // 5. Add-Remove Slider
        let slideIndex = 0;
        $('.add-remove').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        $('.js-add-slide').on('click', () => {
            slideIndex++;
            $('.add-remove').slick('slickAdd', '<div class="p-2"><img src="../assets/images/slick/12.jpg" alt="" class="img-fluid rounded"></div>');
        });

        $('.js-remove-slide').on('click', () => {
            $('.add-remove').slick('slickRemove', slideIndex - 1);
            if (slideIndex !== 0) slideIndex--;
        });

        // 6. Filtering Slider
        $('.filtering').slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        let filtered = false;
        $('.js-filter').on('click', () => {
            if (!filtered) {
                $('.filtering').slick('slickFilter', ':even');
                $('.js-filter').text('Unfilter Slides');
                filtered = true;
            } else {
                $('.filtering').slick('slickUnfilter');
                $('.js-filter').text('Filter Slides');
                filtered = false;
            }
        });

        // 7. Autoplay Slider
        $('.autoplay-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // 8. Slider Syncing
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
        });

        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Slider</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Slider</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="app-slick-sliders">
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Multiple Items</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="multiple-items app-arrow">
                                    <div className="items"><img src="../assets/images/slick/09.jpg" alt="image"
                                                                className="img-fluid rounded"/>
                                    </div>
                                    <div className="items"><img src="../assets/images/slick/23.jpg" alt="image"
                                                                className="img-fluid rounded"/>
                                    </div>
                                    <div className="items"><img src="../assets/images/slick/25.jpg" alt="image"
                                                                className="img-fluid rounded"/>
                                    </div>
                                    <div className="items"><img src="../assets/images/slick/24.jpg" alt="image"
                                                                className="img-fluid rounded"/>
                                    </div>
                                    <div className="items"><img src="../assets/images/slick/26.jpg" alt="image"
                                                                className="img-fluid rounded"/>
                                    </div>
                                    <div className="items"><img src="../assets/images/slick/27.jpg" alt="image"
                                                                className="img-fluid rounded"/>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Center Mode</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="center-mode app-arrow">
                                    <div className="item">
                                        <img src="../assets/images/slick/04.jpg" className="img-fluid rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="item">
                                        <img src="../assets/images/slick/03.jpg" className="img-fluid rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="item">
                                        <img src="../assets/images/slick/04.jpg" className="img-fluid rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="item">
                                        <img src="../assets/images/slick/05.jpg" className="img-fluid rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="item">
                                        <img src="../assets/images/slick/06.jpg" className="img-fluid rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="item">
                                        <img src="../assets/images/slick/07.jpg" className="img-fluid rounded"
                                             alt="image"/>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Responsive Display</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="responsive app-arrow">
                                    <div className="resopns-item">
                                        <img src="../assets/images/slick/10.jpg" className="img-fluid rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="resopns-item">
                                        <img src="../assets/images/slick/23.jpg" className="img-fluid rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="resopns-item">
                                        <img src="../assets/images/slick/05.jpg" className="img-fluid rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="resopns-item">
                                        <img src="../assets/images/slick/25.jpg" className="img-fluid rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="resopns-item">
                                        <img src="../assets/images/slick/06.jpg" className="img-fluid rounded"
                                             alt="image"/>
                                    </div>
                                    <div className="resopns-item">
                                        <img src="../assets/images/slick/03.jpg" className="img-fluid rounded"
                                             alt="image"/>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Variable Width</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="variable-width app-arrow">
                                    <div className="slider_width_1"></div>
                                    <div className="slider_width_2"></div>
                                    <div className="slider_width_3"></div>
                                    <div className="slider_width_4"></div>
                                    <div className="slider_width_5"></div>
                                    <div className="slider_width_6"></div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Add & Remove</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="slider add-remove app-arrow">
                                    <div className="p-2">
                                        <img src="../assets/images/slick/12.jpg" alt="image"
                                             className="img-fluid rounded"/>
                                    </div>
                                </div>
                                <div className="text-center add-remove-btn mt-3">
                                    <button className="button js-add-slide btn btn-light-primary">Add Slide</button>
                                    <button className="button js-remove-slide btn btn-light-danger ">Remove Slide
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Filtering</h5>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <div className="slider filtering app-arrow">
                                        <div className="items">
                                            <img src="../assets/images/slick/13.jpg" alt="image"
                                                 className="img-fluid rounded"/>
                                        </div>
                                        <div className="items">
                                            <img src="../assets/images/slick/15.jpg" alt="image"
                                                 className="img-fluid rounded"/>
                                        </div>
                                        <div className="items">
                                            <img src="../assets/images/slick/14.jpg" alt="image"
                                                 className="img-fluid rounded"/>
                                        </div>
                                        <div className="items">
                                            <img src="../assets/images/slick/17.jpg" alt="image"
                                                 className="img-fluid rounded"/>
                                        </div>
                                        <div className="items">
                                            <img src="../assets/images/slick/16.jpg" alt="image"
                                                 className="img-fluid rounded"/>
                                        </div>
                                        <div className="items">
                                            <img src="../assets/images/slick/18.jpg" alt="image"
                                                 className="img-fluid rounded"/>
                                        </div>
                                        <div className="items">
                                            <img src="../assets/images/slick/19.jpg" alt="image"
                                                 className="img-fluid rounded"/>
                                        </div>
                                        <div className="items">
                                            <img src="../assets/images/slick/20.jpg" alt="image"
                                                 className="img-fluid rounded"/>
                                        </div>
                                    </div>
                                    <div className="filter d-flex justify-content-center mt-3">
                                        <button className="btn btn-primary js-filter">Filter Slides</button>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col xl={12}>
                                <Card>
                                    <CardHeader>
                                        <h5>Autoplay Slider</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="autoplay-slider app-arrow">
                                            <div className="autoplay-item">
                                                <img src="../assets/images/slick/28.jpg" className="img-fluid rounded"
                                                     alt="image"/>
                                            </div>
                                            <div className="autoplay-item">
                                                <img src="../assets/images/slick/22.jpg" className="img-fluid rounded"
                                                     alt="image"/>
                                            </div>
                                            <div className="autoplay-item">
                                                <img src="../assets/images/slick/10.jpg" className="img-fluid rounded"
                                                     alt="image"/>
                                            </div>
                                            <div className="autoplay-item">
                                                <img src="../assets/images/slick/09.jpg" className="img-fluid rounded"
                                                     alt="image"/>
                                            </div>
                                            <div className="autoplay-item">
                                                <img src="../assets/images/slick/05.jpg" className="img-fluid rounded"
                                                     alt="image"/>
                                            </div>
                                            <div className="autoplay-item">
                                                <img src="../assets/images/slick/21.jpg" className="img-fluid rounded"
                                                     alt="image"/>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12}>
                                <Card>
                                    <CardHeader>
                                        <h5>Fade Slider</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="fade-s app-arrow" dir="rtl">
                                            <div className="item">
                                                <img src="../assets/images/slick/fade-1.jpg"
                                                     className="img-fluid rounded" alt="image"/>
                                            </div>
                                            <div className="item">
                                                <img src="../assets/images/slick/fade-2.jpg"
                                                     className="img-fluid rounded" alt="image"/>
                                            </div>
                                            <div className="item">
                                                <img src="../assets/images/slick/fade-3.jpg"
                                                     className="img-fluid rounded" alt="image"/>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12}>
                                <Card>
                                    <CardHeader>
                                        <h5>Lazy Loading Slider</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="lazy app-arrow" dir="rtl">
                                            <div className="lazy-item">
                                                <img data-lazy="../assets/images/slick/02.jpg" alt=""
                                                     className="img-fluid  rounded" src="#"/>
                                            </div>
                                            <div className="lazy-item">
                                                <img data-lazy="../assets/images/slick/03.jpg" alt=""
                                                     className="img-fluid  rounded" src="#"/>
                                            </div>
                                            <div className="lazy-item">
                                                <img data-lazy="../assets/images/slick/04.jpg" alt=""
                                                     className="img-fluid  rounded" src="#"/>
                                            </div>
                                            <div className="lazy-item">
                                                <img data-lazy="../assets/images/slick/05.jpg" alt=""
                                                     className="img-fluid  rounded" src="#"/>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Slider Syncing</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="">
                                    <div className="slider slider-for mb-3">
                                        <div className="slider-1">
                                            <img src="../assets/images/ecommerce/01.jpg" className="img-fluid rounded"
                                                 alt="image"/>
                                        </div>
                                        <div className="slider-2">
                                            <img src="../assets/images/ecommerce/21.jpg" className="img-fluid rounded"
                                                 alt="image"/>
                                        </div>
                                        <div className="slider-3">
                                            <img src="../assets/images/ecommerce/04.jpg" className="img-fluid rounded"
                                                 alt="image"/>
                                        </div>
                                        <div className="slider-4">
                                            <img src="../assets/images/ecommerce/07.jpg" className="img-fluid rounded"
                                                 alt="image"/>
                                        </div>
                                        <div className="slider-5">
                                            <img src="../assets/images/ecommerce/15.jpg" className="img-fluid rounded"
                                                 alt="image"/>
                                        </div>
                                    </div>

                                    <div className="slider slider-nav app-arrow">
                                        <div className="slider-1 p-2">
                                            <img src="../assets/images/ecommerce/01.jpg" className="img-fluid rounded"
                                                 alt="image"/>
                                        </div>
                                        <div className="slider-2 p-2">
                                            <img src="../assets/images/ecommerce/21.jpg" className="img-fluid rounded"
                                                 alt="image"/>
                                        </div>
                                        <div className="slider-3 p-2">
                                            <img src="../assets/images/ecommerce/04.jpg" className="img-fluid rounded"
                                                 alt="image"/>
                                        </div>
                                        <div className="slider-4 p-2">
                                            <img src="../assets/images/ecommerce/07.jpg" className="img-fluid rounded"
                                                 alt="image"/>
                                        </div>
                                        <div className="slider-5 p-2">
                                            <img src="../assets/images/ecommerce/15.jpg" className="img-fluid rounded"
                                                 alt="image"/>
                                        </div>
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

export default slider;
