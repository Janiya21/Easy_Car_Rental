import React, { Component } from 'react';
import { Button, Icon, Grid, Message, Header,Table,Image  } from 'semantic-ui-react';

import {  Link } from "react-router-dom";

class CustomerOrder extends Component {

    constructor(props) {
        super(props)

        this.state = {
            driver:{},
            carDetails: {},
            vehType:'',
            pickUpdate:'',
            returnDate:''
        }

        this.getDriverDetails = this.getDriverDetails.bind(this)
        this.getDriverDetails();

        this.getVehicleDetails = this.getVehicleDetails.bind(this)
        this.getVehicleDetails();
    }

    componentDidMount(){
        this.state.vehType = localStorage.getItem("type");
        this.state.pickUpdate = localStorage.getItem("pickup");
        this.state.returnDate = localStorage.getItem("return");
        let nic = localStorage.getItem("cusNIC");
        // console.log(type , pickup, returnD, nic);
    }

    getDriverDetails(){
        // fetch("http://localhost:8081/easyRents/api/v1/driver/ran").then(
        //     (response) => response.json()
        // ).then((data) => {
        //     console.log(data);
        //     let driverDetails = {
        //         "password": "dany2",
        //         "name": "dananjaya",
        //         "tel": "0112817281",
        //         "email": "Dana@gmail.com",
        //         "status": "Approved",
        //         "nic_or_License_photo": "added",
        //         "nic": "118291v"
        //     }
        //     this.setState({
        //         driver: driverDetails
        //     })
        // });
        
        let driverDetails = {
            "password": "dany2",
            "name": "dananjaya",
            "tel": "0112817281",
            "email": "Dana@gmail.com",
            "status": "Approved",
            "nic_or_License_photo": "added",
            "nic": "118291v"
        }
        this.state.driver = driverDetails;
        console.log(this.state.driver);
    }

    getVehicleDetails() {
        let regNo = localStorage.getItem("regNo");
        console.log(regNo + " regNo");
        fetch("http://localhost:8081/easyRents/api/v1/vehicle/orderVeh/"+regNo).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            this.setState({
                carDetails: data.data[0]
            })
        });
        console.log(this.state.carDetails);
    }

    render() {

        let veh = this.state.carDetails;
        let driver = this.state.driver;
        console.log(veh);
        console.log(driver);
                return (

                    <div>
                        <div style={{marginTop:"-20px"}} class="ui steps">
                            <div class="step">
                                <i aria-hidden="true" class="calendar times icon"></i>
                                <div class="content">
                                    <div class="title">Select a Date/Time</div>
                                    <div class="description">Enter billing information</div>
                                </div>
                            </div>
                            <div class="step">
                                <i aria-hidden="true" class="icon car"></i>
                                <div class="content"><div class="title">Select A Car</div>
                                    <div class="description">Choose your shipping options</div>
                                </div>
                            </div>
                            <div class="disabled step">
                                <i aria-hidden="true" class="drivers license icon"></i>
                                <div class="content">
                                    <div class="title">Pick-up Random Driver</div>
                                    <div class="description">Enter billing information</div>
                                </div>
                            </div>
                            <div class="active step">
                                <i aria-hidden="true" class="info icon"></i>
                                <div class="content">
                                    <div class="title">Confirm Order</div>
                                </div>
                            </div>
                        </div>
                        <Message warning>
                                <Message.Header>You Have to Pay</Message.Header>
                                <p>This is one of best Luxary Vehicle, So you have to pay refundable damage Fee, We will Pay-back money after calculating damages !!</p>
                                <p>Rental, deposit and all other charges related to vehicle hire should be paid in advance by the Hirer. If the rental is delayed, daily rates will apply until the vehicle is safely returned. </p>
                                <p>We will charge extra money for late hours !</p>
                        </Message>
                        <Grid style={{margin:"20px"}}>
                            <Grid.Column width={4} >
                                <div class="ui card" style={{margin:"0 0 0 20px"}}>
                                        <div class="image">
                                            <img style={{ height: "23vh", width: "18.8vw" }} src="https://d8asu6slkrh4m.cloudfront.net/2019/09/bmw-525i-sri-lanka.jpg" class="ui image" />
                                        </div>
                                        <div class="content">
                                            <h3>{veh.brand}</h3>
                                            <div class="meta">
                                                <span class="date">{veh.fuel_type}  | {veh.no_of_passengers} Passengers</span>
                                                <h4>Daily : {veh.daily_cost}   |  monthly : {veh.monthly_cost}</h4>
                                                <h5>Loss Damage :{veh.loss_damage_amount}</h5>
                                            </div>
                                        </div>
                                        
                                    </div>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Table basic='very' celled collapsing>
                                    <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content> Vehicle Pick-up Location</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>112 Highlevel Road, Maharagama</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Pick-up Date</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{this.state.pickUpdate}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Pick-up Time</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>10.00 a.m</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Return-Date</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{this.state.returnDate}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Driver's Contact</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>011-28927182</Table.Cell>
                                    </Table.Row>
                                    
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Driver's Name</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>Saman Kumara</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Your Email</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>DasunShanaka7@gmail.com</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Your Nic No</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>200102198921</Table.Cell>
                                    </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Grid.Column>
                            <Grid.Column width={5}>
                            <Table basic='very' celled collapsing>
                                    <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content> Your Emaergance No</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>0768739283</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Your Address</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>22B Werahera, Colombo</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Extar Charge</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>0.00</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Vehicle Charge</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>12000.00</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Loss Damage Charge</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>16000.00</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Total Charge</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell><h2>Rs 28000.00</h2></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                        
                                        </Table.Cell>
                                        <Table.Cell>
                                            <button id="btnBook" style={{ width: "200px" }} class="ui inverted primary button">
                                                <Link to="/add_order">
                                                    Confirm Order
                                                </Link>
                                            </button>
                                        </Table.Cell>
                                    </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Grid.Column>
                    </Grid>
            </div>
        );
    }
}

export default CustomerOrder;