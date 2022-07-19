import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

class Homepage extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (

            <div class="ui internally celled grid">
                <div class="ui steps">
                    <div class="step">
                        <i aria-hidden="true" class="icon car"></i>
                        <div class="content"><div class="title">Select A Car</div>
                            <div class="description">Choose your shipping options</div>
                        </div>
                    </div>
                    <div class="active step">
                        <i aria-hidden="true" class="calendar times icon"></i>
                        <div class="content">
                            <div class="title">Select a Date/Time</div>
                            <div class="description">Enter billing information</div>
                        </div>
                    </div>
                    <div class="active step">
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

                <div class="row">
                    <div class="six wide column">

                        <img src="https://fleetroot.com/blog/wp-content/uploads/2020/08/20-features-in-car-rental-software-in-2020.jpg" style={{ margin: "60px" }} class="ui large rounded image" />
                        
                        <div className="row" style={{ marginLeft: "20px" }}>

                            <div class="ui statistics">
                                <div class="ui statistic">
                                    <div class="value">22</div>
                                    <div class="label">Saves</div>
                                </div>
                                <div class="ui statistic">
                                    <div class="text value">Three<br />Thousand
                                </div>
                                <div class="label">Signups</div>
                            </div>
                            <div class="ui statistic">
                                <div class="value">
                                    <i aria-hidden="true" class="plane icon"></i>5
                                </div>
                                <div class="label">Flights</div>
                            </div>
                            <div class="ui statistic">
                                <div class="value">
                                    <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" class="ui circular inline image" />42
                                </div>
                                <div class="label">Team Members</div></div>
                            </div>

                        </div>
                    </div>
                    <div class="ten wide column">
                        <div className="row">
                            <div>
                                <h2 class="ui icon center aligned header">
                                    <i aria-hidden="true" class="users circular icon"></i>
                                    <div class="content">About Us</div>
                                </h2>
                                <img src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" class="ui large centered image"/>
                            </div>
                        </div>
                        <div class="ui container" style={{ padding: "30px" }}>
                            <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                                link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                                metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                                Curabitur ullamcorper ultricies nisi.
                            </h4>
                            <br></br>

                            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                                metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                                Curabitur ullamcorper ultricies nisi.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;