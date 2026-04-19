
import React, {useEffect, useState} from 'react';
import {Badge, Button, Card, CardBody, Col, Container, Row,} from "reactstrap";
import Demosection from "../../../Components/Landing/Demosection.jsx";
import Purchaseplan from "../../../Components/Landing/Purchaseplan.jsx";
import Faqsection from "../../../Components/Landing/Faqsection.jsx";
import {cardData, features} from "../../../Data/Landing/democard.js";
import {Link} from 'react-router-dom'




const LandingPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const getIconClass = (icon) => {
        if (['alert', 'cards', 'bell'].some(iconName => icon.includes(iconName))) {
            return 'icons-secondary';
        } else if (['list', 'line', 'cooker'].some(iconName => icon.includes(iconName))) {
            return 'icons-dark';
        } else {
            return 'icons-primary';
        }
    };
    const wrapper = [
        'Fully Customizable',
        'Google Font',
        '10+ Apps',
        'Fully Customizable',
        '100+ Custom Elements',
        'Mobile Responsive design',
        '150+ Pages',
        'Creative Card Design',
        '4+ Icons Set',
        'Quick Response',
        'Multiple Sidebar Options',
    ];

    // header
    if (typeof window !== 'undefined') {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 50) {
                $(".landing-nav_main").addClass("landing-nav-active");
            } else {
                $(".landing-nav_main").removeClass("landing-nav-active");
            }
        });
    }
    // header end
    function changeText() {
        const words = ["Monitoring","Complete Control","Management"];
        let currentIndex = 0;
        const highlightText = document.getElementById('highlight-text');
        // Hide the text with animation
        highlightText.classList.add('hidden');

        // Wait for the transition to complete before changing the text
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            highlightText.textContent = words[currentIndex];
            highlightText.classList.remove('hidden');
        }, 500);  // The same duration as the CSS transition
    }
    setInterval(changeText, 4000);
    // highligh text end


    // tap on top
    let calcScrollValue = () => {
        let scrollProgress = document.getElementsByClassName("go-top");
        let progressValue = document.getElementsByClassName("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress[0].style.display = 'grid';
        } else {
            scrollProgress[0].style.display = 'none';
        }

        scrollProgress[0].addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });

        scrollProgress[0].style.background = `conic-gradient( rgba(var(--primary),1) ${scrollValue}%, var(--light-gray) ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;



    $(document).on('click', '#darkDemoBtn', function () {
        localStorage.setItem("theme-mode", 'dark');
        window.location.href = '/dashboard/ecommerce';
    });


    // >>-- cursor js start --<<
    useEffect(() => {

        const circleElement = document.querySelector('.circle-cursor');

        const mouse = { x: 0, y: 0 };
        const previousMouse = { x: 0, y: 0 }
        const circle = { x: 0, y: 0 };


        let currentScale = 0;
        let currentAngle = 0;


        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
        const speed = 0.17;

// Start animation
        setTimeout(() => {
            const tick = () => {

                circle.x += (mouse.x - circle.x) * speed;
                circle.y += (mouse.y - circle.y) * speed;

                const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;


                const deltaMouseX = mouse.x - previousMouse.x;
                const deltaMouseY = mouse.y - previousMouse.y;

                previousMouse.x = mouse.x;
                previousMouse.y = mouse.y;

                const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150);

                const scaleValue = (mouseVelocity / 150) * 0.5;

                currentScale += (scaleValue - currentScale) * speed;

                const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

                const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;

                if (mouseVelocity > 20) {
                    currentAngle = angle;
                }

                const rotateTransform = `rotate(${currentAngle}deg)`;

                if (circleElement) {
                    circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
                }

                window.requestAnimationFrame(tick);
            }
            console.log(circleElement)
            tick();
        }, 1000)
    })
    // >>-- cursor js end --<<


    return (
        <div className="landing-page">
            <div className="circle-cursor" />

            <div className="landing-wrapper">
                {/*header start */}
                <div className="navbar navbar-expand-lg sticky-top landing-nav_main px-3 position-fixed w-100">
                    <div className="container-fluid">
                        {/* Logo */}
                        <a className="navbar-brand logo" href="#home">
                            <img src="/assets/images/logo/1.png" alt="#" />
                        </a>

                        {/* Toggler */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation"
                            onClick={toggleNavbar}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Navbar Content */}
                        <div
                            className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
                            id="landing_nav"
                        >
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="#Demo">
                                        Demo
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#Cards">
                                        Cards
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#Features">
                                        Features
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="https://phpstack-1384472-5121645.cloudwaysapps.com/document/react/ra-admin/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Document
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="https://forms.gle/hYrBdsJYsqqWe5pKA"
                                        className="nav-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Hire Us
                                    </Link>
                                </li>
                            </ul>
                            <Link
                                to="https://themeforest.net/user/la-themes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Buy Now
                            </Link>
                        </div>
                    </div>
                </div>
                {/*header end */}

                {/* landing first section start*/}
                <section className="landing-section p-0" id="home">
                    <div className="container-fluid">
                        <div className="row landing-content mg-t-50">
                            <div className="col-md-8 offset-md-2">
                                {/* Heading Section */}
                                <div className="landing-heading text-center">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <h1>
                                            Your Ultimate Admin <br /> Solution for{' '}
                                            <span className="highlight-text" id="highlight-text">
                    Management
                  </span>
                                        </h1>
                                    </div>
                                </div>

                                {/* Rotated Text */}
                                <div className="rotated-text">
                                    <p>
                                        Ra-admin Comes with so many sidebar options, layouts like RTL & many more...!
                                    </p>
                                </div>

                                {/* Landing_Pages Images */}
                                <div className="landing-img">
                                    <div className="img-box">
                                        <img
                                            src="/assets/images/landing/home-img-1.png"
                                            alt="img"
                                            className="box-img-1"
                                        />
                                        <img
                                            src="/assets/images/landing/home-mobile.png"
                                            alt="img"
                                            className="box-img-2"
                                        />
                                        <img
                                            src="/assets/images/landing/hom-tab.gif"
                                            alt="img"
                                            className="box-img-3"
                                        />
                                        <div className="rotated-circle-text">
                                            <img
                                                src="/assets/images/landing/circle-text.png"
                                                className="w-150 h-150 img-rotated"
                                                alt="img"
                                            />
                                            <img
                                                src="/assets/images/logo/3.png"
                                                alt="img"
                                                className="bg-light-primary p-4 b-r-50 b-1-primary"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* landing first section end*/}

            </div>



            {/*demos section start */}
            <section className="demos-section" id="Demo">
                <Demosection/>
            </section>
            {/*demos section end */}

            {/*Features section start */}
            <section className="features-section" id="Features">
                <Container>
                    <Row>
                        <div className="col-xl-6 offset-xl-3">
                            <div className="landing-title text-md-center">
                                <h2 className=""> Core <span className="highlight-title">features</span></h2>
                                <p className="text-secondary">Admin features, developers can easily customize the appearance and
                                    behavior of
                                    their applications,
                                    ensuring a consistent and visually appealing experience across different devices and screen
                                    sizes.</p>
                            </div>
                        </div>
                    </Row>
                    <Row className="features-list">
                        <Col>
                            <ul className="row list-unstyled">
                                {features.map((feature, index) => (
                                    <li className="col-6 col-md-3 col-xl-2" key={index}>
                                        <div className="features-icon">
                                            <i className={`ti ${feature.icon} f-s-36 text-primary`} />
                                            <div className="features-content">
                                                <h5>{feature.title}</h5>
                                                <Badge color={`light-${feature.badgeColor}`} className="mt-1">
                                                    {feature.badgeText}
                                                </Badge>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*Features section end */}

            {/*Faq section start */}
            <section className="faq-section">
                <Faqsection/>
            </section>
            {/*Faq section end */}

            {/*card section start */}
            <section className="card-section" id="Cards">
                <div className="container">
                    <div className="row">
                        <Col lg="4">
                            <div className="landing-title">
                                <h2>
                                    Sophisticated <span className="highlight-title">Cards</span>
                                </h2>
                                <p>
                                    Cards offer enhanced design flexibility and interactive capabilities, incorporating dynamic
                                    elements like animations, real-time updates, or embedded multimedia to provide a richer and more
                                    engaging user experience in a concise card format.
                                </p>
                            </div>

                            <ul className="card-details-list">
                                <li>200+ Cards Collection</li>
                                <li>Basic Components Included</li>
                                <li>Advanced Functionality</li>
                                <li>Customization and Personalization</li>
                                <li>Responsive Card Design</li>
                                <li>Styleguide Included</li>
                            </ul>

                        </Col>
                        <Col xs={8}>
                            <div className="card-section-right">
                                <div className="slider-container">
                                    <div className="slider-container-box">
                                        <div className="slider-slideUp">
                                            <img src="/assets/images/landing/landing-bg.png" className="img-fluid"
                                                 alt="card-img"/>
                                        </div>
                                        <div className="slider-slideUp">
                                            <img src="/assets/images/landing/landing-bg.png" className="img-fluid"
                                                 alt="card-img"/>
                                        </div>
                                        <div className="slider-slideUp">
                                            <img src="/assets/images/landing/landing-bg.png" className="img-fluid"
                                                 alt="card-img"/>
                                        </div>
                                    </div>
                                    <div className="slider-container-box slider-left">
                                        <div className="slider-slideDown">
                                            <img src="/assets/images/landing/landing-bg-1.png" className="img-fluid"
                                                 alt="card-img"/>
                                        </div>
                                        <div className="slider-slideDown">
                                            <img src="/assets/images/landing/landing-bg-1.png" className="img-fluid"
                                                 alt="card-img"/>
                                        </div>
                                        <div className="slider-slideDown">
                                            <img src="/assets/images/landing/landing-bg-1.png" className="img-fluid"
                                                 alt="card-img"/>
                                        </div>
                                    </div>
                                    <div className="slider-container-box">
                                        <div className="slider-slideUp">
                                            <img src="/assets/images/landing/landing-bg-2.png" className="img-fluid"
                                                 alt="card-img"/>
                                        </div>
                                        <div className="slider-slideUp">
                                            <img src="/assets/images/landing/landing-bg-2.png" className="img-fluid"
                                                 alt="card-img"/>
                                        </div>
                                        <div className="slider-slideUp">
                                            <img src="/assets/images/landing/landing-bg-2.png" className="img-fluid"
                                                 alt="card-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </div>
                </div>
            </section>
            {/*card section end */}

            {/*Element section start */}
            <section className="element-section">
                <div className="container">
                    <Row>
                        <div className="col-xl-6 offset-xl-3">
                            <div className="landing-title text-md-center">
                                <h2><span className="highlight-title">Elements</span> of ra-admin</h2>
                                <p>offer a responsive and user-friendly interface, streamlining the design and
                                    development of web
                                    applications by providing a robust set of pre-built components and templates.</p>
                            </div>
                        </div>
                    </Row>
                    <Row className="gy-3">
                        {cardData.map((card) => (
                            <Col sm="6" lg="4" key={card.id}>
                                <Card className="element-card">
                                    <CardBody>
                                        <div className={`element-icons ${getIconClass(card.icon)}`}>
                                            <i className={`ti ${card.icon}`}></i>
                                        </div>
                                        <div className="element-content">
                                            <h4>{card.title}</h4>
                                            <p>{card.text}</p>
                                            <a color="link" className="link-btn link-primary mt-3" href={card.link} target="_blank">
                                                View {card.title}  <i
                                                className="ti ti-chevrons-right mt-2"></i>
                                            </a>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
            {/*Element section end */}


            {/*Dark Mode section */}
            <section className="dark-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="landing-title text-md-center">
                                <h2>Discover Our <span className="highlight-title"> Dark Layout</span></h2>
                                <p className="text-light">Embrace the elegance of the dark layout, where simplicity meets
                                    sophistication.
                                    Navigate effortlessly through your admin tasks with style.</p>
                            </div>
                        </div>
                        <Col xs={12}>
                            <div className="slider-container">
                                <div className="slider-container-box">
                                    <div className="slider-slideLeft">
                                        <img src="/assets/images/landing/dark-layout.png" className="img-fluid"
                                             alt=""/>
                                    </div>
                                </div>
                                <div className="slider-container-box slider-left">
                                    <div className="slider-slideRight">
                                        <img src="/assets/images/landing/dark-layout-1.png" className="img-fluid"
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} className="text-center">
                            <button type="button" className="btn btn-lg btn-primary mt-5" id="darkDemoBtn">Check Now<i
                                className="ti ti-chevrons-right ms-2"></i></button>
                        </Col>
                    </div>
                </div>
            </section>
            {/*Dark Mode section end*/}

            {/*Customization  options section start */}
            <section className="options-section">
                <Container>
                    <Row>
                        <div className="col-xl-6 offset-xl-3">
                            <div className="landing-title text-md-center">
                                <h2><span className="highlight-title">Customization</span> and preview</h2>
                                <p>Allow users to personalize settings or design elements in real-time, providing
                                    an instant preview of
                                    the changes before finalizing, ensuring a seamless and tailored experience</p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Col lg="7">
                            <Card className="sidebar-option-card">
                                <CardBody className="p-0">
                                    <div>
                                        <h2 className="text-white f-w-600">
                                            Customize your <br /> <span className="text-dark">sidebar</span> with ease
                                        </h2>
                                        <div className="text-end">
                                            <img
                                                src="/assets/images/landing/layout.png"
                                                className="img-fluid mt-3"
                                                alt="layout-img"
                                            />
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" lg="5">
                            <Card className="equal-card color-hint-card">
                                <CardBody>
                                    <div className="marquee-animated">
                                        <p>Preview variant colors for perfect customization!</p>
                                    </div>
                                    <div>
                                        <img
                                            src="/assets/images/landing/color-hint.gif"
                                            className="img-fluid"
                                            alt="color hint"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" lg="4">
                            <Card className="speed-performance-card">
                                <CardBody className="text-center">
                                    <h3 className="text-dark f-w-600">
                                        <span className="text-success">Quick </span> Response
                                    </h3>
                                    <div className="mt-5">
                                        <img
                                            src="/assets/images/landing/speed-performance.png"
                                            className="img-fluid"
                                            alt="speed-performance"
                                        />
                                    </div>
                                    <div className="performance-content">
                                        <div className="text-end">
                                            <img
                                                src="/assets/images/landing/arrow-shape.png"
                                                className="arrow-shape"
                                                alt="arrow-shape"
                                            />
                                        </div>
                                        <div className="performance-number">
                                            <p className="f-w-500 f-s-18 text-dark">Performance</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="8">
                            <Card className="equal-card layout-option-card">
                                <CardBody>
                                    <Row>
                                        <Col sm="4" className="position-relative">
                                            <h3 className="text-light mt-3">
                                                One-Click and change your <span className="text-primary f-w-600">Layout.</span>
                                            </h3>
                                            <svg
                                                width="98"
                                                height="132"
                                                viewBox="0 0 98 132"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-brand absolute hidden md:block -left-12 xl:-left-24 -bottom-32 xl:-bottom-44 transition ease-in-out transform-gpu"
                                            >
                                                <path
                                                    d="M46.9684 132C46.3582 132 45.7557 132 45.1494 131.951C44.6766 131.926 44.2134 131.808 43.7861 131.603C43.3589 131.398 42.976 131.111 42.6593 130.758C42.3426 130.405 42.0982 129.993 41.9403 129.545C41.7824 129.098 41.7139 128.623 41.7388 128.149C41.7637 127.675 41.8815 127.21 42.0854 126.781C42.2893 126.353 42.5753 125.969 42.9272 125.651C43.2791 125.333 43.6899 125.088 44.1362 124.93C44.5825 124.771 45.0556 124.702 45.5283 124.727C59.2502 125.488 80.2707 113.551 88.494 95.2532C90.3887 91.0295 92.8253 83.1715 87.7777 78.0241C85.4623 75.6671 82.4724 74.3669 79.3953 73.7016C78.8117 74.5912 78.1978 75.458 77.546 76.3057C70.2663 85.7757 55.3659 99.5491 44.1982 98.6861C40.3329 98.3896 37.2785 96.4051 35.3686 92.9076C33.7959 90.0412 33.8528 86.6729 35.5278 83.4262C36.8428 80.8829 39.1126 78.3929 42.2807 76.0282C50.4888 69.8924 63.7825 65.2924 75.5111 65.95C79.9145 56.9515 80.4943 46.5046 76.269 41.2051C74.1355 38.5211 70.2057 34.8601 60.7584 34.0465C57.9495 33.8716 55.1304 33.9607 52.3381 34.3127C48.954 44.6038 40.4238 53.7999 32.5492 57.6548C25.6295 61.0421 19.7141 60.046 16.7317 54.9936C13.4121 49.3672 14.837 44.8052 16.6104 41.9654C21.4042 34.3089 34.9517 29.8381 46.4605 27.8993C46.8775 25.1558 46.5865 22.3509 45.6155 19.7523C43.6866 14.8102 39.3741 10.826 33.7846 8.82636C26.1677 6.10057 16.1709 6.92552 4.8781 11.2328C4.43594 11.401 3.96514 11.4803 3.49246 11.466C3.01978 11.4517 2.55454 11.3441 2.12329 11.1494C1.25236 10.7562 0.572784 10.032 0.234084 9.13617C-0.104616 8.24033 -0.0747715 7.24622 0.317165 6.3725C0.709101 5.49878 1.43098 4.81707 2.32397 4.47729C15.4206 -0.510484 26.8195 -1.33547 36.2062 2.02519C43.7549 4.72817 49.6286 10.2292 52.3192 17.1178C53.5254 20.2528 54.0299 23.6155 53.7971 26.9678C56.3162 26.7255 58.8507 26.6861 61.3761 26.85C70.5506 27.6408 77.2656 30.8607 81.9039 36.7039C87.5693 43.8358 87.6603 56.1151 82.8893 67.1666C86.6655 68.1971 90.111 70.1919 92.8898 72.9565C98.8621 79.0391 99.6276 88.0187 95.0385 98.2223C87.5883 114.893 66.7497 132 46.9684 132ZM70.8423 73.1922C69.8684 73.2568 68.9665 73.3519 68.1707 73.4583C60.4022 74.4848 52.1373 77.6934 46.6008 81.822C43.6298 84.0383 40.5641 87.3648 41.6744 89.4253C42.4096 90.7597 43.3266 91.3755 44.7514 91.4858C50.6972 91.961 62.3766 83.6885 70.8423 73.196V73.1922ZM44.0504 35.6889C34.8987 37.6619 25.622 41.2165 22.742 45.8165C21.9841 47.0482 21.3928 48.6639 22.9617 51.3213C24.163 53.359 27.5091 52.1044 29.4266 51.173C34.8722 48.5157 40.7611 42.4938 44.058 35.6927L44.0504 35.6889Z"
                                                    fill="#ebc33f"
                                                />
                                            </svg>
                                        </Col>
                                        <Col sm="8" className="z-1">
                                            <img
                                                src="/assets/images/landing/layout-option.png"
                                                className="img-fluid mt-4"
                                                alt="layout-option"
                                            />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*Customization  options section end */}

            {/*wrapper Section start */}
            <section className="box-wrapper-section p-0">
                <Container fluid className="box-wrapper">
                    <ul className="box-wrapper-list">
                        {wrapper.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </Container>
            </section>
            {/*wrapper Section end */}

            {/*Purchase Plans section start  */}
            <section className="plans-section">
                <Container>
                    <Purchaseplan/>
                </Container>
            </section>
            {/*Purchase Plans section end  */}

            {/*footer section start */}

            <section className="landing-footer">
                <Container>
                    <Row>
                        <Col>
                            <div className="footer-content text-center">
                                <img src="/assets/images/logo/3.png" alt="logo" />
                                <h1>
                                    Build a <span className="highlight-title"> Startling </span> site
                                </h1>
                                <p className="txt-ellipsis-3">
                                    Purchase The Ra-admin & Craft Your Site Super Faster And Powerful. Discover the Ra-admin
                                    Admin Theme. If you enjoy our template, please take a moment to rate us.
                                </p>
                                <div className="footer-btn">
                                    <Button
                                        href="https://themeforest.net/user/la-themes"
                                        target="_blank"
                                        color="primary"
                                        size="lg"
                                        className="me-3"
                                    >
                                        Buy Now
                                    </Button>
                                    <Button
                                        href="mailto:teqlathemes@gmail.com."
                                        target="_blank"
                                        color="danger"
                                        size="lg"
                                    >
                                        Need Help?
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*footer section end */}

            <div className="go-top">
                 <span className="progress-value">
                    <i className="ti ti-arrow-up"></i>
                 </span>
            </div>

        </div>


    );
};

export default LandingPage;