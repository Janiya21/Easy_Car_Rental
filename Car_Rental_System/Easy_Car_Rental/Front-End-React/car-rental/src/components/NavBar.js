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
                            <Link to="/">Home</Link>
                        </a>
                        <a class="active item">
                         <Link to="/driver">Driver</Link>
                        </a>
                        <a class="item">
                        <Link to="/contact">Contact</Link>
                        </a>
                    </div>
                </div>
            
        );
    }
}

export default NavBar;