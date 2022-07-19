import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

class Homepage extends Component {

    constructor(props){
        super(props)

        this.state = {
           
        }
    }

    render(){
        return(
            <div class="ui internally celled grid">
                <div class="ui steps">
                    <div class="step">
                        <i aria-hidden="true" class="icon car"></i>
                        <div class="content"><div class="title">Select A Car</div>
                        <div class="description">Choose your shipping options</div>
                    </div>
                </div>
                <div class="active step">
                    <i aria-hidden="true" class="calendar times icon"></i>
                    <div class="content">
                        <div class="title">Select a Date/Time</div>
                        <div class="description">Enter billing information</div>
                    </div>
                </div>
                <div class="active step">
                    <i aria-hidden="true" class="drivers license icon"></i>
                    <div class="content">
                        <div class="title">Pick-up Random Driver</div>
                        <div class="description">Enter billing information</div>
                    </div>
                </div>
                <div class="disabled step">
                    <i aria-hidden="true" class="info icon"></i>
                    <div class="content">
                        <div class="title">Confirm Order</div>
                    </div>
                </div>
            </div>
                
                
                
                <div class="row"><div class="three wide column">
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image"/>
                </div>
                <div class="ten wide column">
                    <img src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" class="ui image"/>
                    </div>
                    <div class="three wide column">
                        <img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image"/>
                    </div>
                    </div>
                    <div class="row"><div class="three wide column">
                        <img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image"/>
                    </div>
                    <div class="ten wide column">
                        <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image"/>
                    </div>
                    <div class="three wide column">
                        <img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;