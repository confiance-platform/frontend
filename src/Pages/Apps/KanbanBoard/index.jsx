import React from "react";
import {Col, Container, Row} from "reactstrap";

const KanbanBoardPage = () => {
    React.useEffect(()=>{
        let itemContainers = [].slice.call(document.querySelectorAll('.board-column-content'));
        let columnGrids = [];
        let boardGrid;
        const board = document.querySelector(".board");

        itemContainers.forEach(function (container) {
            let grid = new Muuri(container, {
                items: '.board-item',
                layoutDuration: 400,
                layoutEasing: 'ease',
                dragEnabled: true,
                dragSort: function () {
                    return columnGrids;
                },
                dragSortInterval: 0,
                dragContainer: document.body,
                dragReleaseDuration: 400,
                dragReleaseEasing: 'ease'
            })
                .on('dragStart', function (item) {

                    item.getElement().style.width = item.getWidth() + 'px';
                    item.getElement().style.height = item.getHeight() + 'px';
                })
                .on('dragReleaseEnd', function (item) {

                    item.getElement().style.width = '';
                    item.getElement().style.height = '';

                    columnGrids.forEach(function (grid) {
                        grid.refreshItems();
                    });
                })
                .on('layoutStart', function () {

                    boardGrid.refreshItems().layout();
                });


            columnGrids.push(grid);

        });
        if (board) {
            boardGrid = new Muuri('.board', {
                layout: {
                    horizontal: true,
                },
                layoutDuration: 400,
                layoutEasing: 'ease',
                dragEnabled: true,
                dragSortInterval: 0,
                dragStartPredicate: {
                    handle: '.board-column-header'
                },
                dragReleaseDuration: 400,
                dragReleaseEasing: 'ease'
            });
        }
    },[])

    return(
        <Container fluid>

            <Row className="m-1">
                <Col xs={12}>
                    <h4 className="main-title">Kanban Board</h4>
                    <ul className="app-line-breadcrumbs mb-3">
                        <li className="">
                            <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-stack f-s-16"></i> Apps
                      </span>
                            </a>
                        </li>
                        <li className="active">
                            <a href="#" className="f-s-14 f-w-500">Kanban Board</a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div>
                        <div className="overflow-y-scroll app-scroll">
                            <div className="board">
                                <div className="board-column app-scroll">
                                    <div className="board-column-header f-w-600 text-dark">
                                        To Do (03)
                                    </div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span className="badge text-light-success f-s-13">Web Design</span>
                                                            </div>
                                                            <div className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-primary">
                                                                <img src="/assets/images/avtar/3.png" alt="" className="img-fluid"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>This guide will tell you everything you'll
                                                                need
                                                                to know to get
                                                                started with website typography.</p>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div>
                                      <span className=" text-secondary me-2"><i className="ti ti-calendar "></i> <span
                                          className="f-s-14">Nov 20</span></span>
                                                                <span className=" text-secondary me-2"><i
                                                                    className="ti ti-message-circle "></i> <span
                                                                    className="f-s-14">9</span></span>
                                                                <span className=" text-secondary"><i
                                                                    className="ti ti-unlink "></i> <span
                                                                    className="f-s-14">5</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-success h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-device-desktop-analytics f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span className="badge text-light-primary f-s-13">UI Design</span>
                                                            </div>
                                                            <div className="h-40 w-40 d-flex-center b-r-50 bg-warning">
                                                                <img src="../assets/images/avtar/07.png" alt=""
                                                                     className="img-fluid b-r-50"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>The choice of body text size can often
                                                                depend
                                                                on the type of
                                                                device and the interface's context.</p>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div>
                                      <span className=" text-secondary me-2"><i className="ti ti-calendar"></i> <span
                                          className="f-s-14">Oct 24</span></span>
                                                                <span className=" text-secondary me-2"><i
                                                                    className="ti ti-message-circle"></i> <span
                                                                    className="f-s-14">6</span></span>
                                                                <span className=" text-secondary"><i
                                                                    className="ti ti-unlink"></i> <span
                                                                    className="f-s-14">4</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-primary h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-webhook f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span className="badge text-light-danger f-s-13">Web Developer</span>
                                                            </div>
                                                            <div
                                                                className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-danger">
                                                                <img src="../assets/images/avtar/08.png" alt=""
                                                                     className="img-fluid"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>Here are some different types of web
                                                                development. HTML, CSS, and
                                                                JavaScript so that users can view and interact with the
                                                                website</p>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div>
                                      <span className=" text-secondary me-2"><i className="ti ti-calendar"></i> <span
                                          className="f-s-14">Dec 10</span></span>
                                                                <span className=" text-secondary me-2"><i
                                                                    className="ti ti-message-circle"></i> <span
                                                                    className="f-s-14">1</span></span>
                                                                <span className=" text-secondary"><i
                                                                    className="ti ti-unlink"></i> <span
                                                                    className="f-s-14">1</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-danger h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-code f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="board-column app-scroll">
                                    <div className="board-column-header text-dark f-w-600">IN PROGRESS (2)</div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span className="badge text-light-info f-s-13">XD</span>
                                                            </div>
                                                            <div
                                                                className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-success">
                                                                <img src="../assets/images/avtar/4.png" alt=""
                                                                     className="img-fluid"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>XD supports and can open files from
                                                                Illustrator, Photoshop,
                                                                Sketch, and After Effects. In addition to the Adobe
                                                                Creative Cloud.</p>
                                                        </div>

                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div>
                                      <span className="text-secondary me-2"><i className="ti ti-calendar "></i> <span
                                          className="f-s-14">Jan 6</span></span>
                                                                <span className="text-secondary me-2"><i
                                                                    className="ti ti-message-circle"></i><span
                                                                    className="f-s-14"> 3</span></span>
                                                                <span className="text-secondary"><i
                                                                    className="ti ti-unlink"></i> <span
                                                                    className="f-s-14">6</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-info h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-file-spreadsheet f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span className="badge text-light-danger f-s-13">Web Developer</span>
                                                            </div>
                                                            <div
                                                                className="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-primary">
                                                                <img src="../assets/images/avtar/13.png" alt=""
                                                                     className="img-fluid"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>Here are some different types of web
                                                                development. HTML, CSS, and
                                                                JavaScript so that users can view and interact with the
                                                                website</p>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div>
                                      <span className="text-secondary me-2"><i className="ti ti-calendar "></i> <span
                                          className="f-s-14">Dec 10</span></span>
                                                                <span className="text-secondary me-2"><i
                                                                    className="ti ti-message-circle"></i><span
                                                                    className="f-s-14"> 1</span></span>
                                                                <span className="text-secondary"><i
                                                                    className="ti ti-unlink"></i> <span
                                                                    className="f-s-14">1</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-danger h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-code f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="board-column app-scroll">
                                    <div className="board-column-header f-w-600 text-dark">REVIEW (3)</div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span
                                                                    className="badge text-light-secondary f-s-13">Illustrator</span>
                                                            </div>
                                                            <div
                                                                className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-danger">
                                                                <img src="../assets/images/avtar/11.png" alt=""
                                                                     className="img-fluid"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>Let's learn more about the types of
                                                                illustration and where they
                                                                are used.</p>
                                                        </div>
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div className=" gap-2 align-items-center">
                                      <span className="text-secondary me-2"><i className="ti ti-calendar "></i> <span
                                          className="f-s-14">Nov 2</span></span>
                                                                <span className="text-secondary me-2"><i
                                                                    className="ti ti-message-circle"></i><span
                                                                    className="f-s-14"> 3</span></span>
                                                                <span className="text-secondary"><i
                                                                    className="ti ti-unlink"></i> <span
                                                                    className="f-s-14">
                                          1</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-secondary h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-list-details f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span
                                                                    className="badge text-light-dark f-s-13">Photoshop</span>
                                                            </div>
                                                            <div
                                                                className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-warning">
                                                                <img src="../assets/images/avtar/1.png" alt=""
                                                                     className="img-fluid"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>Select type options, such as font, style,
                                                                size, and color, in
                                                                the tool options bar</p>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div>
                                      <span className="text-secondary me-2"><i className="ti ti-calendar "></i> <span
                                          className="f-s-14">Dec 20</span></span>
                                                                <span className="text-secondary me-2"><i
                                                                    className="ti ti-message-circle"></i><span
                                                                    className="f-s-14"> 2</span></span>
                                                                <span className="text-secondary"><i
                                                                    className="ti ti-unlink"></i> <span
                                                                    className="f-s-14">9</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-dark h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-apps f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span className="badge text-light-primary f-s-13">UI Design</span>
                                                            </div>
                                                            <div className="h-40 w-40 d-flex-center b-r-50 bg-light">
                                                                <img src="../assets/images/avtar/4.png" alt=""
                                                                     className="img-fluid b-r-50"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>The choice of body text size can often
                                                                depend
                                                                on the type of
                                                                device and the interface's context.</p>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div>
                                      <span className="text-secondary me-2"><i className="ti ti-calendar "></i> <span
                                          className="f-s-14">Oct 24</span></span>
                                                                <span className="text-secondary me-2"><i
                                                                    className="ti ti-message-circle"></i><span
                                                                    className="f-s-14"> 6</span></span>
                                                                <span className="text-secondary"><i
                                                                    className="ti ti-unlink"></i> <span
                                                                    className="f-s-14">
                                          4</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-primary h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-webhook f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="board-column app-scroll">
                                    <div className="board-column-header f-w-600 text-dark">Tested (2)</div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span
                                                                    className="badge text-light-dark f-s-13">Photoshop</span>
                                                            </div>
                                                            <div
                                                                className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-dark">
                                                                <img src="../assets/images/avtar/2.png" alt=""
                                                                     className="img-fluid"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>Select type options, such as font, style,
                                                                size,
                                                                and color, in
                                                                the tool options bar</p>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div>
                                      <span className="text-secondary me-2"><i className="ti ti-calendar "></i> <span
                                          className="f-s-14">Des 20</span></span>
                                                                <span className="text-secondary me-2"><i
                                                                    className="ti ti-message-circle"></i><span
                                                                    className="f-s-14"> 2</span></span>
                                                                <span className="text-secondary"><i
                                                                    className="ti ti-unlink"></i> <span
                                                                    className="f-s-14">
                                          9</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-dark h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-apps f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span className="badge text-light-primary f-s-13">UI Design</span>
                                                            </div>
                                                            <div
                                                                className="h-40 w-40 d-flex-center b-r-50 bg-secondary">
                                                                <img src="../assets/images/avtar/16.png" alt=""
                                                                     className="img-fluid b-r-50"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>The choice of body text size can often depend
                                                                on the type of
                                                                device and the interface's context.</p>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div>
                                      <span className="text-secondary me-2"><i className="ti ti-calendar "></i> <span
                                          className="f-s-14">Oct 24</span></span>
                                                                <span className="text-secondary me-2"><i
                                                                    className="ti ti-message-circle"></i><span
                                                                    className="f-s-14"> 6</span></span>
                                                                <span className="text-secondary"><i
                                                                    className="ti ti-unlink"></i> <span
                                                                    className="f-s-14">
                                          4</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-primary h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-webhook f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="board-column app-scroll">
                                    <div className="board-column-header f-w-600 text-dark">Done (3)</div>
                                    <div className="board-column-content-wrapper">
                                        <div className="board-column-content">
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span className="badge text-light-primary f-s-13">UI Design</span>
                                                            </div>
                                                            <div className="h-40 w-40 d-flex-center b-r-50 bg-warning">
                                                                <img src="../assets/images/avtar/6.png" alt=""
                                                                     className="img-fluid b-r-50"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>The choice of body text size can often depend
                                                                on the type of
                                                                device and the interface's context.</p>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div>
                                      <span className="text-secondary me-2"><i className="ti ti-calendar "></i> <span
                                          className="f-s-14">Oct 24</span></span>
                                                                <span className="text-secondary me-2"><i
                                                                    className="ti ti-message-circle"></i><span
                                                                    className="f-s-14"> 6</span></span>
                                                                <span className="text-secondary"><i
                                                                    className="ti ti-unlink"></i> <span
                                                                    className="f-s-14">
                                          4</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-primary h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-webhook f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span className="badge text-light-danger f-s-13">Web Developer</span>
                                                            </div>
                                                            <div
                                                                className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-primary">
                                                                <img src="../assets/images/avtar/11.png" alt=""
                                                                     className="img-fluid"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>Here are some different types of web
                                                                development. HTML, CSS, and
                                                                JavaScript so that users can view and interact with the
                                                                website</p>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div>
                                      <span className="text-secondary me-2"><i className="ti ti-calendar "></i> <span
                                          className="f-s-14">Dec 10</span></span>
                                                                <span className="text-secondary me-2"><i
                                                                    className="ti ti-message-circle"></i><span
                                                                    className="f-s-14"> 1</span></span>
                                                                <span className="text-secondary"><i
                                                                    className="ti ti-unlink"></i> <span
                                                                    className="f-s-14">
                                          1</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-danger h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-code f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="board-item">
                                                <div className="board-item-content">
                                                    <div className="gap-1 d-flex flex-column">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span className="badge text-light-info f-s-13">XD</span>
                                                            </div>
                                                            <div
                                                                className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-danger">
                                                                <img src="../assets/images/avtar/07.png" alt=""
                                                                     className="img-fluid"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>XD supports and can open files from
                                                                Illustrator, Photoshop,
                                                                Sketch, and After Effects. In addition to the Adobe
                                                                Creative Cloud.</p>
                                                        </div>

                                                        <div
                                                            className="d-flex align-items-center justify-content-between">
                                                            <div>
                                      <span className="text-secondary me-2"><i className="ti ti-calendar "></i> <span
                                          className="f-s-14">Jan 6</span></span>
                                                                <span className="text-secondary me-2"><i
                                                                    className="ti ti-message-circle"></i><span
                                                                    className="f-s-14"> 3</span></span>
                                                                <span className="text-secondary"><i
                                                                    className="ti ti-unlink"></i> <span
                                                                    className="f-s-14">
                                          6</span></span>
                                                            </div>
                                                            <div className="kanban-icon">
                                      <span className="text-light-info h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-file-spreadsheet f-s-18"></i>
                                      </span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default KanbanBoardPage;