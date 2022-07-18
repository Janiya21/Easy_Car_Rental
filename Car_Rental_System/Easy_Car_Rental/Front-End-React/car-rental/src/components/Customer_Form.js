import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';


class Customer_Form extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            password:'',
            toipc:'Admin'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.password} ${this.state.topic}`);
        event.preventDefault();
    }


    render() {
        return (
            // <form onSubmit={this.handleSubmit} className="loginForm">
            //     <div>
            //         <label>username</label>
            //         <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
            //     </div>
            //     <div>
            //         <label>password</label>
            //         <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
            //     </div>
            //     <div>
            //         <label>Account</label>
            //         <select value={this.state.topic} onChange={this.handleTopicChange}>
            //             <option value="admin">Admin</option>
            //             <option value="customer">Customer</option>
            //             <option value="driver">Driver</option>
            //         </select>
            //     </div>
            //     <button type="submit" variant="success">Log-In</button>
            
            // </form>

            <form style = {{margin: "40px"}} class="loginForm ui form" onSubmit={this.handleSubmit}>
                <div class="field">
                    <div class="field">
                        <label>NIC</label>
                        <input placeholder="Last Name"/>
                    </div>
                        <label>Email</label>
                        <input placeholder="Email Address"/>
                    </div>

                    <div class="equal width fields">
                        <div class="field">
                            <label>First name</label>
                            <div class="ui fluid input">
                                <input type="text" value={this.state.username} onChange={this.handleUsernameChange} placeholder="First name"/>
                            </div>
                        </div>
                        <div class="field">
                            <label>Last name</label>
                            <div class="ui fluid input">
                                <input type="text" placeholder="Last name"/>
                            </div>
                        </div>
                    </div>

                     <div class="field">
                        <label>password</label>
                        <input  type="text" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password"/>
                    </div>
                     <div class="field">
                        <div class="ui checkbox">
                            <input type="checkbox" class="hidden" readonly="" tabindex="0"/>
                            <label>I agree to the User Terms and Conditions</label>
                        </div>
                    </div>

                    <button class="ui button" type="submit">Submit</button>
            </form>
        );
    }
}

export default Customer_Form;