import React, { Component } from 'react';
import {  Link } from "react-router-dom";


class Admin_Login extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="ui">
            <div class="ui two column grid" >
                <div class="eight wide column" style={{marginLeft:"10vw"}}>
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
                <div style={{margin:"130px 0 0 30px"}} class="six wide middle aligned column">
                    <button class="ui secondary button"><i class="sign-in icon"></i> Sign In </button>
                </div>
            </div>
            <div style={{marginLeft:"5vw"}} class="ui vertical divider">OR</div>
        </div>
        );
    }
}

export default Admin_Login;