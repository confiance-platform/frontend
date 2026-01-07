import React, {useEffect} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Rating = () => {

    useEffect(() => {
        $(() => {
            function ratingEnable() {

                $('#example-1to10').barrating('show', {
                    theme: 'bars-1to10'
                });
            }

            $('#example-square').barrating('show', {
                theme: 'bars-square',
                showValues: true,
                showSelectedRating: false
            });

            $('#example-pill').barrating('show', {
                theme: 'bars-pill',
                initialRating: 'A',
                showValues: true,
                showSelectedRating: false,
                allowEmpty: true,
                emptyValue: '-- no rating selected --',
                onSelect: function(value, text) {

                }
            });

            $('#example-reversed').barrating('show', {
                theme: 'bars-reversed',
                showSelectedRating: true,
                reverse: true
            });

            $('#example-horizontal').barrating('show', {
                theme: 'bars-horizontal',
                reverse: true,
                hoverState: false
            });

            ratingEnable();
        });

// custome emoji change js start //
        const starsEl = document.querySelectorAll(".emoji-star");
        const emojiEl = document.querySelectorAll(".far");
        const colorArray = ["#F03161", "#74788D", "#F03161", "#FC9314", "#05BF81"];

        function updateRating(index) {
            starsEl.forEach((star, idx) => {
                star.classList.toggle("active", idx <= index);
            });
            emojiEl.forEach((emoji, idx) => {
                emoji.style.transform = `translateX(-${index * 44}px)`;
                emoji.style.color = idx === index ? colorArray[index] : 'black';
            });
        }

        starsEl.forEach((star, index) => {
            star.addEventListener("click", () => updateRating(index));
        });

        updateRating(0);

        var emojis = ['😠','😒','😧','😦','😑','😀','😆','😍','🤩','💙'];
        var text = ['1','2','3','4','5','6','7','8','9','10'];
        $("input").on("input", function() {
            var i = $(this).val();
            $(".emoji").html(emojis[i]);
            $(".text").html(text[i]);
        });
    }, []);
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Rating</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                              <span>
                                <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                              </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Rating</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xl={3}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Controlled</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="rating">
                                    <input type="radio" id="star5" name="rating" value="5"/>
                                    <label className="star" htmlFor="star5"><span className="fa fa-star"></span></label>
                                    <input type="radio" id="star4" name="rating" value="4"/>
                                    <label className="star" htmlFor="star4"><span className="fa fa-star"></span></label>
                                    <input type="radio" id="star3" name="rating" value="3"/>
                                    <label className="star" htmlFor="star3"><span className="fa fa-star"></span></label>
                                    <input type="radio" id="star2" name="rating" value="2"/>
                                    <label className="star" htmlFor="star2"><span className="fa fa-star"></span></label>
                                    <input type="radio" id="star1" name="rating" value="1"/>
                                    <label className="star" htmlFor="star1"><span className="fa fa-star"></span></label>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Read Only</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="rating">
                                    <i className="ti ti-star-filled text-warning f-s-20"></i>
                                    <i className="ti ti-star-filled text-warning f-s-20"></i>
                                    <i className="ti ti-star-filled  f-s-20  star-filled"></i>
                                    <i className="ti ti-star-filled  f-s-20 star-filled"></i>
                                    <i className="ti ti-star-filled  f-s-20 star-filled"></i>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Custom SVG</h5>
                            </CardHeader>
                            <CardBody>

                                <div className="rating ">
                                    <input type="radio" id="star6" name="ratings3" value="5"/>
                                    <label className="star" htmlFor="star6"><span className="fa fa-star"></span></label>
                                    <input type="radio" id="star7" name="ratings3" value="4"/>
                                    <label className="star" htmlFor="star7"><span className="fa fa-star"></span></label>
                                    <input type="radio" id="star8" name="ratings3" value="3"/>
                                    <label className="star" htmlFor="star8"><span className="fa fa-star"></span></label>
                                    <input type="radio" id="star9" name="ratings3" value="2"/>
                                    <label className="star" htmlFor="star9"><span className="fa fa-star"></span></label>
                                    <input type="radio" id="star10" name="ratings3" value="1"/>
                                    <label className="star" htmlFor="star10"><span
                                        className="fa fa-star"></span></label>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card>
                            <CardHeader>
                                <h5>half star</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex justify-content-center">
                                    <div className="half-rate">
                                        <input type="radio" id="rating10" name="rating" value="10"/><label
                                        htmlFor="rating10" title="5 stars"></label>
                                        <input type="radio" id="rating9" name="rating" value="9"/><label
                                        className="half" htmlFor="rating9" title="4 1/2 stars"></label>
                                        <input type="radio" id="rating8" name="rating" value="8"/><label
                                        htmlFor="rating8" title="4 stars"></label>
                                        <input type="radio" id="rating7" name="rating" value="7"/><label
                                        className="half" htmlFor="rating7" title="3 1/2 stars"></label>
                                        <input type="radio" id="rating6" name="rating" value="6"/><label
                                        htmlFor="rating6" title="3 stars"></label>
                                        <input type="radio" id="rating5" name="rating" value="5"/><label
                                        className="half" htmlFor="rating5" title="2 1/2 stars"></label>
                                        <input type="radio" id="rating4" name="rating" value="4"/><label
                                        htmlFor="rating4" title="2 stars"></label>
                                        <input type="radio" id="rating3" name="rating" value="3"/><label
                                        className="half" htmlFor="rating3" title="1 1/2 stars"></label>
                                        <input type="radio" id="rating2" name="rating" value="2"/><label
                                        htmlFor="rating2" title="1 star"></label>
                                        <input type="radio" id="rating1" name="rating" value="1"/><label
                                        className="half" htmlFor="rating1" title="1/2 star"></label>

                                    </div>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>

                    <div className="col-md-6 col-xxl-3 ">
                        <Card>
                            <CardHeader>
                                <h5>Full Star</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="rating ">
                                    <input type="radio" id="star16" name="ratings" value="16" defaultChecked={true}/>
                                    <label className="star" htmlFor="star16"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star17" name="ratings" value="17" defaultChecked={true}/>
                                    <label className="star" htmlFor="star17"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star18" name="ratings" value="18" defaultChecked={true}/>
                                    <label className="star" htmlFor="star18"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star19" name="ratings" value="19" defaultChecked={true}/>
                                    <label className="star" htmlFor="star19"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star20" name="ratings" value="20" defaultChecked={true}/>
                                    <label className="star" htmlFor="star20"><span
                                        className="fa fa-star"></span></label>
                                </div>

                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-md-6 col-xxl-3 ">
                        <Card>
                            <CardHeader>
                                <h5>10 stars</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="rating">
                                    <input type="radio" id="star21" name="ratings4" value="21" defaultChecked={true}/>
                                    <label className="star" htmlFor="star21"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star22" name="ratings4" value="22" defaultChecked={true}/>
                                    <label className="star" htmlFor="star22"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star23" name="ratings4" value="23" defaultChecked={true}/>
                                    <label className="star" htmlFor="star23"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star24" name="ratings4" value="24" defaultChecked={true}/>
                                    <label className="star" htmlFor="star24"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star25" name="ratings4" value="25" defaultChecked={true}/>
                                    <label className="star" htmlFor="star25"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star26" name="ratings4" value="26"/>
                                    <label className="star" htmlFor="star26"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star27" name="ratings4" value="27"/>
                                    <label className="star" htmlFor="star27"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star28" name="ratings4" value="28"/>
                                    <label className="star" htmlFor="star28"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star29" name="ratings4" value="29"/>
                                    <label className="star" htmlFor="star29"><span
                                        className="fa fa-star"></span></label>
                                    <input type="radio" id="star30" name="ratings4" value="30"/>
                                    <label className="star" htmlFor="star30"><span
                                        className="fa fa-star"></span></label>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-md-6 col-xxl-3 ">
                        <Card>
                            <CardHeader>
                                <h5>Square Rating</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="boxs box-blue box-example-square d-flex-center">
                                    <div className="box-body">
                                        <select id="example-square" name="rating" autoComplete="off" defaultValue='1'>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-md-6 col-xxl-3">
                        <Card>
                            <CardHeader>
                                <h5>Pill Rating</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="boxs box-green box-example-pill d-flex-center">
                                    <div className="box-body">
                                        <select id="example-pill" name="rating" autoComplete="off" defaultValue="A">
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                            <option value="E">E</option>
                                            <option value="F">F</option>
                                        </select>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <Col md={6} xxl={4}>
                        <Card>
                            <CardHeader>
                                <h5>1/10 Rating</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="boxs box-orange box-example-1to10">
                                    <select id="example-1to10" name="rating" autoComplete="off" defaultValue='1'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} xxl={4}>
                        <Card>
                            <CardHeader>
                                <h5>Reversed Rating</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="boxs box-green box-large box-example-reversed  p-4">
                                    <div className="box-body">
                                        <select id="example-reversed" name="rating" autoComplete="off" defaultValue='Strongly Agree'>
                                            <option value="Strongly Agree">Strongly Agree</option>
                                            <option value="Agree">Agree</option>
                                            <option value="Neither Agree or Disagree">Neither Agree
                                                or Disagree
                                            </option>
                                            <option value="Disagree">Disagree</option>
                                            <option value="Strongly Disagree">Strongly Disagree</option>
                                        </select>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} xxl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Hover Feedback</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="stars_rating" id="stars_rating">
                                    <div className="stars">
                                        <div className="stars1 rated">★</div>
                                        <div className="stars1 rated">★</div>
                                        <div className="stars1 rated">★</div>
                                        <div className="stars1">★</div>
                                        <div className="stars1">★</div>
                                    </div>

                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} xxl={4}>
                        <Card>
                            <CardHeader>
                                <h5>Horizontal Rating</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="boxs box-orange box-large box-example-horizontal d-flex-center">
                                    <div className="box-body">
                                        <select id="example-horizontal" name="rating" autoComplete="off" defaultValue='1'>
                                            <option value="10">10</option>
                                            <option value="9">9</option>
                                            <option value="8">8</option>
                                            <option value="7">7</option>
                                            <option value="6">6</option>
                                            <option value="5">5</option>
                                            <option value="4">4</option>
                                            <option value="3">3</option>
                                            <option value="2">2</option>
                                            <option value="1" >1</option>
                                        </select>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} xxl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5> Emoji-Rating</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="feedback-container">
                                    <div className="emoji-container">
                                        <i className="far fa-angry fa-3x"></i>
                                        <i className="far fa-frown fa-3x"></i>
                                        <i className="far fa-meh fa-3x"></i>
                                        <i className="far fa-smile fa-3x"></i>
                                        <i className="far fa-laugh fa-3x"></i>
                                    </div>
                                    <div className="rating-container mt-4">
                                        <i className="fas fa-star fa-2x active emoji-star"></i>
                                        <i className="fas fa-star fa-2x emoji-star"></i>
                                        <i className="fas fa-star fa-2x emoji-star"></i>
                                        <i className="fas fa-star fa-2x emoji-star"></i>
                                        <i className="fas fa-star fa-2x emoji-star"></i>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} xxl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Emoji Progress</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="rate-1">
                                    <div className="emoji">😑</div>
                                    <div className="emoji-slider">
                                        <input className="accent" type="range" min="0" max="9" step="1" defaultValue="5"/>
                                    </div>
                                    <label className="text"></label>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Rating;