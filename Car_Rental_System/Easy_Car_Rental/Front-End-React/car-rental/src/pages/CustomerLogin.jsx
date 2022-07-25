import React, { Component } from 'react';
import { Popup, Checkbox, Form } from 'semantic-ui-react';
import {  Link } from "react-router-dom";

class CustomerLogin extends Component {

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
                            <h2 style={{ margin: "50px 0 50px 260px" }} class="ui header"><img src="https://react.semantic-ui.com/images/avatar/large/patrick.png" class="ui circular image" />Customer Log-In</h2>
                        </div>
                        <form style={{width:"30vw", marginLeft:"10vw"}} class="ui form">
                            <div class="field">
                                <label>NIC</label>
                                <div class="ui left icon input">
                                    <input type="text" placeholder="nic number" />
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
                            <button style={{ margin: "40px 0 30px 10vw" }} class="ui primary inverted button">
                                <Link to="/luxary_vehicle">
                                    Log In
                                </Link>
                            </button>
                        </form>
                    </div>
                    <div style={{marginTop:"10px"}} class="middle aligned column">
                        <form style={{width:"40vw", marginLeft:"5vw"}} class="ui form">
                            <div class="field">
                                <label>NIC</label>
                                <input placeholder="nic no"/>
                            </div>
                            <div class="field">
                                <label>Full Name</label>
                                <input placeholder="full Name"/>
                            </div>
                            <div class="field">
                                <label>Email</label>
                                <input placeholder="email"/>
                            </div>
                            <div class="field">
                                <label>TelNo</label>
                                <input placeholder="telno"/>
                            </div>
                            <div class="field">
                                <label>Password</label>
                                <input type="password" placeholder="enter password"/>
                            </div>
                            <div class="field">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="re-enter password"/>
                            </div>
                            <div class="field">
                                <b>Please Attach Photo Here :</b>
                                <Popup content='Add users to your feed' 
                                trigger={
                                    <input style={{margin:"10px 0 0 0px"}} id="file" name="myFile" type="file" />} 
                                />
                                <button style={{margin:"14px 0 10px 195px"}} type="button" id="btnUpload" class="ui button primary">Upload File</button>
                            </div>
                            <button class="ui primary button" style={{ margin: "40px 0 30px 20vw" }} type="submit">Sign_In</button>
                        </form>
                    </div>
                </div>
                <div class="ui vertical divider">OR</div>
            </div>
        );
    }
}

export default CustomerLogin;