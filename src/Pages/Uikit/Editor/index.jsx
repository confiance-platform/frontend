import React, {useEffect} from 'react';
import {Card, CardBody, Col, Container, Row} from "reactstrap";

const Editor = () => {

    useEffect(() => {
        $('#editor').trumbowyg({
            btns: [
                ['viewHTML'],
                ['undo', 'redo'], // Only supported in Blink browsers
                ['formatting'],
                ['strong', 'em', 'del'],
                ['superscript', 'subscript'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                ['unorderedList', 'orderedList'],
                ['horizontalRule'],
                ['removeformat'],
                ['fullscreen']
            ],
        });

        $('#editor1').trumbowyg({
            btns: [
                ['strong', 'em'],
                ['justifyLeft', 'justifyCenter'],
                ['insertImage', 'link'],
            ],
        });

        $(function() {
            var tooltip_init = {
                init: function () {
                    $("button").tooltip();
                }
            };
            tooltip_init.init()
        });
    }, []);
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Editor</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
									<span>
									  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
									</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Editor</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardBody>
                                <div className="app-editor" id="editor">
                                    <p>Hello !</p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardBody>
                                <div id="editor1">
                                    <p>Hello !</p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Editor;