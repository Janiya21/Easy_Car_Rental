import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Label } from 'semantic-ui-react';

class Luxary_Vehicles extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div class="ui steps">
                    <div class="step">
                        <i aria-hidden="true" class="calendar times icon"></i>
                        <div class="content">
                            <div class="title">Select a Date/Time</div>
                            <div class="description">Enter billing information</div>
                        </div>
                    </div>
                    <div class="active step">
                        <i aria-hidden="true" class="icon car"></i>
                        <div class="content"><div class="title">Select A Car</div>
                            <div class="description">Choose your shipping options</div>
                        </div>
                    </div>
                    <div class="step">
                        <i aria-hidden="true" class="drivers license icon"></i>
                        <div class="content">
                            <div class="title">Pick-up Random Driver</div>
                            <div class="description">Enter billing information</div>
                        </div>
                    </div>
                    <div class="disabled step">
                        <i aria-hidden="true" class="info icon"></i>
                        <div class="content">
                            <div class="title">Confirm Order</div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div class="ui very relaxed four column grid" style={{ margin: "30px" }}>
                        <div class="column">
                            <div class="ui card">
                                <div class="image">
                                    <img style={{ height: "23vh", width: "18.8vw" }} src="https://d8asu6slkrh4m.cloudfront.net/2019/09/bmw-525i-sri-lanka.jpg" class="ui image" />
                                </div>
                                <div class="content">
                                    <h3>BMW  - 220d</h3>
                                    <div class="meta">
                                        <span class="date">Diesl  | 5 Passengers</span>
                                        <h4>Daily : 11000   |  monthly : 145000</h4>
                                        <h5>Loss Damage : 23000</h5>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <a>
                                        <button style={{ width: "260px" }} class="ui primary button">
                                            <Link to="/add_order">
                                                Book Vehicle
                                            </Link>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui card">
                                <div class="image">
                                    <img src="https://i.pinimg.com/originals/42/59/74/42597420a332603526ae09219cf65b17.jpg" class="ui image" />
                                </div>
                                <div class="content">
                                    <h3>BMW  - 220d</h3>
                                    <div class="meta">
                                        <span class="date">Diesl  | 5 Passengers</span>
                                        <h4>Daily : 11000   |  monthly : 145000</h4>
                                        <h5>Loss Damage : 23000</h5>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <a>
                                        <button style={{ width: "260px" }} class="ui primary button">
                                        <Link to="">
                                                Book Vehicle
                                            </Link>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui card">
                                <div class="image">
                                    <img src="https://i0.wp.com/autodirect.lk/wp-content/uploads/2022/02/DSC_2249-scaled.jpg?resize=798%2C466&ssl=1" class="ui image" />
                                </div>
                                <div class="content">
                                    <h3>BMW  - 220d</h3>
                                    <div class="meta">
                                        <span class="date">Diesl  | 5 Passengers</span>
                                        <h4>Daily : 11000   |  monthly : 145000</h4>
                                        <h5>Loss Damage : 23000</h5>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <a>
                                        <button style={{ width: "260px" }} class="ui primary button">Book Vehicle</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui card">
                                <div class="image">
                                    <img style={{ height: "23vh", width: "18.8vw" }} src="https://m.atcdn.co.uk/a/media/w375/f169958c6ec342abac2f6da807a05a1f.jpg" class="ui image" />
                                </div>
                                <div class="content">
                                    <h3>BMW  - 220d</h3>
                                    <div class="meta">
                                        <span class="date">Diesl  | 5 Passengers</span>
                                        <h4>Daily : 11000   |  monthly : 145000</h4>
                                        <h5>Loss Damage : 23000</h5>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <a>
                                        <button style={{ width: "260px" }} class="ui primary button">Book Vehicle</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div class="ui very relaxed four column grid" style={{ margin: "30px" }}>
                        <div class="column">
                            <div class="ui card">
                                <div class="image">
                                    <img style={{ height: "24vh", width: "18.8vw" }} src="https://d8asu6slkrh4m.cloudfront.net/2015/01/toyota-premio-l.jpg" class="ui image" />
                                </div>
                                <div class="content">
                                    <h3>BMW  - 220d</h3>
                                    <div class="meta">
                                        <span class="date">Diesl  | 5 Passengers</span>
                                        <h4>Daily : 11000   |  monthly : 145000</h4>
                                        <h5>Loss Damage : 23000</h5>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <a>
                                        <button style={{ width: "260px" }} class="ui primary button">Book Vehicle</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui card">
                                <div class="image">
                                    <img style={{ height: "24vh", width: "18.8vw" }} src="https://donrac.ae/wp-content/uploads/2018/08/Audi-A8.jpg" class="ui image" />
                                </div>
                                <div class="content">
                                    <h3>BMW  - 220d</h3>
                                    <div class="meta">
                                        <span class="date">Diesl  | 5 Passengers</span>
                                        <h4>Daily : 11000   |  monthly : 145000</h4>
                                        <h5>Loss Damage : 23000</h5>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <a>
                                        <button style={{width:"260px"}} class="ui primary button">Book Vehicle</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui card">
                                <div class="image">
                                    <img style={{ height: "24vh", width: "18.8vw" }} src="https://cdn.rnudah.com/images/plain/254e5457e05985b8edfc19f8dfd127d2-2773136204621886675.jpg" class="ui image" />
                                </div>
                                <div class="content">
                                    <h3>BMW  - 220d</h3>
                                    <div class="meta">
                                        <span class="date">Diesl  | 5 Passengers</span>
                                        <h4>Daily : 11000   |  monthly : 145000</h4>
                                        <h5>Loss Damage : 23000</h5>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <a>
                                        <button style={{width:"260px"}} class="ui primary button">Book Vehicle</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui card">
                                <div class="image">
                                    <img style={{ height: "24vh", width: "18.8vw" }} src="https://img.usedcarsphil.com/crop/480x271/2022/01/10/17696eaf-925b.jpg" class="ui image" />
                                </div>
                                <div class="content">
                                    <h3>BMW  - 220d</h3>
                                    <div class="meta">
                                        <span class="date">Diesl  | 5 Passengers</span>
                                        <h4>Daily : 11000   |  monthly : 145000</h4>
                                        <h5>Loss Damage : 23000</h5>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <a>
                                        <button style={{width:"260px"}} class="ui primary button">Book Vehicle</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        );
    }
}

export default Luxary_Vehicles;