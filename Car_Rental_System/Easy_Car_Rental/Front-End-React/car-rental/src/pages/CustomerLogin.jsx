import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';


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
                        <form class="ui form">
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
                            <button style={{ margin: "40px 0 30px 20vw" }} class="ui primary button">Login</button>
                        </form>
                    </div>
                    <div class="middle aligned column">
                        <form class="ui form">
                            <div class="field">
                                <label>First Name</label>
                                <input placeholder="First Name"/>
                            </div>
                            <div class="field">
                                <label>Last Name</label>
                                <input placeholder="Last Name"/>
                            </div>
                            <div class="field">
                                <div class="ui checkbox">
                                    <input type="checkbox" class="hidden" readonly="" tabindex="0"/>
                                    <label>I agree to the Terms and Conditions</label>
                                </div>
                            </div>
                            <button class="ui button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div class="ui vertical divider">Or</div>
            </div>
        );
    }
}

export default CustomerLogin;