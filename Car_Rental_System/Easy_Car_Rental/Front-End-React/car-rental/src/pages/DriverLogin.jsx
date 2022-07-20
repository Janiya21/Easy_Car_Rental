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
            <div class="ui placeholder segment">
                <div class="ui stackable very relaxed two column grid">
                    <div class="column">
                        <div className="row">
                            <h2 style={{margin:"50px 0 50px 260px"}} class="ui header"><img src="https://react.semantic-ui.com/images/avatar/large/patrick.png" class="ui circular image"/>Driver Log-In</h2>
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
                            <button class="ui primary button">Login</button>
                        </form>
                    </div>
                    <div class="middle aligned column">
                        <button class="ui big button">
                            <i aria-hidden="true" class="signup icon"></i>Sign up
                        </button>
                    </div>
                </div>
                <div class="ui vertical divider">Or</div>
            </div>
        );
    }
}

export default DriverLogin;