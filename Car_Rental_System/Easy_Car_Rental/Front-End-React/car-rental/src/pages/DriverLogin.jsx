import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';


class DriverLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        return (
            <div class="ui">
            <div class="ui two column grid">
                <div class="column">
                    <div className="row">
                        <h2 style={{ margin: "50px 0 50px 260px" }} class="ui header">
                            <img src="https://img.freepik.com/premium-vector/man-with-steering-wheel-driver-avatar-chauffeur-character_176411-3059.jpg?w=2000" class="ui circular image" />Driver Log-In</h2>
                    </div>
                    <form style={{width:"30vw", marginLeft:"10vw"}} class="ui form">
                        <div class="field">
                            <label>Driver_ID</label>
                            <div class="ui left icon input">
                                <input type="text" placeholder="driver id" />
                                <i aria-hidden="true" class="user icon"></i>
                            </div>
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <div class="ui left icon input">
                                <input type="password" />
                                <i aria-hidden="true" class="lock icon"></i>
                            </div>
                        </div>
                        <button style={{ margin: "40px 0 30px 10vw" }} class="ui primary button">Login</button>
                    </form>
                </div>
                <div style={{marginTop:"40px"}} class="middle aligned column">
                    <form style={{width:"40vw", marginLeft:"5vw"}} class="ui form">
                        {/* <div class="equal width fields">
                            <div class="field">
                                <label for="form-subcomponent-shorthand-input-first-name">First name</label>
                                <div class="ui fluid input">
                                    <input type="text" placeholder="First name" id="form-subcomponent-shorthand-input-first-name"/>
                                </div>
                            </div>
                            <div class="field">
                                <button style={{ margin: "22px 0 0 5vw" }} class="ui primary button">Generate ID</button>
                            </div>
                        </div> */}
                        <div class="field">
                            <label>Full Name</label>
                            <input placeholder="Last Name"/>
                        </div>
                        <div class="field">
                            <label>Email</label>
                            <input placeholder="Last Name"/>
                        </div>
                        <div class="field">
                            <label>TelNo</label>
                            <input placeholder="Last Name"/>
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <input type="password" placeholder="Last Name"/>
                        </div>
                        <div class="field">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="Last Name"/>
                        </div>
                        <div style={{marginTop:"30px"}} class="field">
                            <div class="ui checkbox">
                                <input type="checkbox" class="hidden" readonly="" tabindex="0"/>
                                <label>Accept the responsibility about Information You provided</label>
                            </div>
                        </div>
                        <button class="ui primary button" style={{ margin: "40px 0 0 15vw" }} type="submit">Sign_In</button>
                    </form>
                </div>
            </div>
            <div class="ui vertical divider">OR</div>
        </div>
        );
    }
}

export default DriverLogin;