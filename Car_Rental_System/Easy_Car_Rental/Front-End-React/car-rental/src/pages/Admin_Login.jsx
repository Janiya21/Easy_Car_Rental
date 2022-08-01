import React, { Component } from 'react';
import {  Link } from "react-router-dom";


class Admin_Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts : [],
            loginValidLocation:'#',
            loginPassword: '',
            userName:''
        }
    }

    callAPI = (e) => {
        fetch("http://localhost:8081/easyRents/api/v1/admin")
            .then(
                (response) => response.json()
            ).then((data)=> {
            console.log(data);
            this.setState({
                posts:data.data
            })
            for (const post of this.state.posts) {
                console.log(post.userName, this.state.userName)
                if (this.state.userName === post.userName) {
                    if(this.state.loginPassword === post.password){
                        this.state.loginValidLocation='/admin_cusView';
                        // this.navigateCustomer();
                    }
                }
            }
            console.log(this.state.loginValidLocation);
        })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    render() {
        const {userName,loginPassword} = this.state;

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
                            <label>Username</label>
                            <div class="ui left icon input">
                                <input name="userName" value={userName} onChange={this.changeHandler}   type="text" placeholder="driver id" />
                                <i aria-hidden="true" class="user icon"></i>
                            </div>
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <div class="ui left icon input">
                                <input name="loginPassword" value={loginPassword} onChange={this.changeHandler}   type="password" />
                                <i aria-hidden="true" class="lock icon"></i>
                            </div>
                        </div>
                        <button type="button" onClick={this.callAPI} style={{ margin: "40px 0 30px 10vw" }} class="ui primary button">
                            <div className="detail">
                                <h4 style={{color: "white"}}>
                                    <Link to={this.state.loginValidLocation}>
                                        Log In
                                    </Link>
                                </h4>
                            </div>
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