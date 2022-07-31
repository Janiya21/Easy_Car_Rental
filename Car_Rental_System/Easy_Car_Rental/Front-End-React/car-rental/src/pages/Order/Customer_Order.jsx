import React, {Component} from 'react';
import {Grid, Header, Message, Table} from 'semantic-ui-react';
import axios from 'axios';

class CustomerOrder extends Component {

    constructor(props) {
        super(props)

        this.state = {
            referenceNo:'',
            downPayment:'17000',
            rentalTime:"10:30:00",
            reqStatus: "Pending",
            customer:{},
            driver:{},
            vehicle: {},
            rentalDate:'',
            returnDate:''
        }

        this.getCustomer = this.getCustomer.bind(this)
        this.getCustomer();

        this.getDriverDetails = this.getDriverDetails.bind(this)
        this.getDriverDetails();

        this.getVehicleDetails = this.getVehicleDetails.bind(this)
        this.getVehicleDetails();

        this.getLastID = this.getLastID.bind(this)
        this.getLastID();
    }

    componentDidMount(){
        this.state.rentalDate = localStorage.getItem("pickup");
        this.state.returnDate = localStorage.getItem("return");
    }

    getDriverDetails(){
        // this.state.driver = {
        //     "driverId": "D-0003",
        //     "password": "chStonis",
        //     "name": "Chamika",
        //     "email": "Chami88@gmail.com",
        //     "telNo": "0758738212"
        // };
        // console.log(this.state.driver);

        fetch("http://localhost:8081/easyRents/api/v1/driver").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            console.log(data.data.length);
            let number = Math.floor(Math.random() * data.data.length);
            console.log(number + " number")
            let revDriver = data.data[number];
            console.log(revDriver)
            this.setState({
                driver: revDriver
            })

        });
        console.log(this.state.driver);
    }

    getCustomer(){

        let nic = localStorage.getItem("cusNIC");
        console.log(nic + " regNo");
        fetch("http://localhost:8081/easyRents/api/v1/customer/"+nic).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            this.setState({
                customer: data.data
            })
        });
        console.log(this.state.customer);
    }

    getVehicleDetails() {
        let regNo = localStorage.getItem("regNo");
        console.log(regNo + " regNo");
        fetch("http://localhost:8081/easyRents/api/v1/vehicle/orderVeh/"+regNo).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data.data);
            this.setState({
                vehicle: data.data[0]
            })
        });
        console.log(this.state.vehicle);
    }

    getLastID(){
        fetch("http://localhost:8081/easyRents/api/v1/ride/generateOID").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            this.setState({
                referenceNo: data.data
            })
        });
        console.log(this.state.referenceNo);
    }

    submitHandler = async (e) => {
        e.preventDefault();
        console.log(this.state);

        let res = await this.postOrder(this.state);
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

    postOrder = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('http://localhost:8081/easyRents/api/v1/ride', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    render() {

        let veh = this.state.vehicle;
        let driver = this.state.driver;
        let customer = this.state.customer;

        console.log(veh);
        console.log(driver);
        console.log(customer);

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
                                        <Table.Cell>{this.state.rentalDate}</Table.Cell>
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
                                        <Table.Cell>{driver.telNo}</Table.Cell>
                                    </Table.Row>
                                    
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Driver's Name</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{driver.name}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Your Email</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{customer.email}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Your Nic No</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{customer.nic}</Table.Cell>
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
                                                <Header.Content> Your Emergency No</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{customer.tel}</Table.Cell>
                                    </Table.Row>
                                    {/*<Table.Row>*/}
                                    {/*    <Table.Cell>*/}
                                    {/*        <Header as='h4' image>*/}
                                    {/*            <Header.Content>Downpayment Charge</Header.Content>*/}
                                    {/*        </Header>*/}
                                    {/*    </Table.Cell>*/}
                                    {/*    <Table.Cell>{customer.downPayment}</Table.Cell>*/}
                                    {/*</Table.Row>*/}
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Vehicle Charge</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{veh.daily_cost} </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Loss Damage Charge</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{veh.loss_damage_amount} </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>Total Charge</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell><h2>Rs {veh.loss_damage_amount + veh.daily_cost}</h2></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                        
                                        </Table.Cell>
                                        <Table.Cell>
                                            <button id="btnBook" onClick={this.submitHandler} style={{ width: "200px" }} class="ui inverted primary button">
                                                Confirm Order
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