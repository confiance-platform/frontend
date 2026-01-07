import React, {useEffect} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Tour = () => {

    useEffect(() => {
        const tour = new Shepherd.Tour({
            useModalOverlay: true,
            defaultStepOptions: {
                cancelIcon: {
                    enabled: true,
                },
                classes: 'shepherd-theme-custom',
                scrollTo: {
                    behavior: 'smooth',
                    block: 'center',
                },
            },
        });

        tour.addStep({
            id: 'profile-tabs',
            title: 'All Tabs!',
            text: 'Go and check Now 👍',
            attachTo: {
                element: '#profile-tabs',
                on: 'bottom',
            },
            buttons: [
                { text: '< Back', action: tour.back },
                { text: 'Next >', action: tour.next },
            ],
        });

        tour.addStep({
            id: 'featured-Stories',
            title: 'Stories!',
            text: 'Beautiful day starts with some pictures.',
            attachTo: {
                element: '#featured-Stories',
                on: 'bottom',
            },
            buttons: [
                { text: '< Back', action: tour.back },
                { text: 'Next >', action: tour.next },
            ],
        });

        tour.addStep({
            id: 'post',
            title: 'Post',
            text: ' Some picture of our post secthion..\n',
            attachTo: {
                element: '#post',
                on: 'bottom'
            },
            buttons: [
                { text: '< Back', action: tour.back},
                {text: 'Next >',action: tour.next }
            ]
        });

        tour.addStep({
            id: 'about-me',
            title: 'About Me',
            text: ' something details about me!!\n',
            attachTo: {
                element: '#about-me',
                on: 'bottom'
            },
            buttons: [
                { text: '< Back', action: tour.back},
                {text: 'Next >',action: tour.next }
            ]
        });

        tour.addStep(  {
            id: 'friend',
            title: 'Friend',
            text: ' Friendlists who follow this!\n',
            attachTo: {
                element: '#friend',
                on: 'bottom'
            },
            buttons: [
                { text: '< Back', action: tour.back},
                { text: 'Done &#x1F44D;', action: tour.cancel}
            ]
        });

        tour.start();

        // Initialize Slick slider
        $('.story-container').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 480,
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
                        <h4 className="main-title">Tour</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                            <span>
                              <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                            </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Tour</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <Card id="profile-tabs">
                            <CardBody>
                                <div className="tab-wrapper">
                                    <ul className="profile-app-tabs ">
                                        <li className="tab-link fw-medium f-s-16 f-w-600 active" data-tab="1"><i
                                            className="ti ti-user fw-bold"></i>
                                            Profile
                                        </li>
                                        <li className="tab-link fw-medium f-s-16 f-w-600" data-tab="2">
                                            <i className="ti ti-timeline fw-bold"></i>
                                            Activities
                                            <span className="badge rounded-pill bg-warning badge-notification">
                                                10+
                                                <span className="visually-hidden">unread messages</span>
                                            </span>
                                        </li>
                                        <li className="tab-link fw-medium f-s-16 f-w-600" data-tab="3"><i
                                            className="ti ti-clipboard-data fw-bold"></i> Projects
                                        </li>
                                        <li className="tab-link fw-medium f-s-16 f-w-600" data-tab="4"><i
                                            className="ti ti-photo-heart fw-bold"></i> Post
                                        </li>
                                        <li className="tab-link fw-medium f-s-16  f-w-600" data-tab="5"><i
                                            className="ti ti-users fw-bold"></i>
                                            Friends
                                        </li>
                                    </ul>
                                </div>

                            </CardBody>
                        </Card>

                        <Card className="d-lg-block d-none" id="friend">
                            <CardHeader>
                                <h5>Friends</h5>
                            </CardHeader>
                            <CardBody className="profile-friends">
                                <div className="d-flex align-items-center">
                                    <div className="h-40 w-40 d-flex-center b-r-50 overflow-hidden bg-dark">
                                        <img src="/assets/images/avtar/2.png" alt="image" className="img-fluid"/>
                                    </div>
                                    <div className="flex-grow-1 ps-2">
                                        <div className="fw-medium"> Bette Hagenes</div>
                                        <div className="text-muted f-s-12">Wed Developer</div>
                                    </div>
                                    <a href="#" className="btn btn-light-secondary icon-btn b-r-22"> <i
                                        className="ti ti-user-check"></i> </a>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="h-40 w-40 d-flex-center b-r-50 overflow-hidden bg-primary">
                                        <img src="/assets/images/avtar/10.png" alt="image" className="img-fluid"/>
                                    </div>
                                    <div className="flex-grow-1 ps-2">
                                        <div className="fw-medium"> Fleta Walsh</div>
                                        <div className="text-muted f-s-12">Wed Designer</div>
                                    </div>
                                    <a href="#" className="btn btn-light-secondary icon-btn b-r-22"> <i
                                        className="ti ti-user-check"></i> </a>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="h-40 w-40 d-flex-center b-r-50 overflow-hidden bg-success">
                                        <img src="/assets/images/avtar/14.png" alt="image" className="img-fluid"/>
                                    </div>
                                    <div className="flex-grow-1 ps-2">
                                        <div className="fw-medium"> Lenora</div>
                                        <div className="text-muted f-s-12">UI/UX designer</div>
                                    </div>
                                    <a href="#" className="btn btn-light-secondary icon-btn b-r-22"> <i
                                        className="ti ti-user-check"></i> </a>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="h-40 w-40 d-flex-center b-r-50 overflow-hidden bg-warning">
                                        <img src="/assets/images/avtar/16.png" alt="image" className="img-fluid"/>
                                    </div>
                                    <div className="flex-grow-1 ps-2">
                                        <div className="fw-medium"> Fleta Walsh</div>
                                        <div className="text-muted f-s-12">React Developer</div>
                                    </div>
                                    <a href="#" className="btn btn-light-secondary icon-btn b-r-22"> <i
                                        className="ti ti-user-check"></i> </a>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="h-40 w-40 d-flex-center b-r-50 overflow-hidden bg-danger">
                                        <img src="/assets/images/avtar/13.png" alt="image" className="img-fluid"/>
                                    </div>
                                    <div className="flex-grow-1 ps-2">
                                        <div className="fw-medium"> Emery McKenzie</div>
                                        <div className="text-muted f-s-12">Wed Developer</div>
                                    </div>
                                    <a href="#" className="btn btn-light-secondary icon-btn b-r-22"> <i
                                        className="ti ti-user-check"></i> </a>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <div className="h-40 w-40 d-flex-center b-r-50 overflow-hidden bg-info">
                                        <img src="/assets/images/avtar/1.png" alt="image" className="img-fluid"/>
                                    </div>
                                    <div className="flex-grow-1 ps-2">
                                        <div className="fw-medium"> Bette Hagenes</div>
                                        <div className="text-muted f-s-12">Wed Designer</div>
                                    </div>
                                    <a href="#" className="btn btn-light-secondary icon-btn b-r-22"> <i
                                        className="ti ti-user-check"></i> </a>
                                </div>
                       </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="h-45 w-45 d-flex-center b-r-50 overflow-hidden bg-danger">
                                        <img src="../assets/images/avtar/16.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="flex-grow-1 ps-2 pe-2">
                                        <div className="f-w-600">Heli Walsh</div>
                                        <div className="text-muted f-s-12">3 Week</div>
                                    </div>
                                    <div><i className="ti ti-dots-vertical"></i></div>
                                </div>
                                <div className="post-div">
                                    <div className="row g-2 my-2">
                                        <div className="col-6">
                                            <img src="../assets/images/profile-app/19.jpg" className="w-100 rounded"
                                                 alt=""/>
                                        </div>
                                        <div className="col-6">
                                            <img src="../assets/images/profile-app/27.jpg" className="w-100 rounded"
                                                 alt=""/>
                                        </div>
                                        <div className="col-4">
                                            <img src="../assets/images/profile-app/28.jpg" className="w-100 rounded"
                                                 alt=""/>
                                        </div>
                                        <div className="col-4">
                                            <img src="../assets/images/profile-app/29.jpg" className="w-100 rounded"
                                                 alt=""/>
                                        </div>
                                        <div className="col-4">
                                            <img src="../assets/images/profile-app/30.jpg" className="w-100 rounded"
                                                 alt=""/>
                                        </div>
                                    </div>
                                    <p className="test-muted">There's nothing like fresh flowers!......🌸🌼🌻</p>
                                    <div className="post-icon">
                                        <i className="ti ti-heart"></i>
                                        <i className="ti ti-brand-hipchat"></i>
                                        <i className="ti ti-send"></i>
                                        <p className="text-secondary">2k Likes</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={5} xxl={6}  className="col-box-5">
                        <div className="content-wrapper">
                            <div id="tab-1" className="tabs-content active">
                                <div className="profile-content">

                                    <Card id="featured-Stories">
                                        <CardHeader>
                                            <h5>Featured Stories</h5>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="story-container app-arrow">
                                                <div>
                                                    <div className="story">
                                                        <img src="/assets/images/profile-app/11.jpg"
                                                             className="rounded img-fluid" alt="image"/>
                                                        <div
                                                            className="h-45 w-45 d-flex-center b-r-50 overflow-hidden story-icon bg-primary">
                                                            <img src="/assets/images/avtar/1.png" alt="image"
                                                                 className="img-fluid"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="story">
                                                        <img src="/assets/images/profile-app/12.jpg"
                                                             className="rounded img-fluid" alt="image"/>
                                                        <div
                                                            className="h-45 w-45 d-flex-center b-r-50 overflow-hidden story-icon bg-danger">
                                                            <img src="/assets/images/avtar/08.png" alt="image"
                                                                 className="img-fluid"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="story">
                                                        <img src="/assets/images/profile-app/13.jpg"
                                                             className="rounded img-fluid" alt="image"/>
                                                        <div
                                                            className="h-45 w-45 d-flex-center b-r-50 overflow-hidden story-icon bg-secondry">
                                                            <img src="/assets/images/avtar/2.png" alt="image"
                                                                 className="img-fluid"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="story">
                                                        <img src="/assets/images/profile-app/14.jpg"
                                                             className="rounded img-fluid" alt="image"/>
                                                        <div
                                                            className="h-45 w-45 d-flex-center b-r-50 overflow-hidden story-icon bg-dark">
                                                            <img src="/assets/images/avtar/3.png" alt="image"
                                                                 className="img-fluid"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="story">
                                                        <img src="/assets/images/profile-app/15.jpg"
                                                             className="rounded img-fluid" alt="image"/>
                                                        <div
                                                            className="h-45 w-45 d-flex-center b-r-50 overflow-hidden story-icon bg-warning">
                                                            <img src="/assets/images/avtar/07.png" alt="image"
                                                                 className="img-fluid"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="story">
                                                        <img src="/assets/images/profile-app/16.jpg"
                                                             className="rounded img-fluid" alt="image"/>
                                                        <div
                                                            className="h-45 w-45 d-flex-center b-r-50 overflow-hidden story-icon bg-info">
                                                            <img src="/assets/images/avtar/4.png" alt="image"
                                                                 className="img-fluid"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="story">
                                                        <img src="/assets/images/profile-app/17.jpg"
                                                             className="rounded img-fluid" alt="image"/>
                                                        <div
                                                            className="h-45 w-45 d-flex-center b-r-50 overflow-hidden story-icon bg-light">
                                                            <img src="/assets/images/avtar/5.png" alt="image"
                                                                 className="img-fluid"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="story">
                                                        <img src="/assets/images/profile-app/18.jpg"
                                                             className="rounded img-fluid" alt="image"/>
                                                        <div
                                                            className="h-45 w-45 d-flex-center b-r-50 overflow-hidden story-icon bg-success">
                                                            <img src="/assets/images/avtar/6.png" alt="image"
                                                                 className="img-fluid"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>

                                    <Card id="post">
                                        <CardHeader>
                                            <h5>Post</h5>
                                        </CardHeader>
                                        <CardBody>
                                            <Col xs={12}>
                                                <div className="photos-container">
                                                    <div className="left-main-img img-box">
                                                        <a href="../assets/images/profile-app/20.jpg"
                                                           className="glightbox"
                                                           data-glightbox="type: image; zoomable: true;">
                                                            <img src="../assets/images/profile-app/20.jpg" alt="image"/>
                                                                <div className="transparent-box2">
                                                                    <div className="captions">
                                                                        Simple image example
                                                                    </div>
                                                                </div>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <div className="sub">
                                                            <div className="img-box"><a
                                                                href="../assets/images/profile-app/21.jpg"
                                                                className="glightbox"
                                                                data-glightbox="type: image"><img
                                                                src="../assets/images/profile-app/21.jpg"
                                                                alt="image"/>
                                                                <div className="transparent-box2">
                                                                    <div className="captions">
                                                                        Simple image example
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            </div>
                                                            <div className="img-box"><a
                                                                href="../assets/images/profile-app/23.jpg"
                                                                className="glightbox"
                                                                data-glightbox="type: image"><img
                                                                src="../assets/images/profile-app/23.jpg"
                                                                alt="image"/>
                                                                <div className="transparent-box2">
                                                                    <div className="captions">
                                                                        Simple image example
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            </div>
                                                            <div className="img-box"><a
                                                                href="../assets/images/profile-app/24.jpg"
                                                                className="glightbox"
                                                                data-glightbox="type: image"><img
                                                                src="../assets/images/profile-app/24.jpg"
                                                                alt="image"/>
                                                                <div className="transparent-box2">
                                                                    <div className="captions">
                                                                        Simple image example
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            </div>
                                                            <div id="multi-link" className="img-box">
                                                                <a href="../assets/images/profile-app/22.jpg"
                                                                   className="glightbox"
                                                                   data-glightbox="type: image">
                                                                    <img src="../assets/images/profile-app/22.jpg"
                                                                         alt="image"/>
                                                                        <div className="transparent-box">
                                                                            <div className="caption">
                                                                                +3
                                                                            </div>
                                                                        </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="more-img" className="extra-images-container hide-element">
                                                        <a href="../assets/images/blog-app/01.jpg" className="glightbox"
                                                           data-glightbox="type: image"><img
                                                            src="../assets/images/blog-app/01.jpg"
                                                            alt="image"/></a>
                                                        <a href="../assets/images/blog-app/02.jpg" className="glightbox"
                                                           data-glightbox="type: image"><img
                                                            src="../assets/images/blog-app/02.jpg"
                                                            alt="image"/></a>
                                                        <a href="../assets/images/blog-app/03.jpg" className="glightbox"
                                                           data-glightbox="type: image"><img
                                                            src="../assets/images/blog-app/03.jpg"
                                                            alt="image"/></a>
                                                    </div>
                                                </div>

                                                <div className="photos-container">
                                                    <div className="left-main-img img-box">
                                                        <a href="../assets/images/profile-app/video.mp4"
                                                           className="glightbox">
                                                            <img src="../assets/images/profile-app/26.jpg" alt="image"/>
                                                                <div className="transparent-box">
                                                                    <div className="caption">
                                                                        <i className="fa-solid fa-play-circle fa-fw"></i>
                                                                    </div>
                                                                </div>
                                                        </a>
                                                    </div>
                                                    <div className="right-main-img img-box">
                                                        <a href="../assets/images/profile-app/video.mp4"
                                                           className="glightbox">
                                                            <img src="../assets/images/profile-app/25.jpg" alt="image"/>
                                                                <div className="transparent-box">
                                                                    <div className="caption">
                                                                        <i className="fa-solid fa-play-circle fa-fw"></i>
                                                                    </div>
                                                                </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                 </Col>

                    <Col lg={4} xxl={3}  className="order--1-lg col-box-4">
                        <div>
                            <CardBody>
                                <div className="profile-container">
                                    <div className="image-details">
                                        <div className="profile-image"></div>
                                        <div className="profile-pic">
                                            <div className="avatar-upload">
                                                <div className="avatar-edit">
                                                    <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg"/>
                                                        <label htmlFor="imageUpload"><i
                                                            className="ti ti-photo-heart"></i></label>
                                                </div>
                                                <div className="avatar-preview">
                                                    <div id="imgPreview">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="person-details">
                                        <h5 className="f-w-600">Ninfa Monaldo
                                            <img width="20" height="20" src="../assets/images/profile-app/01.png"
                                                 alt="instagram-check-mark"/>
                                        </h5>
                                        <p>Web designer &amp; Developer</p>
                                        <div className="details">
                                            <div>
                                                <h4 className="text-primary">10</h4>
                                                <p className="text-secondary">Post</p>
                                            </div>
                                            <div>
                                                <h4 className="text-primary">3.4k</h4>
                                                <p className="text-secondary">Follower</p>
                                            </div>
                                            <div>
                                                <h4 className="text-primary">1k</h4>
                                                <p className="text-secondary">Following</p>
                                            </div>
                                        </div>
                                        <div className="my-2">
                                            <button type="button" className="btn btn-primary b-r-22"><i
                                                className="ti ti-user-check"></i>
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </div>
                        <Card id="about-me">
                            <CardHeader>
                                <h5>About Me</h5>
                            </CardHeader>
                            <CardBody>
                                <p className="text-muted f-s-13">Hello! I am,Ninfa Monaldo Devoted web designer with
                                    over five years of experience and a strong understanding of Adobe Creative Suite,
                                    HTML5, CSS3 and Java. Excited to bring my exceptional front-end development
                                    abilities to the retail industry. </p>
                                <div className="about-list">
                                    <div>
                                        <span className="fw-medium"><i
                                            className="ti ti-briefcase"></i> Work passion</span>
                                        <span className="float-end f-s-13 text-secondary">IT Section</span>
                                    </div>
                                    <div>
                                        <span className="fw-medium"><i className="ti ti-mail"></i> Email</span>
                                        <span className="float-end f-s-13 text-secondary">Ninfa@gmail.com</span>
                                    </div>
                                    <div>
                                        <span className="fw-medium"><i className="ti ti-phone"></i> Contact</span>
                                        <span className="float-end f-s-13 text-secondary">0364 4559103</span>
                                    </div>
                                    <div>
                                        <span className="fw-medium"><i className="ti ti-cake"></i> Birth of Date</span>
                                        <span className="float-end f-s-13 text-secondary">24 Oct</span>
                                    </div>
                                    <div>
                                        <span className="fw-semibold"><i className="ti ti-map-pin"></i> Location</span>
                                        <span className="float-end f-s-13 text-secondary">Via Partenope, 117</span>
                                    </div>
                                    <div>
                                        <span className="fw-semibold"><i
                                            className="ti ti-device-laptop"></i> Website</span>
                                        <span className="float-end f-s-13 text-secondary">Ninfa_devWWW.com</span>
                                    </div>
                                    <div>
                                        <span className="fw-semibold"><i
                                            className="ti ti-brand-github"></i> Github</span>
                                        <span className="float-end f-s-13 text-secondary">Ninfa_dev</span>
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

export default Tour;