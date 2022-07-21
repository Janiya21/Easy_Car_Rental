import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";


class Admin_Login extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="ui">
            <div class="ui two column grid">
                <div class="column">
                    <div className="row">
                        <h2 style={{ margin: "50px 0 50px 260px" }} class="ui header">
                            <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Image.png" class="ui circular image" />Admin Log-In</h2>
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
                        <button style={{ margin: "40px 0 30px 10vw" }} class="ui primary button">
                            <Link to="/admin_cusView">
                                <div class="detail"><h4 style={{color:"white"}}>Log_In</h4></div>
                            </Link>
                        </button>
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
                        <button style={{ margin: "40px 0 30px 10vw" }} class="ui primary button">
                            <Link to="/admin_cusView">
                                <div class="detail"><h4 style={{color:"white"}}>Sign_In</h4></div>
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
            <div class="ui vertical divider">OR</div>
        </div>
        );
    }
}

export default Admin_Login;