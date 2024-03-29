import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import history from "../history";

class DriverLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts:[],
            driverId: '',
            name: '',
            email:'',
            telNo:'',
            password:'',
            logID:'',
            loginPassword: '',
            loginValidLocation:'#'
        }
    }

    navigateDriver = () => {
        localStorage.setItem('driverID', this.state.logID);
        history.push({pathname:'/driver_view'});
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    submitHandler = async (e) => {
        e.preventDefault();
        console.log(this.state);

        let res = await this.postDriver(this.state);
        console.log(res);

        if (res.status === 201) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    }

    postDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('http://localhost:8081/easyRents/api/v1/driver', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    callAPI = (e) => {
        fetch("http://localhost:8081/easyRents/api/v1/driver")
            .then(
                (response) => response.json()
            ).then((data)=> {
            console.log(data);
            this.setState({
                posts:data.data
            })
            for (const post of this.state.posts) {
                console.log(post.driverId, this.state.logID)
                if (this.state.logID === post.driverId) {
                    if(this.state.loginPassword === post.password){
                        this.state.loginValidLocation='/driver_view';
                        this.navigateDriver();
                    }
                }
            }
            console.log(this.state.loginValidLocation);
        })
    }
 
    render() {
        const {driverId,name,email,telNo,password,logID, loginPassword} = this.state;
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
                                <input type="text" name="logID" value={logID} onChange={this.changeHandler}  placeholder="driver id" />
                                <i aria-hidden="true" class="user icon"/>
                            </div>
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <div class="ui left icon input">
                                <input type="password"  name="loginPassword" value={loginPassword} onChange={this.changeHandler} />
                                <i aria-hidden="true" class="lock icon"/>
                            </div>
                        </div>
                        <button onClick={this.callAPI} style={{ margin: "40px 0 30px 10vw" }} class="ui inverted primary button">
                            <Link to={this.state.loginValidLocation}>
                                Log In
                            </Link>
                        </button>
                    </form>
                </div>
                <div style={{marginTop:"40px"}} class="middle aligned column">
                    <form style={{width:"40vw", marginLeft:"5vw"}} class="ui form" onSubmit={this.submitHandler}>
                        <div class="field">
                            <label>Driver ID</label>
                            <input name="driverId" placeholder="driverId" value={driverId} onChange={this.changeHandler}/>
                        </div>
                        <div class="field">
                            <label>Full Name</label>
                            <input name="name" placeholder="name"  value={name}  onChange={this.changeHandler}/>
                        </div>
                        <div class="field">
                            <label>Email</label>
                            <input name="email" placeholder="email"  value={email}  onChange={this.changeHandler}/>
                        </div>
                        <div class="field">
                            <label>TelNo</label>
                            <input name="telNo" placeholder="telephone"  value={telNo}  onChange={this.changeHandler}/>
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <input name="password" type="password" placeholder="enter a password" value={password}  onChange={this.changeHandler}/>
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