import React, { Component } from 'react';
import { Popup, Checkbox, Form } from 'semantic-ui-react';
import {  Link, useParams, useLocation} from "react-router-dom";
import axios from "axios";


class CustomerLogin extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            nic: '',
            name: '',
            email:'',
            tel:'',
            password:'',
            status:'Pending',
            nic_or_License_photo:'added'
        }
        
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    submitHandler = async (e) => {
        e.preventDefault();
        console.log(this.state);

        let res = await this.postCustomer(this.state);
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

    

    /*==============================*/

    postCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('http://localhost:8081/easyRents/api/v1/customer', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    /*==============================*/

    render() {
    
        const {nic,name,email,password,tel} = this.state;
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
                        <form style={{width:"40vw", marginLeft:"5vw"}} class="ui form" onSubmit={this.submitHandler}>
                            <div class="field">
                                <label>NIC</label>
                                <input name="nic" value={nic} onChange={this.changeHandler} placeholder="nic no"/>
                            </div>
                            <div class="field">
                                <label>Full Name</label>
                                <input name="name" value={name} onChange={this.changeHandler} placeholder="full Name"/>
                            </div>
                            <div class="field">
                                <label>Email</label>
                                <input name="email" value={email} onChange={this.changeHandler} placeholder="email"/>
                            </div>
                            <div class="field">
                                <label>TelNo</label>
                                <input name="tel" value={tel} onChange={this.changeHandler} placeholder="telno"/>
                            </div>
                            <div class="field">
                                <label>Password</label>
                                <input name="password" value={password} onChange={this.changeHandler} type="password" placeholder="enter password"/>
                            </div>
                            <div class="field">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="re-enter password"/>
                            </div>
                            <div className="equal width fields">
                                <div className="field">
                                    <b>Please Attach Photo Here :</b>
                                    <Popup content='Add users to your feed'
                                           trigger={
                                               <input style={{margin: "10px 0 0 0px"}} id="file" name="myFile"
                                                      type="file"/>}
                                    />

                                </div>

                                <div className="field">
                                    <button style={{margin: "34px 0 10px 30px"}} type="button" id="btnUpload"
                                            className="ui inverted button primary">Upload File
                                    </button>
                                </div>

                            </div>
                            <button className="ui secondary button" style={{margin: "20px 0 30px 13vw", width:"10vw"}}
                                    type="submit">Sign_In
                            </button>

                        </form>
                    </div>
                </div>
                <div class="ui vertical divider">OR</div>
            </div>
        );
    }
}

export default CustomerLogin;