import React, { Component } from 'react';
import { Grid, Table, Button, Card, Image, Input, Popup, Segment, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import {TextField} from '@mui/material';

class Admin_CarView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI() {
        fetch("http://localhost:8081/easyRents/api/v1/vehicle").then(
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
                    <Table.Cell singleLine>{item.millage_before_Reg}</Table.Cell>
                    <Table.Cell singleLine>{item.loss_damage_amount}</Table.Cell>
                    <Table.Cell singleLine>{item.daily_cost}</Table.Cell>
                    <Table.Cell singleLine>{item.monthly_cost}</Table.Cell>
                </Table.Row>
            )
        });
        return (
            <div>
                <div style={{ marginTop: "-20px" }} class="ui menu">
                    <a class="active item">
                        <Link to="/car_Admin">All Cars</Link>
                    </a>
                    <a class="item">
                        <Link to="/add_newCar">Add New Vehicle</Link>
                    </a>
                    <a class="item">Under Maintance</a>
                </div>
                <Segment raised><b>All Available Cars On Choosen Date</b></Segment>

                <Input style={{ padding: "0px 0 4px 32px" }} icon='calendar' placeholder='Search Date Here' />

                <Grid>
                    <Grid.Column width={15}>

                        <Table style={{ marginLeft: "30px", overflow: "scroll" }} celled padded>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell singleLine>Model</Table.HeaderCell>
                                    <Table.HeaderCell>Reg No</Table.HeaderCell>
                                    <Table.HeaderCell>Brand</Table.HeaderCell>
                                    <Table.HeaderCell>Fuel Type</Table.HeaderCell>
                                    <Table.HeaderCell>Comfortability</Table.HeaderCell>
                                    <Table.HeaderCell>Passengers</Table.HeaderCell>
                                    <Table.HeaderCell>Millage_Reg</Table.HeaderCell>
                                    <Table.HeaderCell>Loss Damage</Table.HeaderCell>
                                    <Table.HeaderCell>Daily Cost</Table.HeaderCell>
                                    <Table.HeaderCell>Monthly Cost</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {tb_data}
                            </Table.Body>
                        </Table>

                    </Grid.Column>
                </Grid>

            </div>
        );
    }
}

export default Admin_CarView;