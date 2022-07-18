import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

class NavBar extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
    }


    render() {
        return (
                <div class="ui inverted segment">
                       
                    <div class="ui inverted secondary pointing menu">
                        <a class="item">
                            Home
                        </a>
                        <a class="active item">
                            Customer
                        </a>
                        <a class="item">
                            Driver
                        </a>
                        <a class="item">
                            Admin
                        </a>
                        <a class="item">
                            Order
                        </a>
                    </div>
                </div>
            
        );
    }
}

export default NavBar;