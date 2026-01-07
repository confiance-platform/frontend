import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const BlockUi = () => {


// block ui
    const myButton = () => $.blockUI({
        message: '<div class="loader-container-box"><div class="loader"></div></div>',
        timeout: 3000,
        overlayCSS: { backgroundColor: 'rgba(var(--dark), 0.8)', opacity: 0.8, cursor: 'wait' },
        css: { border: 0, padding: 0, backgroundColor: 'transparent' }
    });

// block ui 1
    const myButton1 = () => {
        $('.vertical-sidebar').block({
            message: '<div class="loader-container-box"><div class="loader"></div></div>',
            timeout: 3000,
            overlayCSS: { backgroundColor: 'rgba(var(--dark), 0.8)', opacity: 0.8, cursor: 'wait' },
            css: { border: 0, padding: 0, backgroundColor: 'transparent' }
        });
    };

  // block ui 2
    const myButton2= () =>
        $('.block-ui-card').block({
        message: '<div class="loader-container-box"><div class="loader"></div></div>',
        timeout: 3000,
        overlayCSS: { backgroundColor: 'rgba(var(--dark), 0.8)', opacity: 0.8, borderRadius: 'var(--app-border-radius)', cursor: 'wait' },
        css: { border: 0, padding: 0, backgroundColor: 'transparent' }
    });

    // block ui 3
    const myButton3 = () => $('.block-msg-card').block({
        message: '<span class="msg-card"> Custom Message...</span>', timeout: 3000,
        overlayCSS: { backgroundColor: 'rgba(var(--dark), 0.8)', opacity: 0.8, borderRadius: 'var(--app-border-radius)', cursor: 'wait' },
        css: { border: 0, padding: 0, backgroundColor: 'transparent' }
    });

    // block ui 4
    const myButton4 = () => {
        const message = $('.multiple-msgs').css({ padding: '15px 0', cursor: 'default', display: 'none' }).show();

        $('.block-mutiple-msg-card').block({
            message,
            overlayCSS: { backgroundColor: 'rgba(var(--dark), 0.8)', opacity: 0.8, borderRadius: 'var(--app-border-radius)', cursor: 'wait', padding: '15px 0' },
            css: { border: 0, padding: 0, backgroundColor: 'transparent' },
            onBlock: clearTimeout
        });

        setTimeout(() => message.html('<div class="mutiple-msg"> Loading ...</div>'), 0);
        setTimeout(() => message.html('<div class="mutiple-msg">Just a minute...</div>'), 4000);
        setTimeout(() => message.html('<button type="button" class="btn btn-info">Info</button>'), 5000);
        setTimeout(() => $('.block-mutiple-msg-card').unblock({ onUnblock: () => message.removeClass('bg-success') }), 6000);
    };

    // block ui 5
    const myButton5 = () => $('.block-msg-animation-card').block({
        message: '<div class="bolckui-msg-box"><div class="loader-container-box"><div class="loader"></div></div>&nbsp; Loading ...</div>',
        timeout: 3000,
        overlayCSS: { backgroundColor: 'rgba(var(--dark), 0.8)', opacity: 0.8, borderRadius: 'var(--app-border-radius)', cursor: 'wait' },
        css: { border: 0, padding: 0, backgroundColor: 'transparent' }
    });

// block ui 6
    const myButton6 = () => $('.unblock-callback').block({
        message: '<div class="feather icon-refresh-cw icon-spin font-medium-2"></div>',
        timeout: 3000,
        overlayCSS: { backgroundColor: 'rgba(var(--dark), 0.8)', opacity: 0.8, borderRadius: 'var(--app-border-radius)', cursor: 'wait' },
        css: { border: 0, padding: 0, color: '#333', backgroundColor: 'transparent' },
        onUnblock: () => alert('Page is now unblocked. FadeOut complete.')
    });

    // block ui 7
    const myButton7 = () => $('.block-callback').block({
        message: '<div class="feather icon-refresh-cw icon-spin font-medium-2"></div>',
        timeout: 3000,
        overlayCSS: { backgroundColor: 'rgba(var(--dark), 0.8)', opacity: 0.8, borderRadius: 'var(--app-border-radius)', cursor: 'wait' },
        css: { border: 0, padding: 0, color: '#333', backgroundColor: 'transparent' },
        onBlock: () => alert('Page is now blocked, FadeIn complete.')
    });

// block ui 8
    const myButton8 = () => $.blockUI({
        message: '<div class="loader-container-box"><div class="loader"></div></div>',
        overlayCSS: { backgroundColor: 'rgba(var(--dark), 0.8)', opacity: 0.8, borderRadius: 'var(--app-border-radius)', cursor: 'wait' },
        css: { color: '#333', border: 0, padding: 0, backgroundColor: 'transparent' },
        onOverlayClick: $.unblockUI
    });

    // block ui 9
    const myButton9 = () => $('.block-primary-overlay').block({
        message: '<div class="loader-container-box"><div class="loader"></div></div>',
        timeout: 3000,
        overlayCSS: { backgroundColor: 'rgba(var(--primary))', borderRadius: 'var(--app-border-radius)', opacity: 0.8, cursor: 'wait' },
        css: { color: '#333', border: 0, padding: 0, backgroundColor: 'transparent' }
    });

// block ui 10
    const myButton10 = () => $('.block-success-overlay').block({
        message: '<div class="loader-container-box"><div class="loader"></div></div>',
        timeout: 3000,
        overlayCSS: { backgroundColor: 'rgba(var(--success))', borderRadius: 'var(--app-border-radius)', opacity: 0.8, cursor: 'wait' },
        css: { color: '#333', border: 0, padding: 0, background: 'transparent' }
    });

    // block ui 11
    const myButton11 = () => $('.block-warning-overlay').block({
        message: '<div class="loader-container-box"><div class="loader"></div></div>',
        timeout: 3000,
        overlayCSS: { backgroundColor: 'rgba(var(--warning))', opacity: 0.8, cursor: 'wait' },
        css: { border: 0, backgroundColor: 'transparent' }
    });

    // block ui 12
    const myButton12 = () => $('.block-danger-overlay').block({
        message: '<div class="loader-container-box"><div class="loader"></div></div>',
        timeout: 3000,
        overlayCSS: { backgroundColor: 'rgba(var(--danger))', borderRadius: 'var(--app-border-radius)', opacity: 0.8, cursor: 'wait' },
        css: { color: '#333', border: 0, padding: 0, backgroundColor: 'transparent' }
    });

    // block ui 13
    const myButton13 = () => $('.block-form-spinner').block({
        message: '<div class="loader-container-box"><div class="loader"></div></div>',
        timeout: 3000,
        overlayCSS: { backgroundColor: 'rgba(var(--dark), 0.8)', opacity: 0.8, cursor: 'wait' },
        css: { border: 0, padding: 0, backgroundColor: 'transparent' }
    });

// block ui 14
    const myButton14 = () => $('.form-custome-message').block({
        message: '<div class="loader-container-box"><div class="loader"></div></div> Loading ...',
        timeout: 3000,
        overlayCSS: { backgroundColor: 'rgba(var(--dark), 0.8)', opacity: 0.8, borderRadius: 'var(--app-border-radius)', cursor: 'wait' },
        css: { border: 0, padding: 0, backgroundColor: 'transparent' }
    });

    // block ui 15
    const myButton15 = () => {
        const message = $('.multiple-msgs1');

        $('.form-multiple-message').block({
            message,
            overlayCSS: { backgroundColor: 'rgba(var(--dark), 0.8)', opacity: 0.8, borderRadius: 'var(--app-border-radius)', cursor: 'wait' },
            css: { border: 0, padding: 0, backgroundColor: 'transparent' },
            onBlock: () => clearTimeout()
        });

        setTimeout(() => message.html('<div class="mutiple-msg"> Loading ...</div>'), 0);
        setTimeout(() => message.html('<div class="mutiple-msg">Just a minute...</div>'), 4000);
        setTimeout(() => message.html('<button type="button" class="btn btn-primary">Primary</button>'), 5000);
        setTimeout(() => $('.form-multiple-message').unblock({ onUnblock: () => message.removeClass('bg-primary') }), 6000);
    };


    return (
        <div>
            <Container fluid >
                <Row className="m-1">
                    <Col xs={12} >
                        <h4 className="main-title">Block Ui</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                                            <span>
                                                <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                                            </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Block Ui</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="block-ui-cards">
                    <Col md={6} lg={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Block Whole Page</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary">To provide a comprehensive description suitable
                                        for
                                        creating
                                        an image of a "block" (assuming a city block), we'd focus on details
                                        that....</p>

                                    <button className="btn btn-primary w-100 mt-3" onClick={myButton}
                                            type="button">Button
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Block Side Bar</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary">Many ad blockers have the capability to block
                                        not just advertisements but also any specific elements on a page, including
                                        sidebar content....</p>


                                    <button className="btn btn-success w-100 mt-3" onClick={myButton1}
                                            type="button">Button
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="block-ui-card equal-card">
                            <CardHeader>
                                <h5>Block content</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary">Extensions like AdBlock, uBlock Origin, or
                                        AdGuard can remove most types of advertisements and can often be configured to
                                        block other ......</p>


                                    <button className="btn btn-danger w-100 mt-3" onClick={myButton2}
                                            type="button">Button
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="block-msg-card equal-card">
                            <CardHeader>
                                <h5>Block With Custome message</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary">Blocking specific content on web pages and
                                        replacing it with a custom message can be a very specific need, typically
                                        requiring a custom solution....</p>


                                    <button className="btn btn-warning w-100 mt-3" onClick={myButton3}
                                            type="button">Button
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className=" block-mutiple-msg-card equal-card">
                            <CardHeader>
                                <h5>Block With Multiple message</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary">These popular ad-blocking extensions allow you
                                        to create custom filters. You can specify the URLs or page elements you wish to
                                        block and.....</p>


                                    <button className="btn btn-info w-100 mt-3"onClick={myButton4}
                                            type="button">Button
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                        <div className="multiple-msgs" style={{padding: "15px 0px", cursor: "default", display: "none"}}>
                            <div className="semibold">
                                <span className="icon-thumbs-o-up text-left"></span>&nbsp; Success
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="block-msg-animation-card equal-card">
                            <CardHeader>
                                <h5>Block With Animation message</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary">If you're looking to block content on websites
                                        and replace it with a custom message that includes animation, you'll likely need
                                        to use a......</p>


                                    <button className="btn btn-secondary w-100 mt-3" onClick={myButton5}
                                            type="button">Button
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="unblock-callback equal-card">
                            <CardHeader>
                                <h5>OnUnblock Callback</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary">When incorporating an onUnblock callback into
                                        your web content blocking and unblocking functionality, you're essentially
                                        defining a function that....</p>


                                    <button className="btn btn-dark w-100 mt-3" onClick={myButton6}
                                            type="button">Button
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className=" block-callback equal-card">
                            <CardHeader>
                                <h5>Onblock Callback</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary">An onBlock callback is a function that's
                                        executed when a specific action of blocking content on a website or application
                                        is performed. Similar to...</p>


                                    <button className="btn btn-primary w-100 mt-3" onClick={myButton7}
                                            type="button">Button
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className=" overlayclick-callback equal-card">
                            <CardHeader>
                                <h5>On Overlay Click Callback</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary">Overlays are often used for modals, lightboxes,
                                        informational pop-ups, or any full or partial screen element that appears above
                                        the main content...</p>


                                    <button className="btn btn-success w-100 mt-3" onClick={myButton8}
                                            type="button">Button
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card className="block-primary-overlay equal-card">
                            <CardHeader>
                                <h5>Primary Overlay</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary"> "primary overlay" in web design and
                                        development generally refers to a key visual...
                                    </p>


                                    <button className="btn btn-primary w-100 mt-3" onClick={myButton9}
                                            type="button">Primary Overlay
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card className="block-success-overlay equal-card">
                            <CardHeader>
                                <h5>success Overlay</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary">Provides users with instant confirmation that
                                        the action they took , enhan....
                                    </p>


                                    <button className="btn btn-success w-100 mt-3" onClick={myButton10}
                                            type="button">success Overlay
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card className="block-warning-overlay equal-card">
                            <CardHeader>
                                <h5>warning Overlay</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary">Warning overlays are commonly used to inform
                                        users about potential risks, confirm ....
                                    </p>


                                    <button className="btn btn-warning w-100 mt-3" onClick={myButton11}
                                            type="button">Warning Overlay
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card className="block-danger-overlay equal-card">
                            <CardHeader>
                                <h5>Danger Overlay</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <p className="f-s-16 text-secondary">Used to alert users to critical errors or
                                        issues that require immediate colours..
                                    </p>


                                    <button className="btn btn-danger w-100 mt-3" onClick={myButton12}
                                            type="button">Danger Overlay
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="block-form-spinner equal-card">
                            <CardHeader>
                                <h5>Block Form components</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <div className="app-form">
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input type="text" className="form-control"
                                                   placeholder="Enter Your Username" id="username"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control"
                                                   placeholder="Enter Your Password" id="password"/>
                                        </div>
                                        <div className="form-check mb-3 d-flex gap-1 ps-0">
                                            <input className="form-check-input mg-2" type="checkbox" value=""
                                                   id="checkDefault"/>
                                                <label className="form-check-label" htmlFor="checkDefault">
                                                    Default checkbox
                                                </label>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-primary" onClick={myButton13}>Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="form-custome-message equal-card">
                            <CardHeader>
                                <h5>Form With Animation message</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <div className="app-form">
                                        <div className="mb-3">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="mb-3 form-check d-flex p-0">
                                            <input type="checkbox" className="m-1 form-check-input" id="formCheck"/>
                                                <label className="form-check-label" htmlFor="formCheck">remember
                                                    me</label>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-success" onClick={myButton14}>Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="card form-multiple-message equal-card">
                            <CardHeader>
                                <h5>Form With Multiple message</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="block-card-list">

                                    <div className="app-form">
                                        <div className="mb-3">
                                            <label className="form-label">Email address</label>
                                            <input type="email" className="form-control"/>

                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control"/>
                                        </div>
                                        <div className="mb-3 form-check d-flex gap-1 ps-0">
                                            <input className="form-check-input mg-2" type="checkbox" value=""
                                                   id="invalidCheck2" required=""/>
                                                <label className="form-check-label" htmlFor="invalidCheck2">
                                                    Agree to terms and conditions
                                                </label>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-dark" onClick={myButton15}>Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </div>
                        <div className="multiple-msgs1">
                            <div className="semibold">
                                <span className="icon-thumbs-o-up text-left"></span>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default BlockUi;