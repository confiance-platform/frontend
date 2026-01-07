import React, {useEffect} from 'react';
import InitSlider from '../../../Data/Rangeslider/InitSlider';

const RangeSlider = () => {

    useEffect(() => {
        InitSlider();
    }, []);

    return (
        <div>
            <div className="container-fluid">
                <div className="row m-1">
                    <div className="col-12 ">
                        <h4 className="main-title">Range Slider</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                                          <span>
                                            <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                                          </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Range Slider</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>Bootstrap Range Sliders</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label htmlFor="customRange1" className="form-label">Basic range
                                            Slider</label>
                                        <input type="range" className="form-range" id="customRange1"/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="disabledRange" className="form-label">Disabled range
                                            Slider</label>
                                        <input type="range" className="form-range" id="disabledRange" disabled/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="customRange2" className="form-label">Min and max range
                                            Slider</label>
                                        <input type="range" className="form-range" min="0" max="2" id="customRange2"/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="customRange3" className="form-label">Steps range
                                            Slider</label>
                                        <input type="range" className="form-range" min="0" max="5" id="customRange3"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>colour variant</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">primary range slider</label>
                                            <div className="slider-round" id="primary-slider"></div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">secondary range slider</label>
                                            <div className="slider-round slider-secondary" id="secondary-slider">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Success range slider</label>
                                            <div className="slider-round slider-success" id="success-slider"></div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">danger range slider</label>
                                            <div className="slider-round slider-danger" id="danger-slider"></div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">warning range slider</label>
                                            <div className="slider-round slider-warning" id="warning-slider"></div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">info range slider</label>
                                            <div className="slider-round slider-info" id="info-slider"></div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">light range slider</label>
                                            <div className="slider-round slider-light" id="light-slider"></div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">dark range slider</label>
                                            <div className="slider-round slider-dark" id="dark-slider"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>value slider</h5>
                            </div>
                            <div className="card-body">
                                <div className="col-12">
                                    <div className="mb-4">
                                        <label className="form-label f-s-16 text-secondary mb-3">Locking sliders
                                            together</label>
                                        <div className="slider-round" id="slider-1"></div>
                                        value:
                                        <span id="val1"></span>
                                    </div>
                                    <div className="mb-5">
                                        <div className="slider-round" id="slider-2"></div>
                                        value:
                                        <span id="val2"></span>
                                        <div>
                                            <button type="button" className="btn btn-primary float-end"
                                                    id="lockbtn">Lock
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-4">
                                        <label className="form-label text-secondary f-s-16 mb-3">Multi range
                                            slider</label>
                                        <div className="slider-round" id="multi-values-slider"></div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-5 mg-t-70">
                                        <label className="form-label f-s-16 mb-3 text-secondary">Soft limits</label>
                                        <div className="colored-slider slider-round" id="limit-slider"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Tooltip slider</h5>
                            </div>
                            <div className="card-body">
                                <div className="col-12">
                                    <div className="mb-5">
                                        <label className="form-label f-s-16 text-secondary mb-5">values slider</label>
                                        <div className="slider-round primary-slider-round" id="values-slider"></div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mb-5">
                                        <label className="form-label f-s-16 text-secondary mb-5">tooltip slider</label>
                                        <div className="slider-round hide-tooltips primary-slider-round"
                                             id="hide-tooltips"></div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mb-5">
                                        <label className="form-label f-s-16 text-secondary mb-5">Colored Connect
                                            Slider</label>
                                        <div className="colored-slider primary-colored-slider"
                                             id="slider-colored"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>dynamic slider</h5>
                            </div>
                            <div className="card-body">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label className="form-label">HTML5 input</label>
                                        <div className="slider-round" id="html-input"></div>
                                    </div>
                                    <div className=" d-flex gap-2 mb-5">
                                        <select id="select-input" className="form-select"></select>
                                        <input type="number" id="number-input" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Color picker slider</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="colorpicker-slider">
                                            <div className="vertical verticalsliders red me-2" id="red"></div>
                                            <div className="vertical verticalsliders green me-2" id="green"></div>
                                            <div className="vertical verticalsliders blue" id="blue"></div>
                                            <div className="result" id="result"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Vertical slider</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="vertical m-auto" id="vertical-slider"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Toggle slider</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="vertical m-auto" id="toggle-slider"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default RangeSlider;