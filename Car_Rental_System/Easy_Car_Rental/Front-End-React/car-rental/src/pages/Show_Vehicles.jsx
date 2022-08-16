import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Table, Button, Card, Image, Input, Popup, Segment, Icon, Header } from 'semantic-ui-react';
import styles from '../css/loader.css'
import history from '../history';

class Luxary_Vehicles extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            pickup_date:'',
            return_date:'',
            vehicle_type:'',
            vehicle_regNo:''
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    navigateToCustomer = (vehType) => {
        localStorage.setItem('pickup', localStorage.getItem("pickup"))
        localStorage.setItem('return', localStorage.getItem("return"))
        localStorage.setItem('type', localStorage.getItem("type"))
        localStorage.setItem('regNo', vehType)
        history.push({pathname:'/add_order'});
        
        console.log(vehType);
    }

    callAPI() {
        let type = localStorage.getItem("type");
        fetch("http://localhost:8081/easyRents/api/v1/vehicle/comfy/" + type).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            this.setState({
                posts: data.data
            })
        })
    }

    render() {
        let tb_data = this.state.posts.map((item) => {
            return (
                <Table.Row>
                    <Table.Cell>
                        <Popup
                            content={
                                <Card>
                                    <Image src='https://www.csojapan.com/stock_images/66103/66103d.jpg' wrapped ui={false} />
                                </Card>
                            }
                            on='click'
                            trigger={<Button content='Show' />}
                        />
                    </Table.Cell>
                    <Table.Cell singleLine>{item.regNo}</Table.Cell>
                    <Table.Cell singleLine>{item.brand}</Table.Cell>
                    <Table.Cell singleLine>{item.fuel_type}</Table.Cell>
                    <Table.Cell singleLine>{item.comfortability}</Table.Cell>
                    <Table.Cell singleLine>{item.no_of_passengers}</Table.Cell>
                    {/* <Table.Cell singleLine>{item.millage_before_Reg}</Table.Cell> */}
                    <Table.Cell singleLine>{item.loss_damage_amount}</Table.Cell>
                    <Table.Cell singleLine>{item.daily_cost}</Table.Cell>
                    <Table.Cell singleLine>{item.monthly_cost}</Table.Cell>
                    <Table.Cell singleLine>
                        <Button onClick={() => this.navigateToCustomer(item.regNo)}>
                            <Link to="/customer">
                                Continue
                            </Link>
                        </Button>
                    </Table.Cell>
                </Table.Row>
            )
        });
        return (
            <div>
            
                <div class="ui steps">
                    <div class="step">
                        <i aria-hidden="true" class="calendar times icon"></i>
                        <div class="content">
                            <div class="title">Select a Date/Time</div>
                            <div class="description">Enter billing information</div>
                        </div>
                    </div>
                    <div class="active step">
                        <i aria-hidden="true" class="icon car"></i>
                        <div class="content"><div class="title">Select A Car</div>
                            <div class="description">Choose your shipping options</div>
                        </div>
                    </div>
                    <div class="step">
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

                <div id="loader" class="loader" className={styles.loader} style={{display:"none"}} ></div>

                <Header style={{marginLeft:"20px"}} as='h3' block>
                    Matching Results For Your Search
                </Header>

                
                <Table style={{ marginLeft: "30px", overflow: "scroll" }} celled padded>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell singleLine>Model</Table.HeaderCell>
                                    <Table.HeaderCell>Reg No</Table.HeaderCell>
                                    <Table.HeaderCell>Brand</Table.HeaderCell>
                                    <Table.HeaderCell>Fuel Type</Table.HeaderCell>
                                    <Table.HeaderCell>Comfortability</Table.HeaderCell>
                                    <Table.HeaderCell>Passengers</Table.HeaderCell>
                                    {/* <Table.HeaderCell>Millage_Reg</Table.HeaderCell> */}
                                    <Table.HeaderCell>Loss Damage</Table.HeaderCell>
                                    <Table.HeaderCell>Daily Cost</Table.HeaderCell>
                                    <Table.HeaderCell>Monthly Cost</Table.HeaderCell>
                                    <Table.HeaderCell>Continue</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {tb_data}
                            </Table.Body>
                        </Table>

            </div>


        );
    }
}

export default Luxary_Vehicles;